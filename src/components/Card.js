import React from "react";
import { findByModelIdAction } from "../redux/action";
import { useDispatch } from "react-redux";
import { displayModelToScence } from "../_common/displayModel";
import { IntializeThreejs, setObjToScene } from "../_common/render.js";
export const Card = ({ name, url, idData, managerMode }) => {
  const dispatch = useDispatch();
  const initValue = {
    name: "Name",
    url: "https://picsum.photos/200",
  };

  const handleClick = () => {
    dispatch(findByModelIdAction(idData));
    if (managerMode) {
      displayModelToScence(name);
    } else {
      IntializeThreejs();
      setObjToScene(name);
    }
  };
  return (
    <>
      <div onClick={handleClick} className="card">
        <img
          src={!!url ? url : initValue.url}
          alt={!!name ? name : initValue.name}
        />
        <p>{!!name ? name : initValue.name}</p>
      </div>
    </>
  );
};
