import hotelImage from "../assets/images/wild-oasis.jpg";
import worldWiseImage from "../assets/images/world-wise.png";
import pizzaImage from "../assets/images/pizza-app.png";
import portfolioImage from "../assets/images/portfolio.png";
import hangmanImage from "../assets/images/hangman.jpg";
import speedTypingImage from "../assets/images/typing-speed.jpg";

export const projects = [
    {
        id: 1,
        title: "The Wild Oasis",
        image: hotelImage,
        description:
            "A full-stack web application built with React and Supabase",
        technologies: [
            "React",
            "Supabase",
            "Styled Component",
            "React Router",
            "React Query",
        ],
        githubUrl: "https://github.com/MoomenEltelbany/the-wild-oasis",
        liveUrl: "#",
        published: false,
    },
    {
        id: 2,
        title: "Fast React Pizza",
        image: pizzaImage,
        description: "A website for ordering delicious pizza",
        technologies: ["React", "RTK", "Rect Router", "Tailwind CSS"],
        githubUrl: "https://github.com/MoomenEltelbany/fast-react-pizza",
        liveUrl: "https://moomeneltelbany.github.io/fast-react-pizza/",
        published: true,
    },
    // {
    //     id: 3,
    //     title: "World Wise",
    //     image: worldWiseImage,
    //     description:
    //         "A modern web application to keep track of all amazing places you visited",
    //     technologies: ["React", "React Router", "CSS Modules"],
    //     githubUrl: "https://github.com/MoomenEltelbany/world-wise",
    //     liveUrl: "https://my-world-wise-react.vercel.app/",
    //     published: true,
    // },
    {
        id: 4,
        title: "My Portfolio",
        image: portfolioImage,
        description:
            "A modern, responsive portfolio website built with React, Vite, and Tailwind CSS",
        technologies: ["React", "React Router", "Tailwind", "React Form"],
        githubUrl: "https://github.com/MoomenEltelbany/portfolio",
        liveUrl: "https://moomen-portfolio.vercel.app",
        published: true,
    },
    {
        id: 5,
        image: hangmanImage,
        title: "Hangman",
        description:
            "Guess the word, save the stickman! Built with HTML, CSS & JS—simple, fun, and dangerously addictive.",
        technologies: ["HTML", "CSS", "JS"],
        githubUrl: "https://github.com/MoomenEltelbany/Hangman",
        liveUrl: "https://moomeneltelbany.github.io/Hangman/",
        published: true,
    },
    {
        id: 6,
        image: speedTypingImage,
        title: "Typing Speed Test",
        description:
            "How fast can your fingers fly? Built with HTML, CSS & JS—type like the wind and beat the clock!",
        technologies: ["HTML", "CSS", "JS"],
        githubUrl: "https://github.com/MoomenEltelbany/Typing-Speed-Test",
        liveUrl: "https://moomeneltelbany.github.io/Typing-Speed-Test/",
        published: true,
    },
];
