"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const Introduction = () => {
  return (
    <div className=" bg-yellow-500">
      <h1>Introduction</h1>
      <p>
        I am a Front-end Developer with 2 years of experience. I have worked on
        various projects and have a good understanding of web development.
      </p>
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
export default Introduction;
