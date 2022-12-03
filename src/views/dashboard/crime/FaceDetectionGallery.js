import React from "react";

import { Link } from "react-router-dom";
import { Card, Image } from "react-bootstrap";

import shap2 from "../../../assets/images/shapes/02.png";
import DATA from "./data";

const FaceDetectionGallery = ({ currentCrime, isDetectionComplete }) => {
  return (
    <Card>
      <Card.Header className="d-flex align-items-center justify-content-between">
        <div className="header-title">
          <h4 className="card-title">Face Detection gallery</h4>
        </div>
        <span>2 faces</span>
      </Card.Header>
      <Card.Body>
        <div className="d-grid gap-card grid-cols-3">
          {isDetectionComplete ? (
            DATA.filter((x) => x.crime === currentCrime)[0].faces.map(
              (data, index) => {
                return (
                  <Link key={index}>
                    <Image
                      //   src={data.url}
                      src={shap2}
                      className="img-fluid bg-soft-info rounded"
                      alt="profile-image"
                    />
                  </Link>
                );
              }
            )
          ) : (
            <>Waiting for model response...</>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default FaceDetectionGallery;
