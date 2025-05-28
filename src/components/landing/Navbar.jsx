import { landingNavbarLink } from "@/data/link"
import { Menu } from "antd"

const Navbar = () => {
    const handleScroll = ({ key }) => {
        const targetId = key.replace("#", ""); // contoh: "#beranda" → "beranda"
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <div className="w-full p-4 bg-transparent flex items-center justify-center lg:px-20">
            <div className="w-full max-w-screen-2xl p-5 mx-auto flex items-center justify-between bg-gray-100 rounded-sm">
                <div className="w-full">
                    <img src="/b_shape_colored_brand.png" className="w-8 h-8" />
                </div>
                <Menu  onClick={handleScroll} style={{ minWidth: 0, flex: 'auto', border: 'none', backgroundColor: 'transparent', placeContent: 'end' }} items={landingNavbarLink} mode="horizontal" className="w-full text-lg" />
            </div>
        </div>
    )
}

export default Navbar