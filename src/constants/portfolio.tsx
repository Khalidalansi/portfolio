import emoji from "react-easy-emoji";

export const greetings = {
    name: "Khalid Alansi",
    title: "Hi all, I'm Khalid Alansi",
    description:
        "I'm passionate Full Stack web developer and Mobile Developer having an experience of web applications with PHP, Laravel, Wordpress, React.js, and Mobile applications with React-Native",
    resumeLink:
        "https://drive.google.com/file/d/1zzbZiKRIUW9qUTQKhbV41dbQbuB0TIOw/view?usp=sharing",
};

export const openSource = {
    githubUserName: "Khalidalansi",
};

export const contact = {};

interface SocialLinksT {
    [key: string]: string
}
export const socialLinks: SocialLinksT = {
    url: "https://khalidalansi.github.io/",
    linkedin: "https://www.linkedin.com/in/khalid-alansi",
    github: "https://github.com/Khalidalansi",
    // instagram: "https://www.instagram.com/__hanzla100",
    // facebook: "https://www.facebook.com/1hanzla100",
    // twitter: "https://twitter.com/1hanzla100",
};

export const skillsSection = {
    title: "What I do",
    subTitle:
        "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
    data: [
        {
            title: "Full Stack Development",
            lottieAnimationFile: require("../assets/lottie/skills/fullstack.json"), // Path of Lottie Animation JSON File
            skills: [
                emoji(
                    "⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"
                ),
                emoji(
                    "⚡ Building Mobile App in React-Native"
                ),
                emoji("⚡ Building responsive static websites using React.js"),
                emoji(
                    "⚡ Building RESTful APIs in PHP & Laravel REST Framework & WordPress REST API"
                ),
            ],
            softwareSkills: [
                {
                    skillName: "HTML-5",
                    fontAwesomeClassname: "vscode-icons:file-type-html",
                },
                {
                    skillName: "CSS-3",
                    fontAwesomeClassname: "vscode-icons:file-type-css",
                },
                {
                    skillName: "JavaScript",
                    fontAwesomeClassname: "logos:javascript",
                },
                {
                    skillName: "Nodejs",
                    fontAwesomeClassname: "logos:nodejs",
                },
                {
                    skillName: "Reactjs",
                    fontAwesomeClassname: "vscode-icons:file-type-reactjs",
                },
                {
                    skillName: "React-Native",
                    fontAwesomeClassname: "tabler:brand-react-native",
                },
                {
                    skillName: "PHP",
                    fontAwesomeClassname: "logos:php",
                },
                {
                    skillName: "Redux",
                    fontAwesomeClassname: "logos:redux",
                },
                {
                    skillName: "NPM",
                    fontAwesomeClassname: "logos:npm-icon",
                },
                {
                    skillName: "Yarn",
                    fontAwesomeClassname: "logos:yarn",
                },
                {
                    skillName: "Webpack",
                    fontAwesomeClassname: "logos:webpack",
                },
                {
                    skillName: "Typescript",
                    fontAwesomeClassname: "vscode-icons:file-type-typescript",
                },
                {
                    skillName: "Bootstrap",
                    fontAwesomeClassname: "logos:bootstrap",
                },
            ],
        },
        {
            title: "Cloud Infra-Architecture",
            lottieAnimationFile: require("../assets/lottie/skills/cloudinfra.json"), // Path of Lottie Animation JSON File
            skills: [
                emoji("⚡ Experience of working on multiple cloud platforms"),
                emoji(
                    "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"
                ),
                emoji(
                    "⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions"
                ),
            ],
            softwareSkills: [
                // ? Check README To get icon details


                {
                    skillName: "Github",
                    fontAwesomeClassname: "akar-icons:github-fill",
                },
                {
                    skillName: "Docker",
                    fontAwesomeClassname: "logos:docker-icon",
                },
                {
                    skillName: "Github Actions",
                    fontAwesomeClassname: "logos:github-actions",
                },

                {
                    skillName: "Nginx",
                    fontAwesomeClassname: "logos:nginx",
                },

            ],
        }
    ],
};

