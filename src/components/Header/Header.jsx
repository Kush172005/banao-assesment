import React from "react";
import Logo from "../../assets/Icons/Logo.svg";
import SearchIcon from "../../assets/Icons/Search.svg";
import DropdownIcon from "../../assets/Icons/Dropdown.svg";
import ExploreIcon from "../../assets/Icons/Explore.svg";
import HobbiesIcon from "../../assets/Icons/Hobbies.svg";
import BookmarkIcon from "../../assets/Icons/Bookmark.svg";
import BellIcon from "../../assets/Icons/Bell.svg";
import CartIcon from "../../assets/Icons/Cart.svg";
import FindIcon from "../../assets/Icons/Find.svg";
import MenuIcon from "../../assets/Icons/Menu.svg";

const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-md px-[7vw] py-4 flex items-center justify-between z-10">
            <div className="flex items-center gap-8">
                <img
                    src={Logo}
                    alt="Logo"
                    className="sm:w-[220px] w-[160px] cursor-pointer"
                />

                <div className="hidden xl:flex items-center bg-gray-200 rounded-lg overflow-hidden">
                    <input
                        type="text"
                        placeholder="Search here..."
                        className="text-sm bg-transparent px-3 py-2 w-[250px] focus:outline-none"
                    />
                    <button className="bg-[#8064A2] w-[20%] rounded-r-lg h-10">
                        <img
                            src={SearchIcon}
                            alt="Search"
                            className="mx-auto"
                        />
                    </button>
                </div>
            </div>

            <div className="flex items-center gap-5">
                <div className="hidden lg:flex gap-2 items-center cursor-pointer hover:text-[#8064A2]">
                    <img src={ExploreIcon} alt="Explore" className="w-5 h-5" />
                    <span className="text-sm font-medium ml-1">Explore</span>
                    <img src={DropdownIcon} alt="Dropdown" />
                </div>

                <div className="hidden lg:flex gap-2 items-center cursor-pointer hover:text-[#8064A2]">
                    <img src={HobbiesIcon} alt="Hobbies" />
                    <span className="text-sm font-medium ml-1">Hobbies</span>
                    <img src={DropdownIcon} alt="Dropdown" />
                </div>

                <img src={FindIcon} alt="Find" className="xl:hidden" />
                <img
                    src={BookmarkIcon}
                    alt="Bookmark"
                    className="hidden md:block"
                />
                <img src={BellIcon} alt="Notifications" />
                <img src={CartIcon} alt="Cart" className="hidden md:block" />
                <img src={MenuIcon} alt="Menu" className="lg:hidden" />

                <button className="hidden lg:block border-2 border-[#8064A2] text-[#8064A2] hover:bg-[#8064A2] hover:text-white px-6 py-2 rounded-md transition duration-300">
                    Sign In
                </button>
            </div>
        </header>
    );
};

export default Header;
