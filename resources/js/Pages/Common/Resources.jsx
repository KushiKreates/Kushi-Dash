import React from 'react';
import { usePage } from '@inertiajs/react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Progress } from "@/components/ui/progress";
import { Cpu, MemoryStick, HardDrive, Server } from 'lucide-react';
import { motion } from 'framer-motion';

const ResourceView = () => {
    const { auth } = usePage().props;
    const { limits, resources } = auth.user;

    const resourceTypes = [
        { key: 'cpu', label: 'CPU', unit: '%', icon: Cpu, color: 'from-blue-600/40 to-blue-600/30' },
        { key: 'memory', label: 'Memory', unit: 'MB', icon: MemoryStick, color: 'from-purple-600/40 to-purple-600/30' },
        { key: 'disk', label: 'Disk', unit: 'MB', icon: HardDrive, color: 'from-rose-600/40 to-rose-600/30' },
        { key: 'servers', label: 'Servers', unit: '', icon: Server, color: 'from-orange-600/40 to-orange-600/30' }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-4 gap-3 h-25 p-0  rounded-xl">
            {resourceTypes.map((type, index) => {
                const Icon = type.icon;
                const percentage = (resources[type.key] / limits[type.key]) * 100;
                const formattedPercentage = percentage.toFixed(0);

                return (
                    <motion.div
                        key={type.key}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        <Card className="relative w-full h-5.3/6 overflow-hidden border-0 bg-gradient-to-b from-white/[0.08] to-transparent backdrop-blur-xl">
                            <div className={`absolute inset-0 bg-white dark:bg-gradient-to-br ${type.color} opacity-20`} />
                            <CardHeader className="p-6 pb-3">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <div className="p-2.5 rounded-xl dark:bg-white/10 bg-black backdrop-blur-md">
                                            <Icon className="w-5 h-5 text-white" />
                                        </div>
                                        <CardTitle className="text-lg font-medium dark:text-white/90">
                                            {type.label}
                                        </CardTitle>
                                    </div>
                                    <motion.span 
                                        className="text-3xl font-semibold dark:text-white tabular-nums tracking-tight"
                                        initial={{ scale: 0.8 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                                    >
                                        {formattedPercentage}%
                                    </motion.span>
                                </div>
                            </CardHeader>
                            <CardContent className="p-6 pt-3">
                                <div className="space-y-3">
                                    <div className="relative h-2 overflow-hidden rounded-full bg-black/25 dark:bg-white/[0.08]">
                                        <motion.div
                                            className="absolute h-full rounded-full bg-black dark:bg-white/25 backdrop-blur-sm"
                                            initial={{ width: 0 }}
                                            animate={{ width: `${percentage}%` }}
                                            transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                                        />
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-sm text-black dark:text-white/60 tabular-nums">
                                            {resources[type.key]} {type.unit}
                                        </span>
                                        <span className="text-sm dark:text-white/60 tabular-nums">
                                            {limits[type.key]} {type.unit}
                                        </span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                );
            })}
        </div>
    );
};

export default ResourceView;

