import React from "react";

const Item = (props) => {
  return (
    <div className="">
      <img src={props.img} alt="" />
      <p>{props.name}</p>
      <div>
        <div className="">{props.new_price}</div>
        <div className="">{props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
