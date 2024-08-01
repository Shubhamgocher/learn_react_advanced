import React from "react";
import Container from "../container/Container";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import LogoutBtn from "./LogoutBtn";
import { useSelector } from "react-redux";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  console.log("authStatus",authStatus);
  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Sign Up",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/addpost",
      active: true,
    },
  ];
  

  return (
    <header>
      <Container>
        <nav className="flex justify-between ">
          <div className="text-2xl text-black">
            <Logo />
          </div>
          <ul className="text-2xl space-x-8">
            {navItems.map(
              (item) =>
                item.active && (
                  <a
                    href={item.slug}
                    key={item.slug}
                    className="text-black font-semibold hover:underline  hover:text-black/40"
                  >
                    {item.name}
                  </a>
                )
            )}
          </ul>
          {authStatus && (
            <div className="flex justify-center items-center">
              <LogoutBtn />
            </div>
          )}
        </nav>
      </Container>
    </header>
  );
}

export default Header;
