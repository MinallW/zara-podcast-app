import React from "react";
import Logo from "./Logo";
import Breadcrumbs from './NavBarBreadcrumbs'
import NavBarSpinner from './NavBarSpinner'

export default function Navbar() {
    return (
        <>
            <div className="w-full h-20 bg-gray-300 sticky top-0 z-10">
                <div className="container mx-auto px-4 h-full">
                    <div className="flex justify-between items-center h-full">
                        <Logo />
                        <Breadcrumbs />
                        <NavBarSpinner />
                    </div>
                </div>
            </div>
        </>
    );
}
