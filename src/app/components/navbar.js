import React from "react";
import Link from "next/link";
import { User, Settings, Clover } from "lucide-react";

function Navbar() {
    return (
        <nav className="flex justify-between items-center py-4 px-8 bg-purple-200">
            <div className="flex gap-4">
                <Link href="/settings" className="group relative">
                    <Settings size={24} className="cursor-pointer" />
                    <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-purple-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full pointer-events-none" />
                </Link>
            </div>
            
            <div className="font-bold text-3xl">
                <Link href="/" className="group relative">
                    <span className="cursor-pointer text-purple-900">DevGPA</span> 
                </Link>
            </div>

            <div className="flex gap-4">
                <Link href="/profile" className="group relative">
                    <User size={24} className="cursor-pointer" />
                    <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-purple-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full pointer-events-none" />
                </Link>
            </div>
            
        </nav>
    );
}

export default Navbar;