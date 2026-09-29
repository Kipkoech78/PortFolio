import healthSphereLogo from './logoHealthSphere.png'


import ufundiHome from './ufundiHome.jpg'
import redCross from './redcross.jpg'
import dynamicsNav from './microsoftNav.jpg'
import logo4 from './icon4.jpg'
import mobileRisk from './mobileRisk.jpg'
import limaxLogo from './limaxLogo.jpg'


const myWorkData = [
  {
  id: 1, 
  title: "Dynamics NAV Learning Lab",
  category: "ERP Development · Self-Directed",
  description:
    "Ongoing hands-on development in Microsoft Dynamics NAV 2016 using the C/SIDE development environment and C/AL. Building and extending tables, pages, codeunits, reports, and posting routines while studying real ERP workflows and applying concepts from Microsoft Dynamics NAV development to the enterprise systems I work with.",
  tags: [
    "Microsoft Dynamics NAV",
    "C/AL",
    "C/SIDE",
    "ERP Development",
    "SQL Server"
  ],
  image: dynamicsNav, // add a clean NAV/C-SIDE screenshot
  links: {
    live: null,
    apk: null,
    video: null,
    github: null
  },
},
  {
  id: 2, // adjust to the next available id in your array
  title: "UfundiHome — Fundi Marketplace",
  category: "Full-Stack Marketplace · Co-Founded",
  description:
    "A location-based marketplace connecting customers with plumbers, electricians, painters, fitters, welders, carpenters, masons, and other skilled fundis across Kenya. Customers can discover nearby fundis, view ratings and contact details, then call or WhatsApp them directly without a middleman.",
  tags: [
    "Marketplace",
    "Location-Based Services",
    "React",
    "Worker Dashboard",
    "Call & WhatsApp"
  ],
  image: ufundiHome, // add your UfundiHome homepage screenshot
  links: {
    live: "https://ufundi-c-lient.vercel.app/",
    apk: null,
    video: null,
    github: null, // add if the repo is public
  },
},
  {
  id: 3, // adjust to the next available id in your array
  title: "Mr & Miss Red Cross — Nakuru 2026",
  category: "Event Ticketing Platform · Full-Stack",
  description:
    "Full-stack event ticketing platform built for the Mr & Miss Red Cross Nakuru 2026 event. Customers can browse ticket packages, purchase tickets through M-Pesa Paybill, receive payment confirmation, and access event information. Includes an affiliate system that allows promoters to generate referral links and earn commissions from verified ticket sales.",
  tags: [
    "Event Platform",
    "Ticketing System",
    "M-Pesa Integration",
    "Affiliate System",
    "Admin Dashboard"
  ],
  image: redCross, // add your homepage/event screenshot
  links: {
    live: "https://redcross-vert.vercel.app/",
    apk: null,
    video: null,
    github: null, // add if the repository is public
  },
},
   {
  id: 4,
  title: "Li-Max-WiFi",
  category: "Business Website · SaaS Landing Page",
  description:
    "A modern marketing website built to showcase and sell the Li-Max-WiFi hotspot billing system. The platform explains the installation process, pricing, payment options, live customer workflow, and generates leads through WhatsApp, email, and contact forms. Although system installations are performed manually, the website streamlines customer acquisition and demonstrates how hotspot owners can automate WiFi billing, customer authentication, payments, and account management.",
  tags: [
    "React",
    "Vite",
    "Tailwind CSS",
    "Framer Motion",
    "EmailJS",
    "WhatsApp Integration",
    "Responsive Design"
  ],
  image: limaxLogo,
  links: {
    video: null,
    apk: null,
    github: null, // or your private/public repository
    live: "https://li-max.vercel.app/"
  },
},

  {
    id: 5,
    title: "Mobile Risk Analysis System",
    category: "Android · Security",
    description:
      "Mobile security solution monitoring app behaviour and permissions, with VPN-based network filtering to flag suspicious domains and generate risk reports.",
    tags: ["Kotlin", "VPN/Network Security"],
    image: mobileRisk,
    links: { video: null, apk: "https://github.com/Kipkoech78/MobileRiskAnalysis-App/releases/download/v1/mobileRiskAnalysis.apk", github: "https://github.com/Kipkoech78/MobileRiskAnalysis-App",
       live: "https://github.com/Kipkoech78/MobileRiskAnalysis-App/releases/download/v1/mobileRiskAnalysis.apk" },
  },
  {
    id: 6,
    title: "Exhibition Registration & Validation System",
    category: "Web & Android · QR Technology",
    description:
      "Attendee registration and validation system for events and exhibitions, using QR Code technology across a web and Android interface.",
    tags: ["Kotlin", "QR Code", "Web"],
    image: null,
    links: { video: null, apk: null, github: null, live: null },
  },
    {
    id: 7,
    title: "health Sphere",
    category: "Android Application · Team Project",
    description:
      "The platform was an inovative challange aimed to ease the communication and user drugs awareness before putchasing drugs over the counter\
       and streamlime medical operation wit privatized apointment services for doctors who will like to earn extra income outside their daily duties\
       LIMITATIONS: The system was too big for scalling  ",
    tags: ["Kotlin", "XML","jAVA", "FireStore"], // swap for actual stack
    image: healthSphereLogo,
    links: { video: null, apk: null, github: "https://github.com/Kipkoech78/Health-Sphere", live: "https://sigz.vercel.app/" }, // fill in what's real
  },
    {
  id: 8,
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

];

export default myWorkData;