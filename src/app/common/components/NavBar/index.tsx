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
import useAuthStore from "@/store/auth/auth.store";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isSigned, logout } = useAuthStore();

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
          <Link href="/" className="text-white">
            SOFTHOTEL
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex p-2 rounded-2xl">
          {isSigned ? (
            <h3>{`Olá ${user.name}`}</h3>
          ) : (
            <Button
              as={Link}
              href="/auth/login"
              className="ring-1 rounded-xl p-2"
            >
              Entrar
            </Button>
          )}
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => {
          if (
            (isSigned && item.title === "Cadastro") ||
            (isSigned && item.title === "Entrar")
          )
            return null;
          return (
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
          );
        })}
        {isSigned && (
          <Button
            className="ring-1 rounded-xl p-2 bg-failed w-[90%] sm:w-[10%] text-white"
            onPress={logout}
          >
            SAIR
          </Button>
        )}
      </NavbarMenu>
    </Navbar>
  );
}
