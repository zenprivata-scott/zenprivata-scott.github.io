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

      // Send PDF file to user and notification to hello@zenprivata.com
      try {
        const resendApiKey = process.env.RESEND_API_KEY || "re_bri5VXwB_5Aq87VVEbicx7Mk5VgjZoTfJ";
        const resend = new Resend(resendApiKey);
        const fs = await import('fs');
        const path = await import('path');

        // Read the PDF file
        const pdfPath = path.join(process.cwd(), 'client/public/CDFI-SPF.pdf');
        const pdfBuffer = fs.readFileSync(pdfPath);

        // Send PDF to user
        await resend.emails.send({
          from: 'ZenPrivata <hello@zenprivata.com>',
          to: [leadData.email],
          subject: 'Your CDFI Security and Privacy Framework Download',
          html: `
            <h2>Thank you for downloading the CDFI Security and Privacy Framework!</h2>
            <p>Dear ${leadData.organization ? `${leadData.organization} team` : 'Community Development Finance Professional'},</p>
            <p>Thank you for your interest in strengthening your organization's cybersecurity posture. Please find the CDFI Security and Privacy Framework attached to this email.</p>
            <p>This framework was specifically designed with the needs and capabilities of CDFIs in mind, providing practical guidance for implementing effective cybersecurity and privacy controls.</p>
            <p>If you have any questions about the framework or would like to discuss how ZenPrivata can help your organization implement these controls, please don't hesitate to reach out to us at <a href="mailto:hello@zenprivata.com">hello@zenprivata.com</a>.</p>
            <p>Best regards,<br>The ZenPrivata Team</p>
            <hr>
            <p><em>Visit us at <a href="https://zenprivata.com">zenprivata.com</a></em></p>
          `,
          attachments: [
            {
              filename: 'CDFI-Security-Privacy-Framework.pdf',
              content: pdfBuffer,
            },
          ],
        });
        console.log('PDF sent to user successfully');

        // Send notification email to scott@zenprivata.com
        await resend.emails.send({
          from: 'ZenPrivata <hello@zenprivata.com>',
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
        console.error('Error sending emails:', emailError);
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
          from: 'ZenPrivata <hello@zenprivata.com>',
          to: ['scott@zenprivata.com'],
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
          from: 'ZenPrivata <hello@zenprivata.com>',
          to: ['scott@zenprivata.com'],
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