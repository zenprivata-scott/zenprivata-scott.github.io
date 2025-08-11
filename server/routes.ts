import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertLeadSchema, insertContactSchema } from "@shared/schema";
import { z } from "zod";
import { Resend } from "resend";

export async function registerRoutes(app: Express): Promise<Server> {
  // Lead magnet endpoint
  app.post("/api/leads", async (req, res) => {
    try {
      const leadData = insertLeadSchema.parse(req.body);
      const lead = await storage.createLead(leadData);

      // Send notification email to Scott@ZenPrivata.com
      try {
        const resendApiKey = process.env.RESEND_API_KEY || "re_bri5VXwB_5Aq87VVEbicx7Mk5VgjZoTfJ";
        const resend = new Resend(resendApiKey);
        
        await resend.emails.send({
          from: 'ZenPrivata <noreply@zenprivata.com>',
          to: ['scott@zenprivata.com'],
          subject: 'New CDFI Framework Download',
          html: `
            <h2>New CDFI Framework Download</h2>
            <p><strong>User Email:</strong> ${leadData.email}</p>
            <p><strong>Organization:</strong> ${leadData.organization || 'Not provided'}</p>
            <p><strong>Downloaded:</strong> CDFI Security and Privacy Framework</p>
            <hr>
            <p><em>Downloaded at: ${new Date().toISOString()}</em></p>
          `,
        });
        console.log('Lead notification email sent successfully');
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

      // Send email to hello@zenprivata.com using Resend
      const resendApiKey = process.env.RESEND_API_KEY || "re_bri5VXwB_5Aq87VVEbicx7Mk5VgjZoTfJ";
      const resend = new Resend(resendApiKey);

      try {
        await resend.emails.send({
          from: 'ZenPrivata <noreply@zenprivata.com>',
          to: ['hello@zenprivata.com'],
          subject: `New Contact Form Submission from ${contact.organization}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Organization:</strong> ${contact.organization}</p>
            <p><strong>Email:</strong> ${contact.email}</p>
            <p><strong>Message:</strong></p>
            <p>${contact.message.replace(/\n/g, '<br>')}</p>
            <hr>
            <p><em>Submitted at: ${new Date().toISOString()}</em></p>
          `,
        });
        console.log('Contact form email sent successfully');
      } catch (emailError) {
        console.error('Error sending contact form email:', emailError);
        // Don't fail the request if email fails
      }

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

      const resendApiKey = process.env.RESEND_API_KEY || "re_bri5VXwB_5Aq87VVEbicx7Mk5VgjZoTfJ";
      const resend = new Resend(resendApiKey);

      try {
        await resend.emails.send({
          from: 'ZenPrivata <noreply@zenprivata.com>',
          to: ['hello@zenprivata.com'],
          subject: `Demo Request from ${organization}`,
          html: `
            <h2>New Demo Request</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Organization:</strong> ${organization}</p>
            <hr>
            <p><em>Requested at: ${new Date().toISOString()}</em></p>
          `,
        });
        console.log('Demo request email sent successfully');
      } catch (emailError) {
        console.error('Error sending demo request email:', emailError);
        // Don't fail the request if email fails
      }

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