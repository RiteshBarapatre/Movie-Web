import React from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

const Card = ({ elem }) => {
  return (
    <div
      className="card"
      style={{ width: "18rem", margin: "20px 0", borderColor: "yellow" }}
    >
      <img
        src={elem?.show?.image?.medium}
        className="card-img-top"
        alt="No Image Found"
        width={210}
        height={295}
      />
      <div className="card-body">
        <h5 className="card-title">{elem?.show?.name}</h5>
        <p className="card-text">
          {parse(elem?.show?.summary?.slice(0, 116) + "...")}
        </p>
        <Link to={`/show/${elem?.show?.id}`} className="btn btn-warning">
          More Info
        </Link>
      </div>
    </div>
  );
};

export default Card;
