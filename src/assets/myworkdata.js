import healthSphereLogo from './logoHealthSphere.png'
import sigz from './sigz.webp'
import mktPlace from './mktPlace.webp'

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
  id: 1, // adjust to next available id in your array
  title: "Marketplace Commerce Platform",
  category: "Full-Stack E-Commerce · Co-Founded",
  description:
    "Fully customizable e-commerce platform built with a friend — admins can configure layouts, categories, and branding to fit any shop, with order tracking, wishlists, and integrated M-Pesa, Airtel Money, and card checkout via Pesapal. Live and actively serving customers.",
  tags: ["E-Commerce", "Payments Integration", "Admin Dashboard", "M-Pesa/Pesapal"],
  image: mktPlace, // add a homepage screenshot when you have one
  links: {
    live: "https://chapahustle.co.ke/",
    apk: null,
    video: null,
    github: null, // add if the repo is public, or leave null if it's closed-source
  },
},
  {
    id: 2,
    title: "Service Marketplace Platform(SIGZ)",
    category: "Web platform · Founder Project",
    description:
      "Platform connecting plumbers and skilled workers directly with clients who need their services. Built end-to-end, currently testing with real users.",
    tags: ["React JS", "Email Js", "Tailwind css"], // swap for actual stack
    image: sigz,
    links: { video: null, apk: null, github: null, live: "https://sigz.vercel.app/" }, // fill in what's real
  },
  {
  id: 3,
  title: "News App",
  category: "Android · Self-Directed",
  description:
    "A news app built to sharpen my Android skills on a real-world project — implementing modern architecture with Jetpack Compose, offline caching via Room, paginated feeds with Paging 3, and dependency injection with Dagger Hilt.",
  tags: ["Kotlin", "Jetpack Compose", "Retrofit", "Room", "Dagger Hilt", "Paging 3"],
  image: null,
  links: {
    video: null,
    apk: "https://github.com/Kipkoech78/NewsAPP/releases/download/v1-release/newsApp.apk",
    github: "https://github.com/Kipkoech78/NewsAPP",
    live: "https://github.com/Kipkoech78/NewsAPP/blob/main/README.md",
  }
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
    {
    id: 6,
    title: "health Sphere",
    category: "Android Application · Team Project",
    description:
      "The platform was an inovative challange aimed to ease the communication and user drugs awareness before putchasing drugs over the counter\
       and streamlime medical operation wit privatized apointment services for doctors who will like to earn extra income outside their daily duties\
       LIMITATIONS: The system was too big for scalling  ",
    tags: ["React JS", "Email Js", "Tailwind css"], // swap for actual stack
    image: healthSphereLogo,
    links: { video: null, apk: null, github: "https://github.com/Kipkoech78/Health-Sphere", live: "https://sigz.vercel.app/" }, // fill in what's real
  },
];

export default myWorkData;