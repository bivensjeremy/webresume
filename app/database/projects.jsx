import zombieLogo from '../../public/projects/crawling-zombie.png'
import etchasketchLogo from '../../public/projects/etchimage.jpeg'
import tictactoeLogo from '../../public/projects/Tic_tac_toe.png'
import digigaldealzLogo from '../../public/projects/dd-logo.png'
import myblogLogo from '../../public/projects/whatisblog.png'
import newGradLogo from '../../public/projects/NewGradLogo.png'
import obtLogo from '../../public/projects/obtdispatching.png'
import newBlogLogo from '../../public/projects/BlogImage.png'
import johnnysLogo from '../../public/projects/JohnnysLogo.png'
import legacyBPLogo from '../../public/projects/Blueprint LEGACY.png'
import russellstransportLogo from '../../public/projects/russelltransportlogo.png'
import zombiemeLogo from '../../public/projects/phonezombie.png'
import piiotaalphaLogo from '../../public/projects/chapter_logo.jpg'
import dreamersLogo from '../../public/projects/dreamerslogo.png'
import { skillsGroup } from './skills'
import zombieScreen from '../../public/screenshots/zombieScreen.png'
import etchasketchScreen from '../../public/screenshots/etchasketchScreen.png'
import digitaldealzScreen from '../../public/screenshots/digitaldealzScreen.png'
import newGradScreen from '../../public/screenshots/newGradScreen.png'
import obtScreen from '../../public/screenshots/obtScreen.png'
import newBlogScreen from '../../public/screenshots/newBlogScreen.png'
import johnnysScreen from '../../public/screenshots/johnnysScreen.png'
import legacyBPScreen from '../../public/screenshots/legacyBPScreen.png'
import russellstransportScreen from '../../public/screenshots/russellstransportScreen.png'
import zombiemeScreen from '../../public/screenshots/zombiemeScreen.png'
import piiotaalphaScreen from '../../public/screenshots/piiotaalphaScreen.png'
import dreamersScreen from '../../public/screenshots/dreamersScreen.png'
import boutiqueLogo from '../../public/projects/boutique.png'
import boutiqueScreen from '../../public/screenshots/bivensBoutiqueScreenshot.png'


