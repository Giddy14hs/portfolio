import {
  Code,
  Database,
  Globe,
  Laptop,
  LineChart,
  PaletteIcon,
  ServerIcon,
  Smartphone,
} from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";

const ServicesPage = () => {
  const services = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Web Development",
      description:
        "Building modern, responsive websites and web applications using the latest technologies like React, Next.js, and Tailwind CSS.",
    },
    {
      icon: <PaletteIcon className="h-6 w-6" />,
      title: "UI/UX Design",
      description:
        "Creating intuitive and engaging user interfaces with a focus on usability and aesthetics. User research, wireframing, prototyping, and testing.",
    },
    {
      icon: <ServerIcon className="h-6 w-6" />,
      title: "Backend Development",
      description:
        "Building robust server-side applications and APIs using Node.js, Express, and various database solutions to power your digital products.",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Responsive Design",
      description:
        "Ensuring your websites and applications look and function perfectly on all devices, from desktops to smartphones.",
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Database Design",
      description:
        "Designing efficient database structures and implementing them using SQL or NoSQL solutions like PostgreSQL, MySQL, MongoDB, or Firebase.",
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "Performance Optimization",
      description:
        "Analyzing and optimizing web applications for speed, accessibility, and search engine optimization to ensure the best possible user experience.",
    },
    {
      icon: <Laptop className="h-6 w-6" />,
      title: "E-commerce Development",
      description:
        "Building custom e-commerce solutions or working with platforms like Shopify to create seamless online shopping experiences.",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "JAMstack Websites",
      description:
        "Creating lightning-fast websites using JAMstack architecture with modern static site generators like Next.js, Gatsby, or Astro.",
    },
  ];

  return (
    <>
      <section className="bg-gradient-to-b from-background to-muted/20 py-16 md:py-24">
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
        </div>
      </section>

      <section className="bg-gradient-to-tr from-primary/10 via-purple-500/10 to-primary/10 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Ready to start your next project?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Let's discuss how I can help bring your vision to life with a tailored
            solution that meets your specific needs.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="mailto:contact@example.com"
              className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-lg font-medium text-primary-foreground hover:bg-primary/90"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
