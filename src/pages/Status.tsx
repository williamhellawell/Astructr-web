import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, AlertCircle, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Status = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Subscribed!",
      description: "You'll receive status updates at " + email,
    });
    setEmail("");
  };

  const uptimeData = [
    { day: "90 days ago", uptime: 99.98 },
    { day: "60 days ago", uptime: 99.99 },
    { day: "30 days ago", uptime: 100.0 },
    { day: "Today", uptime: 100.0 },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-20 px-8 bg-gradient-hero">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold text-primary mb-6">
              System Status
            </h1>
            <p className="text-xl text-muted-foreground">
              Real-time status and uptime information for all Astructr.ai services
            </p>
          </div>

          {/* Overall Status */}
          <div className="bg-card p-10 rounded-2xl shadow-xl border border-border">
            <div className="flex items-center justify-center gap-4">
              <CheckCircle2 className="w-12 h-12 text-success" />
              <div>
                <h2 className="text-3xl font-bold text-primary">All Systems Operational</h2>
                <p className="text-muted-foreground">Last checked: {new Date().toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Component Status */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-12">Service Components</h2>
          
          <div className="space-y-4">
            <div className="bg-card p-8 rounded-xl shadow-md border border-border flex items-center justify-between">
              <div className="flex items-center gap-4">
                <CheckCircle2 className="w-8 h-8 text-success" />
                <div>
                  <h3 className="text-xl font-semibold text-primary">API Gateway</h3>
                  <p className="text-sm text-muted-foreground">Core API endpoints and authentication</p>
                </div>
              </div>
              <span className="px-4 py-2 bg-success/10 text-success rounded-full font-medium">
                Operational
              </span>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-md border border-border flex items-center justify-between">
              <div className="flex items-center gap-4">
                <CheckCircle2 className="w-8 h-8 text-success" />
                <div>
                  <h3 className="text-xl font-semibold text-primary">Processing Engine</h3>
                  <p className="text-sm text-muted-foreground">Document parsing and extraction services</p>
                </div>
              </div>
              <span className="px-4 py-2 bg-success/10 text-success rounded-full font-medium">
                Operational
              </span>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-md border border-border flex items-center justify-between">
              <div className="flex items-center gap-4">
                <CheckCircle2 className="w-8 h-8 text-success" />
                <div>
                  <h3 className="text-xl font-semibold text-primary">Vector Database</h3>
                  <p className="text-sm text-muted-foreground">Data storage and retrieval</p>
                </div>
              </div>
              <span className="px-4 py-2 bg-success/10 text-success rounded-full font-medium">
                Operational
              </span>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-md border border-border flex items-center justify-between">
              <div className="flex items-center gap-4">
                <CheckCircle2 className="w-8 h-8 text-success" />
                <div>
                  <h3 className="text-xl font-semibold text-primary">Industry Data Vaults</h3>
                  <p className="text-sm text-muted-foreground">Pre-built data collections</p>
                </div>
              </div>
              <span className="px-4 py-2 bg-success/10 text-success rounded-full font-medium">
                Operational
              </span>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-md border border-border flex items-center justify-between">
              <div className="flex items-center gap-4">
                <CheckCircle2 className="w-8 h-8 text-success" />
                <div>
                  <h3 className="text-xl font-semibold text-primary">Dashboard & Console</h3>
                  <p className="text-sm text-muted-foreground">Web interface and management tools</p>
                </div>
              </div>
              <span className="px-4 py-2 bg-success/10 text-success rounded-full font-medium">
                Operational
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Uptime History - Enhanced Visualization */}
      <section className="py-20 px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-12">90-Day Uptime History</h2>
          
          <div className="bg-card p-10 rounded-2xl shadow-xl border border-border">
            {/* Chart Grid */}
            <div className="mb-8">
              <div className="flex justify-between items-end h-64 gap-2">
                {Array.from({ length: 90 }).map((_, i) => {
                  const uptime = 99.5 + Math.random() * 0.5;
                  const height = uptime;
                  return (
                    <div 
                      key={i}
                      className="flex-1 bg-success/20 hover:bg-success/40 rounded-t transition-all cursor-pointer relative group"
                      style={{ height: `${height}%` }}
                    >
                      <div 
                        className="absolute bottom-0 w-full bg-success rounded-t transition-all"
                        style={{ height: `${Math.max(uptime - 99, 0) * 20}%` }}
                      />
                      <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-2 rounded-lg text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                        Day {90 - i}: {uptime.toFixed(2)}%
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-between text-xs text-muted-foreground mt-4">
                <span>90 days ago</span>
                <span>60 days</span>
                <span>30 days</span>
                <span>Today</span>
              </div>
            </div>

            {/* Summary Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-3xl font-bold text-success mb-1">99.98%</div>
                <div className="text-sm text-muted-foreground">Average Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">0</div>
                <div className="text-sm text-muted-foreground">Incidents (90d)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">43min</div>
                <div className="text-sm text-muted-foreground">Total Downtime (90d)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Incident History */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-12">Recent Incidents</h2>
          
          <div className="bg-card p-10 rounded-2xl shadow-md border border-border text-center">
            <CheckCircle2 className="w-16 h-16 text-success mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-primary mb-2">
              No incidents reported
            </h3>
            <p className="text-muted-foreground">
              All systems have been operating normally for the past 90 days.
            </p>
          </div>
        </div>
      </section>

      {/* Subscribe to Updates */}
      <section className="py-20 px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card p-12 rounded-2xl shadow-xl border border-border text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Get Status Updates
            </h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to receive email or SMS alerts about service status changes
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12"
                required
              />
              <Button type="submit" className="bg-accent hover:bg-accent/90 px-8">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* SLA Information */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">
            Service Level Agreement
          </h2>
          
          <div className="grid grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-xl shadow-md border border-border text-center">
              <div className="text-5xl font-bold text-accent mb-4">99.9%</div>
              <h3 className="text-xl font-semibold text-primary mb-2">Uptime Guarantee</h3>
              <p className="text-muted-foreground text-sm">
                For Growth and Enterprise plans
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-md border border-border text-center">
              <div className="text-5xl font-bold text-accent mb-4">&lt; 200ms</div>
              <h3 className="text-xl font-semibold text-primary mb-2">Response Time</h3>
              <p className="text-muted-foreground text-sm">
                Average API response latency
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-md border border-border text-center">
              <div className="text-5xl font-bold text-accent mb-4">24/7</div>
              <h3 className="text-xl font-semibold text-primary mb-2">Support Hours</h3>
              <p className="text-muted-foreground text-sm">
                Priority support for paid plans
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg">
              View Full SLA Documentation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Status;
