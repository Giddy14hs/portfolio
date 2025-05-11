
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
import PageLayout from "@/components/Layout/PageLayout";
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
    <PageLayout>
      <section className="bg-gradient-to-b from-background to-muted/20 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="My Services"
            subtitle="Comprehensive solutions for your digital needs"
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="My Approach"
            subtitle="How I work to deliver exceptional results"
          />

          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-lg bg-card p-6 shadow-sm"
            >
              <h3 className="mb-4 text-xl font-semibold">Discovery Phase</h3>
              <p>
                I begin each project with a thorough understanding of your goals,
                target audience, and business needs. This helps me create solutions
                that not only look great but also achieve your objectives.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-lg bg-card p-6 shadow-sm"
            >
              <h3 className="mb-4 text-xl font-semibold">Planning & Design</h3>
              <p>
                After gathering requirements, I create wireframes and prototypes to
                visualize the solution before any coding begins. This ensures we're
                aligned on the direction before investing in development.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-lg bg-card p-6 shadow-sm"
            >
              <h3 className="mb-4 text-xl font-semibold">Development</h3>
              <p>
                I focus on writing clean, efficient, and maintainable code using
                modern development practices. Regular updates and collaboration
                ensure you're always informed about progress.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-lg bg-card p-6 shadow-sm"
            >
              <h3 className="mb-4 text-xl font-semibold">Testing & Launch</h3>
              <p>
                Rigorous testing across different devices and browsers ensures your
                project works flawlessly for all users. After launch, I provide
                support to address any issues and help with future enhancements.
              </p>
            </motion.div>
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
    </PageLayout>
  );
};

export default ServicesPage;
