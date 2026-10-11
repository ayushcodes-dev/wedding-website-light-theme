/**
 * Contact Information Configuration
 * Location, Google Map, Phone, WhatsApp, Email, Instagram, and YouTube links.
 * Easily update this file to modify studio contact details.
 */

export interface ContactData {
  studioName: string;
  addressLines: string[];
  cityStateCountry: string;
  pinCode: string;
  fullAddress: string;
  googleMapEmbedUrl: string;
  googleMapDirectionsUrl: string;
  phoneNumber: string;
  phoneDisplay: string;
  whatsappNumber: string;
  whatsappDisplay: string;
  whatsappDefaultMessage: string;
  emailAddress: string;
  instagramHandle: string;
  instagramUrl: string;
  youtubeChannel: string;
  youtubeUrl: string;
  workingHours: string;
}

export const contactData: ContactData = {
  studioName: "Arjun Verma Wedding Photography Studio",
  addressLines: [
    "Heritage Haveli Studio, 4th Floor, Suite 402",
    "Opposite Royal Plaza, MG Road",
  ],
  cityStateCountry: "New Delhi, Delhi, India",
  pinCode: "110001",
  fullAddress:
    "Heritage Haveli Studio, Suite 402, Opposite Royal Plaza, MG Road, New Delhi, India 110001",
  // High reliability standard embed URL for New Delhi Heritage Center
  googleMapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112061.26553857321!2d77.1024901972656!3d28.632429400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i786!4f13.1!3m3!1m2!1s0x390cfd37b92bbab5%3A0x4e5a95383568c078!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  googleMapDirectionsUrl:
    "https://maps.google.com/?q=Connaught+Place,+New+Delhi,+India",
  phoneNumber: "+919876543210",
  phoneDisplay: "+91 98765 43210",
  whatsappNumber: "919876543210",
  whatsappDisplay: "+91 98765 43210",
  whatsappDefaultMessage:
    "Namaste Arjun! I visited your wedding photography portfolio and would love to check your availability and package details for my upcoming wedding/event.",
  emailAddress: "contact@arjunvermaphotography.com",
  instagramHandle: "@arjunvermaphotography",
  instagramUrl: "https://www.instagram.com",
  youtubeChannel: "Arjun Verma Wedding Films",
  youtubeUrl: "https://www.youtube.com",
  workingHours: "Monday – Sunday: 10:00 AM – 8:00 PM (IST)",
};

export default contactData;
