import React from "react";

export const ProfessionalExperience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-6 bg-background text-foreground border-t border-border"
    >
      <div className="max-w-4xl mx-auto space-y-16">
        <h2 className="text-4xl font-bold text-center">
          Professional <span className="text-primary">Experience</span>
        </h2>

        {/* Harpa Global */}
        <div className="bg-card p-6 border rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold text-primary mb-1">
            Software Developer Intern – Harpa Global
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            May 2025 – Present
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I actively support the backend systems powering Harpa Global’s distributed services.
            From investigating CI/CD failures in GitHub Actions to triaging live production issues,
            I collaborate closely with cross-functional teams to ensure platform stability.
            I've authored technical documentation, optimized REST APIs, and played a key role in
            Agile ceremonies — all while improving reliability, scalability, and onboarding.
          </p>
          <p className="text-sm mt-4 italic text-muted-foreground">
            Skills: Node.js, MongoDB, REST APIs, GitHub Actions, Azure DevOps, SQL, Agile, Debugging.
          </p>
        </div>

        {/* SMART Centre */}
        <div className="bg-card p-6 border rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold text-primary mb-1">
            Machine Learning Intern – SMART Centre
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            January 2025 – May 2025
          </p>
          <p className="text-muted-foreground leading-relaxed">
            At SMART Centre, I built backend automation pipelines in Python and packaged them using Docker
            for reproducibility. My work focused on optimizing document-processing workflows, integrating
            OCR tools like EasyOCR and OpenCV into microservices. I closely tracked pipeline failures and
            performance metrics, enabling efficient debugging and continuous improvement.
          </p>
          <p className="text-sm mt-4 italic text-muted-foreground">
            Skills: Python, Docker, EasyOCR, OpenCV, pytesseract, Backend Automation, Logging, Linux.
          </p>
        </div>

        {/* Vortex Telecom */}
        <div className="bg-card p-6 border rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold text-primary mb-1">
            Software Developer Intern – Vortex Telecom
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            May 2024 – Dec 2024
          </p>
          <p className="text-muted-foreground leading-relaxed">
            During my internship at Vortex Telecom, I developed and deployed full-stack applications using
            React and Node.js. I maintained real-time data services and tackled system-level protocol issues,
            including SNMP/DNP3 debugging. I also contributed to Agile sprints and worked closely with
            infrastructure teams to maintain high system availability and performance on Heroku.
          </p>
          <p className="text-sm mt-4 italic text-muted-foreground">
            Skills: Node.js, React, MongoDB, SNMP/DNP3, Heroku, GitHub Actions, Agile Workflows.
          </p>
        </div>
      </div>
    </section>
  );
};
