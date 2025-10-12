import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/30 mt-32">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-5 gap-12">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4">Arcxion.ai</h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
              The AI infrastructure that transforms your unstructured data into pristine, LLM-native vector databases.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-3">
              <li><Link to="/product" className="text-sm text-muted-foreground hover:text-accent transition-smooth">Solutions</Link></li>
              <li><Link to="/pricing" className="text-sm text-muted-foreground hover:text-accent transition-smooth">Pricing</Link></li>
              <li><Link to="/studio" className="text-sm text-muted-foreground hover:text-accent transition-smooth">Studio</Link></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-accent transition-smooth">API Docs</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-accent transition-smooth">Contact</Link></li>
              <li><Link to="/status" className="text-sm text-muted-foreground hover:text-accent transition-smooth">Status</Link></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-accent transition-smooth">Trust Center</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-accent transition-smooth">Help Center</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-accent transition-smooth">Privacy</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-accent transition-smooth">Terms</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-accent transition-smooth">SLA</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-accent transition-smooth">Security</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Arcxion.ai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
