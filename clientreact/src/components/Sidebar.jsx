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
          <h3>MENU</h3>
          <ul>
            <li>
            <LuLayoutDashboard/>
            <Link to="/user/dashboard">Dashboard</Link>
            </li>
            <li>
            <FaWhatsapp/>
            <Link to="/user/device_settings">Manage WhatsApp</Link>
            </li>
            <li>
              <MdOutlineMessage/>
              <a href="/">Quick Msg</a>
            </li>
            <li>
              <CiLocationArrow1/>
              <a href="/">Auto Reply</a>
            </li>
            <li>
              <FaCloudDownloadAlt/>
              <a href="/">Incoming Msg</a>
            </li>
            <li>
              <FaCloudArrowUp/>
              <a href="/">Outgoing Msg</a>
            </li>
            <li>
              <BiPurchaseTagAlt/>
              <a href="/">Buy Plan</a>
            </li>
            <li>
              <MdPayment/>
              <a href="/">Payment History</a>
            </li>
            <li>
              <PiWebhooksLogoBold/>
              <a href="/">Webhooks & API</a>
            </li>
            <li>
              <VscAccount/>
              <a href="/">Account Setting</a>
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