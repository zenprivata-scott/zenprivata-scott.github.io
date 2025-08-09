import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Download } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const leadFormSchema = z.object({
  email: z.string().email("Invalid email address"),
  organization: z.string().min(1, "Organization name is required"),
  gdprConsent: z.boolean().refine(val => val === true, "You must consent to proceed"),
});

type LeadFormData = z.infer<typeof leadFormSchema>;

export default function LeadMagnetSection() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      email: "",
      organization: "",
      gdprConsent: false,
    },
  });

  const submitLeadMutation = useMutation({
    mutationFn: async (data: LeadFormData) => {
      return apiRequest("POST", "/api/leads", data);
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Success!",
        description: "Thank you! Check your email for the download link.",
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

  const onSubmit = (data: LeadFormData) => {
    submitLeadMutation.mutate(data);
  };

  if (isSubmitted) {
    return (
      <section id="lead-magnet" className="py-20 bg-gradient-to-r from-zen-light to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="shadow-lg max-w-md mx-auto">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-zen-success bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="h-8 w-8 text-zen-success" />
              </div>
              <h3 className="text-xl font-semibold text-zen-dark mb-2">Download Sent!</h3>
              <p className="text-zen-muted">
                Please check your email for the download link to the CDFI Security Framework.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="lead-magnet" className="py-20 bg-gradient-to-r from-zen-light to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-zen-dark mb-6">
            Download the CDFI Cybersecurity Framework
          </h2>
          <p className="text-lg text-zen-muted max-w-3xl mx-auto mb-6 leading-relaxed">
            ZenPrivata was commissioned by the African American Alliance of CDFI CEOs to develop a security and privacy framework for Community Development Financial Institutions (CDFI) as part of their Women-Led Initiative Technology Enhancement Project.
          </p>
          <p className="text-base text-zen-muted max-w-3xl mx-auto mb-6 leading-relaxed">
            The CDFI Security and Privacy Framework (CDFI-SPF) was created specifically with the needs and abilities of CDFIs in mind. We met with CDFIs and learned what dangers they face, what risks would be most harmful to CDFIs, what systems CDFIs use and what their attack surface looked like, and what controls CDFIs typically already had in place.
          </p>
          <p className="text-base text-zen-muted max-w-2xl mx-auto mb-8 leading-relaxed">
            CDFIs can use the Framework, free of charge, to determine which cybersecurity and privacy controls they should implement and to track their progress.
          </p>
        </div>

        <Card className="shadow-lg max-w-md mx-auto">
          <CardContent className="p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input type="email" placeholder="Work Email Address" {...field} />
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
                      <FormControl>
                        <Input placeholder="CDFI Organization Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="gdprConsent"
                  render={({ field }) => (
                    <FormItem className="flex items-start space-x-2 text-left">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="text-sm text-zen-muted">
                        I consent to receiving communications from ZenPrivata and agree to the processing of my personal data as outlined in the{" "}
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
                  disabled={submitLeadMutation.isPending}
                >
                  <Download className="mr-2 h-4 w-4" />
                  {submitLeadMutation.isPending ? "Sending..." : "Download Free Framework"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}