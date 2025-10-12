import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Building2, Scale, Beaker, Code, Briefcase } from "lucide-react";

const Product = () => {
  const [activeTab, setActiveTab] = useState("use-cases");

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-20 px-8 bg-gradient-hero">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-primary mb-6">
            Product & Solutions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how Arcxion.ai transforms data chaos into AI clarity across industries and roles.
          </p>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-16">
              <TabsTrigger value="use-cases" className="text-base">By Use Case</TabsTrigger>
              <TabsTrigger value="roles" className="text-base">By Role</TabsTrigger>
            </TabsList>

            <TabsContent value="use-cases" className="space-y-16">
              {/* Financial Analysis */}
              <div className="grid grid-cols-2 gap-16 items-center">
                <div>
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                    <Building2 className="w-8 h-8 text-accent" />
                  </div>
                  <h2 className="text-4xl font-bold text-primary mb-6">
                    For Financial Analysis
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Transform quarterly reports, SEC filings, and financial statements into structured data that your LLM can accurately analyze and query.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                      <span className="text-muted-foreground">Extract key metrics and trends automatically</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                      <span className="text-muted-foreground">Compare data across time periods and companies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                      <span className="text-muted-foreground">Reduce analyst time by 70% on data preparation</span>
                    </li>
                  </ul>
                  <Button className="bg-accent hover:bg-accent/90">
                    Explore Financial Solutions
                  </Button>
                </div>
                <div className="bg-secondary/30 rounded-2xl p-12 border border-border">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">Demo Video Placeholder</p>
                  </div>
                </div>
              </div>

              {/* Legal Discovery */}
              <div className="grid grid-cols-2 gap-16 items-center">
                <div className="bg-secondary/30 rounded-2xl p-12 border border-border">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">Demo Video Placeholder</p>
                  </div>
                </div>
                <div>
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                    <Scale className="w-8 h-8 text-accent" />
                  </div>
                  <h2 className="text-4xl font-bold text-primary mb-6">
                    For Legal Discovery
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Process thousands of legal documents, contracts, and case files into searchable, analyzable databases for rapid discovery.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                      <span className="text-muted-foreground">Identify relevant precedents instantly</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                      <span className="text-muted-foreground">Extract clauses and obligations automatically</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                      <span className="text-muted-foreground">Cut discovery time from weeks to days</span>
                    </li>
                  </ul>
                  <Button className="bg-accent hover:bg-accent/90">
                    Explore Legal Solutions
                  </Button>
                </div>
              </div>

              {/* R&D */}
              <div className="grid grid-cols-2 gap-16 items-center">
                <div>
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                    <Beaker className="w-8 h-8 text-accent" />
                  </div>
                  <h2 className="text-4xl font-bold text-primary mb-6">
                    For R&D
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Convert research papers, lab reports, and technical documentation into a knowledge base that accelerates innovation.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                      <span className="text-muted-foreground">Cross-reference findings across studies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                      <span className="text-muted-foreground">Identify patterns and opportunities faster</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                      <span className="text-muted-foreground">Reduce literature review time by 80%</span>
                    </li>
                  </ul>
                  <Button className="bg-accent hover:bg-accent/90">
                    Explore R&D Solutions
                  </Button>
                </div>
                <div className="bg-secondary/30 rounded-2xl p-12 border border-border">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">Demo Video Placeholder</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="roles" className="space-y-16">
              {/* Data Scientists */}
              <div className="grid grid-cols-2 gap-16 items-center">
                <div>
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                    <Code className="w-8 h-8 text-accent" />
                  </div>
                  <h2 className="text-4xl font-bold text-primary mb-6">
                    For Data Scientists
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Stop wasting time on data wrangling. Get clean, structured, LLM-ready datasets from day one.
                  </p>
                  <div className="space-y-6 mb-8">
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Technical Benefits</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                          <span className="text-muted-foreground">RESTful API for seamless integration</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                          <span className="text-muted-foreground">99.9% uptime SLA with automatic scaling</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                          <span className="text-muted-foreground">Detailed parsing logs and error tracking</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Button className="bg-accent hover:bg-accent/90">
                    View API Documentation
                  </Button>
                </div>
                <div className="bg-secondary/30 rounded-2xl p-8 border border-border">
                  <pre className="text-sm text-muted-foreground overflow-x-auto">
{`// Simple API Integration
import { Arcxion } from '@arcxion/sdk';

const client = new Arcxion({
  apiKey: process.env.ARCXION_KEY
});

const result = await client.process({
  documents: ['report.pdf'],
  format: 'vector-db'
});

console.log(result.vectors);`}
                  </pre>
                </div>
              </div>

              {/* Product Managers */}
              <div className="grid grid-cols-2 gap-16 items-center">
                <div className="bg-secondary/30 rounded-2xl p-12 border border-border">
                  <div className="space-y-6">
                    <div className="bg-card p-6 rounded-lg border border-border">
                      <div className="text-4xl font-bold text-accent mb-2">70%</div>
                      <p className="text-muted-foreground">Reduction in time-to-insight</p>
                    </div>
                    <div className="bg-card p-6 rounded-lg border border-border">
                      <div className="text-4xl font-bold text-accent mb-2">99.9%</div>
                      <p className="text-muted-foreground">Query accuracy improvement</p>
                    </div>
                    <div className="bg-card p-6 rounded-lg border border-border">
                      <div className="text-4xl font-bold text-accent mb-2">$2M+</div>
                      <p className="text-muted-foreground">Average annual cost savings</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                    <Briefcase className="w-8 h-8 text-accent" />
                  </div>
                  <h2 className="text-4xl font-bold text-primary mb-6">
                    For Product Managers
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Deliver AI features faster with infrastructure that just works. Focus on building, not data plumbing.
                  </p>
                  <div className="space-y-6 mb-8">
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Business Impact</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                          <span className="text-muted-foreground">Reduce error rates by 95%</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                          <span className="text-muted-foreground">Ship AI features 3x faster</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                          <span className="text-muted-foreground">Gain competitive advantage</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Button className="bg-accent hover:bg-accent/90">
                    See ROI Calculator
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Product;
