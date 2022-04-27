import React from 'react'
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
                    <h4>Your Language is <img src="/images/en.png" alt="language" className="language" /> if not &nbsp;&nbsp;&nbsp;
                        <select name="language" id="language">
                            <option selected value="en"> Select your Language</option>
                            <option value="en"> English</option>
                            <option value="en"> Deutsch</option>
                            <option value="en"> Malay</option>
                        </select>
                    </h4>
                </div>
                <div className="companies">
                    <h3>800 Car Rental Companies</h3>
                    <img src="/images/companies/suppliers.gif" className="company_logo" alt="company" />
                </div>
            </div>
        </nav>
    </>
  )
}
