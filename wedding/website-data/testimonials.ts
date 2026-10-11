/**
 * Testimonials Configuration
 * Reviews from couples & families with names, messages, ratings, and locations.
 * Renders in a smooth horizontal scroll bar as requested.
 */

export interface TestimonialItem {
  id: string;
  names: string;
  event: string;
  location: string;
  rating: number; // 1 to 5
  message: string;
  date: string;
  featuredPhoto?: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "rev-1",
    names: "Pooja & Rohan Mehra",
    event: "Royal Palace Wedding",
    location: "Udaipur, Rajasthan",
    rating: 5,
    message:
      "Arjun and his crew felt like family from the first video call. Looking at our Pheras and Vidai photos still brings tears to our eyes. He captured every fleeting glance without making us pose artificially. The dark red and ivory color grading is pure royal luxury!",
    date: "December 2025",
    featuredPhoto: "/gallery/wedding/image.png",
  },
  {
    id: "rev-2",
    names: "Ananya & Kabir Singhania",
    event: "Destination Heritage Wedding",
    location: "Jaipur, Rajasthan",
    rating: 5,
    message:
      "The Haldi and Sangeet pictures are so full of life! When our parents saw the 4K cinematic teaser, everyone was speechless. His team was unobtrusive yet present for every single Vedic ritual. Unmatched professionalism and aesthetic taste.",
    date: "November 2025",
    featuredPhoto: "/gallery/haldi/image copy.png",
  },
  {
    id: "rev-3",
    names: "Dr. Meera & Devansh Patel",
    event: "Traditional Vedic Wedding",
    location: "Ahmedabad, Gujarat",
    rating: 5,
    message:
      "The understated minimalism of Arjun’s photography sets him miles apart from generic photographers. The frames breathe elegance, capturing natural daylight and sacred fire glow. Our handcrafted velvet wedding album is our greatest heirloom.",
    date: "January 2026",
    featuredPhoto: "/gallery/wedding/image copy 6.png",
  },
  {
    id: "rev-4",
    names: "Simran & Jaspreet Chadha",
    event: "Anand Karaj & Grand Reception",
    location: "New Delhi",
    rating: 5,
    message:
      "The sheer energy of the Baraat and the sublime peace of our morning Anand Karaj were captured to absolute perfection. Our guests keep asking who photographed our wedding! Booking Arjun was the single best decision we made.",
    date: "February 2026",
    featuredPhoto: "/gallery/wedding/image copy 2.png",
  },
  {
    id: "rev-5",
    names: "Isha & Siddharth Rao",
    event: "Sunset Coastal Wedding",
    location: "South Goa",
    rating: 5,
    message:
      "The pre-wedding portrait session at sunrise was so effortless and romantic. Arjun guided us gently, making us feel completely at ease. Delivery was on time, communication was stellar, and every photograph looks like an editorial cover.",
    date: "October 2025",
    featuredPhoto: "/service/prewadding.png",
  },
  {
    id: "rev-6",
    names: "Kavita & Rajesh Khurana",
    event: "Silver Jubilee Anniversary",
    location: "Mussoorie, Uttarakhand",
    rating: 5,
    message:
      "For our 25th anniversary vow renewal, we wanted something intimate and deeply respectful. Arjun brought out three generations of love in our portraits. Our children and grandchildren treasure these frames endlessly.",
    date: "August 2025",
    featuredPhoto: "/gallery/anniversary/image copy 6.png",
  },
];

export default testimonialsData;
