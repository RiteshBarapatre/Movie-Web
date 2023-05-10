import React from "react";

const Card = ({elem}) => {
  return (
    <div className="card" style={{ width: "18rem",margin : "20px 0",borderColor : "yellow"}}>
      <img src={elem?.show?.image?.medium} className="card-img-top" alt="No Image Found" width={210} height={295}/>
      <div className="card-body">
        <h5 className="card-title">{elem?.show?.name}</h5>
        <p className="card-text">
          {elem?.show?.summary?.slice(0,116)}...
        </p>
        <a href={`/show/${elem?.show?.id}`} target="__blank" className="btn btn-warning">
          More Info
        </a>
      </div>
    </div>
  );
};

export default Card;
