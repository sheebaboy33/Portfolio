"use client";

import HeroSection from "../components/heroSection";
import ProjectContainer from "../components/project-container";
import About from "../components/about";
import React from "react";
import "../app.scss"
import Navbar from "../components/navbar/Navbar";

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
      <section>
        <Navbar />
      </section>
      <section>Parallax</section>
      <section>Services</section>
      <section>Parallax</section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Contact</section>
    </div>
  );
}
