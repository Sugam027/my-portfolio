import { Code, Coffee, Lightbulb, Target, User, GraduationCap, Download } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import profile from '@/assets/profile_pic.jpg';

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, interests, and what drives me as a developer
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Profile Image and Info */}
          <div className="lg:col-span-1">
            <Card className="card-hover border-card-border overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-primary to-secondary h-48 flex items-center justify-center">
                  <img src={profile} alt="profile_picture" />
                  <User className="h-24 w-24 text-white" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">Sugam Shrestha</h3>
                  <p className="text-muted-foreground mb-4">Full Stack Developer</p>
                  <div className="flex gap-2 justify-center">
                    <a 
                      href="/sugam-shrestha-cv.pdf" 
                      download 
                      className="px-8 py-1 text-lg border-2 border-primary text-white transition flex items-center justify-center rounded-md transition duration-300 ease-in-out bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary "
                    >
                      <Download className="mr-2 h-5 w-5" />
                      Download CV
                    </a>
                    {/* <Button variant="outline" size="sm" className="bg-gradient-to-r from-primary to-secondary">
                      Resume
                    </Button> */}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* About Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm Sugam Shrestha, a dedicated BCA student at Tribhuvan University with a passion 
                for web development and technology. My journey in programming started with curiosity 
                and has evolved into a deep commitment to creating meaningful digital solutions.
              </p>
              
              <p>
                Currently pursuing my Bachelor's degree in Computer Applications, I combine academic 
                learning with hands-on project experience. I enjoy working with modern technologies 
                like React, Node.js, and various databases to build full-stack applications that 
                solve real-world problems. I believe in continuous learning and staying updated with the 
                latest industry trends.
              </p>
            </div>

            {/* Education Section */}
            <Card className="border-card-border">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mr-4">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Education</h4>
                    <p className="text-sm text-muted-foreground">Academic Background</p>
                  </div>
                </div>
                
                <div className="border-l-2 border-primary/20 pl-6 ml-6">
                  <div className="relative">
                    <div className="absolute -left-8 top-2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                    <div className="mb-4">
                      <h5 className="font-semibold">Bachelor of Computer Applications</h5>
                      <p className="text-sm text-primary">Tribhuvan University / Divya Gyan College</p>
                      <p className="text-sm text-muted-foreground">2022 - Present</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Focusing on software development, database management, and web technologies. 
                        Currently maintaining excellent academic performance while working on practical projects.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Skills Highlights */}
            {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: Code, label: "Web Development" },
                { icon: Lightbulb, label: "Problem Solving" },
                { icon: Coffee, label: "Continuous Learning" },
                { icon: Target, label: "Goal Oriented" }
              ].map((item, index) => (
                <Card key={index} className="card-hover border-card-border">
                  <CardContent className="p-4 text-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mx-auto mb-2">
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                    <p className="text-xs font-medium">{item.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;