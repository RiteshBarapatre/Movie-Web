import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/show.css";
import { AiFillVideoCamera,AiOutlineLink } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import parse from "html-react-parser";

const Show = () => {
  const { id } = useParams();
  const [show, setShow] = useState({})
  const navigate = useNavigate()
  
  useEffect (()=>{
    const func = async ()=>{
      try {
        const data  = await fetch(`https://api.tvmaze.com/shows/${id}`)
        data.json().then((data)=>{
          console.log(data)
          setShow(data)
        }).catch((err)=>{
          console.log("Fetching Problem")
        })
      } catch (error) {
        console.log("catch error")
      }
    }
    func()
  },[])


  const ticket = ()=>{
    navigate(`/book/${show?.name?.split(" ").join("")}`)
  }

  return (
    <div className="show">
    <ToastContainer />
      <h2>{show?.name} :-</h2>
      <div className="show__basic">
      <div className="show__image">
        <img
          src={show?.image?.medium}
          alt="Image Not Available"
          width={210} height={295}
        />
        <div className="rating">
        {
          show?.rating?.average ? 
          show?.rating?.average + " ⭐ " : "No Ratings"
        }
        </div>
        <div className="watch">
          <a href={show?.url} target="__blank">
          <div className="link" onClick={()=>show.url ? "" : toast.error("URL not found !!!")}>
          <AiOutlineLink/>
          </div>
          </a>
          <a href={show?.officialSite} target="__blank">
          <div className="video" onClick={()=>show.officialSite ? "" : toast.error("URL not found !!!")}>
          <AiFillVideoCamera/>
          </div>
          </a>
        </div>
      </div>
        <div className="show__info">
          <p>Language :- {show?.language}</p>
          <p>Genres :- {show?.genres?.toString()}</p>
          <p>Status :- {show?.status}</p>
          <p>Premiered :- {show?.premiered} </p>
          <p>Summary :- {parse(show?.summary || "")}</p>
          <button onClick={ticket}>Book Your Tickets</button>
        </div>
      </div>
    </div>
  );
};

export default Show;
