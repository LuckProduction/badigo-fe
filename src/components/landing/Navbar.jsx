import { landingNavbarLink } from '@/data/link';
import { Menu } from 'antd';

const Navbar = () => {
  const handleScroll = ({ key }) => {
    const targetId = key.replace('#', ''); // contoh: "#beranda" → "beranda"
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="flex w-full items-center justify-center bg-transparent p-4 lg:px-20">
      <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between rounded-sm bg-gray-100 p-5">
        <div className="w-full">
          <img src="/b_shape_colored_brand.png" className="h-8 w-8" />
        </div>
        <Menu onClick={handleScroll} style={{ minWidth: 0, flex: 'auto', border: 'none', backgroundColor: 'transparent', placeContent: 'end' }} items={landingNavbarLink} mode="horizontal" className="w-full text-lg" />
      </div>
    </div>
  );
};

export default Navbar;
