// components/CreateNew.jsx
import React from 'react';
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { cn } from "@/lib/utils"; // Assuming you have shadcn/ui's utility function

const CreateNew = ({ go = '/', text = 'Create New Item' }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[400px] space-y-6 transition-all duration-200">
            <div className={cn(
                "p-6 rounded-xl",
                "  dark:bg-transparent", // Dynamic background based on theme
                "transition-colors duration-200" // Smooth transition
            )}>
                <img 
                    src="/counting.svg"
                    alt="Create New"
                    className="w-120 h-60 object-contain"
                />
            </div>
            <div>
                <h1 className=" font-semibold text-2xl">😿 Nothing Found</h1>
                
            </div>
            <Button 
                onClick={() => window.location.href = go}
                className="text-lg px-6 py-3 font-medium"
                size="lg"
            >
                {text}
            </Button>
        </div>
    );
};

export default CreateNew;