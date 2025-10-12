import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Database, Zap, Shield, ArrowRight } from "lucide-react";
import heroVisual from "@/assets/hero-visual.jpg";
import problemVisual from "@/assets/problem-visual.jpg";
import solutionVisual from "@/assets/solution-visual.jpg";

const Landing = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-hero px-8 pt-24">
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <h1 className="text-7xl font-bold text-primary mb-6 leading-tight">
              Turn Your Data Chaos into AI Clarity
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Arcxion.ai is the infrastructure that makes your LLM actually work on your company's data.
            </p>
            <div className="flex gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-accent text-base px-8">
                  Request Demo
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="text-base px-8">
                  Start Free
                </Button>
              </Link>
            </div>
          </div>
          <div className="animate-fade-in">
            <img 
              src={heroVisual} 
              alt="Data transformation visualization" 
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-32 px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-20 items-center">
            <div className="animate-fade-in">
              <img 
                src={problemVisual} 
                alt="The data chaos problem" 
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
            <div className="animate-slide-in-right">
              <h2 className="text-5xl font-bold text-primary mb-6">
                The Problem: Garbage In, Garbage Out
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Your LLM investments are underperforming because they can't read the messy, unstructured documents that contain your most valuable data.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                PDFs, reports, spreadsheets—these are treasure troves of insights, but they're locked away in formats that AI struggles to understand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-32 px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-primary mb-6">
              Our Solution: Parse → Extract → Structure
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Arcxion.ai transforms data chaos into pristine, structured, LLM-native vector databases.
            </p>
          </div>
          
          <div className="mb-16">
            <img 
              src={solutionVisual} 
              alt="Arcxion solution pipeline" 
              className="w-full h-auto rounded-2xl shadow-xl mx-auto"
            />
          </div>

          <div className="grid grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-xl shadow-md border border-border animate-fade-in">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <Database className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold text-primary mb-4">Parse</h3>
              <p className="text-muted-foreground leading-relaxed">
                Advanced extraction algorithms digest complex documents, preserving critical structure and context.
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-md border border-border animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold text-primary mb-4">Extract</h3>
              <p className="text-muted-foreground leading-relaxed">
                Intelligent systems identify and extract key entities, relationships, and semantic meaning.
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-md border border-border animate-fade-in" style={{ animationDelay: '0.2s' }}>
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
              <Link to="/product" className="inline-flex items-center text-accent font-medium group-hover:gap-2 transition-smooth">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="group bg-card p-10 rounded-2xl shadow-lg border border-border hover:shadow-accent transition-smooth hover:scale-105">
              <h3 className="text-2xl font-semibold text-primary mb-4">Industry Data Vaults</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Pre-built, expertly curated databases for your industry—ready to deploy immediately.
              </p>
              <Link to="/product" className="inline-flex items-center text-accent font-medium group-hover:gap-2 transition-smooth">
                Explore Vaults <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="group bg-card p-10 rounded-2xl shadow-lg border border-border hover:shadow-accent transition-smooth hover:scale-105">
              <h3 className="text-2xl font-semibold text-primary mb-4">Custom Hybrid Databases</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Combine your data with industry vaults to create a uniquely powerful knowledge base.
              </p>
              <Link to="/product" className="inline-flex items-center text-accent font-medium group-hover:gap-2 transition-smooth">
                Build Custom <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8 bg-gradient-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Transform Your AI Infrastructure?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Join forward-thinking companies who've turned their data into a competitive advantage.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-base px-8">
                Request Demo
              </Button>
            </Link>
            <Link to="/pricing">
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
