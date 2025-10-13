import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText, Brain, AlertCircle, Check, Database, Zap, Layers } from "lucide-react";

const Landing = () => {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [problemVisible, setProblemVisible] = useState(false);
  const [solutionStep, setSolutionStep] = useState(0);
  const problemRef = useRef<HTMLDivElement>(null);
  const solutionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => setHeroLoaded(true), 100);

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
          const progress = Math.min(entry.intersectionRatio * 4, 4);
          setSolutionStep(Math.floor(progress));
        }
      });
    }, { threshold: [0, 0.25, 0.5, 0.75, 1] });

    if (problemRef.current) problemObserver.observe(problemRef.current);
    if (solutionRef.current) solutionObserver.observe(solutionRef.current);

    return () => {
      problemObserver.disconnect();
      solutionObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/3 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-8 pt-24">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          {/* Central Dynamic Graphic */}
          <div className={`mb-12 transition-all duration-1000 ${heroLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <div className="relative w-full max-w-2xl mx-auto h-80">
              {/* Chaotic data points organizing */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Chaotic particles that organize */}
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-4 h-4 bg-accent rounded-full animate-float"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${i * 0.2}s`,
                        animationDuration: `${3 + Math.random() * 2}s`
                      }}
                    />
                  ))}
                  
                  {/* Central organizing structure */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <Database className="w-32 h-32 text-primary animate-pulse" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-40 h-40 border-2 border-accent/30 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-48 h-48 border border-accent/20 rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
                      </div>
                    </div>
                  </div>

                  {/* Glowing energy lines */}
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={`line-${i}`}
                      className="absolute top-1/2 left-1/2 w-1 bg-gradient-to-t from-accent/50 to-transparent"
                      style={{
                        height: '40%',
                        transform: `rotate(${i * 45}deg) translateY(-50%)`,
                        transformOrigin: 'center',
                        animation: 'pulse 2s ease-in-out infinite',
                        animationDelay: `${i * 0.25}s`
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Headlines */}
          <h1 className={`text-7xl font-bold text-primary mb-8 transition-all duration-1000 ${heroLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Your Data's True Potential, Structured.
          </h1>
          <p className={`text-xl text-muted-foreground mb-10 leading-relaxed transition-all duration-1000 max-w-3xl mx-auto ${heroLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.2s' }}>
            Astructr is the infrastructure that optimizes how your business integrates with its own data and the data of your industry.
          </p>
          
          <div className={`flex gap-6 justify-center transition-all duration-1000 ${heroLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.4s' }}>
            <Link to="/contact">
              <Button size="lg" className="text-lg px-8 py-6 bg-accent hover:bg-accent/90 shadow-accent">
                Request Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-20 px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-12">
            Powering the AI Stack of Industry Leaders
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center opacity-50">
            {/* Placeholder for logos */}
            <div className="w-40 h-20 bg-muted rounded-lg flex items-center justify-center">
              <span className="text-muted-foreground font-semibold">Partner Logo</span>
            </div>
            <div className="w-40 h-20 bg-muted rounded-lg flex items-center justify-center">
              <span className="text-muted-foreground font-semibold">Partner Logo</span>
            </div>
            <div className="w-40 h-20 bg-muted rounded-lg flex items-center justify-center">
              <span className="text-muted-foreground font-semibold">Partner Logo</span>
            </div>
            <div className="w-40 h-20 bg-muted rounded-lg flex items-center justify-center">
              <span className="text-muted-foreground font-semibold">Partner Logo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section - "Garbage In, Garbage Out" */}
      <section ref={problemRef} className="py-32 px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-primary mb-16 text-center">
            The Problem: Garbage In, Garbage Out
          </h2>
          
          <div className="relative h-96">
            {/* Complex Document */}
            <div className={`absolute left-0 top-1/2 -translate-y-1/2 transition-all duration-1000 ${problemVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
              <div className="bg-card border-2 border-border rounded-lg p-6 w-64 shadow-lg">
                <FileText className="w-16 h-16 text-primary mb-4" />
                <div className="space-y-2">
                  <div className="h-2 bg-muted rounded w-full"></div>
                  <div className="h-2 bg-muted rounded w-3/4"></div>
                  <div className="h-16 bg-accent/10 rounded"></div>
                  <div className="h-2 bg-muted rounded w-full"></div>
                  <div className="h-2 bg-muted rounded w-2/3"></div>
                </div>
                <p className="text-xs text-muted-foreground mt-4 font-semibold">Complex Document</p>
              </div>
            </div>

            {/* Arrow */}
            <div className={`absolute left-80 top-1/2 -translate-y-1/2 transition-all duration-1000 ${problemVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '0.3s' }}>
              <div className="w-40 h-1 bg-gradient-to-r from-primary to-destructive relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-destructive border-b-8 border-b-transparent"></div>
              </div>
            </div>

            {/* AI Brain with Errors */}
            <div className={`absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transition-all duration-1000 ${problemVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} style={{ transitionDelay: '0.6s' }}>
              <div className="relative">
                <Brain className="w-32 h-32 text-destructive animate-pulse" />
                <AlertCircle className="absolute -top-2 -right-2 w-12 h-12 text-destructive animate-bounce" />
                <AlertCircle className="absolute -bottom-2 -left-2 w-10 h-10 text-destructive animate-bounce" style={{ animationDelay: '0.2s' }} />
              </div>
            </div>

            {/* Arrow */}
            <div className={`absolute right-80 top-1/2 -translate-y-1/2 transition-all duration-1000 ${problemVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '0.9s' }}>
              <div className="w-40 h-1 bg-destructive relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-destructive border-b-8 border-b-transparent"></div>
              </div>
            </div>

            {/* Scrambled Output */}
            <div className={`absolute right-0 top-1/2 -translate-y-1/2 transition-all duration-1000 ${problemVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`} style={{ transitionDelay: '1.2s' }}>
              <div className="bg-destructive/10 border-2 border-destructive rounded-lg p-6 w-64">
                <div className="space-y-2">
                  <div className="h-2 bg-destructive/30 rounded w-2/3"></div>
                  <div className="h-2 bg-destructive/30 rounded w-full"></div>
                  <div className="h-2 bg-destructive/30 rounded w-1/2"></div>
                  <div className="flex gap-2 mt-4">
                    <AlertCircle className="w-6 h-6 text-destructive" />
                    <span className="text-sm text-destructive font-bold">ERROR</span>
                  </div>
                  <div className="h-2 bg-destructive/30 rounded w-3/4"></div>
                </div>
                <p className="text-xs text-destructive mt-4 font-semibold">Scrambled Output</p>
              </div>
            </div>
          </div>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-center mt-16 leading-relaxed">
            Your LLM can't understand messy, unstructured documents. The result? Unreliable AI that undermines your investment.
          </p>
        </div>
      </section>

      {/* Solution Section - "Parse, Extract, Structure" */}
      <section ref={solutionRef} className="py-32 px-8 bg-gradient-hero relative overflow-hidden min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-5xl font-bold text-primary mb-16 text-center">
            The Astructr Solution
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-20 text-center leading-relaxed">
            Astructr transforms data chaos into pristine, structured, LLM-native vector databases.
          </p>
          
          <div className="relative h-[500px]">
            {/* Messy Documents */}
            <div className={`absolute left-0 top-1/2 -translate-y-1/2 transition-all duration-1000 ${solutionStep >= 1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
              <div className="space-y-4">
                <div className="bg-card border border-border rounded-lg p-4 w-48 shadow-md transform -rotate-3">
                  <FileText className="w-8 h-8 text-muted-foreground mb-2" />
                  <div className="h-1 bg-muted rounded w-full mb-1"></div>
                  <div className="h-1 bg-muted rounded w-3/4"></div>
                </div>
                <div className="bg-card border border-border rounded-lg p-4 w-48 shadow-md transform rotate-2">
                  <FileText className="w-8 h-8 text-muted-foreground mb-2" />
                  <div className="h-1 bg-muted rounded w-full mb-1"></div>
                  <div className="h-1 bg-muted rounded w-2/3"></div>
                </div>
              </div>
            </div>

            {/* Astructr Engine */}
            <div className={`absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transition-all duration-1000 ${solutionStep >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              <div className="bg-gradient-accent rounded-2xl p-8 w-80 shadow-xl border-2 border-accent relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-foreground/10 to-transparent"></div>
                </div>
                <div className="relative z-10">
                  <Zap className="w-12 h-12 text-accent-foreground mx-auto mb-3" />
                  <p className="text-accent-foreground font-bold text-center text-xl mb-6">Astructr Engine</p>
                  {solutionStep >= 2 && (
                    <div className="space-y-3">
                      <div className={`flex items-center gap-3 transition-all duration-500 ${solutionStep >= 3 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                        <Check className="w-5 h-5 text-accent-foreground" />
                        <span className="text-accent-foreground font-semibold">PARSE</span>
                      </div>
                      <div className={`flex items-center gap-3 transition-all duration-500 ${solutionStep >= 3 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} style={{ transitionDelay: '0.2s' }}>
                        <Check className="w-5 h-5 text-accent-foreground" />
                        <span className="text-accent-foreground font-semibold">EXTRACT</span>
                      </div>
                      <div className={`flex items-center gap-3 transition-all duration-500 ${solutionStep >= 3 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} style={{ transitionDelay: '0.4s' }}>
                        <Check className="w-5 h-5 text-accent-foreground" />
                        <span className="text-accent-foreground font-semibold">STRUCTURE</span>
                      </div>
                    </div>
                  )}
                </div>
                {/* Animated glow */}
                <div className="absolute inset-0 bg-accent/20 blur-xl animate-pulse"></div>
              </div>
            </div>

            {/* Clean Database Stack */}
            <div className={`absolute right-0 top-1/2 -translate-y-1/2 transition-all duration-1000 ${solutionStep >= 4 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
              <div className="relative">
                <div className="space-y-2">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="bg-card border-2 border-accent rounded-lg p-4 w-56 shadow-lg transition-all duration-500"
                      style={{
                        transform: `translateY(${i * -4}px)`,
                        opacity: 1 - (i * 0.15),
                        transitionDelay: `${i * 0.1}s`
                      }}
                    >
                      <Layers className="w-6 h-6 text-accent mb-2" />
                      <div className="h-1 bg-accent/50 rounded w-full mb-1"></div>
                      <div className="h-1 bg-accent/50 rounded w-4/5"></div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-primary font-semibold mt-6 text-center">Structured Vector Database</p>
                
                {/* Connection line to LLM */}
                {solutionStep >= 4 && (
                  <div className="absolute -right-32 top-1/2 -translate-y-1/2">
                    <div className="w-24 h-1 bg-success relative animate-fade-in">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-success border-b-8 border-b-transparent"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Happy LLM */}
            {solutionStep >= 4 && (
              <div className="absolute -right-16 top-1/2 -translate-y-1/2 animate-fade-in">
                <Brain className="w-24 h-24 text-success" />
                <Check className="absolute -top-2 -right-2 w-10 h-10 text-success animate-bounce" />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* "What if you could..." Section */}
      <section className="py-32 px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-bold text-primary mb-20 text-center">
            What if your data could answer any question?
          </h2>
          
          <div className="space-y-12">
            {/* Question 1 */}
            <div className="bg-card border border-border rounded-2xl p-12 shadow-lg hover:shadow-xl transition-smooth">
              <h3 className="text-3xl font-bold text-primary mb-4">
                ...ask a machine for its complete maintenance history and safety requirements just by describing it?
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Transform decades of maintenance logs, technical manuals, and safety documentation into an intelligent, queryable system.
              </p>
              <Link to="/product">
                <Button variant="outline" size="lg" className="text-lg">
                  See the Use Case
                </Button>
              </Link>
            </div>

            {/* Question 2 */}
            <div className="bg-card border border-border rounded-2xl p-12 shadow-lg hover:shadow-xl transition-smooth">
              <h3 className="text-3xl font-bold text-primary mb-4">
                ...instantly cross-reference every technical schematic you've ever produced to find a specific component?
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Turn your engineering drawings, CAD files, and technical specifications into a searchable knowledge graph.
              </p>
              <Link to="/product">
                <Button variant="outline" size="lg" className="text-lg">
                  See the Use Case
                </Button>
              </Link>
            </div>

            {/* Question 3 */}
            <div className="bg-card border border-border rounded-2xl p-12 shadow-lg hover:shadow-xl transition-smooth">
              <h3 className="text-3xl font-bold text-primary mb-4">
                ...transform decades of static reports into an intelligent, queryable asset for your entire organization?
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Unlock the value trapped in PDFs, spreadsheets, and legacy documents across your enterprise.
              </p>
              <Link to="/contact">
                <Button size="lg" className="text-lg bg-accent hover:bg-accent/90 shadow-accent">
                  Request a Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-primary mb-16 text-center">
            Three Ways to Power Your AI
          </h2>
          
          <div className="grid grid-cols-3 gap-12">
            {/* Service 1 */}
            <div className="bg-card border border-border rounded-2xl p-10 shadow-lg hover:shadow-xl transition-smooth">
              <div className="bg-gradient-accent w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Database className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Your Data, Optimized</h3>
              <p className="text-muted-foreground leading-relaxed">
                Send us your proprietary documents. We transform them into a pristine, structured vector database optimized for your LLM.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-card border border-border rounded-2xl p-10 shadow-lg hover:shadow-xl transition-smooth">
              <div className="bg-gradient-accent w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Layers className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Industry Data Vaults</h3>
              <p className="text-muted-foreground leading-relaxed">
                Access pre-built, curated databases for your industry. From financial data to legal precedents to biotech research.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-card border border-border rounded-2xl p-10 shadow-lg hover:shadow-xl transition-smooth">
              <div className="bg-gradient-accent w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Custom Hybrid Databases</h3>
              <p className="text-muted-foreground leading-relaxed">
                Combine your proprietary data with our Industry Vaults to create a powerful, unique knowledge base for your AI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-8 bg-gradient-accent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-accent-foreground mb-8">
            Ready to unlock your data's potential?
          </h2>
          <p className="text-xl text-accent-foreground/90 mb-10 leading-relaxed">
            Join leading enterprises who trust Astructr to power their AI infrastructure.
          </p>
          <Link to="/contact">
            <Button size="lg" className="text-lg px-12 py-6 bg-accent-foreground text-accent hover:bg-accent-foreground/90">
              Request a Demo
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Landing;
