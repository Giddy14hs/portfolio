import SectionHeading from "@/components/SectionHeading";
import AnimatedImage from "@/components/AnimatedImage";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const AboutPage = () => {
  const skills = [
    "JavaScript & TypeScript",
    "React & Next.js",
    "Node.js & Express",
    "Tailwind CSS",
    "UI/UX Design",
    "Responsive Design",
    "RESTful APIs",
    "Database Design",
    "Performance Optimization",
  ];

  const experiences = [
    {
      period: "2020 - Present",
      role: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      description:
        "Leading the frontend development team in building modern, responsive web applications. Implementing best practices and mentoring junior developers.",
    },
    {
      period: "2018 - 2020",
      role: "Full Stack Developer",
      company: "Digital Solutions Group",
      description:
        "Developed full-stack applications using React, Node.js, and MongoDB. Collaborated with designers and product managers to deliver high-quality software.",
    },
    {
      period: "2016 - 2018",
      role: "Web Developer",
      company: "Creative Web Agency",
      description:
        "Created responsive websites for clients across various industries. Focused on semantic HTML, CSS, and JavaScript to build accessible and performant sites.",
    },
  ];

  return (
    <>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading title="About Me" subtitle="Get to know me better" />

          <div className="grid gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-lg bg-gradient-to-tr from-primary/10 to-purple-500/10 p-2"
            >
              <AnimatedImage
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Professional Photo"
                className="rounded-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="mb-4 text-2xl font-bold">
                Hi, I'm <span className="text-primary">Developer Name</span>
              </h2>
              <p className="mb-4 text-lg text-muted-foreground">
                A passionate Full-Stack Developer based in [Your Location].
              </p>
              <p className="mb-6">
                With over 6 years of experience in web development, I specialize in
                creating modern and responsive web applications that provide an
                excellent user experience. My journey in tech began when I built my
                first website at 15, and I've been hooked ever since.
              </p>
              <p className="mb-6">
                I hold a Bachelor's degree in Computer Science and have worked with
                clients ranging from startups to large corporations. My approach to
                development focuses on writing clean, maintainable code that solves
                real-world problems efficiently.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or enjoying outdoor
                activities like hiking and photography.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Skills & Expertise"
            subtitle="What I bring to the table"
          />

          <div className="mx-auto max-w-3xl">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {skills.map((skill) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 rounded-lg bg-background p-4 shadow-sm"
                >
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Professional Experience"
            subtitle="My journey in the industry"
          />

          <div className="mx-auto max-w-4xl">
            <div className="relative space-y-12 pl-6 before:absolute before:left-0 before:h-full before:border-l-2 before:border-dashed before:border-muted-foreground/30">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-9 flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                    <div className="h-2 w-2 rounded-full bg-white"></div>
                  </div>
                  <div className="mb-1 text-sm font-bold text-primary">
                    {exp.period}
                  </div>
                  <h3 className="mb-1 text-xl font-semibold">{exp.role}</h3>
                  <div className="mb-3 text-muted-foreground">{exp.company}</div>
                  <p>{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
