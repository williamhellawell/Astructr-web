import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Briefcase } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-32 px-8 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-primary mb-8 animate-fade-in">
            Structuring the Future of Enterprise Intelligence
          </h1>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <p>
              Astructr was founded by a team of AI researchers and engineers dedicated to solving the most fundamental challenge in enterprise AI: data accessibility.
            </p>
            
            <p>
              Our mission is to build the foundational infrastructure that allows businesses to unlock the full potential of their own knowledge.
            </p>
            
            <p className="text-xl font-semibold text-primary pt-8">
              More about our team and vision coming soon.
            </p>
          </div>

          <div className="mt-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link to="/contact">
              <Button size="lg" className="text-lg px-8 py-6 bg-accent hover:bg-accent/90 shadow-accent">
                <Briefcase className="w-5 h-5 mr-2" />
                Interested in joining our mission? See open positions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Placeholder Section for Future Content */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 gap-8">
            {[
              { title: "Our Team", description: "Meet the people building the future" },
              { title: "Our Values", description: "The principles that guide our work" },
              { title: "Our Vision", description: "Where we're headed and why" }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-gradient-accent rounded-full mx-auto mb-6"></div>
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
