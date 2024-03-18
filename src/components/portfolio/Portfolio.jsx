import React from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { join } from "path";


  const driectToProject = (url) => {
    window.open(url);
  };

const items = [
  {
    id: 1,
    title: "Dremap Project",
    img: "https://media.licdn.com/dms/image/D5612AQGRJXyOgkBjfg/article-cover_image-shrink_720_1280/0/1707331856890?e=2147483647&v=beta&t=v-9W94kvee76Mk1ly5qrBnfMjFek2rjrXYoDN3ZwzWk",
    description:
      "Software Development Group Project currently in development. The initial phase aims to release a minimum viable product (MVP) on March 25th. The project's goal is to facilitate the connection between candidates and companies for their dream jobs and employees, respectively. Its core functionalities include a skill evaluation questionnaire, recommendation system, and personalized learning pathway generation.",
    improvements: [],
    skills: [
      "NestJs",
      "NextJs",
      "Python",
      "MongoDB",
      "TypeScript",
      "TailwindCSS",
    ],
    link: "https://github.com/SDGP-CS-64-DreMap",
  },
  {
    id: 2,
    title: "Westminster Shopping Application Project",
    img: "https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "This project is a shopping application allowing users to purchase items from the Westminster store via a GUI, while managers can manage the store using a CLI. It follows OOP concepts and employs file system storage through serialization, including the use of the Singleton design pattern.",
    improvements: [],
    skills: ["Java", "Java Swing"],
    link: "https://github.com/sheebaboy33/WestminsterShoppingApplication",
  },
  {
    id: 3,
    title: "Smart Home System Project",
    img: "https://images.theecoexperts.co.uk/wp-content/uploads/2019/10/smart-home-system-guide.jpeg",
    description:
      "A guided project completed to learn the basics of React and Node.js. This smart home system allows users to control their home appliances from their mobile devices. The project is in development, with a planned release at the end of May.",
    improvements: ["Build the backend using Express", "Improve frontend UI"],
    skills: ["React", "NodeJs", "Express", "CSS"],
    link: "https://smart-home-system.vercel.app",
  },
  {
    id: 4,
    title: "Traveller's Guide Project",
    img: "https://images.pexels.com/photos/2403209/pexels-photo-2403209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Completed as part of a Web development module in the first year, this website provides tourism services. Currently, it contains only the components assigned to me, but I plan to enhance it with additional functionalities in the future.",
    improvements: [
      "Make the website mobile responsive",
      "Integrate features such as the product cart and checkout",
    ],
    skills: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/sheebaboy33/TravellersGuide1",
  },
  {
    id: 5,
    title: "Salary Prediction Regression Model",
    img: "https://www.deeplearningdaily.com/wp-content/uploads/2021/03/stochastic-gradient-descent-algorithm-with-python-and-numpy_603d2800488bf.jpeg",
    description:
      "A self-learning project to explore ML concepts. The project is aimed at predicting salaries and requires improvements.",
    improvements: ["Improve accuracy score"],
    skills: ["Python", "Numpy", "Pandas", "Matplotlib", "Scikit-learn"],
    link: "https://www.kaggle.com/code/sharmfernando33/salary-prediction",
  },
  {
    id: 6,
    title: "Portfolio Website",
    img: "/portfolio.png",
    description:
      "The primary objective of this portfolio website is to showcase the projects I have completed and am currently working on. It also served as an opportunity to learn about framer motion and Sass for styling components.",
    improvements: [
      "Add a Certifications and Education section",
      "Integrate a blog section to share my learnings",
    ],
    skills: ["NextJS", "Sass", "Framer Motion"],
    link: "https://github.com/sheebaboy33/Portfolio",
  },
  {
    id: 7,
    title: "QuickBites Project",
    img: "https://images.pexels.com/photos/693267/pexels-photo-693267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "A food delivery application that allows users to order food from their favorite restaurants and have it delivered to their doorsteps. The project is currently in the early stages of development and is scheduled for release at the end of May.",
    improvements: ["Frontend still in progress"],
    skills: ["JavaScript", "React", "TailwindCSS"],
    link: "https://github.com/sheebaboy33/Portfolio",
  },
];


const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section id="Projects">
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer">
            <img src={item.img} alt="Project image" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>

            {item.improvements.length > 0 && (
              <>
                <h3>Potential Improvements</h3>

                <ul>
                  {item.improvements.map((improvement, index) => {
                    return <li key={index}>{improvement}</li>;
                  })}
                </ul>
              </>
            )}
            <div className="skills">{item.skills.join(", ")}</div>
              <button onClick={() => driectToProject(item.link)}>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>My Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single key={item.id} item={item} />
      ))}
    </div>
  );
};
export default Portfolio;
