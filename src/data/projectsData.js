import { Link } from "react-router-dom";

export const projects = [
    {
        id: 1,
        title: "The B.O.S.S",
        description: "A Bionic Orthotic Servo System prosthetic arm",
        fullDescription: "The B.O.S.S. (Bionic Orthotic Servo System) was a collaborative project developed for the Louisiana Tech Freshman Design Expo (Spring 2025). Our goal was to build a customizable robotic arm system capable of performing gestures based on user-defined inputs with a time constraint of five weeks. The original concept included using AI to learn user habits and autonomously adapt to their movement patterns. Due to time and experience constraints, we delivered a scaled but fully functional version that allowed users to create preset gestures and control them through either a touchscreen interface or muscle-based input. I developed the onboard application that allowed the arm to detect if a USB was inserted and copy the data from the gesture maker onto the B.O.S.S's onboard storage. It also gave users a GUI in which they could select from the presets stored on the B.O.S.S once selected the it would read the data and pass it on to the arduino that handled the servo control. Users created gestures through another program that asked for inputs and a checkbox if that finger was a “action” finger it then saved the data to the USB drive. If one of the fingers was a “action” finger it would take input from the muscle sensor instead so if you flexed the servo would move with your input. Software Used: Python,C++. Hardware Used: Raspberry Pi,Arduino,6 Servos,Muscle Sensor,Touchscreen Display,3 Battery Packs. The system ran independently using internal power, lasting the full 4-hour expo with an estimated 20 hours of battery life. If continued, our planned next steps included developing a companion app and website for sharing gestures, downloading firmware updates, and expanding customization options.",
        image: "../images/theboss.jpg",
        link: "https://github.com/Gage-Waller/CSC132-Arm"
    },
    {
        id: 2,
        title: "Portfolio Website",
        description: "My personal website to show my skills and projects",
        fullDescription: "I created this portfolio website in October 2025 to showcase my skills and projects. This was a solo project, which gave me the opportunity to learn more about HTML, CSS, and modern frameworks like React. The idea came from a conversation with my data structures professor, who suggested building a portfolio as a practical project. I also consulted another professor, who recommended using React or Angular. I initially tried Angular but eventually switched to React, which allowed me to make significant progress after learning the basics of HTML, CSS, and React. The site is built with React for the framework, HTML for structure, CSS for styling, JavaScript for interactivity, and Vite for local development. I purchased my domain from Name.com, hosted the site on Digital Ocean, and used Cloudflare for security. Future Plans: Improve responsiveness for different screen sizes, add a comment section to gather feedback from visitors",
        image: "../images/portfoliosite.png",
        link: "https://www.loganbrignac.dev",
    }
]