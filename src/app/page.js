"use client";

import React from "react";
import "../app.scss";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Portfolio from "../components/portfolio/Portfolio";
import Contact from "../components/contact/Contact"; 
import { Toaster } from "sonner";
import About from "../components/about/About";

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
        <Hero />
      </section>
      <section id="About">
        <About />
      </section>
      <Portfolio />
      {/* Certifications */}
      <section id="Contact">
        <Contact />
        <Toaster position="bottom-right" />
      </section>
    </div>
  );
}
