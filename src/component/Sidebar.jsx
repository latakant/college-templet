import React, { useState } from "react";

const MenuList = ({ title, items }) => (
  <div className="menu-block">
    <div className="menu-title">{title}</div>
    <ul className="menu-list">
      {items.map((it, i) => (
        <li key={i}>
          <a href="#">{it}</a>
        </li>
      ))}
    </ul>
  </div>
);

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    "About Us",
    "Courses",
    "Faculty & Staff",
    "PU Guidelines for Pursuing Two Academic Programmes",
    "CDOE Information Brochures",
    "Indian Journal of Distance Education",
    "USOL Magazine",
    "NCTE",
    "Research Projects",
    "Contact Us",
  ];

  const related = [
    "Notice Board",
    "Admission Notices",
    "Annual Reports",
    "Assignments & Papers",
    "CIQA Reports",
    "Grievance Redressal",
    "HEI Application",
    "Mandatory Disclosure",
    "Photo Gallery",
  ];

  const quick = [
    "UGC e-Samadhan Portal",
    "Anti-Ragging",
    "Register Complaint - Caste Based Discrimination",
    "Webcast/Videos",
    "University Events",
  ];

  return (
    <div className={`sidebar ${open ? "open" : ""}`}>
      {/* small-screen toggle */}
      <button
        className="sidebar-toggle"
        aria-expanded={open}
        aria-controls="sidebar-sections"
        onClick={() => setOpen((s) => !s)}
      >
        ☰ MENU
      </button>

      <div id="sidebar-sections" className="sidebar-sections">
        <MenuList title="MENU" items={menuItems} />
        <MenuList title="RELATED LINKS" items={related} />
        <MenuList title="PU QUICK LINKS" items={quick} />
      </div>
    </div>
  );
}
