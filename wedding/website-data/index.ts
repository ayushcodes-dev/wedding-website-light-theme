/**
 * Central Website Data Index
 * Exports all content modules for easy access throughout the application.
 * Updating any file in this folder immediately updates the corresponding section of the website.
 */

export * from "./photographer";
export * from "./hero";
export * from "./services";
export * from "./works";
export * from "./testimonials";
export * from "./faq";
export * from "./contact";
export * from "./gallery";

import photographerData from "./photographer";
import heroData from "./hero";
import servicesData from "./services";
import worksData, { workCategories } from "./works";
import testimonialsData from "./testimonials";
import faqData from "./faq";
import contactData from "./contact";
import galleryPhotos from "./gallery";

export const websiteData = {
  photographer: photographerData,
  hero: heroData,
  services: servicesData,
  works: worksData,
  categories: workCategories,
  testimonials: testimonialsData,
  faq: faqData,
  contact: contactData,
  gallery: galleryPhotos,
};

export default websiteData;
