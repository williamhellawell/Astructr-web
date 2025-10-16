import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { DataVisualization } from "@/components/DataVisualization";
import { ViewToggle } from "@/components/ViewToggle";

const Landing = () => {
  const [viewMode, setViewMode] = useState<"use-case" | "role">("use-case");

  return (
    <div className="min-h-screen bg-background">
      {/* Dynamic Gradient Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div 
          className="absolute top-0 left-0 w-[1000px] h-[1000px] rounded-full blur-3xl opacity-20"
          style={{
            background: "radial-gradient(circle, hsl(215, 100%, 61%) 0%, transparent 70%)"
          }}
        />
        <div 
          className="absolute bottom-0 right-0 w-[800px] h-[800px] rounded-full blur-3xl opacity-15"
          style={{
            background: "radial-gradient(circle, hsl(203, 96%, 15%) 0%, transparent 70%)"
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full blur-3xl opacity-10"
          style={{
            background: "radial-gradient(circle, hsl(215, 100%, 71%) 0%, transparent 70%)"
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-8 pt-32 pb-20">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <h1 className="font-heading text-6xl lg:text-7xl font-bold text-primary leading-tight">
                Your Data's True Potential, Structured.
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Astructr is the infrastructure that optimizes how your business integrates with its own data and the data of your industry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/contact">
                  <Button 
                    size="lg" 
                    className="text-lg px-8 py-6 bg-accent hover:bg-accent/90 shadow-accent text-white font-medium"
                  >
                    Get Started
                  </Button>
                </Link>
                <Link to="/product">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="text-lg px-8 py-6 border-2 border-primary/20 text-primary hover:bg-primary/5 font-medium"
                  >
                    View a Demo
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column - Data Visualization */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-2xl aspect-[4/3] flex items-center justify-center">
                <DataVisualization />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Toggle Section */}
      <section className="relative py-20 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-heading text-5xl font-bold text-primary mb-12">
            Explore Our Solutions
          </h2>
          <div className="flex justify-center mb-16">
            <ViewToggle value={viewMode} onChange={setViewMode} />
          </div>

          {/* Content based on toggle */}
          {viewMode === "use-case" ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <div className="w-8 h-8 bg-accent rounded-lg"></div>
                </div>
                <h3 className="font-heading text-2xl font-bold text-primary mb-4">
                  Financial Analysis
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Transform unstructured financial reports into queryable knowledge graphs for instant trend analysis.
                </p>
              </div>

              <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <div className="w-8 h-8 bg-accent rounded-lg"></div>
                </div>
                <h3 className="font-heading text-2xl font-bold text-primary mb-4">
                  Legal Discovery
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Process case files into interactive timelines with instant filtering of key events and evidence.
                </p>
              </div>

              <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <div className="w-8 h-8 bg-accent rounded-lg"></div>
                </div>
                <h3 className="font-heading text-2xl font-bold text-primary mb-4">
                  Manufacturing R&D
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Convert technical schematics into explorable 3D models with linked component data.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <div className="w-8 h-8 bg-accent rounded-lg"></div>
                </div>
                <h3 className="font-heading text-2xl font-bold text-primary mb-4">
                  Data Scientists
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Access clean, structured data through intuitive APIs with complete metadata for every chunk.
                </p>
              </div>

              <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <div className="w-8 h-8 bg-accent rounded-lg"></div>
                </div>
                <h3 className="font-heading text-2xl font-bold text-primary mb-4">
                  AI Engineers
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Build reliable AI systems on top of pristine, LLM-native vector databases.
                </p>
              </div>

              <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <div className="w-8 h-8 bg-accent rounded-lg"></div>
                </div>
                <h3 className="font-heading text-2xl font-bold text-primary mb-4">
                  Product Leaders
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Unlock new AI-powered features with enterprise-grade data infrastructure.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-32 px-8 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-heading text-5xl lg:text-6xl font-bold text-primary mb-8">
            Ready to Structure Your Data?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            See how Astructr can transform your unstructured data into a powerful, queryable asset.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-accent hover:bg-accent/90 shadow-accent text-white font-medium"
              >
                Request Demo
              </Button>
            </Link>
            <Link to="/pricing">
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6 border-2 border-primary/20 text-primary hover:bg-primary/5 font-medium"
              >
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
