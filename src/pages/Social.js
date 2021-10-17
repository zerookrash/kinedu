import React, { useEffect, useState } from "react";
import "./Physical.css";
import "animate.css";
import { BtnWrapper, Button } from "../components/ButtonElements";
import ButtonState from "../components/ButtonState/ButtonState";

const Social = () => {
  const [milestones, setMilestone] = useState([]);
  const [ageRange, setAgeRange] = useState("");

  useEffect(() => {
    GetMilestone();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const url = "https://api.kinedu.com/v3/babies/7652729/skills/23/milestones";
  const token = {
    headers: {
      Authorization:
        "Token token=ed31bae57f79e6b7835b866cdaa3c7e2bfb90b922d91f3882ca451e28f6948d06b67aa23407cadc24f77c46088d62e282d629f574aef0cab62179ec5119b4d70",
    },
  };

  const GetMilestone = async () => {
    const data = await fetch(url, token);
    const milestones = await data.json();
    setAgeRange(milestones.data.skill.age_range);
    setMilestone(milestones.data.skill.milestones);
  };
  return (
    <>
      {milestones.length === 0 ? (
        <>
          <div class="spinner-border mt-5" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3">Loading...</p>
        </>
      ) : (
        <>
          <div className="task animate__animated animate__fadeIn">
            <div className="row m-3">
              {milestones.map((item) => (
                <>
                  <div className="col col-sm-10 col-md-10 flex">
                    {item.title}
                    <small>Usually achieved by: {ageRange} months</small>
                  </div>
                  <div className="col col-sm-2 col-md-2 flex2">
                    <ButtonState />
                  </div>

                  <hr />
                </>
              ))}
            </div>
          </div>
          <BtnWrapper>
            <Button to="/" duration={500} exact="true" offset={-80}>
              Next
            </Button>
          </BtnWrapper>
        </>
      )}
    </>
  );
};

export default Social;
