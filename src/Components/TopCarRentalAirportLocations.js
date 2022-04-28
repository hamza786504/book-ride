import React from "react";
import { Link } from "react-router-dom";
import "../styles/TopCarRentalAirportLocations.css";
export default function TopCarRentalAirportLocations() {
  return (
    <>
      <div className="toplocations">
        <h5 className="heading">Top Car Rental Airport Locations: </h5>
        <table width="100%">
          <tbody>
            <tr>
              <td>
                <Link to="/">Car Rental in Miami Airport</Link>
              </td>
              <td>
                <Link to="/">Car Rental in Orlando Airport</Link>
              </td>
              <td>
                <Link to="/">Car Rental in Lisbon Airport</Link>
              </td>
              <td>
                <Link to="/">Car Rental in Los Angeles Airport</Link>
              </td>
            </tr>
            <tr>
              <td>
                <Link to="/">Car Rental in Milan Airport</Link>
              </td>
              <td>
                <Link to="/">Car Rental in Barcelona Airport</Link>
              </td>
              <td>
                <Link to="/">Car Rental in Rome Airport</Link>
              </td>
              <td>
                <Link to="/">Car Rental in Porto Airport</Link>
              </td>
            </tr>
            <tr>
              <td>
                <Link to="/">Car Rental in Paris Airport</Link>
              </td>
              <td>
                <Link to="/">Car Rental in Madrid Airport</Link>
              </td>
              <td>
                <Link to="/">Car Rental in Las Vegas Airport</Link>
              </td>
              <td>
                <Link to="/">Car Rental in Malaga Airport</Link>
              </td>
            </tr>
            <tr>
              <td>
                <Link to="/">Car Rental in Nice Airport</Link>
              </td>
              <td>
                <Link to="/">Car Rental in Peking Airport</Link>
              </td>
              <td>
                <Link to="/">Car Rental in Frankfurt Airport</Link>
              </td>
              <td>
                <Link to="/">Car Rental in San Francisco Airport</Link>
              </td>
            </tr>
            <tr>
              <td>
                <Link to="/">Car Rental in Dubai Airport</Link>
              </td>
              <td>
                <Link to="/">Car Rental in New York Airport</Link>
              </td>
              <td>
                <Link to="/">Car Rental in Alicante Airport</Link>
              </td>
              <td>
                <Link to="/">Car Rental in London Airport</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
