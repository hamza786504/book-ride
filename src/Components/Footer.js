import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import "../styles/Footer.css";
import TopCarRentalAirportLocations from "./TopCarRentalAirportLocations";
export default function Footer() {
  return (
    <>
    <TopCarRentalAirportLocations />
      <div className="footer">
        <p>
        Car Reservation | Manage your Booking | Vehicles Fleet | Booking Engine
        Terms | Privacy-Policy | Cookie-Policy |
        &nbsp;&nbsp;&nbsp;<AiOutlineMail />
        &nbsp;&nbsp;&nbsp;<BsFillTelephoneFill />
        </p>
      </div>
    </>
  );
}
