import styles from './ProjectsStyles.module.css';
import lms from '../../assets/lms.png';
import ship from '../../assets/ship.png';
import login from '../../assets/login.png';
import login1 from '../../assets/login1.png';
import web from '../../assets/web.png'
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={lms}
          link="https://github.com/Ajith-ajay/book-list-mongoDB.git"
          h3="Library Management System"
          p="Web App"
        />
        <ProjectCard
          src={ship}
          link="https://github.com/Ajith-ajay/Titanic-Survival-Predection.git"
          h3="Titanic survival prediction"
          p="Predictor"
        />
        <ProjectCard
          src={login}
          link="https://github.com/Ajith-ajay/login-signup-mongodb.git"
          h3="Authentication"
          p="Authentication App"
        />
        <ProjectCard
          src={login1}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Login sign-up page"
          p="Login App"
        />
        <ProjectCard
          src={web}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Web scrapping"
          p="movie scrapper"
        />
      </div>
    </section>
  );
}

export default Projects;
