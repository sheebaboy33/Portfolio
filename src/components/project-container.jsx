"use client";

import React from "react";
import ProjectCard from "@/components/project-card";


const ProjectContainer = () => {
  return (
    <div>
      <h1 className=" text-2xl font-semibold">Projects</h1>
      <ProjectCard
        name="Project 1"
        description="This is a project description"
        technologies="React, Tailwind CSS"
        learnings="I learnt React and Tailwind CSS"
        image="/LogoCopy.jpg"
      />
    </div>
  )

};
export default ProjectContainer;
