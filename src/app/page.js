"use client";

import HeroSection from "@/components/heroSection";
import ProjectContainer from "@/components/project-container";
import React from "react";

/*
 * Plan for the UI
 *   Navbar
 *   Hero Section
 *   Introduction
 *   About Me
 *   Education
 *   Projects
 *   Skills
 *   Extra curricular activities
 *   Contact
 * */

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Personal Portfolio Website</h1>
      <HeroSection />
      <ProjectContainer />
    </div>
  );
}
