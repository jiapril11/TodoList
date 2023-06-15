import React from "react";

export default function Layout({ children }) {
  const style = {
    maxWidth: 1200,
    minWidth: 800,
    margin: "0 auto",
    padding: "1rem",
  };
  return <div style={style}>{children}</div>;
}
