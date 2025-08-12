import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Download, Shield, Users, Award, TrendingUp } from "lucide-react";

export default function HeroSection() {
  const handleRequestDemo = () => {
    window.location.href = "/contact";
  };

  const handleDownloadFramework = () => {
    // Scroll to lead magnet form
    document.getElementById('lead-magnet')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] bg-gradient-to-br from-blue-50 via-white to-orange-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-orange-100 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-purple-100 rounded-full opacity-50"></div>
        <div className="absolute bottom-20 right-40 w-16 h-16 bg-green-100 rounded-full opacity-60"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 lg:pr-8">
            {/* Credibility badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border">
                <Shield className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">CDFI Specialized</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border">
                <Award className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-gray-700">Proven Results</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border">
                <Users className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium text-gray-700">Expert Team</span>
              </div>
            </div>

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

            {/* Trust indicators */}
            <div className="flex items-center space-x-8 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">CDFIs Protected</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">99.9%</div>
                <div className="text-sm text-gray-600">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image with floating elements */}
          <div className="relative lg:pl-8">
            <div className="relative">
              <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
                <CardContent className="p-6">
                  <img 
                    src="/dashboard-team.webp" 
                    alt="Team collaborating on cybersecurity dashboard"
                    className="w-full rounded-lg"
                  />
                </CardContent>
              </Card>
              
              {/* Floating professional elements */}
              <div className="absolute -top-4 -right-4 bg-blue-500 text-white p-3 rounded-lg shadow-lg animate-bounce">
                <Shield className="w-6 h-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-green-500 text-white p-3 rounded-lg shadow-lg">
                <Award className="w-6 h-6" />
              </div>
              <div className="absolute top-1/2 -right-6 bg-orange-500 text-white p-2 rounded-full shadow-lg">
                <TrendingUp className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
