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
    <section className="relative min-h-[90vh] bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 lg:pr-8">
            {/* Main headline */}
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  Secure Your 
                </span>
                <br />
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  CDFI
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                ZenPrivata is the preferred security and privacy provider for Community Development Financial Institutions (CDFIs). We've worked with both CDFI associations and individual CDFIs and know the unique needs that CDFIs have.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleRequestDemo}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                size="lg"
              >
                <Play className="mr-2 h-5 w-5" />
                Request Free Consultation
              </Button>
              <Button
                onClick={handleDownloadFramework}
                variant="outline"
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
                size="lg"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Framework
              </Button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative lg:pl-8">
            <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
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