export const portfolioData = [
    {
        id: 1,
        icon: zombieLogo,
        title: "Zombies-R-Us",
        link: "https://zombies.bivensblueprint.com",
        github: "https://github.com/bivensjeremy/zombies-r-us",
        screenshot: zombieScreen,
        description: "A fun little project was built while completing a UDEMY course. I maintained the core design of the training project, but added my own images, colors and information. It was to practice basic HTML/CSS. No icon work. It is a good landing page example.",
        purpose: "This project practices layouts and inserting various elements.",
        stack: [
            skillsGroup[2].image,
            skillsGroup[3].image
        ],
    },
    {
        id: 2,
        icon: etchasketchLogo,
        title: "Etch-A-Sketch Clone",
        link: "https://etchasketch.bivensblueprint.com",
        github: "https://github.com/bivensjeremy/etch-a-sketch",
        screenshot: etchasketchScreen,
        description: "An Etch-A-Sketch clone I created while practicing with the Odin Project.  The code uses vanilla Javascript. It is pretty cool for what it is, but does not scale for mobile. Just hover your mouse and watch the magic!",
        purpose: "Practice writing vanilla javaScript. Accessing DOM elements and making changes.",
        stack: [
            skillsGroup[2].image,
            skillsGroup[3].image,
            skillsGroup[4].image
        ],
    },
    {
        id: 3,
        icon: tictactoeLogo,
        title: "Tic Tac Toe",
        link: "https://tictactoe.bivensblueprint.com",
        github: "",
        screenshot: '',
        description: "I built this project to practice JavaScript functions. There are bugs, but I think the core is there. I would like to update it to be more functional. I've since moved on to more production-ready products.",
        purpose: 'Practice in writing custom functions and game building',
        stack: [
            skillsGroup[2].image,
            skillsGroup[3].image,
            skillsGroup[4].image
        ],
    },
    {
        id: 4,
        icon: digigaldealzLogo,
        title: "Digital Dealz",
        link: "https://shop.bivensblueprint.com",
        github: "https://github.com/bivensjeremy/digitaldealz_final",
        screenshot: digitaldealzScreen,
        description: "This is my first project with React. It is a simple store using clothes I had around the house for inventory. I've rebuilt it into a better designed site. It is a real working store using commerce systems and payment routes for transactions.",
        purpose: "Practice with the React framework. Also implementing different APIs and services such as Stripe and Commerce.js",
        stack: [
            skillsGroup[1].image,
            skillsGroup[3].image
        ],
    },
    {
        id: 5,
        icon: myblogLogo,
        title: "My Blog, My Business",
        link: "https://myblog.bivensblueprint.com",
        github: "https://github.com/bivensjeremy/My-Blog",
        screenshot: '',
        description: "A simple blog I can use to update my work and thoughts as I build out my business. The intent was to keep it updated but I can't promise that I did!  It uses MongoDB for its database, but I've started working with other databases, like Postgres.  Based on a project from a Udemy course I took. It's in need of a rewrite, but the core concepts are there.",
        purpose: "This was a first implementation of a database. I used MongoDB to host the blog posts and experimented with frameworks.",
        stack: [
            skillsGroup[1].image,
            skillsGroup[3].image,
            skillsGroup[12].image,
            skillsGroup[8].image,
            skillsGroup[5].image,
        ],
    },
    {
        id: 6,
        icon: newGradLogo,
        title: "New Grad Recruitment",
        link: "https://newgrad.bivensblueprint.com",
        github: "https://github.com/bivensjeremy/newgrad",
        screenshot: newGradScreen,
        description: "This one is a passion project of mine. It showcases almost everything I know and more. It's built using Material UI. I am particularly proud of this one, as it is a relatively large project. You'll find databases, passwords and conditional functions throughout the site.",
        purpose: "To explore a full-stack application. It was my first app with Next.JS and I wanted to build something that was production-ready and able to be utilized by more than one user.",
        stack: [
            skillsGroup[0].image,
            skillsGroup[9].image,
            skillsGroup[11].image,
        ],
    },
    {
        id: 7,
        icon: obtLogo,
        title: "OB&T Dispatching Service",
        link: "https://obtdispatchingservice.com",
        github: "https://github.com/bivensjeremy/obtdispatching",
        screenshot: obtScreen,
        description: "My first production website! A beautiful site for a dispatching company. This is a wonderful example of a landing page to advertise and promote services offered.",
        purpose: "A production application. It was a landing page for a client. It was built one time in React, then converted into a Next.js application",
        stack: [
            skillsGroup[0].image,
            skillsGroup[1].image,
            skillsGroup[3].image,
            skillsGroup[12].image,
            skillsGroup[6].image
        ],
    },
    {
        id: 8,
        icon: newBlogLogo,
        title: "My Blog 2.0 Redesign",
        link: "https://newblog.bivensblueprint.com",
        github: "https://github.com/bivensjeremy/myblog2.0",
        screenshot: newBlogScreen,
        description: "A redesign of my existing blog page. I wanted to create a project using existing knowledge as an exercise instead of trying out new frameworks or packages. This is a complete website with all the fixin's!",
        purpose: "Additional practice with databases, forms and design structures",
        stack: [
            skillsGroup[0].image,
            skillsGroup[3].image,
        ],
    },
    {
        id: 9,
        icon: johnnysLogo,
        title: "Johnny's Clothing Store",
        link: "http://johnnys.bivensblueprint.com",
        github: "https://github.com/bivensjeremy/johnnysstore",
        screenshot: johnnysScreen,
        description: "A new and improved version of Digital Dealz. This store comes with a new design and an updated UI. This one is definitely more robust than the original and a more complete project. The only true bugs are in its load time. It is also a fully functional store.",
        purpose: "To update a full-stack application with added knowledge of design and cleaner code. Was converted into a React Native application, as well",
        stack: [
            skillsGroup[0].image,
            skillsGroup[11].image,
            skillsGroup[14].image,
        ],
    },
    {
        id: 10,
        icon: legacyBPLogo,
        title: "Bivens Blueprint (Legacy)",
        link: "https://legacy.bivensblueprint.com",
        github: "https://github.com/bivensjeremy/homepage/tree/master/blueprint",
        screenshot: legacyBPScreen,
        description: "The original version of my homepage. Built using the Bootstrap framework, it is also a wonderful landing page. I redesigned it into the website you see now for a better aesthetic.",
        purpose: "My first homepage to showcase my work. Was written with HTML/EJS and redesigned into Next.js",
        stack: [
            skillsGroup[0].image,
            skillsGroup[12].image,
            skillsGroup[3].image,
            skillsGroup[2].image,
            skillsGroup[4].image,
            skillsGroup[5].image,
            skillsGroup[6].image,
        ],
    },
    {
        id: 12,
        icon: russellstransportLogo,
        title: "Russell's Transport",
        link: "https://russellstransportllc.com",
        github: "https://github.com/bivensjeremy/",
        screenshot: russellstransportScreen,
        description: "This is an evolution of OB&T Dispatching. Built to represent the company's expanded vision and additional services. While it is still a landing page, it showcases additional functions to allow the company to grow and continue to establish their online presence.",
        purpose: "An updated, redesign for a client.",
        stack: [
            skillsGroup[0].image,
            skillsGroup[11].image
        ],
    },
    {
        id: 13,
        icon: zombiemeLogo,
        title: "Zombie Me | NFTs",
        link: "https://zombiemenfts.bivensblueprint.com",
        github: "https://github.com/bivensjeremy/zombiemenft",
        screenshot: zombiemeScreen,
        description: "A refreshed version of the Zombies-R-Us project I created. It is an example of a landing page. This project allows you to download a zombie version of me! It is a fun site that displays what a single-page site could look like for you.",
        purpose: "Additional practice writing landing pages and building simple components. Experimentation with downloads, as well",
        stack: [
            skillsGroup[0].image,
            skillsGroup[11].image
        ],
    },
    {
        id: 14,
        icon: piiotaalphaLogo,
        title: "Alpha Phi Alpha | Pi Iota Lambda",
        link: "https://piiotalambdaalphas.com",
        github: "https://github.com/bivensjeremy/pioalphawebsite",
        screenshot: piiotaalphaScreen,
        description: "A website for the Pi Iota Lambda chapter of Alpha Phi Alpha. This website uses the bleeding edge framework of Next 13. You'll notice it loads fast and utilizes many components to showcase the chapter and their programs. The Admin pages allows uploading images, adding messages and editing member info.",
        purpose: "Production website for a client. Builds upon prior knowledge with experience with code structure, cleaner authentication, Next 13, and TailwindCSS",
        stack: [
            skillsGroup[0].image,
            skillsGroup[8].image,
            skillsGroup[10].image,
        ],
    },
    {
        id: 15,
        icon: dreamersLogo,
        title: "Dreamers Dance Studio",
        link: "https://dreamers.bivensblueprint.com",
        github: "https://github.com/bivensjeremy/dance-studio",
        screenshot: dreamersScreen,
        description: "This project showcases a simple business website and standard features. It is modeled after a Dance and Model studio. All images are template photos found online and belong to their respective owners. The information is also sampled meant as logical placeholders.",
        purpose: "Practice with Tailwind, designs and routing.",
        stack: [
            skillsGroup[0].image,
            skillsGroup[10].image
        ],

    },
    {
        id: 16,
        icon: boutiqueLogo,
        title: "Bivens Boutique",
        link: "https://boutique.bivensblueprint.com",
        github: "https://github.com/bivensjeremy/bivensboutiqe",
        screenshot: boutiqueScreen,
        description: "This project is a redesign of a web store I've made a few times. Initially, it was built using pure React. I've since updated it using Material UI. This version uses Tailwind.",
        purpose: "To build a large scale project using a different design style and to practice updates from Next 13.",
        stack: [
            skillsGroup[0].image,
            skillsGroup[10].image
        ],

    }
]