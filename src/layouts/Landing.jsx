import { Footer, Navbar } from '@/components';
import { Outlet } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="flex h-dvh flex-col font-sans">
      <header className="fixed left-0 right-0 top-0 z-[999] border-b-2 border-white/50 backdrop-blur-md">
        <Navbar />
      </header>

      <main className="flex-auto pt-16">
        <Outlet />
        <Footer />
      </main>
    </div>
  );
};

export default Landing;
