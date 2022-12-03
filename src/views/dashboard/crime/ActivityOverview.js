import React from "react";

const ActivityOverview = () => {
  return (
    <div className="card" data-aos="fade-up" data-aos-delay="600">
      <div className="flex-wrap card-header d-flex justify-content-between">
        <div className="header-title">
          <h4 className="mb-2 card-title">Crime Summmary</h4>
          <p className="mb-0">
            <svg className="me-2" width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="#17904b"
                d="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z"
              />
            </svg>
            16% this month
          </p>
        </div>
      </div>
      <div className="card-body mt-2">
        <div className="mb-2 d-flex profile-media align-items-top">
          <div className="mt-1 profile-dots-pills border-primary"></div>
          <div className="ms-4">
            <h6 className="mb-1 mt-1">Road Accident</h6>
            {/* <span className="mb-0">11 JUL 8:10 PM</span> */}
          </div>
        </div>
        <div className="mb-2 d-flex profile-media align-items-top">
          <div className="mt-1 profile-dots-pills border-primary"></div>
          <div className="ms-4">
            <h6 className="mb-1 mt-1">Fighting</h6>
            {/* <span className="mb-0">11 JUL 11 PM</span> */}
          </div>
        </div>
        <div className="mb-2 d-flex profile-media align-items-top">
          <div className="mt-1 profile-dots-pills border-primary"></div>
          <div className="ms-4">
            <h6 className="mb-1 mt-1">Explosion</h6>
            {/* <span className="mb-0">11 JUL 7:64 PM</span> */}
          </div>
        </div>
        <div className="mb-2 d-flex profile-media align-items-top">
          <div className="mt-1 profile-dots-pills border-primary"></div>
          <div className="ms-4">
            <h6 className="mb-1 mt-1">Robbery</h6>
            {/* <span className="mb-0">11 JUL 1:21 AM</span> */}
          </div>
        </div>
        <div className="mb-1 d-flex profile-media align-items-top">
          <div className="mt-1 profile-dots-pills border-primary"></div>
          <div className="ms-4">
            <h6 className="mb-1 mt-1">Normal</h6>
            {/* <span className="mb-0">11 JUL 4:50 AM</span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityOverview;
