"use client";
import { useState } from "react";

import Image from "next/image";
import MoreOptions from "../../images/moreOptions.svg";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";

import menuItems from "./items";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="bg-primary text-white"
      isBordered
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          icon={<Image src={MoreOptions} alt="more options icon" />}
        />
        <NavbarBrand>
          <Link href="/">
            <p className="font-bold text-inherit">SOFTHOTEL</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/auth/profile" aria-current="page">
            Seu Perfil
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex p-2 rounded-2xl">
          <Button
            as={Link}
            href="/auth/login"
            className="ring-1 rounded-xl p-2"
          >
            Entrar
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color="foreground"
              className="w-full hover:ml-5 transition-all"
              href={item.address}
              size="lg"
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
        <Button
          className="ring-1 rounded-xl p-2 bg-failed w-[90%] sm:w-[10%] text-white"
          onPress={() => alert("Saiu")}
        >
          SAIR
        </Button>
      </NavbarMenu>
    </Navbar>
  );
}
