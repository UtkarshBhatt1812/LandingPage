import React from "react";
import GridComponent from "./GridComponent";

function CustomerGrid() {
  const customer = [
    {
      name: "canva",
      path: "/public/canva.svg",
    },
    {
      name: "strava",
      path: "/public/strava.svg",
    },
    {
      name: "perplexity",
      path: "/public/perplexity.svg",
    },
    {
      name: "notion",
      path: "/public/notion.svg",
    },
    {
      name: "hinge",
      path: "/public/hinge.svg",
    },
    {
      name: "fanatics",
      path: "/public/fanatics.svg",
    },
    {
      name: "nextdoor",
      path: "/public/nextdoor.svg",
    },
    {
      name: "bitvavo",
      path: "/public/bitvavo.svg",
    },
    {
      name: "atlassian",
      path: "/public/atlassian.svg",
    },
    {
      name: "ancestry",
      path: "/public/ancestry.svg",
    },
    {
      name: "webflow",
      path: "/public/webflow.svg",
    },
    {
      name: "quizlet",
      path: "/public/quizlet.svg",
    },
    {
      name: "monday",
      path: "/public/monday.svg",
    },
    {
      name: "western",
      path: "/public/western.svg",
    },
    {
      name: "farmer",
      path: "/public/farmer.svg",

    },
  ];
  return (
    <div className="grid grid-cols-5 gap-0.5 mx-10 ml-30 mr-30">  
      {customer.map((cus, index) => {
       return <GridComponent key={index} src={cus.path} name={cus.name} />;
      })}
    </div>
  );
}

export default CustomerGrid;
