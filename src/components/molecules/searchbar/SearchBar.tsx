"use client"

import RectangleButton from "@/components/atoms/button/rectangle/RectangleButton";
import SearchIcon from "@/components/atoms/icon/SearchIcon";
import Input from "@/components/atoms/input/Input";
import { useEffect, useRef, useState } from "react";

export default function SearchBar() {

    const [open, setOpen] = useState(false)
    const menuRef = useRef<any>()
    
    useEffect(() => {
        let handler = (event: MouseEvent) => {
            if(menuRef.current && !menuRef.current.contains(event.target)) setOpen(false)
        }
        document.addEventListener("mousedown", handler)
        return () => {
            document.removeEventListener("mousedown", handler)
        }
    },[])
    
    return (
        <div className="flex bg-white">
            <div className="w-[300px]">
                <RectangleButton text="Todos los departamentos" onClickEvent={() => {}} />
            </div>
            <div ref={menuRef} className="w-full relative" onClick={() => setOpen(true)}>
                <Input placeholder="Buscar amazon"/>
                {
                    open &&
                    <ul className="absolute z-[100] top-full w-full bg-slate-50 left-0">
                        <li className="px-[8px] py-[2px] hover:bg-gray-300">111</li>
                        <li className="px-[8px] py-[2px] hover:bg-gray-300">111</li>
                        <li className="px-[8px] py-[2px] hover:bg-gray-300">111</li>
                        <li className="px-[8px] py-[2px] hover:bg-gray-300">111</li>
                        <li className="px-[8px] py-[2px] hover:bg-gray-300">111</li>
                        <li className="px-[8px] py-[2px] hover:bg-gray-300">111</li>
                        <li className="px-[8px] py-[2px] hover:bg-gray-300">111</li>
                        <li className="px-[8px] py-[2px] hover:bg-gray-300">111</li>
                    </ul>
                }
                

            </div>
            <div>
                <SearchIcon/>
            </div>
        </div>
    )
}