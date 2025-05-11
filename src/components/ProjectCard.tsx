
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AnimatedImage from "@/components/AnimatedImage";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl,
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="h-full overflow-hidden">
        <div className="relative aspect-video overflow-hidden">
          <motion.div
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <AnimatedImage
              src={image}
              alt={title}
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
        <CardContent className="p-5">
          <h3 className="mb-2 text-xl font-bold">{title}</h3>
          <p className="mb-3 text-muted-foreground">{description}</p>
          <div className="mb-3 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
        <CardFooter className="border-t border-border px-5 py-3">
          <div className="flex gap-3">
            {liveUrl && (
              <Button variant="outline" size="sm" asChild>
                <a href={liveUrl} target="_blank" rel="noreferrer">
                  <ExternalLink className="mr-1 h-3.5 w-3.5" />
                  Live Preview
                </a>
              </Button>
            )}
            {githubUrl && (
              <Button variant="outline" size="sm" asChild>
                <a href={githubUrl} target="_blank" rel="noreferrer">
                  <Github className="mr-1 h-3.5 w-3.5" />
                  Repository
                </a>
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
