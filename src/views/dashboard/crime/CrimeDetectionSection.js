import React, { useState } from "react";
import CrimeSummaryTable from "./CrimeSummaryTable";

import DATA, { TIMEOUT } from "./data";

const CrimeDetectionSection = ({
  currentCrime,
  isDetectionComplete,
  setIsDetectionComplete,
  isFileUploaded,
  setIsFileUploaded,
}) => {
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
              <video loop autoPlay controls height={"100%"} width={"100%"}>
                <source
                  src={DATA.filter((x) => x.crime === currentCrime)[0].video}
                  type="video/mp4"
                ></source>
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
              onChange={() => {
                setIsFileUploaded(true);
                setTimeout(() => {
                  console.log("Timeout for completion true");
                  setIsDetectionComplete(true);
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
