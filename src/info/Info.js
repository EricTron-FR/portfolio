import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(255, 133, 51)", "rgb(255, 92, 92)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Eric",
    lastName: "Tron",
   // initials: "HOME", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '🌎',
            text: 'Based in Montpellier, France'
        },
        {
            emoji: "💼",
            text: "Fullstack developer at Sequoiasoft"
        },
        {
            emoji: "📧",
            text: "eric.tron34@gmail.com"
        }
    ],
    socials: [
    /*    {
            link: "https://instagram.com",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },*/
        {
            link: "https://github.com",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Eric. I'm a Fullstack Software Developer. I studied Montpellier University in South of France. I'm currently working at Sequoiasoft. I'm passionate about building software that helps people. I'm always looking for new opportunities to learn and grow as a developer. ",
    skills:
        {
            proficientWith: ['Java','Spring Framework','','','Javascript','Typescript','Angular', 'React', 'Git', 'Github', 'Bootstrap', 'HTML5', 'CSS3'],
            exposedTo: ['NodeJS', 'Python']
        }
    ,
    hobbies: [
        {
            label: 'Speedrunning video games',
            emoji: '🎮'
        },
        {
            label: 'Music',
            emoji: '🎸'
        },
        {
            label: 'Playing chess',
            emoji: '♟️'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    work: [
        {
            title: "Software Engineer",
            company: "Sequoiasoft",
            date: "2023 - Present",
            description: "- I work on a team of 5 developers to build and maintain a suite of Camping management software. I'm responsible for the front-end (React) of our web application, as well as the back-end(Java)."
        },
        {
            title: "Fullstack Developer",
            company: "Smile",
            date: "July 2021 - Nov 2022",
            description: "- I worked on the creation of a feed aggregator for a banking sector client. ", 
            description2: "This project involved utilizing Java 8 and Angular 11 to develop the application, calling various APIs such as Twitter and YouTube to populate the feeds, and working with MySQL for data storage."
        },
        {
            title: "Research and Development Engineer",
            company: "Inetum",
            date: "June 2018 - July 2021",
            description: "- I work on creating a project from scratch for HR management.",
            description2: "This project involved utilizing Java 8 and Angular 6 to develop the application. I also worked with Oracle for data storage."

        },
        {
            title: "Software Engineer",
            company: "Capgemini",
            date: "March 2015 - June 2018",
            description: "- I work on maintain a Banking application in Java."
        }
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Co-Up",
            live: "https://co-up.tech", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            image: mock1
        },
        {
            title: "Cosy-Lofi",
            live: "https://www.cosylofi.com", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            image: mock2
        }
  /*      {
            title: "Project 2",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock2
        },
        {
            title: "Project 3",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock3
        },
        {
            title: "Project 4",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock4
        },
        {
            title: "Project 5",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock5
        }*/
    ]
}