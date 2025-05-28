import { Image } from "antd"
import { BiLogoFacebookCircle, BiLogoInstagram, BiLogoLinkedinSquare, BiLogoYoutube } from "react-icons/bi"
import { NavLink } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="w-full max-w-screen-2xl p-6 lg:px-28 pb-4 pt-24  border-t-2 bg-[#DDEEFF] ">
      <div className=" w-full p-6 lg:p-20 rounded-sm lg:rounded-md  bg-black text-white">
        <div className=" w-full flex flex-col lg:flex-row justify-between gap-12">
          <div className="flex-[1] flex flex-col">
            <Image width={125} src="/logo/brand_colored.png" className="mb-6" />
            <span className="font-body_type mb-2">Address</span>
            <p className="font-body_type text-xs mb-6">Jl. Arif Rahman Hakim, Pulubala, Kec. Kota Tengah, Kota Gorontalo, Gorontalo</p>
            <span className="font-body_type mb-2">Contact</span>
            <p className="font-body_type text-xs">1800 123 4567</p>
            <p className="font-body_type text-xs mb-4">bangkitdigitalgorontalo@badigo.id</p>
            <div className="w-full inline-flex items-center gap-x-2">
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
          <div className="flex-[2] flex start justify-around gap-y-12">
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
      <div className="w-full flex flex-col lg:flex-row lg:items-center justify-between gap-y-6 px-2 py-4 font-body_type">
        <span>© 2025  BADIGO. All rights reserved.</span>
        <div>
          <NavLink>Privacy Policy</NavLink>
          <NavLink>Terms of Service</NavLink>
          <NavLink>Cookies Setting</NavLink>
        </div>
      </div>
    </footer>
  )
}

export default Footer