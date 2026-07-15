import image1 from './my-work-1.png'
import image2 from './payments.png'
import image3 from './mywork5.png'
import image4 from './my-work0.png'
import image5 from './mycert.png'
import image6 from './ohsimg.png'

import logo1 from './icon1.jpg'
import logo2 from './icon2.jpg'
import logo3 from './icon3.jpg'
import logo4 from './icon4.jpg'

// myworkdata.js
// Add real screenshots/thumbnails as you get them:
// import shImg from './healthsphere.png';  then set image: shImg below.
// Until then, image: null shows a clean gradient placeholder — no broken <img> tags.

const myWorkData = [
  {
    id: 1,
    title: "Service Marketplace Platform",
    category: "Web / Mobile · Founder Project",
    description:
      "Platform connecting plumbers and skilled workers directly with clients who need their services. Built end-to-end, currently testing with real users.",
    tags: ["Kotlin", "Firebase"], // swap for actual stack
    image: null,
    links: { video: null, apk: null, github: null, live: null }, // fill in what's real
  },
  {
    id: 2,
    title: "HealthSphere",
    category: "Android · Team Project (5 members)",
    description:
      "Healthcare app for lab test access, doctor appointments, dashboards, and real-time updates. Showcased at the Central Rift Innovation Week (CRIW) Innovation Challenge.",
    tags: ["Kotlin", "Firebase Firestore", "Jetpack Compose"],
    image: null,
    links: { video: null, apk: null, github: null, live: null },
  },
  {
    id: 3,
    title: "Quantitative Forecasting App",
    category: "Python / Data Science · Self-Directed",
    description:
      "Financial forecasting application applying data science and forecasting techniques to market data — self-directed project extending classroom AI/ML learning into a deployed tool.",
    tags: ["Python", "Streamlit", "NumPy", "PyTorch"],
    image: null,
    links: { video: null, apk: null, github: null, live: null },
  },
  {
    id: 4,
    title: "Mobile Risk Analysis System",
    category: "Android · Security",
    description:
      "Mobile security solution monitoring app behaviour and permissions, with VPN-based network filtering to flag suspicious domains and generate risk reports.",
    tags: ["Kotlin", "VPN/Network Security"],
    image: null,
    links: { video: null, apk: null, github: null, live: null },
  },
  {
    id: 5,
    title: "Exhibition Registration & Validation System",
    category: "Web & Android · QR Technology",
    description:
      "Attendee registration and validation system for events and exhibitions, using QR Code technology across a web and Android interface.",
    tags: ["Kotlin", "QR Code", "Web"],
    image: null,
    links: { video: null, apk: null, github: null, live: null },
  },
];

export default myWorkData;