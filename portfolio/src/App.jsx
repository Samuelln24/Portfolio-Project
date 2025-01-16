import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Projects from './components/Projects'
import DetailProject from './components/DetailProject'
import Contact from './components/Contact'
import { useState } from 'react'

function App() {
  const projects = [
    {
      id: 1,
      name: "projet 1",
      description: "Un projet de portfolio réalisé avec React, Zustand et React-router-dom",
      image: "https://blog-fr.orson.io/wp-content/uploads/2017/08/Template-responsive-design.png"
    },
    {
      id: 2,
      name: "projet 2",
      description: "Un projet e-commerce réalisé avec Node, PostGreSQL et express",
      image: "https://www.codeur.com/blog/wp-content/uploads/2022/07/4.-PlurielSingulier.jpg"
    },
    {
      id: 3,
      name: "projet 3",
      description: "Un site vitrine réalisé avec Wordpress et PHP",
      image: "https://www.livepepper.fr/wp-content/uploads/page/site-vitrine-restaurant-livepepper-academy-1-1024x744.png"
    },
  ];

  // Liste des pages disponibles
  const pages = ["home", "detailProject", "contact"];

  // Page actuellement affichée
  //const currentPage = "detailProject";
  // Projet sélectionné (par exemple : ID du projet)
  //const selectedProject = 3;

  const [currentPage, setCurrentPage] = useState("home");
  const [selectedProject, setSelectedProject] = useState(3);


  const project = projects.find((projet) => projet.id === selectedProject);

  return (
    <main className="container">
      <Header setCurrentPage={setCurrentPage} />

      {currentPage === "home" &&
        <Projects
          projects={projects}
          setCurrentPage={setCurrentPage}
          setSelectedProject={setSelectedProject}
        />}

      {currentPage === "detailProject" && project && (
        <DetailProject
          projectName={project.name}
          projectDescription={project.description}
          setCurrentPage={setCurrentPage}
        />
      )}

      {currentPage === "contact" && <Contact />}
      <Footer />
    </main>
  )
}

export default App
