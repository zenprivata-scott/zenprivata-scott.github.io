import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Download } from "lucide-react";

export default function HeroSection() {
  const handleRequestDemo = () => {
    window.location.href = "/contact";
  };

  const handleDownloadFramework = () => {
    // Scroll to lead magnet form
    document.getElementById('lead-magnet')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-gradient-to-br from-zen-light to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-zen-dark mb-6 leading-tight">
              Secure Your CDFI with AI-Powered{" "}
              <span className="text-zen-orange">Cybersecurity</span>
            </h1>
            <p className="text-xl text-zen-muted mb-8 leading-relaxed">
              The only cybersecurity and privacy framework designed specifically for Community Development Financial Institutions. Protect sensitive data, ensure compliance, and build trust with your community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleRequestDemo}
                className="bg-zen-orange text-white hover:bg-orange-600 transition-colors flex items-center justify-center"
                size="lg"
              >
                <Play className="mr-2 h-4 w-4" />
                Request Free Demo
              </Button>
              <Button
                onClick={handleDownloadFramework}
                variant="outline"
                className="border-2 border-zen-orange text-zen-orange hover:bg-zen-orange hover:text-white transition-colors"
                size="lg"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Framework
              </Button>
            </div>
          </div>
          <div className="relative">
            <Card className="shadow-2xl border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-zen-dark">Security Dashboard</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-zen-success rounded-full"></div>
                    <span className="text-sm text-zen-muted">System Secure</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-zen-light rounded-lg p-4">
                    <div className="text-2xl font-bold text-zen-dark">98%</div>
                    <div className="text-sm text-zen-muted">Compliance Score</div>
                  </div>
                  <div className="bg-zen-light rounded-lg p-4">
                    <div className="text-2xl font-bold text-zen-dark">24</div>
                    <div className="text-sm text-zen-muted">Active Controls</div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-zen-muted">AI Risk Assessment</span>
                  <div className="text-zen-success font-medium">Low Risk</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
