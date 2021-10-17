import React, { useState } from "react";
import "./ButtonState.css";
import { AiOutlineCheck } from "react-icons/ai";

const ButtonState = () => {
  const [btnSt, setBtnSt] = useState("false");

  return (
    <div className="btnWrap">
      <button
        className={
          !btnSt ? "btn btn-primary btnBig" : "btn btn-secondary btnBig"
        }
        onClick={() => setBtnSt(!btnSt)}
      >
        {!btnSt ? "Compleated" : "Uncomplited"}
      </button>
      <button
        className={
          !btnSt ? "btn btn-primary btnSmall" : "btn btn-secondary btnSmall"
        }
        onClick={() => setBtnSt(!btnSt)}
      >
        <AiOutlineCheck />
      </button>
      <small className="btnSmall">
        {!btnSt ? "Compleated" : "Uncomplited"}
      </small>
    </div>
  );
};

export default ButtonState;
