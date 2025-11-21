import { NavLink } from "react-router";
import { Menu, LogOut, User, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThemeToggle } from "@/Features/ThemeToggle/ThemeToggle";

export default function Navbar() {
  // Later replace with Firebase auth state
  const isLoggedIn = false;

  const navItemClass = "px-4 py-2 hover:text-primary transition font-medium";

  const activeClass = "text-primary font-semibold";

  return (
    <nav className="w-full border-b   sticky top-0 z-50 px-5">
      <div className="container mx-auto flex items-center justify-between py-4 px-2">
        {/* Logo */}
        <h1 className="text-2xl font-bold">Shifa</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList className=" flex gap-5">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? activeClass : navItemClass
                    }
                  >
                    Home
                  </NavLink>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive ? activeClass : navItemClass
                    }
                  >
                    About
                  </NavLink>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive ? activeClass : navItemClass
                    }
                  >
                    Contact
                  </NavLink>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Auth Buttons / Profile */}
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar className="cursor-pointer">
                  <AvatarImage src="https://i.pravatar.cc/40" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <NavLink to="/profile">Profile</NavLink>
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <NavLink to="/settings">Settings</NavLink>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem onClick={() => console.log("Logout")}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-3">
              <NavLink to="/login">
                <Button variant="outline">Login</Button>
              </NavLink>
              <NavLink to="/register">
                <Button>Register</Button>
              </NavLink>
              <ThemeToggle />
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="p-4">
              <div className="flex flex-col gap-4 mt-6">
                <NavLink to="/" className="text-lg">
                  Home
                </NavLink>
                <NavLink to="/about" className="text-lg">
                  About
                </NavLink>
                <NavLink to="/contact" className="text-lg">
                  Contact
                </NavLink>
                <hr className="my-4" />

                {/* Mobile auth */}
                {isLoggedIn ? (
                  <>
                    <NavLink to="/profile" className="text-lg">
                      Profile
                    </NavLink>
                    <NavLink to="/settings" className="text-lg">
                      Settings
                    </NavLink>
                    <button
                      onClick={() => console.log("Logout")}
                      className="text-lg text-red-500 mt-2"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <NavLink to="/login" className="text-lg">
                      Login
                    </NavLink>
                    <NavLink to="/register" className="text-lg">
                      Register
                    </NavLink>
                    <div className="  ">
                      <ThemeToggle />
                    </div>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
