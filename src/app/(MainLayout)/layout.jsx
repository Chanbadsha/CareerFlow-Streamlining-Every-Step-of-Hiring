import Navbar from "@/Components/Shared/Navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>{children}</main>
      {/* Footer */}
    </>
  );
};

export default MainLayout;
