import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Booked = () => {
  const [info, setInfo] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    setInfo(JSON.parse(localStorage.getItem("booked")));
  }, []);

  const cancel = () => {
    const bool = window.confirm(
      "Do you want to cancel your Ticket. Refund will be done in 7 working days !"
    );
    bool ? localStorage.removeItem("booked") : "";
    navigate("/");
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Your Booked Shows</h1>

      {info ? (
        <div className="bookedMovie">
          <h3 className="my-3 text-center">Movie Name : All Out </h3>
          <div className="text-center">
            <p>Date : {info.date}</p>
            <p>
              Seat : {info.row} - {info.seat}
            </p>
          </div>
          <h3 className="my-3 text-center">
            Personal Info(Only for confirmation)
          </h3>
          <div className="text-center">
            <p>Name : {info.name}</p>
            <p>Email : {info.email}</p>
            <p>phone : {info.phone}</p>
          </div>

          <div className="delete text-center">
            <button className="btn btn-danger" onClick={cancel}>
              Cancel Ticket
            </button>
          </div>
        </div>
      ) : (
        <h1 className="text-center">No Bookings</h1>
      )}
    </>
  );
};

export default Booked;
