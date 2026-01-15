import type { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="app-layout">
      <Sidebar />

      <div className="content">
        <Header />
        <main className="main">{children}</main>
      </div>
    </div>
  );
}
