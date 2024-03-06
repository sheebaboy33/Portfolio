"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

const ProjectCard = (props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-white shadow-lg rounded-lg overflow-hidden md:h-96 m-10">
      <div
        className="bg-cover bg-center relative group"
        style={{ backgroundImage: `url(${props.image})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition duration-500 ease-in-out"></div>
        <div className="absolute bottom-0 p-4 text-white">

          <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 transition duration-300 ease-in-out">
            View Project
          </Button>
        </div>
      </div>
      <div className="p-4">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">{props.name}</CardTitle>
          <CardDescription className="text-gray-600">
            {props.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">{props.technologies}</p>
          <p className="text-gray-700">{props.learnings}</p>
        </CardContent>
      </div>
    </div>
  );
};

export default ProjectCard;
