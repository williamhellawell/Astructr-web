import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2 } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    topic: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for reaching out!",
      description: "Our team will respond within 2 hours.",
    });
    setFormData({ name: "", email: "", company: "", topic: "", message: "" });
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-20 px-8 bg-gradient-hero">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-primary mb-6">
            Let's Talk
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your data infrastructure? Our team is here to help.
          </p>
        </div>
      </section>

      {/* Contact Form + Timeline */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-16">
          {/* Form */}
          <div className="bg-card p-12 rounded-2xl shadow-xl border border-border">
            <h2 className="text-3xl font-bold text-primary mb-8">
              Send us a message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Full Name *
                </label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="John Doe"
                  className="h-12"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Work Email *
                </label>
                <Input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="john@company.com"
                  className="h-12"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Company
                </label>
                <Input
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  placeholder="Acme Corp"
                  className="h-12"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Topic *
                </label>
                <Select value={formData.topic} onValueChange={(value) => setFormData({...formData, topic: value})} required>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select a topic" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sales">Sales Inquiry</SelectItem>
                    <SelectItem value="pricing">Pricing Question</SelectItem>
                    <SelectItem value="support">Technical Support</SelectItem>
                    <SelectItem value="partnerships">Partnerships</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  How can we help? *
                </label>
                <Textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell us about your data challenges..."
                  rows={6}
                  className="resize-none"
                />
              </div>
              
              <Button type="submit" className="w-full h-12 bg-accent hover:bg-accent/90 text-base">
                Send Message
              </Button>
            </form>
          </div>

          {/* What Happens Next Timeline */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-primary mb-12">
              What Happens Next
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-semibold">
                    1
                  </div>
                  <div className="w-0.5 h-full bg-accent/30 mt-2"></div>
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    Form Submitted
                  </h3>
                  <p className="text-muted-foreground">
                    Your inquiry is instantly received by our team.
                  </p>
                  <p className="text-sm text-accent mt-1 font-medium">Instantly</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-semibold">
                    2
                  </div>
                  <div className="w-0.5 h-full bg-accent/30 mt-2"></div>
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    Our Team Responds
                  </h3>
                  <p className="text-muted-foreground">
                    A solutions engineer reviews your needs and reaches out.
                  </p>
                  <p className="text-sm text-accent mt-1 font-medium">Avg. 2 Hours</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-semibold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    Scoping Call Scheduled
                  </h3>
                  <p className="text-muted-foreground">
                    We discuss your use case and design a custom solution.
                  </p>
                  <p className="text-sm text-accent mt-1 font-medium">Within 24 Hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="py-20 px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-12">
            Other Ways to Reach Us
          </h2>
          <div className="grid grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-xl shadow-md border border-border">
              <h3 className="font-semibold text-primary mb-2">Sales Inquiries</h3>
              <a href="mailto:sales@astructr.ai" className="text-accent hover:underline">
                sales@astructr.ai
              </a>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-md border border-border">
              <h3 className="font-semibold text-primary mb-2">Technical Support</h3>
              <a href="mailto:support@astructr.ai" className="text-accent hover:underline">
                support@astructr.ai
              </a>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-md border border-border">
              <h3 className="font-semibold text-primary mb-2">General Questions</h3>
              <a href="mailto:hello@astructr.ai" className="text-accent hover:underline">
                hello@astructr.ai
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
