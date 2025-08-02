import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Cificap Company has been our trusted seafood supplier for over 10 years. Their consistent quality and reliable delivery make them an invaluable partner for our business.",
      author: "Michael Johnson",
      company: "Ocean Fresh Imports, USA",
      position: "Procurement Director"
    },
    {
      quote: "The quality of Vannamei shrimp from Cificap Company is exceptional. Their attention to detail and commitment to freshness sets them apart in the industry.",
      author: "Sarah Chen",
      company: "Pacific Seafood Ltd., Singapore",
      position: "Quality Manager"
    },
    {
      quote: "Working with Cificap Company has transformed our seafood sourcing. Their professional approach and product excellence have helped us grow our market presence.",
      author: "David Rodriguez",
      company: "European Seafood Distribution",
      position: "CEO"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by importers worldwide for our quality and reliability
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <Card className="border-border">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                <Quote className="h-12 w-12 text-primary mx-auto mb-6" />
                <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                <div className="border-t border-border pt-6">
                  <div className="font-semibold text-foreground text-lg">
                    {testimonials[currentIndex].author}
                  </div>
                  <div className="text-muted-foreground">
                    {testimonials[currentIndex].position}
                  </div>
                  <div className="text-primary font-medium">
                    {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-card hover:bg-accent"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-card hover:bg-accent"
            onClick={goToNext}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          
          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-muted"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;