import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Sparkles } from "lucide-react";

const Studio = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "You're on the list!",
      description: "We'll notify you when Studio launches.",
    });
    setEmail("");
  };

  return (
    <div className="min-h-screen pt-24 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <div className="mb-12 animate-float">
          <div className="w-24 h-24 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto shadow-accent">
            <Sparkles className="w-12 h-12 text-accent-foreground" />
          </div>
        </div>

        <h1 className="text-7xl font-bold text-primary mb-8 animate-fade-in-up">
          The Studio is Coming Soon
        </h1>
        
        <p className="text-2xl text-muted-foreground mb-6 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          A playground for you to experiment with the Arcxion engine.
        </p>
        
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Upload documents, test parsing algorithms, and see the magic of data transformation in real-time. 
          Perfect for prototyping and exploring what's possible.
        </p>

        <div className="bg-card p-12 rounded-2xl shadow-xl border border-border max-w-2xl mx-auto animate-scale-in" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-2xl font-semibold text-primary mb-6">
            Get Notified When We Launch
          </h2>
          <form onSubmit={handleSubmit} className="flex gap-4">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-14 text-lg"
              required
            />
            <Button 
              type="submit" 
              size="lg" 
              className="bg-accent hover:bg-accent/90 px-10 h-14 text-lg shadow-accent"
            >
              Notify Me
            </Button>
          </form>
          <p className="text-sm text-muted-foreground mt-6">
            Join the waitlist and be among the first to access Studio when it launches.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-8 text-left">
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-xl font-semibold text-primary mb-3">
              Interactive Testing
            </h3>
            <p className="text-muted-foreground">
              Upload your documents and see instant parsing results with detailed breakdowns.
            </p>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <h3 className="text-xl font-semibold text-primary mb-3">
              Algorithm Tuning
            </h3>
            <p className="text-muted-foreground">
              Adjust extraction parameters and optimize for your specific document types.
            </p>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-xl font-semibold text-primary mb-3">
              Export & Deploy
            </h3>
            <p className="text-muted-foreground">
              Once satisfied, export configurations directly to your production environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studio;
