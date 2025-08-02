import { Globe, Shield, Package, Truck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const WhatWeDo = () => {
  const services = [
    {
      icon: Globe,
      title: "Global Sourcing",
      description: "We source the finest seafood from trusted suppliers across India's coastal regions, ensuring premium quality and freshness."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous quality control processes and international certifications guarantee that every product meets the highest standards."
    },
    {
      icon: Package,
      title: "Customized Packaging",
      description: "Tailored packaging solutions designed to maintain product integrity during transportation and meet specific customer requirements."
    },
    {
      icon: Truck,
      title: "Logistics Management",
      description: "Efficient supply chain management with temperature-controlled logistics ensuring fresh delivery to destinations worldwide."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What We Do
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive seafood export services designed to deliver excellence at every step
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-up border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;