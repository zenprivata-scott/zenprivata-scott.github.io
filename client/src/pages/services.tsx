import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Settings, 
  Search, 
  ShieldQuestion, 
  GraduationCap, 
  AlertTriangle, 
  Headphones,
  CheckCircle
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Settings,
      title: "Framework Implementation",
      description: "Complete implementation of the CDFI Security and Privacy Framework with hands-on guidance from our experts.",
      features: [
        "Risk assessment and planning",
        "Control implementation support", 
        "Progress monitoring and reporting"
      ]
    },
    {
      icon: Search,
      title: "Security Assessments",
      description: "Comprehensive security assessments to identify vulnerabilities and compliance gaps in your current systems.",
      features: [
        "Vulnerability scanning",
        "Compliance gap analysis",
        "Remediation recommendations"
      ]
    },
    {
      icon: ShieldQuestion,
      title: "Privacy Compliance",
      description: "Ensure compliance with privacy regulations including GDPR, CCPA, and other applicable data protection laws.",
      features: [
        "Privacy impact assessments",
        "Data mapping and classification",
        "Policy development"
      ]
    },
    {
      icon: GraduationCap,
      title: "Training & Education",
      description: "Comprehensive cybersecurity training programs designed for CDFI staff at all levels of technical expertise.",
      features: [
        "Security awareness training",
        "Phishing simulation programs",
        "Technical skills development"
      ]
    },
    {
      icon: AlertTriangle,
      title: "Incident Response",
      description: "24/7 incident response support to help you quickly contain, investigate, and recover from security incidents.",
      features: [
        "Emergency response team",
        "Forensic investigation",
        "Recovery planning"
      ]
    },
    {
      icon: Headphones,
      title: "Ongoing Support",
      description: "Continuous support and maintenance to ensure your security posture remains strong and compliant over time.",
      features: [
        "Regular security reviews",
        "Framework updates",
        "Technical support"
      ]
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-zen-dark mb-4">Our Services</h1>
          <p className="text-xl text-zen-muted max-w-3xl mx-auto">
            Comprehensive cybersecurity and privacy services tailored specifically for Community Development Financial Institutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border hover:shadow-lg transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-zen-orange bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="text-zen-orange h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-zen-dark mb-4">{service.title}</h3>
                <p className="text-zen-muted mb-6">{service.description}</p>
                <ul className="space-y-2 text-sm text-zen-muted mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="text-zen-success mr-2 h-4 w-4" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" className="text-zen-orange hover:text-orange-600 font-medium p-0">
                  Learn More →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-semibold text-zen-dark mb-4">Ready to Secure Your CDFI?</h2>
          <p className="text-zen-muted mb-8 max-w-2xl mx-auto">
            Schedule a free consultation to discuss your specific needs and learn how our services can help protect your organization.
          </p>
          <Button className="bg-zen-orange text-white hover:bg-orange-600 transition-colors" size="lg">
            Schedule Free Consultation
          </Button>
        </div>
      </div>
    </div>
  );
}
