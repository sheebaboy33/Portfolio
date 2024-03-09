"use client";

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
      <section id="Introduction">
        <Navbar />
      </section>
      <section id="About">Parallax</section>
      <section>About me</section>
      <section id="Skills">Skills</section>
      <section id="Projects">Parallax</section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section id="Contact">Contact</section>
    </div>
  );
}
