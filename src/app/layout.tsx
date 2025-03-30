"use client";
import "./globals.css";
import Navbar from "./components/navbar";
import { usePathname } from "next/navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <html data-theme="synthwave" lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      <body>
        {/* this disables this shit (navbar component) from popping up on the links.tsx */}
        { pathname !== "/links" && <Navbar /> }

        <main>{children}</main>

        <footer className="footer sm:footer-horizontal footer-center text-base-content p-4">
          <aside>
            <p>Created by Christian Ray.</p>
          </aside>
        </footer>
      </body>
    </html>
  );
};

export default Layout;
