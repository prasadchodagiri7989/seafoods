import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import ScrollToTop from "@/components/Layout/ScrollToTop";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, User } from "lucide-react";

const Contact = () => {
  const contacts = [
    {
      name: "Saabit Sait",
      phone: "+91 99466 00000",
      role: "Sales Director"
    },
    {
      name: "Saadat Sait",
      phone: "+91 95393 00000",
      role: "Operations Manager"
    },
    {
      name: "Siraaj Sait",
      phone: "+91 99466 00000",
      role: "Export Manager"
    }
  ];

  const locations = [
    {
      title: "Main Office",
      address: "Masjid Ansar Road, Kochanghadi, Cochin – 682005",
      type: "office"
    },
    {
      title: "Unit 1 - Processing Facility",
      address: "Karuvelipady, Kochi – 682005",
      type: "unit1"
    },
    {
      title: "Unit 2 - Cold Storage",
      address: "Made in Sea – Cold Storage Unit, Kochi",
      type: "unit2"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Header */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get in touch with our team for inquiries, partnerships, or to learn more about our premium seafood products
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <Card className="animate-fade-up border-border">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-foreground">First Name</Label>
                        <Input id="firstName" placeholder="Your first name" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-foreground">Last Name</Label>
                        <Input id="lastName" placeholder="Your last name" className="mt-1" />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-foreground">Email</Label>
                      <Input id="email" type="email" placeholder="your.email@company.com" className="mt-1" />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone" className="text-foreground">Phone</Label>
                      <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" className="mt-1" />
                    </div>
                    
                    <div>
                      <Label htmlFor="company" className="text-foreground">Company</Label>
                      <Input id="company" placeholder="Your company name" className="mt-1" />
                    </div>
                    
                    <div>
                      <Label htmlFor="message" className="text-foreground">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your requirements, product interest, or any questions you have..."
                        rows={5}
                        className="mt-1"
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                {/* Direct Contacts */}
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground flex items-center">
                      <User className="h-5 w-5 mr-2" />
                      Direct Contacts
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {contacts.map((contact, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                          <div>
                            <div className="font-semibold text-foreground">{contact.name}</div>
                            <div className="text-sm text-muted-foreground">{contact.role}</div>
                          </div>
                          <div className="flex items-center text-primary">
                            <Phone className="h-4 w-4 mr-2" />
                            <span className="font-medium">{contact.phone}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Email */}
                <Card className="border-border">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">Email</div>
                        <div className="text-muted-foreground">saHHDIUHy@gmail.com</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Locations */}
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground flex items-center">
                      <MapPin className="h-5 w-5 mr-2" />
                      Our Locations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {locations.map((location, index) => (
                        <div key={index} className="p-3 bg-muted/30 rounded-lg">
                          <div className="font-semibold text-foreground mb-1">{location.title}</div>
                          <div className="text-sm text-muted-foreground">{location.address}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4 animate-fade-up">Visit Our Main Office</h2>
              <p className="text-muted-foreground mb-8">
                Located in the heart of Cochin, Kerala - India's premier seafood export hub
              </p>
              <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="text-foreground font-semibold">Masjid Ansar Road, Kochanghadi</p>
                  <p className="text-muted-foreground">Cochin – 682005, Kerala, India</p>
                </div>
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

export default Contact;