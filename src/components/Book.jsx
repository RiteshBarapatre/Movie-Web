import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Book = () => {
    const {movieName} = useParams()
    const navigate = useNavigate()
    const [bookInfo, setBookInfo] = useState({
        name : "",
        phone : "",
        email : "",
        row : "",
        seat : "",
        date : "",
        movie : movieName
    })

    const handelSubmit = (e)=>{
        e.preventDefault()
        localStorage.setItem('booked',JSON.stringify(bookInfo))
        navigate("/booked")
    }

  return (
    <div>
      <h1 style={{ textAlign: "center" }} className="my-3">
        Book Your Ticket For : {movieName}
      </h1>
      <form onSubmit={handelSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName"
            aria-describedby="emailHelp"
            onChange={(e)=>setBookInfo({...bookInfo,name : e.target.value})}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Phone Number
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPhone"
            aria-describedby="emailHelp"
            onChange={(e)=>setBookInfo({...bookInfo,phone : e.target.value})}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e)=>setBookInfo({...bookInfo,email : e.target.value})}
          />
        </div>

        <div className="select">
        <label htmlFor="" style={{marginRight : "10px"}} className="my-3">Select the row for Seat : </label>
        <select name="" id="" onChange={(e)=>setBookInfo({...bookInfo,row : e.target.value})}>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
            <option value="F">F</option>
            <option value="G">G</option>
        </select>
        </div>
        <div className="select">
        <label htmlFor="" style={{marginRight : "10px"}}  className="my-3">Select the Seat Number : </label>
        <select name="" id="" onChange={(e)=>setBookInfo({...bookInfo,seat : e.target.value})}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
        </select>
        </div>

        <input type="date" className="my-3" style={{border : "1px solid white",padding : '5px',borderRadius : "4px"}} onChange={(e)=>setBookInfo({...bookInfo,date : e.target.value})}/> <br />

        <button type="submit" className="btn btn-warning my-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Book;
