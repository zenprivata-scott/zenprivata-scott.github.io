import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail, Heart, Lock, HandHeart } from "lucide-react";

export default function Team() {
  const teamMembers = [
    {
      name: "Michael Chen",
      title: "Chief Executive Officer",
      description: "15+ years in cybersecurity with expertise in financial services compliance and risk management.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
      linkedin: "https://linkedin.com/in/michael-chen-zenprivata",
      email: "michael@zenprivata.com"
    },
    {
      name: "Sarah Rodriguez",
      title: "Chief Privacy Officer",
      description: "Privacy law specialist with deep experience in GDPR, CCPA, and financial sector privacy regulations.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612c2d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      linkedin: "https://linkedin.com/in/sarah-rodriguez-privacy",
      email: "sarah@zenprivata.com"
    },
    {
      name: "David Thompson",
      title: "Chief Technology Officer",
      description: "Platform architect and security engineer specializing in scalable compliance management systems.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      linkedin: "https://linkedin.com/in/david-thompson-cto",
      email: "david@zenprivata.com"
    },
    {
      name: "Lisa Williams",
      title: "Director of CDFI Relations",
      description: "Former CDFI executive with 20+ years of experience in community development finance and operations.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      linkedin: "https://linkedin.com/in/lisa-williams-cdfi",
      email: "lisa@zenprivata.com"
    },
    {
      name: "James Martinez",
      title: "Senior Implementation Specialist",
      description: "Cybersecurity implementation expert with hands-on experience deploying security frameworks at scale.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      linkedin: "https://linkedin.com/in/james-martinez-security",
      email: "james@zenprivata.com"
    },
    {
      name: "Jennifer Park",
      title: "Senior Compliance Analyst",
      description: "Regulatory compliance specialist with expertise in financial services audit and risk assessment.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      linkedin: "https://linkedin.com/in/jennifer-park-compliance",
      email: "jennifer@zenprivata.com"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Community First",
      description: "Everything we do is designed to strengthen and protect the communities served by CDFIs."
    },
    {
      icon: Lock,
      title: "Security Excellence",
      description: "We maintain the highest standards of cybersecurity and privacy protection in everything we deliver."
    },
    {
      icon: HandHeart,
      title: "Accessible Expertise",
      description: "We make complex cybersecurity and privacy concepts accessible and actionable for organizations of all sizes."
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-zen-dark mb-4">Our Expert Team</h1>
          <p className="text-xl text-zen-muted max-w-3xl mx-auto">
            Meet the cybersecurity and privacy professionals dedicated to protecting Community Development Financial Institutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.image}
                alt={`${member.title} - ${member.name}`}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-zen-dark mb-1">{member.name}</h3>
              <p className="text-zen-orange font-medium mb-2">{member.title}</p>
              <p className="text-zen-muted text-sm mb-4">{member.description}</p>
              <div className="flex justify-center space-x-3">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zen-muted hover:text-zen-orange transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href={`mailto:${member.email}`}
                  className="text-zen-muted hover:text-zen-orange transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Company Values Section */}
        <div className="mt-20 bg-zen-light rounded-2xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zen-dark mb-4">Our Values</h2>
            <p className="text-zen-muted max-w-2xl mx-auto">
              The principles that guide everything we do in serving the CDFI community.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-zen-orange bg-opacity-10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-zen-orange h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-zen-dark mb-2">{value.title}</h3>
                <p className="text-zen-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
