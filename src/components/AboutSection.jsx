import { Briefcase, Code, Brain } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Full-Stack Developer with a Passion for Machine Learning
            </h3>

            <p className="text-muted-foreground">
              I'm a Computer Science student who enjoys building scalable, user-focused web applications and intelligent automation tools. My core tech stack includes React, Node.js, SQL, and MongoDB—and I'm always looking to craft clean, maintainable systems that just work.
            </p>

            <p className="text-muted-foreground">
              Beyond development, I’ve engineered ML pipelines with PyTorch and designed OCR workflows for real-world data extraction. I love solving problems end-to-end—from backend logic to deployment—and bringing impactful ideas to life through code.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/Henil_Patel.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                download
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full-Stack Development</h4>
                  <p className="text-muted-foreground">
                    Crafting modern web platforms with React, Node.js, .NET, SQL, and MongoDB.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Machine Learning & OCR</h4>
                  <p className="text-muted-foreground">
                    Building intelligent workflows with PyTorch, EasyOCR, and OpenCV.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Backend & DevOps</h4>
                  <p className="text-muted-foreground">
                    Designing scalable APIs, managing CI/CD pipelines, and deploying with Docker & Heroku.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
