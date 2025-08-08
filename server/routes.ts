import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertLeadSchema, insertContactSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Lead magnet endpoint
  app.post("/api/leads", async (req, res) => {
    try {
      const leadData = insertLeadSchema.parse(req.body);
      const lead = await storage.createLead(leadData);

      // Send notification email to Scott@ZenPrivata.com
      try {
        // In a real application, you would use an email service like SendGrid, Nodemailer, etc.
        // For now, we'll log the notification that would be sent
        console.log(`EMAIL NOTIFICATION TO scott@zenprivata.com:
        Subject: New CDFI Framework Download
        User Email: ${leadData.email}
        Organization: ${leadData.organization || 'Not provided'}
        Downloaded: CDFI Security and Privacy Framework
        Timestamp: ${new Date().toISOString()}
      `);
      } catch (emailError) {
        console.error('Error sending notification email:', emailError);
        // Don't fail the request if email fails
      }

      res.json({ 
        success: true, 
        message: "Thank you! Please check your email for the download link.",
        leadId: lead.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid data", details: error.errors });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  });

  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);

      // Send email to hello@zenprivata.com
      const resendApiKey = process.env.RESEND_API_KEY || process.env.RESEND_KEY || "default_resend_key";

      // TODO: Implement actual Resend integration
      console.log(`Sending contact form submission to hello@zenprivata.com using Resend API key: ${resendApiKey}`);
      console.log(`Contact details:`, {
        name: `${contact.firstName} ${contact.lastName}`,
        email: contact.email,
        organization: contact.organization,
        subject: contact.subject,
        message: contact.message
      });

      res.json({ 
        success: true, 
        message: "Thank you for your message! We'll get back to you soon.",
        contactId: contact.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid data", details: error.errors });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  });

  // Demo request endpoint
  app.post("/api/demo", async (req, res) => {
    try {
      const { name, email, organization } = req.body;

      const resendApiKey = process.env.RESEND_API_KEY || process.env.RESEND_KEY || "default_resend_key";

      // TODO: Implement actual Resend integration for demo requests
      console.log(`Demo request from ${name} (${email}) at ${organization} using Resend API key: ${resendApiKey}`);

      res.json({ 
        success: true, 
        message: "Demo request received! We'll contact you shortly to schedule."
      });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}