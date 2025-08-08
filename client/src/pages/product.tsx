import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function Product() {
  const features = [
    "Real-time compliance scoring",
    "Visual progress tracking", 
    "Risk-based prioritization"
  ];

  const taskFeatures = [
    "Automated task generation from controls",
    "Team collaboration tools",
    "Progress tracking and notifications"
  ];

  const aiFeatures = [
    "Contextual implementation guidance",
    "Best practice recommendations",
    "24/7 intelligent support"
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-zen-dark mb-4">ZenPrivata Platform</h1>
          <p className="text-xl text-zen-muted max-w-3xl mx-auto">
            A comprehensive compliance management platform that transforms complex cybersecurity frameworks into manageable, collaborative workflows.
          </p>
        </div>

        <div className="space-y-16">
          {/* Dashboard Overview */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-semibold text-zen-dark mb-4">
                Comprehensive Security Dashboard
              </h2>
              <p className="text-zen-muted mb-6 leading-relaxed">
                Monitor your compliance progress across all framework controls with real-time visibility into your security posture. Track implementation status, identify gaps, and prioritize actions.
              </p>
              <ul className="space-y-2 text-zen-muted">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="text-zen-success mr-2 h-4 w-4" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <div className="bg-zen-light rounded-lg p-4 text-center">
                    <div className="text-zen-muted text-sm mb-2">Dashboard Screenshot</div>
                    <div className="text-zen-dark font-medium">CDFI Security Hub</div>
                    <div className="text-zen-muted text-xs mt-1">Real dashboard integration coming soon</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Task Management */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <div className="bg-zen-light rounded-lg p-4 text-center">
                    <div className="text-zen-muted text-sm mb-2">Task Management Screenshot</div>
                    <div className="text-zen-dark font-medium">Tasks & Approvals Hub</div>
                    <div className="text-zen-muted text-xs mt-1">Collaborative task management interface</div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl font-semibold text-zen-dark mb-4">
                Collaborative Task Management
              </h2>
              <p className="text-zen-muted mb-6 leading-relaxed">
                Transform security implementations into manageable tasks with clear ownership, deadlines, and progress tracking. Collaborate seamlessly with your team and external partners.
              </p>
              <ul className="space-y-2 text-zen-muted">
                {taskFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="text-zen-success mr-2 h-4 w-4" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* AI Assistant */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-semibold text-zen-dark mb-4">
                AI-Powered Compliance Assistant
              </h2>
              <p className="text-zen-muted mb-6 leading-relaxed">
                Get intelligent guidance on implementing security controls with our AI assistant. Access contextual help, best practices, and step-by-step implementation guidance tailored to your specific needs.
              </p>
              <ul className="space-y-2 text-zen-muted">
                {aiFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="text-zen-success mr-2 h-4 w-4" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <div className="bg-zen-light rounded-lg p-4 text-center">
                    <div className="text-zen-muted text-sm mb-2">AI Assistant Screenshot</div>
                    <div className="text-zen-dark font-medium">AI Assistant for Control 5.1</div>
                    <div className="text-zen-muted text-xs mt-1">Intelligent compliance guidance</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button className="bg-zen-orange text-white hover:bg-orange-600 transition-colors mr-4" size="lg">
            Schedule a Demo
          </Button>
          <Button variant="outline" className="border-2 border-zen-orange text-zen-orange hover:bg-zen-orange hover:text-white transition-colors" size="lg">
            Start Free Trial
          </Button>
        </div>
      </div>
    </div>
  );
}
