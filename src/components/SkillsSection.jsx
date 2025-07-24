import { useState } from "react";
import { cn } from "@/lib/utils";

// Curated important skills
const skills = [
  // Languages & Core
  { name: "Python", category: "languages" },
  { name: "C++", category: "languages" },
  { name: "JavaScript", category: "languages" },
  { name: "TypeScript", category: "languages" },
  { name: "Java", category: "languages" },
  { name: "SQL", category: "languages" },

  // Frontend
  { name: "React", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Next.js", category: "frontend" },

  // Backend & Systems
  { name: "Node.js", category: "backend" },
  { name: "Express.js", category: "backend" },
  { name: "ASP.NET", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "RESTful APIs", category: "backend" },
  { name: "Microservices", category: "backend" },

  // DevOps & Deployment
  { name: "Docker", category: "devops" },
  { name: "CI/CD Pipelines", category: "devops" },
  { name: "GitHub Actions", category: "devops" },
  { name: "AWS (EC2, Lambda)", category: "devops" },
  { name: "Linux (Ubuntu)", category: "devops" },

  // Testing & Automation
  { name: "Jest", category: "testing" },
  { name: "PyTest", category: "testing" },
  { name: "TDD", category: "testing" },

  // Data & Analysis
  { name: "Pandas", category: "data" },
  { name: "NumPy", category: "data" },
  { name: "Power BI", category: "data" },

  // Fundamentals
  { name: "OOP", category: "fundamentals" },
  { name: "Data Structures", category: "fundamentals" },
  { name: "Algorithms", category: "fundamentals" },
];

const categories = [
  "all",
  "languages",
  "frontend",
  "backend",
  "devops",
  "testing",
  "data",
  "fundamentals",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-card p-5 rounded-lg shadow-sm border border-border card-hover"
            >
              <h3 className="text-lg font-medium text-foreground">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
