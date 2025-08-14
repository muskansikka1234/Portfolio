import { Briefcase, Code, User } from "lucide-react";

export const AboutMe = () => {
    return (
         <section id="about" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl ms:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Passionate Web Developer</h3>

                    <p className="text-muted-foreground">
                        Hi! I'm a web developer with a strong interest in building full-stack applications using technologies like React, Node.js, and MongoDB.
                        I am currently pursuing B.Tech in Computer Science and have worked on several personal and academic projects that simulate real-world development challenges.
                    </p>

                    <p className="text-muted-foreground">
                        I enjoy learning new frameworks and tools, and I'm passionate about clean code and creating user-friendly experiences.
                        I'm actively looking for opportunities to contribute to innovative teams and continue growing as a developer.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            {" "}
                            Get In Touch
                        </a>

                        <a href="/Resume.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                        Download CV
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Web Development</h4>
                                <p className="text-muted-foreground">
                                    Creating responsive websites and web applications with modern frameworks.
                                </p>

                            </div>
                        </div>
                    </div>


                    <div className="gradient-border p-6 card-hover">
                         <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <User className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                <p className="text-muted-foreground">
                                     Designing intuitive user interfaces and seamless user experiences.
                                </p>

                            </div>
                        </div>
                    </div>


                    <div className="gradient-border p-6 card-hover">
                         <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Briefcase className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Project Management</h4>
                                <p className="text-muted-foreground">
                                    Leading projects from conception to completion with agile methodologies.
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