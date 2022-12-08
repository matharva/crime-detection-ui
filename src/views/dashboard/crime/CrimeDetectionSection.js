import React, { useState } from "react";
import { useEffect } from "react";
import CrimeSummaryTable from "./CrimeSummaryTable";
import axios from "axios";

import DATA, { TIMEOUT } from "./data";

const CrimeDetectionSection = ({
  currentCrime,
  setCurrentCrime,
  isDetectionComplete,
  setIsDetectionComplete,
  isFileUploaded,
  setIsFileUploaded,
}) => {
  const [video, setVideo] = useState(
    DATA.filter((x) => x.crime === currentCrime)[0].video
  );
  useEffect(() => {
    setVideo(DATA.filter((x) => x.crime === currentCrime)[0].video);
    // console.log(DATA.filter((x) => x.crime === currentCrime)[0].video);
  }, [currentCrime]);
  return (
    <div
      className="card credit-card-widget"
      data-aos="fade-up"
      data-aos-delay="900"
    >
      <div className="pb-4 border-0 card-header">
        <div className="p-4 border border-white rounded primary-gradient-card">
          <div className="">
            {isDetectionComplete || isFileUploaded ? (
              <video
                loop
                autoPlay
                controls
                muted
                height={"100%"}
                width={"100%"}
                key={video}
              >
                <source src={video} type="video/mp4"></source>
              </video>
            ) : (
              <div>Waiting for new video</div>
            )}
            {/*  */}
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="mb-4">
          <div className="flex-wrap d-flex justify-content-between">
            <h2 className="mb-2">
              {isDetectionComplete ? currentCrime : "New sample"}
            </h2>
          </div>
        </div>
        <div
          className="grid-cols-2 d-grid gap"
          style={{ position: "relative" }}
        >
          {isDetectionComplete ? (
            <button className="btn btn-primary text-uppercase">Summary</button>
          ) : (
            <button
              className="btn btn-danger text-uppercase"
              onClick={() => setIsDetectionComplete(true)}
            >
              Cancel
            </button>
          )}

          {isDetectionComplete ? (
            <button
              className="btn btn-info text-uppercase"
              onClick={() => {
                setIsDetectionComplete(false);
                setIsFileUploaded(false);
              }}
            >
              Upload new video
            </button>
          ) : (
            <input
              style={{ position: "absolute", right: 0, zIndex: 90 }}
              type="file"
              onChange={(e) => {
                setIsFileUploaded(true);
                console.log("File name: ", e.target.files[0].name);
                setCurrentCrime(e.target.files[0].name.split(".")[0]);

                setTimeout(() => {
                  console.log("Timeout for completion true");
                  setIsDetectionComplete(true);

                  // axios
                  //   .get(`http://localhost:5000/?crime=${currentCrime}`)
                  //   .then((response) => {
                  //     // Handle the response here
                  //     console.log("Notification Sent!");
                  //   })
                  //   .catch((error) => {
                  //     // Handle any errors here
                  //   });
                }, TIMEOUT);
              }}
            />
          )}
        </div>
        <CrimeSummaryTable
          currentCrime={currentCrime}
          isDetectionComplete={isDetectionComplete}
        />
      </div>
    </div>
  );
};

export default CrimeDetectionSection;
