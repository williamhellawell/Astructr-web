import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, FileText, Layers } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Dynamic Gradient Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-secondary/20 to-accent/5 animate-pulse" 
             style={{ animationDuration: '8s' }}></div>
      </div>

      {/* Title & Subtitle Section */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-primary mb-6">
            Our Pricing Plans
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple, transparent pricing that scales with your needs. Choose a plan to get started.
          </p>
        </div>
      </section>

      {/* Pricing Tiers Section */}
      <section className="py-12 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="bg-white rounded-3xl shadow-lg p-10 border border-border transition-smooth hover:shadow-xl">
              <h3 className="text-3xl font-bold text-primary mb-3">Starter</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-primary">€399</span>
                <span className="text-muted-foreground text-lg"> / per month</span>
              </div>
              <div className="mb-6 pb-6 border-b border-border">
                <p className="text-sm text-muted-foreground">5,000 credits/month</p>
                <p className="text-sm text-muted-foreground">€0.10 per credit overage</p>
              </div>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Core document parsing & extraction</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Standard API access</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Email support (48h response)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">30-day data retention</span>
                </li>
              </ul>
              <Link to="/contact" className="block">
                <Button variant="outline" className="w-full text-accent border-accent hover:bg-accent hover:text-white transition-smooth">
                  Choose Starter
                </Button>
              </Link>
            </div>

            {/* Growth Plan - Most Popular */}
            <div className="bg-white rounded-3xl shadow-xl p-10 border-2 border-accent relative transition-smooth hover:shadow-2xl transform hover:scale-[1.02]">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 text-sm">
                Most Popular
              </Badge>
              <h3 className="text-3xl font-bold text-primary mb-3">Growth</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-primary">€999</span>
                <span className="text-muted-foreground text-lg"> / per month</span>
              </div>
              <div className="mb-6 pb-6 border-b border-border">
                <p className="text-sm text-muted-foreground">25,000 credits/month</p>
                <p className="text-sm text-muted-foreground">€0.08 per credit overage</p>
              </div>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground font-medium">Everything in Starter, plus:</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Advanced ML extraction features</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Priority support (4h response)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">90-day data retention</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Access to add-ons</span>
                </li>
              </ul>
              <Link to="/contact" className="block">
                <Button className="w-full bg-accent text-white hover:bg-accent/90 transition-smooth">
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Custom Plan */}
            <div className="bg-white rounded-3xl shadow-lg p-10 border border-border transition-smooth hover:shadow-xl">
              <h3 className="text-3xl font-bold text-primary mb-3">Custom</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-primary">Custom</span>
              </div>
              <div className="mb-6 pb-6 border-b border-border">
                <p className="text-sm text-muted-foreground">Custom credit allocation</p>
                <p className="text-sm text-muted-foreground">Negotiated overage rates</p>
              </div>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground font-medium">Everything in Growth, plus:</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Unlimited API access</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Dedicated account manager</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Custom data retention</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Custom integrations & SLA</span>
                </li>
              </ul>
              <Link to="/contact" className="block">
                <Button variant="outline" className="w-full text-accent border-accent hover:bg-accent hover:text-white transition-smooth">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Powerful Add-Ons Section */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-primary mb-4">
              Powerful Add-Ons
            </h2>
            <p className="text-lg text-muted-foreground">
              (Requires a Growth or Custom plan)
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Vector Embedding Generation */}
            <div className="bg-white rounded-3xl shadow-lg p-10 border border-border">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-accent/10 rounded-xl">
                  <Layers className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    Vector Embedding Generation
                  </h3>
                </div>
              </div>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Automatically generate machine-readable vector embeddings for your data, 
                enabling semantic search, similarity matching, and advanced AI integration.
              </p>
              <div className="space-y-3 bg-secondary/30 rounded-xl p-6">
                <div className="flex justify-between items-center">
                  <span className="text-foreground font-medium">Platform Fee:</span>
                  <span className="text-2xl font-bold text-primary">€199/month</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground font-medium">Usage Cost:</span>
                  <span className="text-2xl font-bold text-primary">€0.02/vector</span>
                </div>
              </div>
            </div>

            {/* Pre-Built Industry Data Vaults */}
            <div className="bg-white rounded-3xl shadow-lg p-10 border border-border">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-accent/10 rounded-xl">
                  <FileText className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    Pre-Built Industry Data Vaults
                  </h3>
                </div>
              </div>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Augment your models with curated, pre-processed vector databases 
                tailored to your industry, ready to enhance your AI applications.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-foreground">Finance Vault</span>
                  <span className="font-semibold text-primary">€499/month</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-foreground">Legal Vault</span>
                  <span className="font-semibold text-primary">€599/month</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-foreground">Healthcare Vault</span>
                  <span className="font-semibold text-primary">€699/month</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-foreground">Real Estate Vault</span>
                  <span className="font-semibold text-primary">€449/month</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Our Credit System Works */}
      <section className="py-20 px-8 bg-secondary/20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-primary mb-6">
              How Our Credit System Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Your plan comes with a monthly credit allowance. Each document you process 
              consumes credits based on its complexity. Simple documents use fewer credits, 
              while complex, multi-structured documents require more processing power.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mt-12">
            {/* Simple Page */}
            <div className="bg-white rounded-3xl shadow-lg p-10 text-center border border-border">
              <div className="mb-6 flex justify-center">
                <div className="p-6 bg-accent/10 rounded-2xl">
                  <FileText className="w-16 h-16 text-accent" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">Simple Page</h3>
              <p className="text-muted-foreground mb-6">
                Standard documents with straightforward layouts and minimal complexity
              </p>
              <div className="inline-flex items-baseline gap-2 bg-accent/5 px-8 py-4 rounded-full">
                <span className="text-5xl font-bold text-accent">1</span>
                <span className="text-xl text-muted-foreground">credit per page</span>
              </div>
            </div>

            {/* Complex Page */}
            <div className="bg-white rounded-3xl shadow-lg p-10 text-center border border-border">
              <div className="mb-6 flex justify-center">
                <div className="p-6 bg-primary/10 rounded-2xl">
                  <Layers className="w-16 h-16 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">Complex Page</h3>
              <p className="text-muted-foreground mb-6">
                Documents with tables, charts, multi-column layouts, or advanced formatting
              </p>
              <div className="inline-flex items-baseline gap-2 bg-primary/5 px-8 py-4 rounded-full">
                <span className="text-5xl font-bold text-primary">up to 5</span>
                <span className="text-xl text-muted-foreground">credits per page</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
