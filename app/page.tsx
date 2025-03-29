import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto py-8 px-4">
        {/* Header / Profile Section */}
        <header className="flex flex-col md:flex-row gap-6 items-start md:items-center mb-12">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20 flex-shrink-0">
            <img src="/placeholder.svg?height=128&width=128" alt="Profile" className="w-full h-full object-cover" />
          </div>

          <div className="flex-1">
            <h1 className="text-4xl font-bold">John Doe</h1>
            <h2 className="text-xl text-muted-foreground mt-1">Senior Frontend Developer</h2>

            <div className="flex flex-wrap gap-3 mt-4">
              <a
                href="mailto:john@example.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={16} />
                <span>john@example.com</span>
              </a>
              <a
                href="tel:+15551234567"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </a>
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin size={16} />
                <span>New York, NY</span>
              </span>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          <Button className="flex items-center gap-2">
            <Download size={16} />
            <span>Download CV</span>
          </Button>
        </header>

        {/* Main Content */}
        <main>
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-4 md:grid-cols-5 h-auto">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
            </TabsList>

            {/* About Tab */}
            <TabsContent value="about" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4">About Me</h3>
                  <p className="text-muted-foreground mb-4">
                    I'm a passionate frontend developer with over 7 years of experience creating responsive,
                    user-friendly web applications. My expertise lies in modern JavaScript frameworks, particularly
                    React and Next.js, with a strong focus on performance optimization and accessibility.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Throughout my career, I've collaborated with cross-functional teams to deliver high-quality products
                    that meet business objectives while providing exceptional user experiences. I'm constantly learning
                    and adapting to new technologies and methodologies to stay at the forefront of web development.
                  </p>
                  <p className="text-muted-foreground">
                    When I'm not coding, you can find me hiking, reading science fiction, or experimenting with new
                    recipes in the kitchen.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Experience Tab */}
            <TabsContent value="experience" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-6">Work Experience</h3>

                  <div className="space-y-8">
                    {/* Experience Item 1 */}
                    <div className="relative pl-8 pb-8 border-l border-muted">
                      <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-1"></div>
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                        <h4 className="text-xl font-bold">Senior Frontend Developer</h4>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">
                            Jan 2021 - Present
                          </Badge>
                        </div>
                      </div>
                      <h5 className="text-primary font-medium mb-2">Tech Solutions Inc.</h5>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>
                          Lead a team of 5 frontend developers in building and maintaining the company's flagship SaaS
                          product
                        </li>
                        <li>Implemented a component library that reduced development time by 40%</li>
                        <li>Optimized application performance, resulting in a 35% improvement in load times</li>
                        <li>Collaborated with UX designers to implement accessible, responsive interfaces</li>
                        <li>Mentored junior developers through code reviews and pair programming sessions</li>
                      </ul>
                    </div>

                    {/* Experience Item 2 */}
                    <div className="relative pl-8 pb-8 border-l border-muted">
                      <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-1"></div>
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                        <h4 className="text-xl font-bold">Frontend Developer</h4>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">
                            Jun 2018 - Dec 2020
                          </Badge>
                        </div>
                      </div>
                      <h5 className="text-primary font-medium mb-2">Web Innovators</h5>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>Developed responsive web applications using React and Redux</li>
                        <li>Built and maintained RESTful API integrations</li>
                        <li>Implemented state management solutions for complex application flows</li>
                        <li>Collaborated with backend developers to design and implement new features</li>
                        <li>
                          Participated in agile development processes, including daily standups and sprint planning
                        </li>
                      </ul>
                    </div>

                    {/* Experience Item 3 */}
                    <div className="relative pl-8 border-l border-muted">
                      <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-1"></div>
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                        <h4 className="text-xl font-bold">Junior Web Developer</h4>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">
                            Aug 2016 - May 2018
                          </Badge>
                        </div>
                      </div>
                      <h5 className="text-primary font-medium mb-2">Digital Creations</h5>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>Developed and maintained client websites using HTML, CSS, and JavaScript</li>
                        <li>Assisted senior developers with implementing new features and fixing bugs</li>
                        <li>Created responsive layouts that work across various devices and browsers</li>
                        <li>Optimized website performance through code refactoring and image optimization</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Education Tab */}
            <TabsContent value="education" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-6">Education</h3>

                  <div className="space-y-8">
                    {/* Education Item 1 */}
                    <div className="relative pl-8 pb-8 border-l border-muted">
                      <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-1"></div>
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                        <h4 className="text-xl font-bold">Bachelor of Science in Computer Science</h4>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">
                            2012 - 2016
                          </Badge>
                        </div>
                      </div>
                      <h5 className="text-primary font-medium mb-2">University of Technology</h5>
                      <p className="text-muted-foreground">
                        Graduated with honors (GPA: 3.8/4.0). Specialized in web development and software engineering.
                        Relevant coursework included Data Structures, Algorithms, Database Systems, and Web Application
                        Development.
                      </p>
                    </div>

                    {/* Education Item 2 */}
                    <div className="relative pl-8 border-l border-muted">
                      <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-1"></div>
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                        <h4 className="text-xl font-bold">Advanced Frontend Development Certification</h4>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">
                            2018
                          </Badge>
                        </div>
                      </div>
                      <h5 className="text-primary font-medium mb-2">Frontend Masters</h5>
                      <p className="text-muted-foreground">
                        Completed an intensive program focused on advanced JavaScript, React, and modern frontend
                        development practices. Created several projects demonstrating proficiency in building complex,
                        interactive web applications.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Skills Tab */}
            <TabsContent value="skills" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-6">Skills & Expertise</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Technical Skills */}
                    <div>
                      <h4 className="text-xl font-semibold mb-4">Technical Skills</h4>

                      <div className="space-y-4">
                        <div>
                          <h5 className="font-medium mb-2">Frontend Development</h5>
                          <div className="flex flex-wrap gap-2">
                            <Badge className="bg-primary/10 hover:bg-primary/20 text-primary">JavaScript</Badge>
                            <Badge className="bg-primary/10 hover:bg-primary/20 text-primary">TypeScript</Badge>
                            <Badge className="bg-primary/10 hover:bg-primary/20 text-primary">React</Badge>
                            <Badge className="bg-primary/10 hover:bg-primary/20 text-primary">Next.js</Badge>
                            <Badge className="bg-primary/10 hover:bg-primary/20 text-primary">Redux</Badge>
                            <Badge className="bg-primary/10 hover:bg-primary/20 text-primary">HTML5</Badge>
                            <Badge className="bg-primary/10 hover:bg-primary/20 text-primary">CSS3</Badge>
                            <Badge className="bg-primary/10 hover:bg-primary/20 text-primary">Tailwind CSS</Badge>
                            <Badge className="bg-primary/10 hover:bg-primary/20 text-primary">SASS</Badge>
                          </div>
                        </div>

                        <div>
                          <h5 className="font-medium mb-2">Tools & Platforms</h5>
                          <div className="flex flex-wrap gap-2">
                            <Badge className="bg-primary/10 hover:bg-primary/20 text-primary">Git</Badge>
                            <Badge className="bg-primary/10 hover:bg-primary/20 text-primary">GitHub</Badge>
                            <Badge className="bg-primary/10 hover:bg-primary/20 text-primary">VS Code</Badge>
                            <Badge className="bg-primary/10 hover:bg-primary/20 text-primary">Webpack</Badge>
                            <Badge className="bg-primary/10 hover:bg-primary/20 text-primary">Vite</Badge>
                            <Badge className="bg-primary/10 hover:bg-primary/20 text-primary">Jest</Badge>
                            <Badge className="bg-primary/10 hover:bg-primary/20 text-primary">Cypress</Badge>
                            <Badge className="bg-primary/10 hover:bg-primary/20 text-primary">Vercel</Badge>
                            <Badge className="bg-primary/10 hover:bg-primary/20 text-primary">Netlify</Badge>
                          </div>
                        </div>

                        <div>
                          <h5 className="font-medium mb-2">Backend & Database</h5>
                          <div className="flex flex-wrap gap-2">
                            <Badge className="bg-primary/10 hover:bg-primary/20 text-primary">Node.js</Badge>
                            <Badge className="bg-primary/10 hover:bg-primary/20 text-primary">Express</Badge>
                            <Badge className="bg-primary/10 hover:bg-primary/20 text-primary">MongoDB</Badge>
                            <Badge className="bg-primary/10 hover:bg-primary/20 text-primary">PostgreSQL</Badge>
                            <Badge className="bg-primary/10 hover:bg-primary/20 text-primary">RESTful APIs</Badge>
                            <Badge className="bg-primary/10 hover:bg-primary/20 text-primary">GraphQL</Badge>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Soft Skills & Languages */}
                    <div className="space-y-8">
                      <div>
                        <h4 className="text-xl font-semibold mb-4">Soft Skills</h4>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                          <li>Team Leadership</li>
                          <li>Project Management</li>
                          <li>Problem Solving</li>
                          <li>Communication</li>
                          <li>Time Management</li>
                          <li>Adaptability</li>
                          <li>Mentoring</li>
                          <li>Attention to Detail</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold mb-4">Languages</h4>
                        <ul className="space-y-2">
                          <li className="flex justify-between items-center">
                            <span>English</span>
                            <span className="text-sm text-muted-foreground">Native</span>
                          </li>
                          <li className="flex justify-between items-center">
                            <span>Spanish</span>
                            <span className="text-sm text-muted-foreground">Professional Proficiency</span>
                          </li>
                          <li className="flex justify-between items-center">
                            <span>French</span>
                            <span className="text-sm text-muted-foreground">Basic</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Projects Tab */}
            <TabsContent value="projects" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-6">Projects</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Project 1 */}
                    <div className="border rounded-lg overflow-hidden">
                      <div className="h-48 bg-muted">
                        <img
                          src="/placeholder.svg?height=192&width=384"
                          alt="E-commerce Platform"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="text-lg font-bold">E-commerce Platform</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          A full-featured e-commerce platform built with Next.js, featuring product listings, cart
                          functionality, user authentication, and payment processing.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge variant="outline">Next.js</Badge>
                          <Badge variant="outline">TypeScript</Badge>
                          <Badge variant="outline">Stripe</Badge>
                          <Badge variant="outline">MongoDB</Badge>
                        </div>
                        <div className="flex gap-3">
                          <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                          >
                            <Github size={14} />
                            <span>Code</span>
                          </a>
                          <a
                            href="https://example.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                          >
                            <ExternalLink size={14} />
                            <span>Live Demo</span>
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Project 2 */}
                    <div className="border rounded-lg overflow-hidden">
                      <div className="h-48 bg-muted">
                        <img
                          src="/placeholder.svg?height=192&width=384"
                          alt="Task Management App"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="text-lg font-bold">Task Management App</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          A collaborative task management application with real-time updates, drag-and-drop
                          functionality, and team collaboration features.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge variant="outline">React</Badge>
                          <Badge variant="outline">Redux</Badge>
                          <Badge variant="outline">Firebase</Badge>
                          <Badge variant="outline">Tailwind CSS</Badge>
                        </div>
                        <div className="flex gap-3">
                          <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                          >
                            <Github size={14} />
                            <span>Code</span>
                          </a>
                          <a
                            href="https://example.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                          >
                            <ExternalLink size={14} />
                            <span>Live Demo</span>
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Project 3 */}
                    <div className="border rounded-lg overflow-hidden">
                      <div className="h-48 bg-muted">
                        <img
                          src="/placeholder.svg?height=192&width=384"
                          alt="Weather Dashboard"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="text-lg font-bold">Weather Dashboard</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          A weather application that provides current conditions and forecasts for locations worldwide,
                          with interactive maps and data visualization.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge variant="outline">JavaScript</Badge>
                          <Badge variant="outline">Chart.js</Badge>
                          <Badge variant="outline">Weather API</Badge>
                          <Badge variant="outline">Leaflet</Badge>
                        </div>
                        <div className="flex gap-3">
                          <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                          >
                            <Github size={14} />
                            <span>Code</span>
                          </a>
                          <a
                            href="https://example.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                          >
                            <ExternalLink size={14} />
                            <span>Live Demo</span>
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Project 4 */}
                    <div className="border rounded-lg overflow-hidden">
                      <div className="h-48 bg-muted">
                        <img
                          src="/placeholder.svg?height=192&width=384"
                          alt="Portfolio Website"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="text-lg font-bold">Portfolio Website</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          A personal portfolio website showcasing projects and skills, with a focus on performance,
                          accessibility, and responsive design.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge variant="outline">Next.js</Badge>
                          <Badge variant="outline">Tailwind CSS</Badge>
                          <Badge variant="outline">Framer Motion</Badge>
                          <Badge variant="outline">Vercel</Badge>
                        </div>
                        <div className="flex gap-3">
                          <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                          >
                            <Github size={14} />
                            <span>Code</span>
                          </a>
                          <a
                            href="https://example.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                          >
                            <ExternalLink size={14} />
                            <span>Live Demo</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>

        {/* Footer */}
        <footer className="mt-12 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} John Doe. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

