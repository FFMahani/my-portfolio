import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen font-sans text-text bg-sky-to-white dark:bg-darkbg dark:text-text-light">
      <Navbar />
      <main className="flex-1 px-4 sm:px-6 md:px-10 pt-28 scroll-mt-28">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
