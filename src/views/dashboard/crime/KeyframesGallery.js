import React from "react";

import { Link } from "react-router-dom";
import { Card, Image } from "react-bootstrap";

import DATA from "./data";

const KeyframesGallery = ({ isDetectionComplete, currentCrime }) => {
  return (
    <Card>
      <Card.Header className="d-flex align-items-center justify-content-between">
        <div className="header-title">
          <h4 className="card-title">Keyframe preview gallery</h4>
        </div>
        {/* <span>9 frames</span> */}
      </Card.Header>
      <Card.Body>
        <div className="d-grid gap-card grid-cols-4">
          {isDetectionComplete ? (
            DATA.filter((x) => x.crime === currentCrime)[0].keyframes.map(
              (data, index) => {
                return (
                  <Link key={index}>
                    <Image
                      src={data}
                      className="img-fluid bg-soft-info rounded"
                      alt="profile-image"
                    />
                  </Link>
                );
              }
            )
          ) : (
            <div>waiting for model response...</div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default KeyframesGallery;
