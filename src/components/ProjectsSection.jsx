import { ArrowRight, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Aircraft Telem",
    description: `Aircraft Telem is a client-server system designed to collect, track, and analyze real aircraft telemetry data—especially fuel consumption. 
The system enables efficient communication between client and server using socket programming principles, offering modular, scalable telemetry analysis for aviation analytics use cases.`,
    tags: ["C++", "Client-Server", "Socket Programming", "Telemetry", "Data Analysis"],
    githubUrl: "https://github.com/Henil23/aircraft-telem",
  },
  {
    id: 2,
    title: "Monte Carlo Simulation",
    description: `This project implements a Monte Carlo Simulation for financial portfolio risk assessment. While the method assumes that historical patterns continue, 
it serves as a valuable decision-making aid when used alongside other financial models. The system provides probabilistic analysis for potential outcomes using random sampling methods.`,
    tags: ["Python", "Finance", "Risk Modeling", "Simulation", "Pandas"],
    githubUrl: "https://github.com/Henil23/Monte_Carlo_Sim",
  },
  {
    id: 3,
    title: "BFRB Detection - Kaggle Competition",
    description: `This project was developed for a Kaggle competition focused on detecting Body-Focused Repetitive Behaviors (BFRBs) such as hair-pulling or skin-picking. 
Using time-series data from a wrist-worn device (Helios), the model classifies gestures as BFRB or non-BFRB with the help of signal processing and machine learning pipelines.`,
    tags: ["Machine Learning", "Time-Series", "Kaggle", "Signal Processing", "Sensor Data"],
    githubUrl: "https://github.com/Henil23/BFRB-Detection-",
  },
  {
    id: 4,
    title: "Parallel Matrix Multiplication",
    description: `This project explores parallel computing techniques to optimize matrix multiplication performance. 
Using C++ and multi-threading, the solution accelerates matrix computation by distributing workloads across threads, achieving significant speed-up for large-scale matrix operations.`,
    tags: ["C++", "Parallel Computing", "Matrix Multiplication", "Multi-threading", "Performance Optimization"],
    githubUrl: "https://github.com/Henil23", // Replace with actual repo if available
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          Selected projects demonstrating my work across software engineering, machine learning, simulations, and parallel systems.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-md card-hover flex flex-col justify-between p-4 h-full"
            >
              <h3 className="text-lg font-semibold mb-2 text-left">{project.title}</h3>

              <p className="text-muted-foreground text-sm text-left mb-4 whitespace-pre-line line-clamp-5">
                {project.description}
              </p>

              <div className="mt-auto flex flex-col gap-3">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex pt-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Henil23"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
