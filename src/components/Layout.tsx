import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingButtons from "./FloatingButtons";

interface LayoutProps {
  children: React.ReactNode;
  showPadding?: boolean;
  navbarGold?: boolean;
}

const Layout = ({ children, showPadding = true, navbarGold = false }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isGold={navbarGold} />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Layout;
