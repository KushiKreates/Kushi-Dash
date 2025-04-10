//AdminAppSettings.jsx
import React from 'react';
import { Head, usePage } from '@inertiajs/react';
import AdminAuthLayer from "@/Layouts/AdminAuthLayer.jsx";
import Footer from "@/components/Footer.jsx";
import EggEditForm from "@/Pages/Admin/EggEditForm.jsx";
import AuditLogComp from "@/Pages/Admin/AuditLog.jsx";
import InitialResources from "@/Pages/Admin/DefaultRes.jsx";
import UpdatePterodactylSettings from "@/Pages/Admin/PterodactylSettings.jsx";
import UpdateDiscordSettings from './Admin/DiscordSettings';

export default function AdminAppSettings() {
    const { egg } = usePage().props;

    return (
        <AdminAuthLayer
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Admin / Settings
                </h2>
            }
            sidebartab="settings"
        >
            <Head title="Edit Egg"/>

            <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-black">
                <div className="text-gray-900 dark:text-gray-100">
                    <h3 className="text-lg font-medium">Instance Settings</h3>
                </div>
            </div>

            <div className="mt-6">
                <InitialResources/>
            </div>
            <div className="mt-6">
                <UpdatePterodactylSettings/>
            </div>
            <div className="mt-6">
                <UpdateDiscordSettings/>
            </div>

            <Footer/>
        </AdminAuthLayer>
    );
}


