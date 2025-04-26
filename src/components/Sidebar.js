import React from "react";
import Link from "next/link";
export default function Sidebar() {
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Stages & Checklist", href: "/" },
    { name: "Upload Docs", href: "/" },
    { name: "Preferred Vendors", href: "/" },
    { name: "Tech Stack", href: "/" },
    { name: "Targets", href: "/" },
    { name: "Zee Sales Targets", href: "/" },
    { name: "MAI Settings", href: "/" },
    { name: "Pending Questions", href: "/" },
  ];
  return (
    <aside className="sidebar w-64 h-screen text-white p-6 fixed">
      <nav className="space-y-4 group">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`block  px-3 py-1 rounded  ${
              item.name === "Home" ? "active-link" : "link-hover"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
      <div className="absolute bottom-6">
        <button className="text-sm">Logout</button>
      </div>
    </aside>
  );
}