export const SkillBars = [
    {
        Stack: "Frontend/Design", //Insert stack or technology you have experience in
        progressPercentage: "70", //Insert relative proficiency in percentage
    },
    {
        Stack: "Backend",
        progressPercentage: "90",
    },
    {
        Stack: "Mobile/App",
        progressPercentage: "90",
    },
    {
        Stack: "Desktop/App",
        progressPercentage: "85",
    },
    {
        Stack: "Programming",
        progressPercentage: "90",
    },
];

export const educationInfo = [
    {
        schoolName: "University of Modern Sciences",
        subHeader: "Bachelor degree in Information Technology",
        duration: "September 2013 - April 2016",
        desc: "",
        // grade: "Grade A",
        // descBullets: [
        // 	"Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit",
        // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        // ],
    },
];

export const experience = [
    {
        role: "Full-Stack Developer",
        company: "Gray Alien Ventures",
        // companylogo: require("../assets/images/grayalienventures.png"),
        companylogo: "https://avatars.githubusercontent.com/u/81111279?v=4",

        date: "2018 – 2023",
        desc: "It's a startup in USA in Denver developing websites and mobile apps.",
    },


    // {
    // 	role: "Backend Developer",
    // 	company: "Wapidu",
    // 	companylogo: "/img/icons/common/wapidu.jpg",
    // 	date: "Sept 2021",
    // 	desc: "Worked as a Django Developer to integrate Stripe payment gateway in wapidu.com and Created REST APIs using Django REST Framework to integrate Django Stripe backend to Vue.js Frontend and Deployed it on Azure based Docker container registry.",
    // },
];

export const projects = [
    {
        name: "Portfolio",
        desc: "Software Developer Portfolio Template built with react.js and typescript bootstrap that helps you showcase your work and skills as a software developer.",
        github: "https://github.com/Khalidalansi/portfolio",
        link: "https://khalidalansi.github.io",
    },
    // {
    //     name: "Deirezzor24",
    //     desc: "I created an application for a remote client to view the news and connect it with a WordPress blog. ( React-Native )",
    //     link: "https://play.google.com/store/apps/details?id=com.deirezzor24",
    // },
    // {
    //     name: "Binabbas",
    //     desc: "I created a website for a local client with wordpress",
    //     link: "https://www.binabbas.info/",
    // },
    {
        name: "WP Core Plugin Setup",
        desc: "emplate WordPress directory that exposes REST endpoints. Also used by script in `server-setup` repo. ( Wordpress - Rest Api ).",
        github: "https://github.com/grayalienventures/wp-core-plugin-setup",
    },
    {
        name: "Rapid React App and Server Setup",
        desc: "Sets up web server with React frontend, WordPress backend, nginx conf file, and SSL certificate. ( Ubuntu - Nginx - CertBot ).",
        github: "https://github.com/grayalienventures/server-setup",
    },
    {
        name: "Prototype Node",
        desc: "Template React directory. Also used by script in `server-setup` repo. ( Node js - React js - Webpack ).",
        github: "https://github.com/grayalienventures/prototype-node",
    },
    {
        name: "EasyEatery",
        desc: "built this project for a client of ( Gray Alien Ventures ). ( React js - Node js - Wordpress - Webppack ).",
        link: "https://www.easyeatery.net",
    },
    {
        name: "Movesheet",
        desc: "This is a project for the company and it is a web application and a mobile application ( React js - Node js - Wordpress - Webppack - React-Native ).",
        link: "https://movesheet.com",
    },
];

export const feedbacks = [
    {
        name: "John Smith",
        feedback:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
    },
    {
        name: "John Smith",
        feedback:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
    },
];

// option to hide or show the ContactUs component
export const showContactUs = true;

// See object prototype on SEO.jsx page
export const seoData = {
    title: "Khalid Alansi",
    description:
        "A passionate Full Stack Web Developer and Mobile Developer.",
    author: "Khalid Alansi",
    image: "https://avatars.githubusercontent.com/u/34144060?v=4",
    url: "https://khalidalansi.github.io/",
    keywords: [
        "Khalid",
        "Khalid Alansi",
        "@Khalidalansi",
        "khalidalansi",
        "Portfolio",
        "Khalid Portfolio ",
        "Khalid Alansi Portfolio",
    ],
}