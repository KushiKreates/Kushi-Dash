<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Services\PterodactylService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Laravel\Socialite\Facades\Socialite;
use GuzzleHttp\Client;

class DiscordLoginController extends Controller
{
    protected $pterodactylService;

    public function __construct(PterodactylService $pterodactylService)
    {
        $this->pterodactylService = $pterodactylService;
    }

    public function redirectToDiscord()
    {
        return Socialite::driver('discord')
            ->scopes(['identify', 'email', 'guilds.join'])
            ->with([
                'guild_id' => env('DISCORD_SERVER_ID'),
                'permissions' => '0',
                'response_type' => 'code',
                'prompt' => 'consent'
            ])
            ->redirect();
    }

    public function handleDiscordCallback()
    {
        $discordUser = Socialite::driver('discord')->user();

        // Add user to guild using Discord API
        try {
            $client = new Client();
            $response = $client->put("https://discord.com/api/v10/guilds/" . env('DISCORD_SERVER_ID') . "/members/" . $discordUser->getId(), [
                'headers' => [
                    'Authorization' => 'Bot ' . env('DISCORD_BOT_TOKEN'),
                    'Content-Type' => 'application/json',
                ],
                'json' => [
                    'access_token' => $discordUser->token,
                ]
            ]);
        } catch (\Exception $e) {
            \Log::error('Failed to add user to Discord guild: ' . $e->getMessage());
        }

        // Check if user exists
        $user = User::where('discord_id', $discordUser->getId())->first();

        if (!$user) {
            $pterodactylUser = $this->pterodactylService->createUser(
                $discordUser->getEmail(),
                $discordUser->getNickname(),
                $discordUser->getName(),
                'User'
            );

            if (!isset($pterodactylUser['attributes']['id'])) {
                abort(500, 'Failed to create user on Pterodactyl');
            }

            $pterodactylId = $pterodactylUser['attributes']['id'];
            $pterodactylEmail = $pterodactylUser['attributes']['email'];

            $user = User::updateOrCreate(
                ['discord_id' => $discordUser->getId()],
                [
                    'name' => $discordUser->getName(),
                    'email' => $discordUser->getEmail() ?? $this->generateUniqueEmail($discordUser->getId()),
                    'password' => Hash::make(Str::random(24)),
                    'pterodactyl_id' => $pterodactylId,
                    'pterodactyl_email' => $pterodactylEmail,
                ]
            );
        }

        Auth::login($user, true);
        return redirect()->route('dashboard');
    }

    protected function generateUniqueEmail($discordId)
    {
        return "discorduser_{$discordId}@example.com";
    }
}