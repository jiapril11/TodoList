import React from "react";
import Layout from "./Layout";

export default function Header() {
  return (
    <header className="min-w-[800px] bg-[#0E2D3E]">
      <Layout>
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white font-mono">
            <a href="/">My Todo List</a>
          </h1>
          <p className="text-[#C5D5DD]">React Basic</p>
        </div>
      </Layout>
    </header>
  );
}
