import React from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { join } from "path";

const items = [
  {
    id: 1,
    title: "Dremap Project",
    img: "https://media.licdn.com/dms/image/D5612AQGRJXyOgkBjfg/article-cover_image-shrink_720_1280/0/1707331856890?e=2147483647&v=beta&t=v-9W94kvee76Mk1ly5qrBnfMjFek2rjrXYoDN3ZwzWk",
    description: "This is a project description",
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
    description: "This is a project description",
    skills: ["JavaScript", "React", "TailwindCSS"],
  },
  {
    id: 3,
    title: "Smart Home System Project",
    img: "https://images.theecoexperts.co.uk/wp-content/uploads/2019/10/smart-home-system-guide.jpeg",
    description: "This is a project description",
    skills: ["React", "NodeJs", "Express", "CSS"],
  },
  {
    id: 4,
    title: "Westminster Shopping Application Project",
    img: "https://images.theecoexperts.co.uk/wp-content/uploads/2019/10/smart-home-system-guide.jpeg",
    description: "This is a project description",
    skills: ["Java", "Java Swing"],
  },
  {
    id: 5,
    title: "Traveller's Guide Project",
    img: "https://images.pexels.com/photos/2403209/pexels-photo-2403209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "This is a project description",
    skills: ["HTML", "CSS", "JavaScript"],
  },

  {
    id: 6,
    title: "Salary Prediction Regression Model",
    img: "https://www.deeplearningdaily.com/wp-content/uploads/2021/03/stochastic-gradient-descent-algorithm-with-python-and-numpy_603d2800488bf.jpeg",
    description: "This is a project description",
    skills: ["Python", "Numpy", "Pandas", "Matplotlib", "Scikit-learn"],
  },
  {
    id: 7,
    title: "Portfolio Website Project",
    img: "https://pics.filmaffinity.com/This_Is_It-992354512-large.jpg",
    description: "This is a project description",
    skills: ["NextJS", "Sass", "Framer Motion"],
  },
];

const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
    });

    const y = useTransform(scrollYProgress, [0, 1], [-150, 170]);

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer">
                        <img src={item.img} alt="Project image" />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <div className="skills">
                            {item.skills.join(", ")}
                        </div>
                        <button>See Demo</button>
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
