import React from "react";
import { Home, Search, ShoppingBag, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Search", path: "/", icon: Search },
    { name: "Orders", path: "/orders", icon: ShoppingBag },
    { name: "Profile", path: "/", icon: User },
  ];

  return (
    <div className="bg-background w-full shadow-nav">
      <div className="flex justify-around py-3">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              to={item.path}
              className="flex flex-col items-center gap-1 text-gray-400 text-xs"
            >
              <Icon size={20} className={`${isActive ? "text-primary-dark" : ""}`} />
              <span className={`${isActive ? "text-primary" : ""}`}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Nav;
