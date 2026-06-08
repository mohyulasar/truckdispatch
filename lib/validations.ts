import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  companyName: z.string().min(1, "Company name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  truckCount: z.string().min(1, "Please select number of trucks"),
  equipmentType: z.string().min(1, "Please select equipment type"),
  mcNumber: z.string().optional(),
  operatingRegion: z.string().min(2, "Please describe your operating region or lanes"),
  heardAbout: z.string().optional(),
  message: z.string().min(10, "Please tell us a bit about your dispatch needs"),
  website: z.string().max(0, "Invalid submission").optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
