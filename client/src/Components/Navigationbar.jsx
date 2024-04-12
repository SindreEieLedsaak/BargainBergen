import React from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

export function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useKindeAuth();

  const menuItems = [
    { title: "Features", href: "#" },
    { title: "Home", href: "/" },
    { title: "For you", href: "#" },
  ];

  let navigate = useNavigate();
  const navigateToLogin = () => {
    let path = `/login`;
    navigate(path);
  };

  const navigateToRegister = () => {
    let path = `/register`;
    navigate(path);
  };

  return (
    <Navbar onMenuOpenChange={() => setIsMenuOpen(!isMenuOpen)}>
      <NavbarContent className=" sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
      <NavbarBrand>
        <p className="font-bold text-inherit">BargainBergen</p>
      </NavbarBrand>

      <NavbarMenu isVisible={isMenuOpen} className="sm:hidden">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link
              color="foreground"
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>

      {/* Regular menu for larger screens */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link color="foreground" href={item.href}>
              {item.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent as="div" justify="end">
        {user ? (
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="primary"
                name={user.given_name}
                size="sm"
                src=""
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">{user.given_name}</p>
              </DropdownItem>
              <DropdownItem key="settings" onClick={() => navigate("/profile")}>
                My Profile
              </DropdownItem>
              <DropdownItem key="analytics">Analytics</DropdownItem>
              <DropdownItem key="system">System</DropdownItem>
              <DropdownItem key="help_and_feedback">
                Help & Feedback
              </DropdownItem>
              <DropdownItem key="logout" onClick={logout} color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        ) : (
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="primary"
                name={"User"}
                size="sm"
                src=""
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="login" onClick={navigateToLogin}>
                Log In
              </DropdownItem>
              <DropdownItem key="register" onClick={navigateToRegister}>
                Register
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        )}
      </NavbarContent>
    </Navbar>
  );
}
