import React from "react";
import { Link } from 'react-router-dom';
import { LuLayoutDashboard } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { CiLocationArrow1 } from "react-icons/ci";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaCloudArrowUp } from "react-icons/fa6";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { MdPayment } from "react-icons/md";
import { PiWebhooksLogoBold } from "react-icons/pi";
import { VscAccount } from "react-icons/vsc";
import "../stylesheet/sidebar.css";


const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="menu">
          <h6>MENU</h6>
          <ul>
            <li>
            <LuLayoutDashboard className="icon"/>
            <Link to="/user/dashboard">Dashboard</Link>
            </li>
            <li>
            <FaWhatsapp className="icon"/>
            <Link to="/user/device_settings">Manage WhatsApp</Link>
            </li>
            <li>
              <MdOutlineMessage className="icon"/>
              <Link to='/user'>Quick Msg</Link>
              <a href="/">Quick Msg</a>
            </li>
            <li>
              <CiLocationArrow1 className="icon"/>
              <Link to='/user'>Auto Reply</Link>
              
            </li>
            <li>
              <FaCloudDownloadAlt className="icon"/>
              <Link to='/user'>Incoming Msg</Link>
             
            </li>
            <li>
              <FaCloudArrowUp className="icon"/>
              <Link to='/user'>Outgoing Msg</Link>
             
            </li>
            <li>
              <BiPurchaseTagAlt className="icon"/>
              <Link to='/user'>Buy Plan</Link>
              
            </li>
            <li>
              <MdPayment className="icon"/>
              <Link to='/user'>Payment History</Link>
             
            </li>
            <li>
              <PiWebhooksLogoBold className="icon"/>
              <Link to='/user'>Webhooks & API</Link>
             
            </li>
            <li>
              <VscAccount className="icon"/>
              <Link to='/user'>Account Setting</Link>
            </li>
          </ul>
        </div>
        <div className="try-demo">
          <button>Try Demo</button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;