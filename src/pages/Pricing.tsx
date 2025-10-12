import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import PricingCalculator from "@/components/PricingCalculator";

const Pricing = () => {

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-20 px-8 bg-gradient-hero">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-primary mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that fits your needs. Scale as you grow.
          </p>
        </div>
      </section>

      {/* Interactive Calculator */}
      <section className="py-20 px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-4 text-center">
            Estimate Your Plan
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Build a custom quote based on your exact needs
          </p>
          <PricingCalculator />
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">
            Pre-Built Plans
          </h2>
          <div className="grid grid-cols-3 gap-8 items-start">
            {/* Starter */}
            <div className="bg-card p-10 rounded-2xl shadow-lg border border-border">
              <h3 className="text-2xl font-bold text-primary mb-2">Starter</h3>
              <p className="text-muted-foreground mb-6">Perfect for testing and small projects</p>
              <div className="mb-8">
                <span className="text-5xl font-bold text-primary">$0</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-0.5" />
                  <span className="text-muted-foreground">Up to 1,000 documents/month</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-0.5" />
                  <span className="text-muted-foreground">Basic API access</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-0.5" />
                  <span className="text-muted-foreground">Community support</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-0.5" />
                  <span className="text-muted-foreground">5 GB storage</span>
                </li>
              </ul>
              <Link to="/contact" className="block">
                <Button className="w-full" variant="outline">
                  Start Free
                </Button>
              </Link>
            </div>

            {/* Growth */}
            <div className="bg-gradient-accent p-10 rounded-2xl shadow-xl relative border-2 border-accent">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-accent-foreground mb-2">Growth</h3>
              <p className="text-accent-foreground/80 mb-6">For growing teams and mid-market</p>
              <div className="mb-8">
                <span className="text-5xl font-bold text-accent-foreground">$999</span>
                <span className="text-accent-foreground/80">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent-foreground mt-0.5" />
                  <span className="text-accent-foreground/90">Up to 50,000 documents/month</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent-foreground mt-0.5" />
                  <span className="text-accent-foreground/90">Full API access</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent-foreground mt-0.5" />
                  <span className="text-accent-foreground/90">Priority support (24/7)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent-foreground mt-0.5" />
                  <span className="text-accent-foreground/90">100 GB storage</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent-foreground mt-0.5" />
                  <span className="text-accent-foreground/90">Industry Data Vaults access</span>
                </li>
              </ul>
              <Link to="/contact" className="block">
                <Button className="w-full bg-accent-foreground text-accent hover:bg-accent-foreground/90">
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Enterprise */}
            <div className="bg-card p-10 rounded-2xl shadow-lg border border-border">
              <h3 className="text-2xl font-bold text-primary mb-2">Enterprise</h3>
              <p className="text-muted-foreground mb-6">For large organizations at scale</p>
              <div className="mb-8">
                <span className="text-5xl font-bold text-primary">Custom</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-0.5" />
                  <span className="text-muted-foreground">Unlimited documents</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-0.5" />
                  <span className="text-muted-foreground">Dedicated infrastructure</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-0.5" />
                  <span className="text-muted-foreground">White-glove support</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-0.5" />
                  <span className="text-muted-foreground">Custom storage</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-0.5" />
                  <span className="text-muted-foreground">Custom hybrid databases</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-0.5" />
                  <span className="text-muted-foreground">SLA guarantees</span>
                </li>
              </ul>
              <Link to="/contact" className="block">
                <Button className="w-full bg-accent hover:bg-accent/90">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">
            Full Feature Comparison
          </h2>
          <div className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden">
            <table className="w-full">
              <thead className="bg-secondary/50">
                <tr>
                  <th className="text-left p-6 font-semibold text-primary">Feature</th>
                  <th className="text-center p-6 font-semibold text-primary">Starter</th>
                  <th className="text-center p-6 font-semibold text-primary">Growth</th>
                  <th className="text-center p-6 font-semibold text-primary">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="p-6 text-muted-foreground">Documents/month</td>
                  <td className="p-6 text-center">1,000</td>
                  <td className="p-6 text-center">50,000</td>
                  <td className="p-6 text-center">Unlimited</td>
                </tr>
                <tr className="bg-secondary/20">
                  <td className="p-6 text-muted-foreground">API Rate Limits</td>
                  <td className="p-6 text-center">100 req/min</td>
                  <td className="p-6 text-center">1,000 req/min</td>
                  <td className="p-6 text-center">Custom</td>
                </tr>
                <tr>
                  <td className="p-6 text-muted-foreground">Support Response Time</td>
                  <td className="p-6 text-center">48 hours</td>
                  <td className="p-6 text-center">4 hours</td>
                  <td className="p-6 text-center">1 hour</td>
                </tr>
                <tr className="bg-secondary/20">
                  <td className="p-6 text-muted-foreground">SLA Uptime</td>
                  <td className="p-6 text-center">99%</td>
                  <td className="p-6 text-center">99.9%</td>
                  <td className="p-6 text-center">99.99%</td>
                </tr>
                <tr>
                  <td className="p-6 text-muted-foreground">Industry Data Vaults</td>
                  <td className="p-6 text-center">-</td>
                  <td className="p-6 text-center"><Check className="w-5 h-5 text-accent mx-auto" /></td>
                  <td className="p-6 text-center"><Check className="w-5 h-5 text-accent mx-auto" /></td>
                </tr>
                <tr className="bg-secondary/20">
                  <td className="p-6 text-muted-foreground">Custom Database Builder</td>
                  <td className="p-6 text-center">-</td>
                  <td className="p-6 text-center">-</td>
                  <td className="p-6 text-center"><Check className="w-5 h-5 text-accent mx-auto" /></td>
                </tr>
                <tr>
                  <td className="p-6 text-muted-foreground">Linkable Vaults</td>
                  <td className="p-6 text-center">0</td>
                  <td className="p-6 text-center">Up to 3</td>
                  <td className="p-6 text-center">Unlimited</td>
                </tr>
                <tr className="bg-secondary/20">
                  <td className="p-6 text-muted-foreground">Custom Integrations</td>
                  <td className="p-6 text-center">-</td>
                  <td className="p-6 text-center">-</td>
                  <td className="p-6 text-center"><Check className="w-5 h-5 text-accent mx-auto" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
