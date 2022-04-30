import React from "react";
import Select from "react-select";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState } from "react";
import { BsTriangleHalf } from "react-icons/bs";
import { BsCalendarDate } from "react-icons/bs";
import DatePicker from "react-datepicker";
import pickuptime from "../pickuptime.json";
import dropoftime from "../dropoftime.json";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/Home.css";

export default function Home() {
  const [isUseDropOfLocation, setIsUseDropOfLocation] = useState(false);
  const [searchValues, setSearchValues] = useState({
    pickuplocation: "",
    dropofflocation: "",
    pickUpTimeSelected: pickuptime[0],
    pickupdate: null,
    dropOffTimeSelected: dropoftime[0],
    dropOfDate: null,
    errors: [],
    showTostify: false,
  });
  const handleFormFields = (e) => {
    setSearchValues({ ...searchValues, [e.target.name]: e.target.value });
  };

  const onPickuptimechange = (value) => {
    setSearchValues({ ...searchValues, pickUpTimeSelected: value });
  };
  const onDropOffTimeChange = (value) => {
    setSearchValues({ ...searchValues, dropOffTimeSelected: value });
  };

  const search = (e) => {
    let error_array = [];
    if (searchValues.pickuplocation === "") {
      error_array.push({ feildName: "pickuplocation", errormessage: true });
    }
    if (isUseDropOfLocation === true && searchValues.dropofflocation === "") {
      error_array.push({ feildName: "dropofflocation", errormessage: true });
    }
    if (searchValues.pickupdate === null) {
      error_array.push({ feildName: "pickupdate", errormessage: true });
    }
    if (searchValues.dropOfDate === null) {
      error_array.push({ feildName: "dropOfDate", errormessage: true });
    }
    setSearchValues({ ...searchValues, errors: error_array , showTostify : true });
  };

  const closeTostify = () => {
    setSearchValues({ ...searchValues, showTostify: false });
  };

  const checkFeildNameFromErrorsArray = (feild) => {
    const res = searchValues.errors.find(({ feildName }) => {
      return feildName === feild;
    });
    if(res == undefined){
      return false;
    }else{
      return true;
    }
  }
  return (
    <>
      <div className="main_page">
        <Navbar />
        <br />
        <br />
        <div className="background_image">
          <div className="search_form">
            {searchValues.showTostify ? (
              <div className="tostify_message error">
                <p>Please review the highlighted fields</p>
                <button onClick={closeTostify}>&times;</button>
              </div>
            ) : (
              ""
            )}
            <h3>Search for car hire</h3>
            <form
              action=""
              onSubmit={(e) => {
                e.preventDefault();
                search(e);
              }}
            >
              <div className="field_outer">
                <div className="left">
                  <div
                    className={`form_feild ${checkFeildNameFromErrorsArray("pickuplocation") ? "error_feild" : ""}`}
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
                      <div className={`form_feild ${checkFeildNameFromErrorsArray("dropofflocation") ? "error_feild" : ""}`} style={{ flexBasis: "49%" }}>
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
                  <div className="couple_feild" style={{ flexBasis: "49%" }}>
                    <div
                      className={`form_feild form_feild_relative ${checkFeildNameFromErrorsArray("pickupdate") ? "error_feild" : ""}`}
                      style={{ flexBasis: "65%" }}
                    >
                      <span className="icon">
                        <BsCalendarDate />
                      </span>
                      <DatePicker
                        name="pickupdate"
                        selected={searchValues.pickupdate}
                        renderCustomHeader={({
                          monthDate,
                          customHeaderCount,
                          decreaseMonth,
                          increaseMonth,
                        }) => (
                          <div>
                            <button
                            type="button"
                              aria-label="Previous Month"
                              className={
                                "react-datepicker__navigation react-datepicker__navigation--previous"
                              }
                              style={
                                customHeaderCount === 1
                                  ? { visibility: "hidden" }
                                  : null
                              }
                              onClick={() => {decreaseMonth()}}
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
                            type = "button"
                              aria-label="Next Month"
                              className={
                                "react-datepicker__navigation react-datepicker__navigation--next"
                              }
                              style={
                                customHeaderCount === 0
                                  ? { visibility: "hidden" }
                                  : null
                              }
                              onClick={() => {increaseMonth()}}
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
                        onChange={(date) =>
                          setSearchValues({ ...searchValues, pickupdate: date })
                        }
                        monthsShown={2}
                        minDate={new Date()}
                        placeholderText="Start date"
                        dateFormat="MMMM d yyyy"
                      />
                    </div>
                    <div
                      className="form_feild form_feild_relative"
                      style={{ flex: 1 }}
                    >
                      <Select
                        defaultValue={searchValues.pickUpTimeSelected}
                        onChange={(e) => {
                          onPickuptimechange(e);
                        }}
                        options={pickuptime}
                        name="pickUpTimeSelected"
                      />
                    </div>
                  </div>
                  <div className="couple_feild" style={{ flexBasis: "49%" }}>
                    <div
                      className={`form_feild form_feild_relative ${checkFeildNameFromErrorsArray("dropOfDate") ? "error_feild" : ""}`}
                      style={{ flexBasis: "65%" }}
                    >
                      <span className="icon">
                        <BsCalendarDate />
                      </span>
                      <DatePicker
                        name="dropOfDate"
                        selected={searchValues.dropOfDate}
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
                        onChange={(date) =>
                          setSearchValues({ ...searchValues, dropOfDate: date })
                        }
                        monthsShown={2}
                        minDate={new Date()}
                        placeholderText="End date"
                        dateFormat="MMMM d yyyy"
                      />
                    </div>
                    <div
                      className="form_feild form_feild_relative"
                      style={{ flex: 1 }}
                    >
                      <Select
                        defaultValue={searchValues.dropOffTimeSelected}
                        onChange={(e) => {
                          onDropOffTimeChange(e);
                        }}
                        options={dropoftime}
                        name="dropOffTimeSelected"
                      />
                    </div>
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
                  <button type="submit" className="native_button">
                    Search
                  </button>
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
