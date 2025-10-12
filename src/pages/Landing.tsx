import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Database, Zap, Shield, ArrowRight, FileX, AlertTriangle, CheckCircle } from "lucide-react";

const Landing = () => {
  const [problemVisible, setProblemVisible] = useState(false);
  const [solutionStep, setSolutionStep] = useState(0);
  const problemRef = useRef<HTMLDivElement>(null);
  const solutionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: "0px"
    };

    const problemObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setProblemVisible(true);
        }
      });
    }, observerOptions);

    const solutionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const scrollProgress = entry.intersectionRatio;
          if (scrollProgress > 0.3) setSolutionStep(1);
          if (scrollProgress > 0.5) setSolutionStep(2);
          if (scrollProgress > 0.7) setSolutionStep(3);
        }
      });
    }, { threshold: [0.3, 0.5, 0.7] });

    if (problemRef.current) problemObserver.observe(problemRef.current);
    if (solutionRef.current) solutionObserver.observe(solutionRef.current);

    return () => {
      problemObserver.disconnect();
      solutionObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-hero px-8 pt-24 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up z-10">
            <h1 className="text-7xl font-bold text-primary mb-6 leading-tight">
              Turn Your Data Chaos into AI Clarity
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Arcxion.ai is the infrastructure that makes your LLM actually work on your company's data.
            </p>
            <div className="flex gap-4">
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-accent text-base px-8">
                  Request Demo
                </Button>
              </Link>
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                <Button size="lg" variant="outline" className="text-base px-8">
                  Start Free
                </Button>
              </Link>
            </div>
          </div>
          <div className="animate-fade-in z-10">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-2xl animate-pulse" />
              <div className="relative bg-gradient-to-br from-primary/5 to-accent/5 p-12 rounded-2xl border border-accent/20 backdrop-blur-sm">
                <div className="space-y-6">
                  {/* Data Flow Visualization */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center animate-scale-in">
                      <FileX className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1 h-1 bg-gradient-to-r from-primary/20 to-transparent animate-fade-in" style={{ animationDelay: '0.3s' }} />
                  </div>
                  <div className="flex items-center gap-4" style={{ animationDelay: '0.6s' }}>
                    <div className="w-20 h-20 bg-accent/10 rounded-xl flex items-center justify-center animate-scale-in border-2 border-accent/30">
                      <Zap className="w-10 h-10 text-accent" />
                    </div>
                    <div className="flex-1 h-1 bg-gradient-to-r from-accent/20 to-transparent animate-fade-in" style={{ animationDelay: '0.9s' }} />
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-success/10 rounded-lg flex items-center justify-center animate-scale-in" style={{ animationDelay: '1.2s' }}>
                      <CheckCircle className="w-8 h-8 text-success" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section - Animated */}
      <section ref={problemRef} className="py-32 px-8 bg-background relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-20 items-center">
            <div className={`transition-all duration-1000 ${problemVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="relative">
                {/* Animated Problem Visualization */}
                <div className="bg-destructive/5 p-12 rounded-2xl border border-destructive/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-destructive/10 to-transparent" />
                  
                  {/* Chaotic Documents */}
                  <div className="relative space-y-4">
                    {[...Array(5)].map((_, i) => (
                      <div 
                        key={i}
                        className={`flex items-center gap-3 p-4 bg-card rounded-lg border border-destructive/30 ${problemVisible ? 'animate-fade-in' : 'opacity-0'}`}
                        style={{ 
                          animationDelay: `${i * 0.1}s`,
                          transform: `rotate(${(i - 2) * 3}deg)`
                        }}
                      >
                        <FileX className="w-6 h-6 text-destructive" />
                        <div className="flex-1 h-2 bg-muted rounded animate-pulse" />
                        <AlertTriangle className="w-5 h-5 text-warning" />
                      </div>
                    ))}
                  </div>

                  {/* Error Indicators */}
                  <div className={`mt-8 flex items-center justify-center gap-2 ${problemVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
                    <div className="px-6 py-3 bg-destructive/20 text-destructive rounded-lg font-semibold">
                      ERROR: Unable to Parse
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`transition-all duration-1000 delay-300 ${problemVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <h2 className="text-5xl font-bold text-primary mb-6">
                The Problem: Garbage In, Garbage Out
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Your LLM investments are underperforming because they can't read the messy, unstructured documents that contain your most valuable data.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                PDFs, reports, spreadsheets—these are treasure troves of insights, but they're locked away in formats that AI struggles to understand.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 bg-destructive rounded-full" />
                  <span>95% of enterprise data is unstructured</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 bg-destructive rounded-full" />
                  <span>Traditional parsers fail on complex layouts</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 bg-destructive rounded-full" />
                  <span>Your AI can't access your best data</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section - Scrollytelling */}
      <section ref={solutionRef} className="min-h-screen py-32 px-8 bg-secondary/30 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-primary mb-6">
              Our Solution: Parse → Extract → Structure
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Arcxion.ai transforms data chaos into pristine, structured, LLM-native vector databases.
            </p>
          </div>
          
          {/* Animated Pipeline */}
          <div className="relative mb-20">
            <div className="flex items-center justify-between gap-8 relative">
              {/* Messy Documents */}
              <div className={`transition-all duration-1000 ${solutionStep >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                <div className="bg-muted/50 p-8 rounded-xl border border-border">
                  <h3 className="text-sm font-semibold text-muted-foreground mb-4">INPUT</h3>
                  <div className="space-y-2">
                    <div className="w-32 h-3 bg-primary/20 rounded" />
                    <div className="w-28 h-3 bg-primary/20 rounded" />
                    <div className="w-24 h-3 bg-primary/20 rounded" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">Messy Documents</p>
                </div>
              </div>

              {/* Flow Arrow */}
              <div className={`flex-1 h-0.5 bg-gradient-to-r from-primary/30 to-accent/30 relative transition-all duration-1000 ${solutionStep >= 1 ? 'opacity-100' : 'opacity-0'}`}>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-accent rounded-full" />
              </div>

              {/* Arcxion Engine */}
              <div className={`transition-all duration-1000 ${solutionStep >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                <div className="relative">
                  <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-xl animate-pulse" />
                  <div className="relative bg-gradient-accent p-10 rounded-2xl border-2 border-accent">
                    <Zap className="w-12 h-12 text-accent-foreground mx-auto mb-3" />
                    <p className="text-accent-foreground font-bold text-center">Arcxion Engine</p>
                    {solutionStep >= 2 && (
                      <div className="mt-4 space-y-1">
                        <div className="text-xs text-accent-foreground/80 text-center animate-fade-in">PARSE</div>
                        <div className="text-xs text-accent-foreground/80 text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>EXTRACT</div>
                        <div className="text-xs text-accent-foreground/80 text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>STRUCTURE</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Flow Arrow */}
              <div className={`flex-1 h-0.5 bg-gradient-to-r from-accent/30 to-success/30 relative transition-all duration-1000 ${solutionStep >= 2 ? 'opacity-100' : 'opacity-0'}`}>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-success rounded-full" />
              </div>

              {/* Clean Database */}
              <div className={`transition-all duration-1000 ${solutionStep >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                <div className="bg-success/5 p-8 rounded-xl border-2 border-success/30">
                  <h3 className="text-sm font-semibold text-success mb-4">OUTPUT</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Database className="w-4 h-4 text-success" />
                      <div className="flex-1 h-2 bg-success/30 rounded" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Database className="w-4 h-4 text-success" />
                      <div className="flex-1 h-2 bg-success/30 rounded" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Database className="w-4 h-4 text-success" />
                      <div className="flex-1 h-2 bg-success/30 rounded" />
                    </div>
                  </div>
                  <p className="text-xs text-success mt-4">Vector Database</p>
                </div>
              </div>
            </div>
          </div>

          {/* Process Details */}
          <div className="grid grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-xl shadow-md border border-border hover:shadow-accent transition-smooth">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <Database className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold text-primary mb-4">Parse</h3>
              <p className="text-muted-foreground leading-relaxed">
                Advanced extraction algorithms digest complex documents, preserving critical structure and context.
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-md border border-border hover:shadow-accent transition-smooth">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold text-primary mb-4">Extract</h3>
              <p className="text-muted-foreground leading-relaxed">
                Intelligent systems identify and extract key entities, relationships, and semantic meaning.
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-md border border-border hover:shadow-accent transition-smooth">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold text-primary mb-4">Structure</h3>
              <p className="text-muted-foreground leading-relaxed">
                Data is transformed into LLM-optimized vector databases, ready for high-accuracy queries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-primary mb-6">
              Three Ways to Transform Your Data
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <div className="group bg-card p-10 rounded-2xl shadow-lg border border-border hover:shadow-accent transition-smooth hover:scale-105">
              <h3 className="text-2xl font-semibold text-primary mb-4">Your Data, Optimized</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Upload your proprietary documents and we'll transform them into a pristine, query-ready database.
              </p>
              <Link to="/product" onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center text-accent font-medium group-hover:gap-2 transition-smooth">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="group bg-card p-10 rounded-2xl shadow-lg border border-border hover:shadow-accent transition-smooth hover:scale-105">
              <h3 className="text-2xl font-semibold text-primary mb-4">Industry Data Vaults</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Pre-built, expertly curated databases for your industry—ready to deploy immediately.
              </p>
              <Link to="/product" onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center text-accent font-medium group-hover:gap-2 transition-smooth">
                Explore Vaults <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="group bg-card p-10 rounded-2xl shadow-lg border border-border hover:shadow-accent transition-smooth hover:scale-105">
              <h3 className="text-2xl font-semibold text-primary mb-4">Custom Hybrid Databases</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Combine your data with industry vaults to create a uniquely powerful knowledge base.
              </p>
              <Link to="/product" onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center text-accent font-medium group-hover:gap-2 transition-smooth">
                Build Custom <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8 bg-gradient-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Transform Your AI Infrastructure?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Join forward-thinking companies who've turned their data into a competitive advantage.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
              <Button size="lg" variant="secondary" className="text-base px-8">
                Request Demo
              </Button>
            </Link>
            <Link to="/pricing" onClick={() => window.scrollTo(0, 0)}>
              <Button size="lg" variant="outline" className="text-base px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
