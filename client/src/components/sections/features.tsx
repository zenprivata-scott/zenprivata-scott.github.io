import { Shield, Bot, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function FeaturesSection() {
  const features = [
    {
      icon: Shield,
      title: "Risks",
      description: "CDFIs face many attempts from attackers to imitate an executive, pushing a financial officer to send CDFI funds to the attacker's bank account. CDFIs hold sensitive personal information and their reputation would be damaged if that sensitive information were exfiltrated."
    },
    {
      icon: Bot,
      title: "Limitations", 
      description: "CDFIs also often have limited financial resources available for cybersecurity and privacy. CDFIs typically have limited personnel hours available, making it difficult to implement complicated security controls."
    },
    {
      icon: TrendingUp,
      title: "Needs",
      description: "CDFIs need cybersecurity controls that reduce the risk of financial attacks and protect customers' sensitive information. CDFIs typically need cybersecurity controls that are simpler to implement and provide the most impact for the smallest cost."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-zen-dark mb-4">Understanding CDFI Challenges</h2>
          <p className="text-xl text-zen-muted max-w-3xl mx-auto">
            CDFIs face unique cybersecurity challenges that require specialized solutions designed for their specific needs and constraints.
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
