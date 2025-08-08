import { Shield, Bot, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function FeaturesSection() {
  const features = [
    {
      icon: Shield,
      title: "Comprehensive Protection",
      description: "Multi-layered security controls designed for financial institutions handling sensitive personal and financial data."
    },
    {
      icon: Bot,
      title: "AI-Powered Assistance",
      description: "Smart recommendations and automated guidance to help implement and maintain security controls effectively."
    },
    {
      icon: TrendingUp,
      title: "Compliance Tracking",
      description: "Real-time monitoring and reporting to ensure ongoing compliance with industry standards and regulations."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-zen-dark mb-4">Built Specifically for CDFIs</h2>
          <p className="text-xl text-zen-muted max-w-3xl mx-auto">
            Our comprehensive framework addresses the unique security challenges faced by Community Development Financial Institutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center border hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-zen-orange bg-opacity-10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-zen-orange h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-zen-dark mb-3">{feature.title}</h3>
                <p className="text-zen-muted">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
