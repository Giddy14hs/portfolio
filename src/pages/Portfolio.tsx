
import { useState } from "react";
import { motion } from "framer-motion";
import PageLayout from "@/components/Layout/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";

const PortfolioPage = () => {
  // Project categories
  const categories = ["All", "Web", "Mobile", "Design", "Backend"];
  const [activeCategory, setActiveCategory] = useState("All");

  // Sample project data
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-featured e-commerce platform with product management, cart, and payment processing.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Web",
      liveUrl: "https://example.com/ecommerce",
      githubUrl: "https://github.com/yourusername/ecommerce",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern portfolio website for a digital designer showcasing their work and services.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
      category: "Web",
      liveUrl: "https://example.com/portfolio",
      githubUrl: "https://github.com/yourusername/portfolio",
    },
    {
      title: "Finance Dashboard",
      description:
        "An interactive dashboard to visualize financial data with custom charts and filters.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      tags: ["React", "D3.js", "Firebase", "TypeScript"],
      category: "Web",
      liveUrl: "https://example.com/finance",
      githubUrl: "https://github.com/yourusername/finance",
    },
    {
      title: "Mobile Fitness App",
      description:
        "A fitness tracking app with workout plans, progress tracking, and social features.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      tags: ["React Native", "Firebase", "Redux"],
      category: "Mobile",
      githubUrl: "https://github.com/yourusername/fitness-app",
    },
    {
      title: "Restaurant Booking System",
      description:
        "An online reservation system for restaurants with table management and notifications.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      tags: ["Vue.js", "Node.js", "PostgreSQL"],
      category: "Backend",
      liveUrl: "https://example.com/restaurant",
      githubUrl: "https://github.com/yourusername/restaurant",
    },
    {
      title: "Brand Identity Design",
      description:
        "A complete brand identity design including logo, color palette, and brand guidelines.",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
      tags: ["Figma", "Adobe Illustrator", "Design System"],
      category: "Design",
      liveUrl: "https://example.com/brand",
    },
  ];

  // Filter projects based on active category
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <PageLayout>
      <section className="bg-gradient-to-b from-background to-muted/20 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="My Portfolio"
            subtitle="Showcasing my recent projects and work"
          />

          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="min-w-[100px]"
              >
                {category}
              </Button>
            ))}
          </div>

          <motion.div
            layout
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                  liveUrl={project.liveUrl}
                  githubUrl={project.githubUrl}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold">Interested in my work?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <a
            href="mailto:contact@example.com"
            className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-lg font-medium text-primary-foreground hover:bg-primary/90"
          >
            Let's Talk
          </a>
        </div>
      </section>
    </PageLayout>
  );
};

export default PortfolioPage;
