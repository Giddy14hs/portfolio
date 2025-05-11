
import { CodeIcon, PaletteIcon, ServerIcon } from "lucide-react";
import { motion } from "framer-motion";
import PageLayout from "@/components/Layout/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import AnimatedImage from "@/components/AnimatedImage";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  const services = [
    {
      icon: <CodeIcon className="h-6 w-6" />,
      title: "Web Development",
      description:
        "Building modern, responsive websites and web applications using the latest technologies.",
    },
    {
      icon: <PaletteIcon className="h-6 w-6" />,
      title: "UI/UX Design",
      description:
        "Creating intuitive and engaging user interfaces with a focus on usability and aesthetics.",
    },
    {
      icon: <ServerIcon className="h-6 w-6" />,
      title: "Backend Development",
      description:
        "Building robust server-side applications and APIs to power your digital products.",
    },
  ];

  const testimonials = [
    {
      quote:
        "Working with this developer was a game-changer for our project. The attention to detail and technical expertise delivered amazing results.",
      author: "Jane Smith",
      role: "CEO, Tech Solutions",
    },
    {
      quote:
        "Incredibly talented and professional. The final website exceeded our expectations and has significantly improved our online presence.",
      author: "Alex Johnson",
      role: "Marketing Director, CreativeHub",
    },
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-muted/20 py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse items-center justify-between gap-12 md:flex-row">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2"
            >
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                Turning Ideas into{" "}
                <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  Digital Reality
                </span>
              </h1>
              <p className="mb-8 text-lg text-muted-foreground md:pr-12">
                I'm a full-stack developer specializing in building exceptional
                digital experiences that are fast, accessible, and visually
                appealing.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link to="/portfolio">View My Work</Link>
                </Button>
                <Button variant="outline" asChild size="lg">
                  <Link to="/contact">Contact Me</Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2"
            >
              <div className="rounded-lg bg-gradient-to-tr from-primary/20 to-purple-500/20 p-2">
                <AnimatedImage
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                  alt="Developer workspace"
                  className="rounded-md"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="About Me"
            subtitle="Learn a bit about who I am and what drives me"
          />
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-6 text-lg">
              I'm a passionate full-stack developer with expertise in creating
              modern web applications. I love solving complex problems and
              turning ideas into reality through clean, efficient code and
              thoughtful design.
            </p>
            <Button asChild>
              <Link to="/about">More About Me</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-muted/20 py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="My Services"
            subtitle="What I can do for your next project"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild>
              <Link to="/services">All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Testimonials"
            subtitle="What clients and colleagues say about my work"
          />
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.author}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-tr from-primary/10 via-purple-500/10 to-primary/10 py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Ready to bring your ideas to life?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Let's collaborate to create something amazing together. I'm available
            for freelance work and interesting projects.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Get In Touch</Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
