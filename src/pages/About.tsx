import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import ScrollToTop from "@/components/Layout/ScrollToTop";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Target, Building, Thermometer } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Page Banner */}
        <section className="relative h-64 md:h-80 flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold animate-fade-in">About Cificap Company</h1>
            <p className="text-lg md:text-xl mt-4 opacity-90">Excellence in seafood exports since 1976</p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Our Story</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  Established in 1976, Cificap Company has been at the forefront of India's seafood export industry for nearly five decades. 
                  From our strategic location in Cochin, Kerala - one of India's premier fishing ports - we have built a legacy of trust, 
                  quality, and excellence that spans generations.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Our journey began with a simple vision: to bring the finest seafood from India's rich coastal waters to tables around the world. 
                  Over the years, we have specialized in aquaculture products, particularly Vannamei and Black Tiger shrimps, becoming a trusted 
                  name in the international seafood market.
                </p>
                <p className="text-lg leading-relaxed">
                  Today, Cificap Company stands as a testament to the power of sustainable practices, innovative processing techniques, and 
                  unwavering commitment to quality. Our three decades of experience have taught us that success in the seafood industry 
                  comes from understanding both the ocean's bounty and our customers' needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <Card className="group hover:shadow-lg transition-all duration-300 animate-fade-up border-border">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Eye className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To be the most trusted and preferred seafood export company globally, known for our commitment to quality, 
                    sustainability, and customer satisfaction. We envision a future where Cificap Company sets the standard 
                    for excellence in the international seafood trade.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 animate-fade-up border-border" style={{ animationDelay: '0.2s' }}>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                    <Target className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To deliver premium quality seafood products through sustainable practices, innovative processing techniques, 
                    and exceptional customer service. We are committed to supporting coastal communities while meeting the 
                    evolving needs of our global clientele.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Factory Details */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center animate-fade-up">Our Facilities</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Unit 1 */}
                <Card className="group hover:shadow-lg transition-all duration-300 animate-fade-up border-border">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <Building className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Unit 1 - Sait Exim Company</h3>
                    <p className="text-muted-foreground mb-4">
                      <strong>Location:</strong> Karuvelipady, Kochi – 682005
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Our primary processing facility equipped with state-of-the-art machinery for cleaning, cutting, and packaging 
                      seafood products. This facility specializes in shrimp processing with advanced quality control systems 
                      and meets international food safety standards including HACCP and BRC certifications.
                    </p>
                  </CardContent>
                </Card>

                {/* Unit 2 */}
                <Card className="group hover:shadow-lg transition-all duration-300 animate-fade-up border-border" style={{ animationDelay: '0.2s' }}>
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                      <Thermometer className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Unit 2 - Made in Sea Cold Storage</h3>
                    <p className="text-muted-foreground mb-4">
                      <strong>Location:</strong> Made in Sea – Cold Storage Unit, Kochi
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Our dedicated cold storage facility featuring advanced refrigeration technology to maintain optimal 
                      temperatures throughout the supply chain. This facility ensures product freshness from processing 
                      to export, with capacity for large-scale storage and temperature-controlled logistics support.
                    </p>
                  </CardContent>
                </Card>
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

export default About;