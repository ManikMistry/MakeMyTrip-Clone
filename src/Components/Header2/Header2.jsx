import "./Header2.scss";
import logo from "../../Assets/img/logo2.png";
import makemytrip2 from "../../Assets/img/makemytrip2.svg";
import { BiChevronDown } from "react-icons/bi";
import { FaTrain } from "react-icons/fa";
import {
  MdOutlineFlight,
  MdOutlineMapsHomeWork,
  MdDirectionsBus,
  MdHiking,
} from "react-icons/md";
import { RiHotelLine } from "react-icons/ri";
import { AiOutlineCar } from "react-icons/ai";
import { VscGraphLine } from "react-icons/vsc";

const Header2 = () => {
  return (
    <section className="header2-wrapper">
      <div className="header2">
        <div className="logo" to={"/"}>
          <img src={logo} alt="logo-mmt" />
        </div>
        <section className="navigation-wrapper-2">
          <div className="navigation">
            <div className="nav-link active">
              <MdOutlineFlight className="icon" />
              <span>Flights</span>
            </div>
            <div className="nav-link">
              <RiHotelLine className="icon" />
              <span>Hotels</span>
            </div>
            <div className="nav-link">
              <MdOutlineMapsHomeWork className="icon" />
              <span>Homestays</span>
            </div>
            <div className="nav-link">
              <RiHotelLine className="icon" />
              <span>Holiday Packages</span>
            </div>
            <div className="nav-link">
              <FaTrain className="icon" />
              <span>Trains</span>
            </div>
            <div className="nav-link">
              <MdDirectionsBus className="icon" />
              <span>Buses</span>
            </div>
            <div className="nav-link">
              <AiOutlineCar className="icon" />
              <span>Cabs</span>
            </div>
            <div className="nav-link">
              <VscGraphLine className="icon" />
              <span>Forex</span>
            </div>
            <div className="nav-link">
              <MdHiking className="icon" />
              <span>Activities</span>
            </div>
          </div>
        </section>
        <div className="right-sec">
          <div className="login">
            <div className="user-name">
              <h1>Manik</h1>
            </div>
            <img src={makemytrip2} className="cropped-img" alt="myTrip" />{" "}
            <span>Login or Create Account</span>
            <BiChevronDown className="down-arrow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header2;
