import React from "react";

interface UsersLayoutProps {
  children: React.ReactNode;
}

function UsersLayout({ children }: UsersLayoutProps) {
  return <div>{children}</div>;
}

export default UsersLayout;
