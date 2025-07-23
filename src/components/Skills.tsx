import { 
  Code, 
  Palette, 
  Server, 
  Database, 
  GitBranch, 
  Monitor,
  Smartphone,
  Cloud
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Palette,
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "TailwindCSS"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend Development", 
      icon: Server,
      skills: ["Node.js", "Express.js", "PHP", "RESTful APIs"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Database Management",
      icon: Database,
      skills: ["MongoDB", "MySQL", "Database Design", "Query Optimization"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Development Tools",
      icon: GitBranch,
      skills: ["Git", "GitHub", "VS Code", "Postman", "Chrome DevTools"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Responsive Design",
      icon: Monitor,
      skills: ["Mobile-First Design", "CSS Grid", "Flexbox", "Bootstrap"],
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Other Skills",
      icon: Cloud,
      skills: ["Problem Solving", "Team Collaboration", "Agile Methodology", "UI/UX Basics"],
      color: "from-teal-500 to-green-500"
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I use to build amazing projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="card-hover border-card-border glow-border fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full border border-card-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Programming Languages Section */}
        <div className="mt-16 text-center fade-in">
          <h3 className="text-2xl font-semibold mb-8">Programming Languages</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["JavaScript", "PHP", "HTML", "CSS", "SQL"].map((lang, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-6 py-3 bg-card border border-card-border rounded-lg card-hover"
              >
                <Code className="h-5 w-5 text-primary" />
                <span className="font-medium">{lang}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;