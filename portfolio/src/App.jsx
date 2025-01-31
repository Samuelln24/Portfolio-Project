import { useState } from "react";
import "./App.css";
import Contact from "./components/Contact";
import DetailProject from "./components/DetailProject";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";

function App() {
  const projects = [
    {
      id: 1,
      name: "projet 1",
      description:
        "Un projet de portfolio réalisé avec React, Zustand et React-router-dom",
      image:
        "https://blog-fr.orson.io/wp-content/uploads/2017/08/Template-responsive-design.png",
    },
    {
      id: 2,
      name: "projet 2",
      description:
        "Un projet e-commerce réalisé avec Node, PostGreSQL et express",
      image:
        "https://www.codeur.com/blog/wp-content/uploads/2022/07/4.-PlurielSingulier.jpg",
    },
    {
      id: 3,
      name: "projet 3",
      description: "Un site vitrine réalisé avec Wordpress et PHP",
      image:
        "https://www.livepepper.fr/wp-content/uploads/page/site-vitrine-restaurant-livepepper-academy-1-1024x744.png",
    },
  ];

  // Liste des pages disponibles
  const pages = ["home", "detailProject", "contact"];

  const [currentPage, setCurrentPage] = useState("home");
  const [selectedProjectId, setSelectedProjectId] = useState(1);

  const selectedProject = () => {
    return projects.find((project) => project.id === selectedProjectId);
  };

  return (
    <main className="container">
      <Header setCurrentPage={setCurrentPage} />
      <div>
        {currentPage === "home" && (
          <Projects
            projects={projects}
            setCurrentPage={setCurrentPage}
            setSelectedProjectId={setSelectedProjectId}
          />
        )}
        {currentPage === "contact" && <Contact />}
        {/* ici il manque peut être quelque chose ?! A vous d'imaginer quoi ? */}
        {currentPage === "detailProject" && (
          <DetailProject project={selectedProject()} />
        )}
      </div>
      <Footer />
    </main>
  );
}

export default App;
