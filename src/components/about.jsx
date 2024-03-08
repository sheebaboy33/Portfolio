import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

const About = () => {
  return (
      <div>
          <Card >
                <CardHeader>
                    <CardTitle>About Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                      <p>Something about me</p>
                  </CardDescription>
                </CardContent>
                <CardFooter>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem dicta maiores odit asperiores, provident numquam enim illum quos ullam hic dolores et doloremque laudantium iure architecto, repellat quo ut aspernatur?</p>
                </CardFooter>
          </Card>
    </div>
  );
};
export default About;
