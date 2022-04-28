import React from 'react'
import { AiOutlineMail } from "react-icons/ai"
import { BsFillTelephoneFill } from "react-icons/bs"
import "../styles/Navbar.css"
export default function Navbar() {
  return (
    <>
        <nav className="navbar">
            <div className="left">
                <div className="logo">
                    <img src="/images/logo.png" alt="logo" />
                </div>
            </div>
            <div className="right">
                <div className="language_selection">
                    <h5>Your Language is <img src="/images/en.png" alt="language" className="language" /> if not &nbsp;&nbsp;&nbsp;
                        <select name="language" id="language">
                            <option selected value="en"> Select your Language</option>
                            <option value="en"> English</option>
                            <option value="en"> Deutsch</option>
                            <option value="en"> Malay</option>
                        </select>
                    </h5>
                </div>
                <div className="companies">
                    <h5>800 Car Rental Companies</h5>
                    <img src="/images/suppliers.gif" className="company_logo" alt="company" />
                </div>
            </div>
        </nav>
        <div className="menus_bar">
            <div className="menu_bar">
                <button className='active_tab tab_btn'>Car Reservation</button>
                <button className='tab_btn'>Manage your booking</button>
                <button className='tab_btn'>
                    <AiOutlineMail />
                    <BsFillTelephoneFill />
                </button>
            </div>
            <div className="subheading">
                <h5>Booking Car Rental Reservation with On-Line confirmation in 175 countries at 30.000 locations.</h5>
            </div>
        </div>
    </>
  )
}
