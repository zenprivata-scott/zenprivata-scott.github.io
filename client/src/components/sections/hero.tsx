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
              Secure Your <span className="text-zen-orange">CDFI</span>
            </h1>
            <p className="text-xl text-zen-muted mb-8 leading-relaxed">
              ZenPrivata is the preferred security and privacy provider for Community Development Financial Institutions (CDFIs). We've worked with both CDFI associations and individual CDFIs and know the unique needs that CDFIs have.
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
                <img 
                  src="/dashboard-team.webp" 
                  alt="Team collaborating on cybersecurity dashboard"
                  className="w-full rounded-lg"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
