import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Settings, 
  Search, 
  ShieldQuestion, 
  GraduationCap, 
  AlertTriangle, 
  Headphones,
  CheckCircle,
  Users,
  Target,
  Wrench
} from "lucide-react";

export default function Services() {
  const approach = [
    {
      icon: Users,
      title: "Meet & Learn",
      description: "Meet with the CDFI to learn their particular circumstances"
    },
    {
      icon: Target,
      title: "Customized Strategy",
      description: "Combine our experience with CDFIs along with the specifics of the CDFI to create a customized approach, focusing first on cybersecurity controls that will bring the most improvement for the least expenditure and effort"
    },
    {
      icon: Wrench,
      title: "Implementation Support",
      description: "Help the CDFI implement the cybersecurity controls"
    }
  ];

  const services = [
    {
      icon: ShieldQuestion,
      title: "Expert Guidance",
      description: "Expert guidance for resource-constrained organizations"
    },
    {
      icon: Search,
      title: "Risk Assessment",
      description: "Risk assessment and determining what cybersecurity controls to prioritize"
    },
    {
      icon: Settings,
      title: "Implementation Assistance",
      description: "Hands-on support to implement cybersecurity controls effectively"
    },
    {
      icon: GraduationCap,
      title: "Staff Training",
      description: "Comprehensive training programs for your team"
    },
    {
      icon: Headphones,
      title: "Ongoing Support",
      description: "Continuous support to maintain your security posture"
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-zen-dark mb-4">Our Services</h1>
          <p className="text-xl text-zen-muted max-w-3xl mx-auto mb-8">
            Comprehensive cybersecurity and privacy services tailored specifically for Community Development Financial Institutions.
          </p>

          {/* Early CTA */}
          <Button 
            className="bg-zen-orange text-white hover:bg-orange-600 transition-colors" 
            size="lg"
            onClick={() => window.location.href = "/contact"}
          >
            Schedule Free Consultation
          </Button>
        </div>

        {/* About Section */}
        <div className="bg-zen-light rounded-2xl p-12 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-zen-dark mb-6">
              Why Choose ZenPrivata?
            </h2>
            <p className="text-lg text-zen-muted leading-relaxed">
              ZenPrivata is the preferred security and privacy provider for CDFIs. We've worked with both CDFI associations and individual CDFIs and know the unique needs that CDFIs have.
            </p>
          </div>
        </div>

        {/* Our Approach */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zen-dark mb-4">Our Approach</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {approach.map((step, index) => (
              <Card key={index} className="border hover:shadow-lg transition-all">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-zen-orange bg-opacity-10 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <step.icon className="text-zen-orange h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-zen-dark mb-4">{step.title}</h3>
                  <p className="text-zen-muted">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* What We Provide */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zen-dark mb-4">What We Provide</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border hover:shadow-lg transition-all">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-zen-orange bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="text-zen-orange h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-zen-dark mb-4">{service.title}</h3>
                  <p className="text-zen-muted">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-semibold text-zen-dark mb-4">Ready to Secure Your CDFI?</h2>
          <p className="text-zen-muted mb-8 max-w-2xl mx-auto">
            Schedule a free consultation to discuss your specific needs and learn how our services can help protect your organization.
          </p>
          <Button 
            className="bg-zen-orange text-white hover:bg-orange-600 transition-colors" 
            size="lg"
            onClick={() => window.location.href = "/contact"}
          >
            Schedule Free Consultation
          </Button>
        </div>
      </div>

      <footer className="bg-zen-dark text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 ZenPrivata. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}