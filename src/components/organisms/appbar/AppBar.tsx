"use client"

import Logo from "@/components/atoms/logo/Logo"
import SearchBar from "@/components/molecules/searchbar/SearchBar"

export default function AppBar() {
    return (
        <div className="bg-[#090b21] flex py-[10px]">
            <div className="h-full w-[500px] px-[16px]">
                <div className="w-[40%]">
                    <Logo />
                </div>
            </div>
            <div className="w-full rounded-lg">
                <SearchBar />
            </div>
            <div className="h-[40px] w-[550px]">
            </div>
        </div>
    )
}