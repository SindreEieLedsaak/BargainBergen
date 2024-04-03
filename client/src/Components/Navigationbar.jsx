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
import React from "react";
import { useNavigate } from "react-router-dom";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

const Navigationbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { user, logout } = useKindeAuth();

  const menuItems = [
    { title: "Features", href: "#" },
    { title: "Home", href: "MainPage" },
    { title: "Integrations", href: "#" },
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
          <div>
            <p>Hey, {user.email}</p>
            <button onClick={logout} type="button">
              Logout
            </button>
          </div>
        ) : (
          <div>
            <button color="primary" className="px-4" onClick={navigateToLogin}>
              Login
            </button>
            <button
              color="primary"
              className="px-4"
              onClick={navigateToRegister}
            >
              Register
            </button>
          </div>
        )}
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="primary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
};

export default Navigationbar;
