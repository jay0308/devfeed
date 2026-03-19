"use client";

import { logout } from "@/app/actions/logoutActions";

export default function Logout() {
  const handleLogout = async () => {
    await logout();
  };
  return (
    <button className="secondary-button" onClick={handleLogout}>Logout</button>
  );
}