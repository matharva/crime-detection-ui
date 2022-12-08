import React, { useEffect, useState } from "react";
import { Row, Col, Dropdown, Button } from "react-bootstrap";

import { bindActionCreators } from "redux";

import FsLightbox from "fslightbox-react";

import SwiperCore, { Navigation } from "swiper";

// AOS
import AOS from "aos";
import "aos";
import "../../../../node_modules/aos/dist/aos.css";
//apexcharts
import Chart from "react-apexcharts";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/components/navigation/navigation.scss";

// img2
import shap2 from "../../../assets/images/shapes/02.png";
import shap4 from "../../../assets/images/shapes/04.png";
import shap6 from "../../../assets/images/shapes/06.png";

import icon1 from "../../../assets/images/icons/01.png";
import icon2 from "../../../assets/images/icons/02.png";
import icon3 from "../../../assets/images/icons/03.png";
import icon4 from "../../../assets/images/icons/04.png";
import icon5 from "../../../assets/images/icons/05.png";
import icon8 from "../../../assets/images/icons/08.png";

// store
import {
  NavbarstyleAction,
  getDirMode,
  getcustomizerMode,
  getcustomizerprimaryMode,
  getcustomizerinfoMode,
  SchemeDirAction,
  ColorCustomizerAction,
  getNavbarStyleMode,
  getSidebarActiveMode,
  SidebarActiveStyleAction,
  getDarkMode,
  ModeAction,
  SidebarColorAction,
  getSidebarColorMode,
  getSidebarTypeMode,
} from "../../../store/setting/setting";

import { connect } from "react-redux";
import TabSwiper from "./TabSwiper.js";
import CrimeDetectionSection from "./CrimeDetectionSection.js";
import KeyframesGallery from "./KeyframesGallery.js";
import ActivityOverview from "./ActivityOverview.js";
import FaceDetectionGallery from "./FaceDetectionGallery";
import DATA from "./data";

// install Swiper modules
SwiperCore.use([Navigation]);

const mapStateToProps = (state) => {
  return {
    darkMode: getDarkMode(state),
    customizerMode: getcustomizerMode(state),
    cololrinfomode: getcustomizerinfoMode(state),
    colorprimarymode: getcustomizerprimaryMode(state),
    schemeDirMode: getDirMode(state),
    sidebarcolorMode: getSidebarColorMode(state),
    sidebarTypeMode: getSidebarTypeMode(state),
    sidebaractivestyleMode: getSidebarActiveMode(state),
    navbarstylemode: getNavbarStyleMode(state),
  };
};
const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      ModeAction,
      SchemeDirAction,
      SidebarColorAction,
      SidebarActiveStyleAction,
      NavbarstyleAction,
      ColorCustomizerAction,
    },
    dispatch
  ),
});

const CrimeIndex = (props) => {
  useEffect(() => {
    AOS.init({
      startEvent: "DOMContentLoaded",
      disable: function () {
        var maxWidth = 996;
        return window.innerWidth < maxWidth;
      },
      throttleDelay: 10,
      once: true,
      duration: 700,
      offset: 10,
    });
    //   customizer
    const colorcustomizerMode = sessionStorage.getItem("color-customizer-mode");
    const colorcustomizerinfoMode = sessionStorage.getItem(
      "colorcustominfo-mode"
    );
    const colorcustomizerprimaryMode = sessionStorage.getItem(
      "colorcustomprimary-mode"
    );
    if (colorcustomizerMode === null) {
      props.ColorCustomizerAction(
        props.customizerMode,
        props.cololrinfomode,
        props.colorprimarymode
      );
      document.documentElement.style.setProperty(
        "--bs-info",
        props.cololrinfomode
      );
    } else {
      props.ColorCustomizerAction(
        colorcustomizerMode,
        colorcustomizerinfoMode,
        colorcustomizerprimaryMode
      );
      document.documentElement.style.setProperty(
        "--bs-info",
        colorcustomizerinfoMode
      );
    }
  });

  const [currentCrime, setCurrentCrime] = useState(DATA[0].crime);
  const [isDetectionComplete, setIsDetectionComplete] = useState(true);
  const [isFileUploaded, setIsFileUploaded] = useState(false);

  useEffect(() => {
    console.log(currentCrime);
  }, [currentCrime]);

  return (
    <>
      {/* <TabSwiper
        props={props}
        setCurrentCrime={setCurrentCrime}
        currentCrime={currentCrime}
      /> */}
      <Row>
        <Col md="7" lg="7">
          <CrimeDetectionSection
            currentCrime={currentCrime}
            isDetectionComplete={isDetectionComplete}
            setIsDetectionComplete={setIsDetectionComplete}
            isFileUploaded={isFileUploaded}
            setIsFileUploaded={setIsFileUploaded}
            setCurrentCrime={setCurrentCrime}
          />
        </Col>
        <Col md="5" lg="5">
          <KeyframesGallery
            isDetectionComplete={isDetectionComplete}
            currentCrime={currentCrime}
            setIsDetectionComplete={setIsDetectionComplete}
          />
          <FaceDetectionGallery
            isDetectionComplete={isDetectionComplete}
            currentCrime={currentCrime}
            setIsDetectionComplete={setIsDetectionComplete}
          />
          <ActivityOverview
            isDetectionComplete={isDetectionComplete}
            setCurrentCrime={setCurrentCrime}
          />
        </Col>
      </Row>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CrimeIndex);
