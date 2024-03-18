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
    description: "This is a project description",
    improvements: [],
    skills: [
      "NestJs",
      "NextJs",
      "Python",
      "MongoDB",
      "TypeScript",
      "TailwindCSS",
    ],
  },
  {
    id: 2,
    title: "QuickBites Project",
    img: "https://images.pexels.com/photos/693267/pexels-photo-693267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "This project is a food delivery application that allows users to order food from their favorite restaurants and get it delivered to their doorsteps. It is currently in the development phase and will be released at the end of April.",
    improvements: ["Frontend still in progress"],
    skills: ["JavaScript", "React", "TailwindCSS"],
    link: "https://github.com/sheebaboy33/Portfolio",
  },
  {
    id: 3,
    title: "Smart Home System Project",
    img: "https://images.theecoexperts.co.uk/wp-content/uploads/2019/10/smart-home-system-guide.jpeg",
    description: "This is a project description",
    improvements: ["Build the backend using Express", "Improve frontend UI"],
    skills: ["React", "NodeJs", "Express", "CSS"],
    link: "https://github.com/sheebaboy33/SmartHomeSystem",
  },
  {
    id: 4,
    title: "Westminster Shopping Application Project",
    img: "https://images.theecoexperts.co.uk/wp-content/uploads/2019/10/smart-home-system-guide.jpeg",
    description: "This is a project description",
    improvements: [],
    skills: ["Java", "Java Swing"],
    link: "https://github.com/sheebaboy33/WestminsterShoppingApplication",
  },
  {
    id: 5,
    title: "Traveller's Guide Project",
    img: "https://images.pexels.com/photos/2403209/pexels-photo-2403209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "This is a project description",
    improvements: [
      "Make the website mobile Resopnsive",
      "Integrate features such as the product cart and checkout",
    ],
    skills: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/sheebaboy33/TravellersGuide1",
  },

  {
    id: 6,
    title: "Salary Prediction Regression Model",
    img: "https://www.deeplearningdaily.com/wp-content/uploads/2021/03/stochastic-gradient-descent-algorithm-with-python-and-numpy_603d2800488bf.jpeg",
    description:
      "Completed as a self-learning project to solve a real world problem. The model was trained using the Linear Regression algorithm and achieved an accuracy score of 85%.",
    improvements: [
      "Try using different algorithms to get a better accuracy score",
    ],
    skills: ["Python", "Numpy", "Pandas", "Matplotlib", "Scikit-learn"],
    link: "https://www.kaggle.com/code/sharmfernando33/salary-prediction",
  },
  {
    id: 7,
    title: "Portfolio Website Project",
    img: "https://www.deeplearningdaily.com/wp-content/uploads/2021/03/stochastic-gradient-descent-algorithm-with-python-and-numpy_603d2800488bf.jpeg",
    description:
      "The primary objective of this project was to showcase the projects that I have completed and currently working on. It also helped me learn concepts in framer motion and using Sass to style my components.",
    improvements: [
      "Certifications and Educations section",
      "Integrate a blog section to share my learnings",
    ],
    skills: ["NextJS", "Sass", "Framer Motion"],
    link: "https://github.com/sheebaboy33/Portfolio",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-150, 170]);

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
