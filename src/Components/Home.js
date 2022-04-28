import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState } from "react";
import { BsTriangleHalf } from "react-icons/bs";
import { BsCalendarDate } from "react-icons/bs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/Home.css";
export default function Home() {
  const [startDate, setStartDate] = useState(new Date());
  const [isUseDropOfLocation, setIsUseDropOfLocation] = useState(false);
  const [searchValues, setSearchValues] = useState({
    pickuplocation: "",
    dropofflocation: "",
  });

  const handleFormFields = (e) => {
    setSearchValues({ ...searchValues, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="main_page">
        <Navbar />
        <br />
        <br />
        <div className="background_image">
          <div className="search_form">
            <h3>Search for car hire</h3>
            <form
              action=""
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="field_outer">
                <div className="left">
                  <div
                    className="form_feild"
                    style={{ flexBasis: isUseDropOfLocation ? "49%" : "100%" }}
                  >
                    <span className="icon">
                      <BsTriangleHalf />
                    </span>
                    <input
                      type="text"
                      className="feild"
                      name="pickuplocation"
                      placeholder="Pick-up Location"
                      value={searchValues.pickuplocation}
                      id="pickuplocation"
                      onChange={(e) => {
                        handleFormFields(e);
                      }}
                    />
                    <button
                      onClick={() => {
                        setSearchValues({
                          ...searchValues,
                          pickuplocation: "",
                        });
                      }}
                      className="icon empty_input"
                    >
                      &times;
                    </button>
                  </div>
                  {isUseDropOfLocation ? (
                    <>
                      <div className="form_feild" style={{ flexBasis: "49%" }}>
                        <span className="icon">
                          <BsTriangleHalf />
                        </span>
                        <input
                          type="text"
                          className="feild"
                          name="dropofflocation"
                          placeholder="Drop-off Location"
                          value={searchValues.dropofflocation}
                          id="dropofflocation"
                          onChange={(e) => {
                            handleFormFields(e);
                          }}
                        />
                        <button
                          onClick={() => {
                            setSearchValues({
                              ...searchValues,
                              dropofflocation: "",
                            });
                          }}
                          className="icon empty_input"
                        >
                          &times;
                        </button>
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                  <div className="form_feild form_feild_relative" style={{ flexBasis: "49%" }}>
                    <span className="icon">
                      <BsCalendarDate />
                    </span>
                    <DatePicker
                      placeholderText="Start date"
                      renderCustomHeader={({
                        monthDate,
                        customHeaderCount,
                        decreaseMonth,
                        increaseMonth,
                      }) => (
                        <div>
                          <button
                            aria-label="Previous Month"
                            className={
                              "react-datepicker__navigation react-datepicker__navigation--previous"
                            }
                            style={
                              customHeaderCount === 1
                                ? { visibility: "hidden" }
                                : null
                            }
                            onClick={decreaseMonth}
                          >
                            <span
                              className={
                                "react-datepicker__navigation-icon react-datepicker__navigation-icon--previous"
                              }
                            >
                              {"<"}
                            </span>
                          </button>
                          <span className="react-datepicker__current-month">
                            {monthDate.toLocaleString("en-US", {
                              month: "long",
                              year: "numeric",
                            })}
                          </span>
                          <button
                            aria-label="Next Month"
                            className={
                              "react-datepicker__navigation react-datepicker__navigation--next"
                            }
                            style={
                              customHeaderCount === 0
                                ? { visibility: "hidden" }
                                : null
                            }
                            onClick={increaseMonth}
                          >
                            <span
                              className={
                                "react-datepicker__navigation-icon react-datepicker__navigation-icon--next"
                              }
                            >
                              {">"}
                            </span>
                          </button>
                        </div>
                      )}
                      onChange={(date) => setStartDate(date)}
                      monthsShown={2}
                      minDate={new Date()}
                    />
                  </div>
                </div>
                <div className="right">
                  <div className="option">
                    <input
                      type="checkbox"
                      name="different_loction"
                      onChange={() => {
                        setIsUseDropOfLocation(!isUseDropOfLocation);
                      }}
                    />
                    <p>Return to a different location</p>
                  </div>
                  <button className="native_button">Search</button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}