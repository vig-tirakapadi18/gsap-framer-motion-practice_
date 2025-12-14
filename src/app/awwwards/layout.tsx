import Navbar from "@/components/awwwards/Navbar";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      {children}
    </main>
  );
};

export default Layout;
