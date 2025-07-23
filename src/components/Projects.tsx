import { ExternalLink, Github, Code } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "TajaGhar",
      subtitle: "Grocery eCommerce Website",
      description: "A full-stack grocery eCommerce platform featuring user authentication, product catalog, shopping cart, and order management. Built with modern web technologies for optimal performance.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "TailwindCSS"],
      githubUrl: "https://github.com/Sugam027/grocery_ecommerce",
      liveUrl: "",
      image: "🛒"
    },
    {
      title: "Medilog",
      subtitle: "Healthcare Management System",
      description: "A comprehensive healthcare management system designed to streamline patient records, appointment scheduling, and medical data management for healthcare providers.",
      technologies: ["PHP", "MySQL", "JavaScript"],
      githubUrl: "https://github.com/Sugam027/med_report_management",
      liveUrl: "",
      image: "🏥"
    },
    {
      title: "Dental Clinic Website",
      subtitle: "Frontend Project",
      description: "A responsive and user-friendly frontend website designed for a dental clinic. The site provides information about services, dentists, clinic hours, and contact details. It includes interactive features like appointment request forms, and a responsive layout for all screen sizes.",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/Sugam027/dental_clinic",
      liveUrl: "https://sugam027.github.io/dental_clinic/",
      image: "🦷"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Work</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my technical projects and applications, demonstrating my skills and experience in web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="card-hover border-card-border overflow-hidden fade-in bg-card flex flex-col h-full"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-0 flex flex-col flex-grow">
                {/* Project Image */}
                <div className="bg-gradient-to-br from-primary/20 to-secondary/20 h-48 flex items-center justify-center">
                  <span className="text-6xl">{project.image}</span>
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-grow min-h-[280px]"> {/* Set min height here */}
                  <div className="space-y-4 flex-grow">
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                      <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Buttons pinned at bottom */}
                  <div className="flex gap-3 pt-4 mt-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    
                    {project.liveUrl && (
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                        onClick={() => window.open(project.liveUrl, "_blank")}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Project →
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

          ))}
        </div>

        <div className="text-center mt-12 fade-in">
          <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Github className="mr-2 h-5 w-5" />
            View All →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;