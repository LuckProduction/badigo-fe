import { Image } from 'antd';
import { BiLogoFacebookCircle, BiLogoInstagram, BiLogoLinkedinSquare, BiLogoYoutube } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full max-w-screen-2xl border-t-2 bg-[#DDEEFF] p-6 pb-4 pt-24 lg:px-28">
      <div className="w-full rounded-sm bg-black p-6 text-white lg:rounded-md lg:p-20">
        <div className="flex w-full flex-col justify-between gap-12 lg:flex-row">
          <div className="flex flex-[1] flex-col">
            <Image width={40} src="/b_shape_colored_brand.png" className="mb-6" />
            <span className="mb-2 font-body_type">Address</span>
            <p className="mb-6 font-body_type text-xs">Jl. Arif Rahman Hakim, Pulubala, Kec. Kota Tengah, Kota Gorontalo, Gorontalo</p>
            <span className="mb-2 font-body_type">Contact</span>
            <p className="font-body_type text-xs">1800 123 4567</p>
            <p className="mb-4 font-body_type text-xs">bangkitdigitalgorontalo@badigo.id</p>
            <div className="inline-flex w-full items-center gap-x-2">
              <button>
                <BiLogoFacebookCircle className="text-2xl" />
              </button>
              <button>
                <BiLogoInstagram className="text-2xl" />
              </button>
              <button>
                <BiLogoLinkedinSquare className="text-2xl" />
              </button>
              <button>
                <BiLogoYoutube className="text-2xl" />
              </button>
            </div>
            {/* <div className="flex items-center gap-x-2">
              <Button type="primary" shape="circle" icon={<InstagramFilled />} />
              <Button type="primary" shape="circle" icon={<FacebookFilled />} />
              <Button type="primary" shape="circle" icon={<YoutubeFilled />} />
            </div> */}
          </div>
          <div className="start flex flex-[2] justify-around gap-y-12">
            <div className="col-span-12 flex flex-col gap-y-3 lg:col-span-6">
              <b>Service</b>
              <NavLink className="text-xs lg:text-sm" to="/mobile_landing">
                Go Village Mobile
              </NavLink>
              <NavLink className="text-xs lg:text-sm" to="/">
                Go Village Web
              </NavLink>
            </div>
            <div className="col-span-12 flex flex-col gap-y-3 lg:col-span-6">
              <b>Help & Support</b>
              <NavLink className="text-xs lg:text-sm" to="/privacy_policy">
                Privacy & Policy
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col justify-between gap-y-6 px-2 py-4 font-body_type lg:flex-row lg:items-center">
        <span>© 2025 BADIGO. All rights reserved.</span>
        <div>
          <NavLink>Privacy Policy</NavLink>
          <NavLink>Terms of Service</NavLink>
          <NavLink>Cookies Setting</NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
