// Assets
import normal_video from "./assets/normal/Normal.mp4";
import normal1 from "./assets/normal/1.jpg";
import normal2 from "./assets/normal/3.jpg";
import normal3 from "./assets/normal/4.jpg";
import normal4 from "./assets/normal/2.jpg";
import normal5 from "./assets/normal/5.jpg";
import normal6 from "./assets/normal/6.jpg";
import normal7 from "./assets/normal/7.jpg";
import normal8 from "./assets/normal/8.jpg";

import robbery_video from "./assets/robbery/Robbery.mp4";
import robbery1 from "./assets/robbery/1.jpg";
import robbery2 from "./assets/robbery/3.jpg";
import robbery3 from "./assets/robbery/4.jpg";
import robbery4 from "./assets/robbery/2.jpg";
import robbery5 from "./assets/robbery/5.jpg";
import robbery6 from "./assets/robbery/6.jpg";
import robbery7 from "./assets/robbery/7.jpg";
import robbery8 from "./assets/robbery/8.jpg";

import accident_video from "./assets/accident/RoadAccidents.mp4";
import accident1 from "./assets/accident/1.jpg";
import accident2 from "./assets/accident/3.jpg";
import accident3 from "./assets/accident/4.jpg";
import accident4 from "./assets/accident/2.jpg";
import accident5 from "./assets/accident/5.jpg";
import accident6 from "./assets/accident/6.jpg";
import accident7 from "./assets/accident/7.jpg";
import accident8 from "./assets/accident/8.jpg";

import explosion_video from "./assets/explosion/Explosion.mp4";
import explosion1 from "./assets/explosion/1.jpg";
import explosion2 from "./assets/explosion/3.jpg";
import explosion3 from "./assets/explosion/4.jpg";
import explosion4 from "./assets/explosion/2.jpg";
import explosion5 from "./assets/explosion/5.jpg";
import explosion6 from "./assets/explosion/6.jpg";
import explosion7 from "./assets/explosion/7.jpg";
import explosion8 from "./assets/explosion/8.jpg";

import fighting_video from "./assets/fighting/Fighting.mp4";
import fighting1 from "./assets/fighting/1.jpg";
import fighting3 from "./assets/fighting/3.jpg";
import fighting4 from "./assets/fighting/4.jpg";
import fighting2 from "./assets/fighting/2.jpg";
import fighting5 from "./assets/fighting/5.jpg";
import fighting6 from "./assets/fighting/6.jpg";
import fighting7 from "./assets/fighting/7.jpg";
import fighting8 from "./assets/fighting/8.jpg";
import fightingface1 from "./assets/fighting/faces/1.jpg";
import fightingface2 from "./assets/fighting/faces/2.jpg";
import fightingface3 from "./assets/fighting/faces/3.jpg";

import shooting_video from "./assets/shooting/Shooting.mp4";
import shooting1 from "./assets/shooting/1.jpg";
import shooting2 from "./assets/shooting/3.jpg";
import shooting3 from "./assets/shooting/4.jpg";
import shooting4 from "./assets/shooting/2.jpg";
import shooting5 from "./assets/shooting/5.jpg";
import shooting6 from "./assets/shooting/6.jpg";
import shooting7 from "./assets/shooting/7.jpg";
import shooting8 from "./assets/shooting/8.jpg";
import shootingface1 from "./assets/shooting/faces/1.jpg";
import shootingface2 from "./assets/shooting/faces/2.jpg";
import shootingface3 from "./assets/shooting/faces/3.jpg";

const DATA = [
  {
    crime: "Normal",
    video: normal_video,
    keyframes: [
      normal1,
      normal2,
      normal3,
      normal4,
      normal5,
      normal6,
      normal7,
      normal8,
    ],
    faces: [],
    stats: {
      Fighting: 2,
      Shooting: 6,
      Normal: 47,
      Robbery: 40,
      Explosion: 5,
    },

    videoTitle: "",
  },
  {
    crime: "Robbery",
    video: robbery_video,
    keyframes: [
      robbery1,
      robbery2,
      robbery3,
      robbery4,
      robbery5,
      robbery6,
      robbery7,
      robbery8,
    ],
    faces: [],
    stats: {
      Fighting: 0,
      Shooting: 0,
      "Road Accident": 0,
      Normal: 0,
      Robbery: 0,
      Explosion: 0,
    },

    videoTitle: "",
  },
  {
    crime: "Road Accident",
    video: accident_video,
    keyframes: [
      accident1,
      accident2,
      accident3,
      accident4,
      accident5,
      accident6,
      accident7,
      accident8,
    ],
    faces: [],
    stats: {
      Fighting: 0,
      Shooting: 0,
      "Road Accident": 0,
      Normal: 0,
      Robbery: 0,
      Explosion: 0,
    },

    videoTitle: "",
  },
  {
    crime: "Explosion",
    video: explosion_video,
    keyframes: [
      explosion1,
      explosion2,
      explosion3,
      explosion4,
      explosion5,
      explosion6,
      explosion7,
      explosion8,
    ],
    faces: [],
    stats: {
      Fighting: 2,
      Shooting: 12,
      "Road Accident": 14,
      Normal: 3,
      Explosion: 69,
    },

    videoTitle: "",
  },
  {
    crime: "Fighting",
    video: fighting_video,
    keyframes: [
      fighting1,
      fighting2,
      fighting3,
      fighting4,
      fighting5,
      fighting6,
      fighting7,
      fighting8,
    ],
    faces: [fightingface1, fightingface2, fightingface3],
    stats: {
      Fighting: 86,
      Shooting: 4,
      "Road Accident": 0,
      Normal: 0,
      Robbery: 10,
      Explosion: 0,
    },

    videoTitle: "",
  },
  {
    crime: "Shooting",
    video: shooting_video,
    keyframes: [
      shooting1,
      shooting2,
      shooting3,
      shooting4,
      shooting5,
      shooting6,
      shooting7,
      shooting8,
    ],
    faces: [shootingface1, shootingface2, shootingface3],
    stats: {
      Fighting: 0,
      Shooting: 0,
      "Road Accident": 0,
      Normal: 0,
      Robbery: 0,
      Explosion: 0,
    },

    videoTitle: "",
  },
];

export const TIMEOUT = 2000;

export default DATA;
