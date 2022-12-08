import React from "react";
import DATA from "./data";

const ActivityOverview = ({ setCurrentCrime }) => {
  return (
    <div className="card" data-aos="fade-up" data-aos-delay="600">
      <div className="flex-wrap card-header d-flex justify-content-between">
        <div className="header-title">
          <h4 className="mb-2 card-title">Previously Detected Crime</h4>
        </div>
      </div>
      <div className="card-body mt-2">
        {DATA.map((item, index) => {
          return (
            <div
              className="mb-2 d-flex profile-media align-items-top"
              style={{ cursor: "pointer" }}
              onClick={() => setCurrentCrime(item.crime)}
            >
              <div className="mt-1 profile-dots-pills border-primary"></div>
              <div className="ms-4">
                <h6 className="mb-1 mt-1">{item.crime}</h6>
                {/* <span className="mb-0">11 JUL 8:10 PM</span> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ActivityOverview;
