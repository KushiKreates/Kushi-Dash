import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React from 'react';
import { Head } from '@inertiajs/react';
import FlashbackTester from "@/Pages/Dashboard/flashbacktester.jsx";
import ServerDisplay from "@/Pages/Dashboard/DisplayServer.jsx";
import AdminAuthLayer from "@/Layouts/AdminAuthLayer.jsx";
import Footer from "@/Components/Footer.jsx";
import EggForm from "@/Pages/Admin/PterodactylEggs.jsx";

//this isn't loading

export default function AdminEggsCreate() {
    return (
        <AdminAuthLayer
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Admin > Eggs / Create
                </h2>
            }
            sidebartab="newegg"
        >
            <Head title="Create Eggs"/>

            <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-black">
                <div className="text-gray-900 dark:text-gray-100">
                    <h3 className="text-lg font-medium">Add new Server Software</h3>
                </div>
            </div>

            <div className="mt-6">

                <EggForm/>
            </div>







            <Footer/>


        </AdminAuthLayer>
    );
}

//new
