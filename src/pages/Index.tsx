import { CodeIcon, PaletteIcon, ServerIcon } from "lucide-react";
import { motion } from "framer-motion";
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
      author: "Brian",
      role: "Lead Physiotherapist",
    },
    {
      quote:
        "Incredibly talented and professional. The final website exceeded our expectations and has significantly improved our online presence.",
      author: "Esther",
      role: "CEO, Brighter-World Programme",
    },
  ];

  return (
    <>
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
                Building Digital
                <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  {" "}
                  Experiences{" "}
                </span>
                That Matter
              </h1>
              <p className="mb-8 text-lg text-muted-foreground">
                I'm a full-stack developer passionate about creating beautiful and
                functional web applications. Let's work together to bring your
                ideas to life.
              </p>
              <div className="flex gap-4">
                <Button asChild size="lg">
                  <Link to="/portfolio">View My Work</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Get In Touch</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <AnimatedImage
                src="/hero-image.jpg"
                alt="Developer working on laptop"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Services"
            description="What I can do for you"
            className="mb-12"
          />
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Testimonials"
            description="What my clients say"
            className="mb-12"
          />
          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

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
    </>
  );
};

export default Index;
