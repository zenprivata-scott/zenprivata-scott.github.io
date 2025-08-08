import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function Product() {
  const features = [
    "Real-time cybersecurity progress tracking",
    "Visual framework implementation status", 
    "Risk-based task prioritization"
  ];

  const taskFeatures = [
    "Automated task generation from framework controls",
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
          <p className="text-xl text-zen-muted max-w-3xl mx-auto mb-8">
            A SaaS platform that helps Community Development Financial Institutions (CDFIs) build, manage, and simplify their cybersecurity programs. The platform follows a framework specifically designed for CDFIs and uses artificial intelligence to provide 24/7 guidance to the CDFIs.
          </p>
          <Button className="bg-zen-orange text-white hover:bg-orange-600 transition-colors" size="lg">
            Request Free Demo
          </Button>
        </div>

        <div className="space-y-16">
          {/* Dashboard Overview */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-semibold text-zen-dark mb-4">
                Comprehensive Security Dashboard
              </h2>
              <p className="text-zen-muted mb-6 leading-relaxed">
                Monitor your cybersecurity program progress across all framework controls with real-time visibility into your security posture. Track implementation status, identify gaps, and prioritize actions with intelligence designed for CDFIs.
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
                  <img 
                    src="/attached_assets/Screenshot5_1754619516724.webp" 
                    alt="CDFI Security Hub Dashboard"
                    className="w-full rounded-lg"
                  />
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Task Management */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <img 
                    src="/attached_assets/Screenshot3_1754619516726.webp" 
                    alt="Tasks & Approvals Hub"
                    className="w-full rounded-lg"
                  />
                </CardContent>
              </Card>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl font-semibold text-zen-dark mb-4">
                Collaborative Task Management
              </h2>
              <p className="text-zen-muted mb-6 leading-relaxed">
                Enables collaboration among CDFI team and consultants or outsourced IT team. Transform security implementations into manageable tasks with clear ownership, deadlines, and progress tracking designed for resource-constrained organizations.
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

          {/* Control Implementation */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-semibold text-zen-dark mb-4">
                Simplified Cybersecurity Framework Implementation
              </h2>
              <p className="text-zen-muted mb-6 leading-relaxed">
                Simplifies complex cybersecurity processes with a structured approach to implementing security controls. Each control provides clear guidance, task breakdown, and evidence collection to ensure comprehensive security coverage.
              </p>
              <ul className="space-y-2 text-zen-muted">
                <li className="flex items-center">
                  <CheckCircle className="text-zen-success mr-2 h-4 w-4" />
                  Step-by-step control implementation
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-zen-success mr-2 h-4 w-4" />
                  Evidence collection and documentation
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-zen-success mr-2 h-4 w-4" />
                  Progress tracking and status updates
                </li>
              </ul>
            </div>
            <div className="relative">
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <img 
                    src="/Screenshot4_1754619516725.webp" 
                    alt="Control Implementation Interface"
                    className="w-full rounded-lg"
                  />
                </CardContent>
              </Card>
            </div>
          </div>

          {/* AI Assistant */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <img 
                    src="/attached_assets/Screenshot1_1754619516728.webp" 
                    alt="AI Assistant for Control Implementation"
                    className="w-full rounded-lg"
                  />
                </CardContent>
              </Card>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl font-semibold text-zen-dark mb-4">
                AI-Powered Cybersecurity Assistant
              </h2>
              <p className="text-zen-muted mb-6 leading-relaxed">
                Provides expert AI guidance for resource-constrained organizations. Get intelligent guidance on implementing security controls with our AI assistant. Access contextual help, best practices, and step-by-step implementation guidance tailored to your specific CDFI needs.
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
          </div>

          {/* Professional Reporting */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-semibold text-zen-dark mb-4">
                Professional Reporting & Documentation
              </h2>
              <p className="text-zen-muted mb-6 leading-relaxed">
                Generates professional reports for board presentations and auditors. Create comprehensive documentation that demonstrates your cybersecurity program progress and framework adherence with automated reporting capabilities.
              </p>
              <ul className="space-y-2 text-zen-muted">
                <li className="flex items-center">
                  <CheckCircle className="text-zen-success mr-2 h-4 w-4" />
                  Board-ready progress reports
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-zen-success mr-2 h-4 w-4" />
                  Auditor documentation packages
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-zen-success mr-2 h-4 w-4" />
                  Executive summary dashboards
                </li>
              </ul>
            </div>
            <div className="relative">
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <img 
                    src="/attached_assets/Screenshot2_1754619516727.webp" 
                    alt="Task Management and Progress Tracking"
                    className="w-full rounded-lg"
                  />
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