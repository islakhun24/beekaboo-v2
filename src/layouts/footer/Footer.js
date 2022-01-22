import { IntagramIcon, SendSvg, TiktokIcon, YoutubeIcon } from "../../assets/svg";
import logo from "../../assets/svg/logotext.svg";

const Footer = (props) => {
  return (
    <div className="w-screen text-bee-black arial-mt flex flex-col h-auto px-8 py-4 md:py-8 md:px-16 bg-bee-yellow">
      <div className="grid grid-cols-1 md:grid-cols-7 gap-16">
        <div className="col-span-1 md:col-span-3">
          <div className="flex items-start justify-start">
            <img
              className="w-32 h-12 lg:w-36 lg:h-16 xl:w-40 xl:h-20 2xl:w-44 2xl:h-24 object-fill"
              src={logo}
              alt=""
            />
          </div>
        </div>
        <div className="col-span-1 md:col-span-2 flex flex-col">
          <div className="font-bold text-lg">Shop</div>
          <div className="text-sm mt-6">Shipping and Payment</div>
          <div className="text-sm mt-3">Product Catagory</div>
        </div>
        <div className="col-span-1 md:col-span-2">
          <div className="font-bold text-lg">Newsletter</div>
          <div className="flex mt-4 flex-row px-2 border py-1 rounded-md border-white bg-yellow-100">
            <input className="bg-opacity-0 outline-none flex-grow bg-yellow-400" />
            <button className="px-2">
              <img src={SendSvg} alt="" />
            </button>
          </div>
          <div className="flex flex-row items-center mt-2 space-x-2">
            <input type="checkbox" className="border" />
            <div className="text-white inter-regular text-sm">
              I have read and agree the privacy police
            </div>
          </div>
        </div>
      </div>
      <div className="md:grid flex flex-col-reverse md:grid-cols-7 md:gap-16">
          <div className="col-span-1  mt-6 md:col-span-5 flex flex-col">
            <div className="text-sm font-bold">© Beekaboo</div>
            <div className="text-sm font-bold">Terms and Service | Privacy Police </div>
          </div>
        <div className="col-span-1  mt-6 md:col-span-2">
        <div className="font-bold text-lg ">Get in Touch</div>
          <div className="flex flex-row space-x-4 mt-2">
                        <button><img src={YoutubeIcon} alt="" /></button>
                        <button><img src={TiktokIcon} alt="" /></button>
                        <button><img src={IntagramIcon} alt="" /></button>
                    </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
