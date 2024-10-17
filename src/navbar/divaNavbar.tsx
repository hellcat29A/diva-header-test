import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Image, NextUIProvider } from "@nextui-org/react";
import { NavItems } from "../common/data";
import { scrollToTop } from "../common/utils";


export default function DivaNavbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useReducer((current) => !current, false);


    return (
        <NextUIProvider>
            <Navbar onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen}>
                <NavbarContent>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="sm:hidden"
                    />
                    <NavbarBrand>
                        <Image src='/public/logo.png' width={50} />
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent className="hidden gap-4 sm:flex" justify="center">
                    {
                        NavItems.map((item, index) => (
                            <NavbarItem key={index}>
                                <Link color="foreground" onClick={() => { scrollToTop() }} href={item.link}>{item.label}</Link>
                            </NavbarItem>
                        ))
                    }
                </NavbarContent>


                {/* MOBILE LAYOUT */}
                <NavbarMenu>
                    {NavItems.map((item, index) => (
                        <NavbarMenuItem key={`${index}`}>
                            <Link color="foreground" href={item.link} onClick={() => { scrollToTop(); setIsMenuOpen() }}>{item.label}</Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
        </NextUIProvider>
    )
}