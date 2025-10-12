import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary">
          Arcxion.ai
        </Link>
        
        <div className="flex items-center gap-8">
          <Link 
            to="/product" 
            className={`text-sm font-medium transition-smooth hover:text-accent ${
              isActive('/product') ? 'text-accent' : 'text-muted-foreground'
            }`}
          >
            Product & Solutions
          </Link>
          <Link 
            to="/pricing" 
            className={`text-sm font-medium transition-smooth hover:text-accent ${
              isActive('/pricing') ? 'text-accent' : 'text-muted-foreground'
            }`}
          >
            Pricing
          </Link>
          <Link 
            to="/studio" 
            className={`text-sm font-medium transition-smooth hover:text-accent ${
              isActive('/studio') ? 'text-accent' : 'text-muted-foreground'
            }`}
          >
            Studio
          </Link>
          <Link 
            to="/status" 
            className={`text-sm font-medium transition-smooth hover:text-accent ${
              isActive('/status') ? 'text-accent' : 'text-muted-foreground'
            }`}
          >
            Status
          </Link>
          
          <div className="flex items-center gap-3 ml-4">
            <Link to="/contact">
              <Button variant="ghost" size="sm">
                Contact Sales
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-accent">
                Start Free
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
