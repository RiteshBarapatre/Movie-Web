import React from "react";
import Card from "./Card";

const Home = ({shows}) => {
  return (
    <div className="container text-center">
      <div className="row">
      {shows.map((elem)=>{
        return (
        <div className="col" key={elem.show.id}>
            <Card elem={elem}/>
        </div>
        )
      })}
      </div>
    </div>
  );
};

export default Home;
