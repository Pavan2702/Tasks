'use client';
import React, { useState } from "react";
import { FaSearch, FaClipboardList, FaTrashAlt, FaCog, FaUserAlt, FaRegStar, FaLock, FaFolder, FaClock, FaPlusCircle } from "react-icons/fa";
import Image from "next/image";
import Star from '../../../public/Frame 79.png';
import User from '../../../public/img.png';
import Resumeicon from "../../../public/Resumizeme.svg";
import Union from "../../../public/Union.svg";
import MiniAdd from "../../../public/icon mini add.svg";

const Sidebar = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const templates = [
        { name: "Software Engineer", type: "Star" },
        { name: "Computer Hardware Engineer", type: "Star" },
        { name: "Network Engineer", type: "Star" },
        { name: "Technical Support", type: "Star" },
        { name: "Network Administrator", type: "Star" },
        { name: "Management", type: "Star" },
        { name: "Data Analysis", type: "Star" },
        { name: "Computer Technician", type: "Star" },
        { name: "Past search 1", type: "clock" },
        { name: "Past search 2", type: "clock" },
        { name: "Computers and Information", type: "Star" },
        { name: "Database Administrator", type: "Star" },
        { name: "Computer Security", type: "Star" },
        { name: "Computer Systems Analyst", type: "Star" },
    ];

    const boards = [
        { name: "Board 1", type: "folder" },
        { name: "Board 2", type: "folder" },
        { name: "Board 3", type: "folder" },
        { name: "Board Agent 1", type: "lock" },
        { name: "Board Agent 2", type: "lock" },
    ];

    const filteredTemplates = templates.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const filteredBoards = boards.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="w-[240px] border-r p-1 flex flex-col justify-between">
            <div>
                <div className="flex items-center px-1 py-3 border-b">
                    <Image src={Resumeicon} alt="Logo" />
                </div>

                <div className="px-1 pt-[14px]">
                    <div className="flex items-center text-center gap-2">
                        <Image src={Union} alt="" />
                        <h2 className="text-lg font-semibold text-gray-700">My Templates</h2>
                    </div>
                    <div className="flex items-center bg-white pt-2 text-center rounded-md shadow-sm mb-2">
                        <FaSearch className="text-black mr-2" />
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="outline-none w-full text-sm text-black placeholder:text-black"
                        />
                    </div>
                    <ul className="space-y-2 text-gray-600">
                        {filteredTemplates.length > 0 ? (
                            filteredTemplates.map((item) => (
                                <li key={item.name} className="flex items-center text-[13px]">
                                    {item.type === "Star" ? (
                                        <Image
                                            src={Star}
                                            alt=""
                                            className="mr-2"
                                        />
                                    ) : (
                                        <FaClock className="text-gray-500 mr-2" />
                                    )}
                                    {item.name}
                                </li>
                            ))
                        ) : (
                            <li className="text-gray-400 italic">No matching templates</li>
                        )}
                    </ul>
                </div>

                <div className="mt-6 px-1">
                    <div className="flex justify-between">
                        <h2 className="text-lg font-semibold text-gray-700 mb-2">My Boards</h2>
                        <Image src={MiniAdd} alt="" />
                    </div>
                    <ul className="space-y-2 text-gray-600">
                        {filteredBoards.length > 0 ? (
                            filteredBoards.map((item) => (
                                <li key={item.name} className="flex items-center">
                                    {item.type === "folder" ? (
                                        <FaFolder className="text-orange-500 mr-2" />
                                    ) : (
                                        <FaLock className="text-gray-500 mr-2" />
                                    )}
                                    {item.name}
                                </li>
                            ))
                        ) : (
                            <li className="text-gray-400 italic">No matching boards</li>
                        )}
                    </ul>
                </div>
            </div>
            <div>
                <div className=" flex justify-between items-center pt-8 border-t">
                    <div className="flex gap-4 items-center">
                        <Image
                            src={User}
                            alt="User"
                            className="w-10 h-10 rounded-full"
                        />
               
                        <p className="text-gray-700 font-semibold">Carla</p>
                    </div>
                    <div>
                        <button className="flex items-center text-left w-full hover:text-blue-600">
                            <FaCog className="mr-2" />
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Sidebar;
