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
    "Royal Heritage Studio, Main Road",
    "Opposite GEL Church Complex",
  ],
  cityStateCountry: "Ranchi, Jharkhand, India",
  pinCode: "834001",
  fullAddress:
    "Royal Heritage Studio, Main Road, Opposite GEL Church Complex, Ranchi, Jharkhand, India - 834001",
  // Google Maps embed URL for Ranchi, Jharkhand
  googleMapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117223.77885741006!2d85.25126839088654!3d23.34320481232815!2m3!1f0!2f0!3f0!3m2!1i1024!2i786!4f13.1!3m3!1m2!1s0x39f4e104aa5db7dd%3A0xdc09d49d6899f43e!2sRanchi%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  googleMapDirectionsUrl:
    "https://maps.google.com/?q=Main+Road,+Ranchi,+Jharkhand,+India",
  phoneNumber: "+916299632625",
  phoneDisplay: "+91 62996 32625",
  whatsappNumber: "916299632625",
  whatsappDisplay: "+91 62996 32625",
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
