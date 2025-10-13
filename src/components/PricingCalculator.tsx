import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const industryVaults = [
  { id: "finance-equities", name: "Finance - Global Equities", price: 199 },
  { id: "finance-bonds", name: "Finance - Fixed Income", price: 149 },
  { id: "legal-us", name: "Legal - US Case Law", price: 299 },
  { id: "legal-eu", name: "Legal - EU Regulations", price: 249 },
  { id: "biotech-genomics", name: "Biotech - Genomics Research", price: 399 },
  { id: "pharma-trials", name: "Pharma - Clinical Trials", price: 349 },
];

const PricingCalculator = () => {
  const [documents, setDocuments] = useState(5000);
  const [dataRetention, setDataRetention] = useState("1-year");
  const [selectedVaults, setSelectedVaults] = useState<string[]>([]);
  const [customDatabase, setCustomDatabase] = useState(false);
  const [databaseSize, setDatabaseSize] = useState(50);
  const [linkedVaults, setLinkedVaults] = useState<string[]>([]);
  const [supportLevel, setSupportLevel] = useState("standard");

  const calculateBasePrice = (docs: number) => {
    if (docs <= 1000) return 0;
    if (docs <= 10000) return 299;
    if (docs <= 50000) return 999;
    return 2499;
  };

  const retentionPrices = {
    "1-year": 0,
    "5-years": 150,
    "permanent": 400
  };

  const supportPrices = {
    "standard": 0,
    "priority": 500,
    "dedicated": 2000
  };

  const basePrice = calculateBasePrice(documents);
  const retentionPrice = retentionPrices[dataRetention as keyof typeof retentionPrices];
  const vaultsPrice = selectedVaults.reduce((total, vaultId) => {
    const vault = industryVaults.find(v => v.id === vaultId);
    return total + (vault?.price || 0);
  }, 0);
  
  const customDbPrice = customDatabase ? Math.floor(databaseSize / 10) * 50 + linkedVaults.length * 100 : 0;
  const supportPrice = supportPrices[supportLevel as keyof typeof supportPrices];
  const totalPrice = basePrice + retentionPrice + vaultsPrice + customDbPrice + supportPrice;

  const toggleVault = (vaultId: string) => {
    setSelectedVaults(prev => 
      prev.includes(vaultId) 
        ? prev.filter(id => id !== vaultId)
        : [...prev, vaultId]
    );
  };

  const toggleLinkedVault = (vaultId: string) => {
    setLinkedVaults(prev => 
      prev.includes(vaultId) 
        ? prev.filter(id => id !== vaultId)
        : [...prev, vaultId]
    );
  };

  return (
    <div className="grid grid-cols-5 gap-8">
      {/* Calculator Steps */}
      <div className="col-span-3 space-y-8">
        {/* Stage 1: Processing Volume */}
        <Card className="p-8 border-2 border-border">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold">1</div>
            <h3 className="text-2xl font-bold text-primary">Processing Volume</h3>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-baseline">
              <label className="text-sm font-medium text-muted-foreground">Documents per month</label>
              <span className="text-3xl font-bold text-primary">{documents.toLocaleString()}</span>
            </div>
            <Slider
              value={[documents]}
              onValueChange={([value]) => setDocuments(value)}
              min={0}
              max={100000}
              step={1000}
              className="py-4"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>0</span>
              <span>25K</span>
              <span>50K</span>
              <span>75K</span>
              <span>100K+</span>
            </div>
          </div>
        </Card>

        {/* Stage 2: Data Retention */}
        <Card className="p-8 border-2 border-border">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold">2</div>
            <h3 className="text-2xl font-bold text-primary">Data Retention</h3>
          </div>
          <RadioGroup value={dataRetention} onValueChange={setDataRetention}>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:bg-secondary/30 transition-smooth cursor-pointer">
                <RadioGroupItem value="1-year" id="1-year" />
                <Label htmlFor="1-year" className="flex-1 cursor-pointer">
                  <div className="font-medium text-primary">1 Year</div>
                  <div className="text-sm text-muted-foreground">Standard retention included</div>
                </Label>
                <span className="font-semibold text-primary">Included</span>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:bg-secondary/30 transition-smooth cursor-pointer">
                <RadioGroupItem value="5-years" id="5-years" />
                <Label htmlFor="5-years" className="flex-1 cursor-pointer">
                  <div className="font-medium text-primary">5 Years</div>
                  <div className="text-sm text-muted-foreground">Extended retention for compliance</div>
                </Label>
                <span className="font-semibold text-accent">+$150/mo</span>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:bg-secondary/30 transition-smooth cursor-pointer">
                <RadioGroupItem value="permanent" id="permanent" />
                <Label htmlFor="permanent" className="flex-1 cursor-pointer">
                  <div className="font-medium text-primary">Permanent</div>
                  <div className="text-sm text-muted-foreground">Unlimited retention</div>
                </Label>
                <span className="font-semibold text-accent">+$400/mo</span>
              </div>
            </div>
          </RadioGroup>
        </Card>

        {/* Stage 3: Industry Data Vaults */}
        <Card className="p-8 border-2 border-border">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold">3</div>
            <h3 className="text-2xl font-bold text-primary">Industry Data Vaults</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {industryVaults.map(vault => (
              <div key={vault.id} className="flex items-start gap-3 p-4 rounded-lg border border-border hover:bg-secondary/30 transition-smooth cursor-pointer"
                   onClick={() => toggleVault(vault.id)}>
                <Checkbox 
                  checked={selectedVaults.includes(vault.id)}
                  onCheckedChange={() => toggleVault(vault.id)}
                />
                <div className="flex-1">
                  <p className="font-medium text-primary text-sm">{vault.name}</p>
                  <p className="text-accent font-semibold text-sm">+${vault.price}/mo</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Stage 4: Custom Database Builder */}
        <Card className="p-8 border-2 border-border">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold">4</div>
            <h3 className="text-2xl font-bold text-primary">Custom Database Builder</h3>
          </div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="font-medium text-primary">Enable Custom Database</p>
              <p className="text-sm text-muted-foreground">Create hybrid databases with your data + vaults</p>
            </div>
            <Switch checked={customDatabase} onCheckedChange={setCustomDatabase} />
          </div>

          {customDatabase && (
            <div className="space-y-6 pt-6 border-t border-border animate-fade-in">
              <div className="space-y-4">
                <div className="flex justify-between items-baseline">
                  <label className="text-sm font-medium text-muted-foreground">Database Size (GB)</label>
                  <span className="text-2xl font-bold text-primary">{databaseSize} GB</span>
                </div>
                <Slider
                  value={[databaseSize]}
                  onValueChange={([value]) => setDatabaseSize(value)}
                  min={10}
                  max={1000}
                  step={10}
                  className="py-4"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>10 GB</span>
                  <span>250 GB</span>
                  <span>500 GB</span>
                  <span>1000 GB</span>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-muted-foreground block mb-3">Link Industry Vaults</label>
                <div className="grid grid-cols-2 gap-3">
                  {selectedVaults.map(vaultId => {
                    const vault = industryVaults.find(v => v.id === vaultId);
                    return vault ? (
                      <div key={vault.id} className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-secondary/30 transition-smooth cursor-pointer"
                           onClick={() => toggleLinkedVault(vault.id)}>
                        <Checkbox 
                          checked={linkedVaults.includes(vault.id)}
                          onCheckedChange={() => toggleLinkedVault(vault.id)}
                        />
                        <p className="text-sm font-medium text-primary">{vault.name}</p>
                      </div>
                    ) : null;
                  })}
                </div>
                {selectedVaults.length === 0 && (
                  <p className="text-sm text-muted-foreground italic">Select vaults in Stage 3 to link them here</p>
                )}
              </div>
            </div>
          )}
        </Card>

        {/* Stage 5: Support Level */}
        <Card className="p-8 border-2 border-border">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold">5</div>
            <h3 className="text-2xl font-bold text-primary">Support Level</h3>
          </div>
          <RadioGroup value={supportLevel} onValueChange={setSupportLevel}>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:bg-secondary/30 transition-smooth cursor-pointer">
                <RadioGroupItem value="standard" id="standard" />
                <Label htmlFor="standard" className="flex-1 cursor-pointer">
                  <div className="font-medium text-primary">Standard</div>
                  <div className="text-sm text-muted-foreground">48-hour response time, email support</div>
                </Label>
                <span className="font-semibold text-primary">Included</span>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:bg-secondary/30 transition-smooth cursor-pointer">
                <RadioGroupItem value="priority" id="priority" />
                <Label htmlFor="priority" className="flex-1 cursor-pointer">
                  <div className="font-medium text-primary">Priority</div>
                  <div className="text-sm text-muted-foreground">4-hour response time, 24/7 support</div>
                </Label>
                <span className="font-semibold text-accent">+$500/mo</span>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:bg-secondary/30 transition-smooth cursor-pointer">
                <RadioGroupItem value="dedicated" id="dedicated" />
                <Label htmlFor="dedicated" className="flex-1 cursor-pointer">
                  <div className="font-medium text-primary">Dedicated Engineer</div>
                  <div className="text-sm text-muted-foreground">1-hour response, dedicated support engineer</div>
                </Label>
                <span className="font-semibold text-accent">+$2,000/mo</span>
              </div>
            </div>
          </RadioGroup>
        </Card>
      </div>

      {/* Live Summary */}
      <div className="col-span-2">
        <Card className="p-8 sticky top-32 bg-gradient-accent border-2 border-accent">
          <h3 className="text-2xl font-bold text-accent-foreground mb-6">Estimated Monthly Cost</h3>
          
          <div className="space-y-4 mb-6 pb-6 border-b border-accent-foreground/20">
            <div className="flex justify-between items-center">
              <span className="text-accent-foreground/80">Base Processing</span>
              <span className="font-semibold text-accent-foreground">${basePrice}</span>
            </div>
            {retentionPrice > 0 && (
              <div className="flex justify-between items-center">
                <span className="text-accent-foreground/80">Data Retention</span>
                <span className="font-semibold text-accent-foreground">${retentionPrice}</span>
              </div>
            )}
            {vaultsPrice > 0 && (
              <div className="flex justify-between items-center">
                <span className="text-accent-foreground/80">Data Vaults ({selectedVaults.length})</span>
                <span className="font-semibold text-accent-foreground">${vaultsPrice}</span>
              </div>
            )}
            {customDbPrice > 0 && (
              <div className="flex justify-between items-center">
                <span className="text-accent-foreground/80">Custom Database</span>
                <span className="font-semibold text-accent-foreground">${customDbPrice}</span>
              </div>
            )}
            {supportPrice > 0 && (
              <div className="flex justify-between items-center">
                <span className="text-accent-foreground/80">Support</span>
                <span className="font-semibold text-accent-foreground">${supportPrice}</span>
              </div>
            )}
          </div>

          <div className="flex justify-between items-baseline mb-6">
            <span className="text-xl text-accent-foreground/80">Total</span>
            <span className="text-5xl font-bold text-accent-foreground">${totalPrice.toLocaleString()}</span>
          </div>

          <div className="space-y-3">
            <button className="w-full bg-accent-foreground text-accent hover:bg-accent-foreground/90 font-semibold py-4 rounded-lg transition-smooth">
              Get Started
            </button>
            <button className="w-full border-2 border-accent-foreground text-accent-foreground hover:bg-accent-foreground/10 font-semibold py-4 rounded-lg transition-smooth">
              Talk to Sales
            </button>
          </div>

          <p className="text-xs text-accent-foreground/60 mt-4 text-center">
            Prices shown are estimates. Final pricing may vary based on usage.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default PricingCalculator;
