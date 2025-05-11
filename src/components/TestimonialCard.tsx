
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

const TestimonialCard = ({ quote, author, role }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="h-full">
        <CardContent className="pt-6">
          <div className="mb-4 text-4xl text-primary">"</div>
          <p className="mb-4 italic">{quote}</p>
        </CardContent>
        <CardFooter className="border-t border-border pt-4">
          <div>
            <p className="font-semibold">{author}</p>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default TestimonialCard;
