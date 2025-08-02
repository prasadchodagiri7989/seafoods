import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import ScrollToTop from "@/components/Layout/ScrollToTop";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Products = () => {
  const products = [
    {
      name: "Vannamei Shrimp",
      image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      description: "Premium quality Vannamei shrimp available in various cuts and sizes. Known for their sweet taste and firm texture, perfect for international markets.",
      variants: ["PUD (Peeled Undeveined)", "PD (Peeled Deveined)", "HLSO (Head-Less Shell-On)"],
      features: ["Fresh & Frozen", "Export Quality", "Various Sizes Available"]
    },
    {
      name: "Black Tiger Shrimp",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      description: "Wild-caught and farm-raised Black Tiger shrimp renowned for their distinctive flavor and premium quality. Ideal for gourmet applications.",
      variants: ["Whole", "Headless", "Peeled & Deveined"],
      features: ["Premium Grade", "Sustainable Sourcing", "Flash Frozen"]
    },
    {
      name: "Tuna Loins",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      description: "High-grade tuna loins processed to perfection. Our tuna is carefully selected and processed to maintain optimal taste and texture.",
      variants: ["Yellowfin Tuna", "Skipjack Tuna", "Chunk Light"],
      features: ["Sashimi Grade", "CO Treated", "Vacuum Packed"]
    },
    {
      name: "Squid",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      description: "Fresh and tender squid sourced from pristine waters. Available in various forms to meet different culinary requirements.",
      variants: ["Whole Squid", "Squid Rings", "Squid Tubes"],
      features: ["Ocean Fresh", "Various Cuts", "IQF Processed"]
    },
    {
      name: "Cuttlefish",
      image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      description: "Premium cuttlefish known for their unique flavor and versatile culinary applications. Carefully processed to maintain freshness.",
      variants: ["Whole Cuttlefish", "Cleaned Cuttlefish", "Cuttlefish Strips"],
      features: ["Premium Quality", "Hand Selected", "Fresh Frozen"]
    },
    {
      name: "Ribbon Fish",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      description: "Silver ribbon fish with delicate flavor and firm texture. A popular choice for Asian markets and fine dining establishments.",
      variants: ["Whole Fish", "Fillets", "Steaks"],
      features: ["Silver Grade", "Ocean Caught", "Quick Frozen"]
    },
    {
      name: "Mahi-Mahi",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      description: "Dolphin fish known for its mild, sweet flavor and firm texture. Perfect for grilling, baking, and various culinary preparations.",
      variants: ["Whole Fish", "Fillets", "Portions"],
      features: ["Mild Flavor", "Firm Texture", "Versatile Use"]
    },
    {
      name: "Tilapia",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      description: "Farm-raised tilapia with consistent quality and taste. A sustainable and popular choice for health-conscious consumers.",
      variants: ["Whole Fish", "Fillets", "Butterfly Cut"],
      features: ["Farm Raised", "Sustainable", "Low Fat Content"]
    },
    {
      name: "Silver Pomfret",
      image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      description: "Premium silver pomfret prized for its delicate flavor and high nutritional value. A favorite in Asian and European markets.",
      variants: ["Whole Fish", "Steaks", "Fillets"],
      features: ["Premium Grade", "Rich in Omega-3", "Delicate Flavor"]
    },
    {
      name: "Baby Octopus",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      description: "Tender baby octopus perfect for gourmet applications. Carefully processed to maintain texture and natural flavor.",
      variants: ["Whole Baby Octopus", "Cleaned", "Pre-cooked"],
      features: ["Tender Texture", "Gourmet Quality", "Ready to Cook"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Header Image */}
        <section className="relative h-64 md:h-80 flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold animate-fade-in">Our Products</h1>
            <p className="text-lg md:text-xl mt-4 opacity-90">Premium seafood products for global markets</p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 animate-fade-up">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Premium Seafood Collection
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Discover our comprehensive range of seafood products, each carefully selected and processed 
                  to meet the highest international quality standards
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product, index) => (
                  <Card 
                    key={index} 
                    className="group overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-up border-border"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                    </div>
                    
                    <CardHeader>
                      <CardTitle className="text-xl text-foreground">{product.name}</CardTitle>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {product.description}
                      </p>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Available Variants:</h4>
                        <div className="flex flex-wrap gap-1">
                          {product.variants.map((variant, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {variant}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Key Features:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {product.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Products;