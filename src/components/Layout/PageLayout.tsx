
import { motion } from "framer-motion";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="flex-1"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
};

export default PageLayout;
