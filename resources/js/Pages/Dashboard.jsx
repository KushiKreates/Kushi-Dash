import React from 'react';
import { Head, usePage } from '@inertiajs/react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import ServerDisplay from "@/Pages/Dashboard/DisplayServer.jsx";
import FlashbackTester from "@/Pages/Dashboard/flashbacktester.jsx";



export default function AdminDashboard() {
    const { eggs } = usePage().props;

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Home
                </h2>
            }
            sidebartab="home"
        >
            <Head title="Dashboard" />

            <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-black">
                <div className="text-gray-900 dark:text-gray-100">
                   Welcome back! 👋
                </div>
            </div>


            <ServerDisplay/>



        </AuthenticatedLayout>
    );
}
