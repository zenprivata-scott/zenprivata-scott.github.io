import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Linkedin, Calendar, Download, Send } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  organization: z.string().optional(),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  consent: z.boolean().refine(val => val === true, "You must consent to proceed"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      organization: "",
      subject: "",
      message: "",
      consent: false,
    },
  });

  const submitContactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Message Sent!",
        description: "Thank you for your message! We'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    submitContactMutation.mutate(data);
  };

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM EST" },
    { day: "Saturday", hours: "10:00 AM - 2:00 PM EST" },
    { day: "Sunday", hours: "Closed" }
  ];

  if (isSubmitted) {
    return (
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="shadow-lg max-w-md mx-auto">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-zen-success bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="h-8 w-8 text-zen-success" />
              </div>
              <h3 className="text-xl font-semibold text-zen-dark mb-2">Message Sent!</h3>
              <p className="text-zen-muted mb-4">
                Thank you for reaching out. We'll get back to you within 24 hours.
              </p>
              <Button onClick={() => setIsSubmitted(false)} variant="outline">
                Send Another Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-zen-dark mb-4">Get in Touch</h1>
          <p className="text-xl text-zen-muted max-w-3xl mx-auto">
            Ready to strengthen your CDFI's cybersecurity posture? Contact us to schedule a consultation or learn more about our services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-zen-dark mb-6">Send us a message</h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name *</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name *</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl>
                          <Input type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="organization"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Organization</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a topic" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="demo">Request a Demo</SelectItem>
                            <SelectItem value="consultation">Free Consultation</SelectItem>
                            <SelectItem value="implementation">Framework Implementation</SelectItem>
                            <SelectItem value="support">Technical Support</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message *</FormLabel>
                        <FormControl>
                          <Textarea
                            rows={5}
                            placeholder="Tell us how we can help you..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="consent"
                    render={({ field }) => (
                      <FormItem className="flex items-start space-x-2">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="text-sm text-zen-muted">
                          I consent to ZenPrivata contacting me about my inquiry and agree to the processing of my personal data as outlined in the{" "}
                          <a href="#privacy" className="text-zen-orange underline">
                            Privacy Policy
                          </a>
                          .
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button
                    type="submit"
                    className="w-full bg-zen-orange text-white hover:bg-orange-600 transition-colors"
                    disabled={submitContactMutation.isPending}
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {submitContactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div>
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-zen-dark mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-zen-orange bg-opacity-10 rounded-lg flex items-center justify-center">
                      <Mail className="text-zen-orange h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium text-zen-dark">Email</div>
                      <div className="text-zen-muted">hello@zenprivata.com</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-zen-orange bg-opacity-10 rounded-lg flex items-center justify-center">
                      <Linkedin className="text-zen-orange h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium text-zen-dark">LinkedIn</div>
                      <div className="text-zen-muted">linkedin.com/company/zenprivata</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-zen-dark mb-4">Office Hours</h3>
                <div className="space-y-2 text-zen-muted">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between">
                      <span>{schedule.day}</span>
                      <span>{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-zen-dark mb-4">Emergency Support</h3>
                <p className="text-zen-muted">
                  For active security incidents, our emergency response team is available 24/7 for existing clients.
                </p>
              </div>

              <Card className="bg-zen-light">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-zen-dark mb-3">Quick Actions</h3>
                  <div className="space-y-3">
                    <Button className="w-full bg-zen-orange text-white hover:bg-orange-600 transition-colors">
                      <Calendar className="mr-2 h-4 w-4" />
                      Schedule a Demo
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full border-2 border-zen-orange text-zen-orange hover:bg-zen-orange hover:text-white transition-colors"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download Framework
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
