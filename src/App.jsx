import React from "react";
import Header from "./component/Header"
import Sidebar from "./component/Sidebar"
import Content from "./component/Content"
import "./index.css";

export default function App() {
  return (
    <div className="page-root">
      <Header />
      <main className="main-grid">
        <aside className="left-col">
          <Sidebar />
        </aside>

        <section className="center-col">
          <Content />
        </section>

        {/* right gutter intentionally left empty like the design */}
        <div className="right-col" />
      </main>
    </div>
  );
}