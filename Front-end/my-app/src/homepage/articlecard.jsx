import React from "react";
import "./homepage.css";
import { Link } from "react-router-dom";
const Articlecard = ({data}) => {
  return (
    <div className="articlecardscontainer">
      <div className="articlecardfirstpart">
        <img src={`http://localhost:4002/upload/${data.image}`} className="articlecardimage"/>
      </div>

      <div className="articlecardsecondpart">
        <h1>{data.title}</h1>
        <p>written by {data.author}</p>
        <p>{data.body}</p>
        <Link
              to={{
                pathname:`/article/${data.id}`,
              }}
              className=" button"
            >
              View more
            </Link>
      </div>

    </div>
  );
};

export default Articlecard;
