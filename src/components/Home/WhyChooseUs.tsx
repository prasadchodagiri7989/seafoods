import { Calendar, Users, Award } from "lucide-react";

const WhyChooseUs = () => {
  const stats = [
    {
      icon: Calendar,
      number: "48+",
      label: "Years Experience",
      description: "Nearly five decades of expertise in seafood industry"
    },
    {
      icon: Users,
      number: "100+",
      label: "Trusted Suppliers",
      description: "Extensive network of reliable seafood suppliers"
    },
    {
      icon: Award,
      number: "100%",
      label: "Client Satisfaction",
      description: "Committed to exceeding customer expectations"
    }
  ];

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Cificap Company
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Our commitment to excellence and decades of experience make us the preferred choice for seafood imports
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center animate-fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-10 w-10" />
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stat.number}
              </div>
              <div className="text-xl font-semibold mb-2">
                {stat.label}
              </div>
              <p className="opacity-90">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;