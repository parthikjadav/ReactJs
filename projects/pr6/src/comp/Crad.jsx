import React from "react";
const Crad = ({ data }) => {
  return (
    <div className="d-flex">
      {data.map((val, ind) => (
        <div className="card" key={ind} style={{ width: "18rem" }}>
          <img
            src="https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_640.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{val.name}</h5>
            <p className="card-text">{val.price}</p>
            <a href="#" className="btn btn-primary">
              buy now
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Crad;
