import React from "react";
import Subscirbe from "../../atoms/buttons/subscribe";

const GetUpdates = () => {
  return (
    <>
      <div className="get-updates">
        <div className="container-fluid">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-6">
              <div className="update-text">
                <img src="icons/gmail.png" alt="gmail-icon" />
                <p>Sign up to get latest updates </p>
              </div>
            </div>
            <div className="col-md-6">
                <div className="input-wrapper">
                   <input type="text"  placeholder="Email Address*"/>
                  <Subscirbe />
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetUpdates;
