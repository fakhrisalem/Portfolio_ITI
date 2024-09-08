import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Ecommerce Website",
    getImageSrc: () => require("../images/photo1.jpg"),
  },
  {
    title: "Calculator Application",
    getImageSrc: () => require("../images/photo2.jpg"),
  },
  {
    title: "Portfolio App",
    getImageSrc: () => require("../images/photo3.jpg"),
  },
  {
    title: "Restaurant App",
    getImageSrc: () => require("../images/photo4.jpg"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      alignItems="center"
      backgroundColor="#000"
      isDarkBackground
      p={8}
      spacing={10}
    >
      <Heading as="h1" id="projects-section">
        Projects
      </Heading>
      <Box display="grid" gridTemplateColumns="repeat(4, 2fr)" gridGap={8}>
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            imageStyle={{ maxWidth: "800%", maxHeight: "800%", objectFit: "cover" }}
            cardStyle={{ display: "flex", flexDirection: "column", alignItems: "center" }}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;