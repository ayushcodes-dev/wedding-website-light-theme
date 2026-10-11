/**
 * Frequently Asked Questions (FAQ) Configuration
 * Easily update or add common questions and answers.
 */

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const faqData: FaqItem[] = [
  {
    id: "faq-1",
    question: "How far in advance should we reserve our wedding dates?",
    answer:
      "Because we maintain bespoke quality by accepting only a selective number of weddings each season, we recommend reserving your dates 4 to 9 months in advance. Dates during auspicious wedding months (October through March) fill up quickly.",
    category: "Booking",
  },
  {
    id: "faq-2",
    question: "Do you travel for destination weddings across India and internationally?",
    answer:
      "Yes, absolutely! Over 60% of our assignments are destination weddings across Udaipur, Jaipur, Jodhpur, Goa, Kerala, Delhi NCR, and international venues. Our team manages our own equipment logistics and travels seamlessly wherever your love takes us.",
    category: "Travel",
  },
  {
    id: "faq-3",
    question: "How many crew members will cover our wedding festivities?",
    answer:
      "Depending on the scale of your celebration and guest count, our crew typically ranges from 4 to 8 specialists. This includes lead candid photographers, traditional ceremony masters, 4K cinematographers, aerial drone pilots, and dedicated light technicians.",
    category: "Crew",
  },
  {
    id: "faq-4",
    question: "What is your typical turnaround time for delivering photos and films?",
    answer:
      "We believe you shouldn't wait endlessly! We deliver a curated 'Sneak Peek Gallery' (35–50 color-graded frames) within 48 to 72 hours so you can share your joy immediately. Complete color-corrected high-resolution photo galleries are delivered in 3 to 4 weeks, and cinematic films & albums within 6 to 8 weeks.",
    category: "Delivery",
  },
  {
    id: "faq-5",
    question: "Do we receive raw unedited files and high-resolution photos?",
    answer:
      "Every client receives an online private cloud gallery with full-resolution, print-ready, color-graded JPEGs with personal print rights. Raw footage and unedited footage can also be provided upon request on a client-provided USB 3.0 hard drive.",
    category: "Deliverables",
  },
  {
    id: "faq-6",
    question: "Can we tailor our photography package to our specific traditions?",
    answer:
      "Every Indian wedding has its own sacred beauty and sequence of rituals. Whether you have a two-day intimate Anand Karaj or a five-day grand royal Marwari celebration, we tailor our coverage and team hours precisely to your schedule.",
    category: "Customization",
  },
  {
    id: "faq-7",
    question: "What is the process to lock in our booking?",
    answer:
      "Click on 'Book Session' or message us directly on WhatsApp. We will check availability for your event dates, arrange an initial call to discuss your vision, and share an official contract. A 25% deposit secures your dates exclusively.",
    category: "Booking",
  },
];

export default faqData;
