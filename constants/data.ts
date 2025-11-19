import { Onboarding } from "@/types";

/* ---------- Onboarding Data ---------- */
export const defaultOnboarding: Onboarding[] = [
  {
    id: 1,
    image: require("../assets/images/onboarding-cleaning.jpeg"),
    title: "House Cleaning",
    category: "Cleaning",
    price: "From $80",
    rating: "4.9",
    description: "Professional deep cleaning for your home",
  },
  {
    id: 2,
    image: require("../assets/images/onboarding-plumber.jpeg"),
    title: "Plumbing Repair",
    category: "Plumbing",
    price: "From $120",
    rating: "4.8",
    description: "Expert plumbing solutions and repairs",
  },
  {
    id: 3,
    image: require("../assets/images/onboarding-electrician.jpeg"),
    title: "Electrical Work",
    category: "Electrical",
    price: "From $150",
    rating: "4.7",
    description: "Safe and reliable electrical services",
  },
  {
    id: 4,
    image: require("../assets/images/onboarding-maintenance.jpeg"),
    title: "HVAC Maintenance",
    category: "HVAC",
    price: "From $200",
    rating: "4.9",
    description: "Heating and cooling system maintenance",
  },
  {
    id: 5,
    image: require("../assets/images/onboarding-landscaping.jpeg"),
    title: "Landscaping",
    category: "Outdoor",
    price: "From $100",
    rating: "4.6",
    description: "Beautiful garden and lawn care",
  },
  {
    id: 6,
    image: require("../assets/images/onboarding-painter.jpeg"),
    title: "Painting",
    category: "Renovation",
    price: "From $300",
    rating: "4.8",
    description: "Professional interior and exterior painting",
  },
  {
    id: 7,
    image: require("../assets/images/onboarding-appliance.jpeg"),
    title: "Appliance Repair",
    category: "Repair",
    price: "From $90",
    rating: "4.5",
    description: "Fix and maintain your home appliances",
  },
];
/* ---------- Gradient Colors ---------- */
export const gradientColors = {
  primary: ["#FFFFFF", "#F8F9FA", "#F1F3F5"] as const,
  secondary: [
    "rgba(255, 255, 255, 0.95)", // pure white
    "rgba(248, 249, 250, 0.85)", // off-white
    "rgba(241, 243, 245, 0.75)", // light gray-white
  ] as const,
  cardOverlay: [
    "transparent",
    "rgba(0, 0, 0, 0.6)",
    "rgba(0, 0, 0, 0.55)",
  ] as const,
};
/* ---------- Animation Constants ---------- */
export const animationConfig = {
  splashDelay: 3000,
  fadeInDuration: 800,
  springDamping: 28,
  buttonPressScale: 0.95,
  buttonPressOpacity: 0.7,
};

/* ---------- App Configuration ---------- */
export const appConfig = {
  name: "HomeVerse",
  tagline: "Professional Home Services",
  description: "Your trusted partner for all home service needs",
  carouselSpeed: 60,
  blurIntensity: 65,
};

/* ---------- Home Screen Data ---------- */
export const heroBanners = [
  {
    title: "Special Offer",
    subtitle: "Up to 40% off premium cleaning packages",
    cta: "Book Now",
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&w=600&q=60",
    color: ["#3b82f6", "#60a5fa"],
  },
  {
    title: "Emergency Repairs",
    subtitle: "24/7 on-call technicians for urgent fixes",
    cta: "Call Support",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&w=600&q=60",
    color: ["#6366f1", "#8b5cf6"],
  },
] as const;

export const categories = [
  { icon: "sparkles-outline", label: "Cleaning" },
  { icon: "flash-outline", label: "Electrical" },
  { icon: "construct-outline", label: "Repairs" },
  { icon: "leaf-outline", label: "Landscaping" },
  { icon: "thermometer-outline", label: "HVAC" },
  { icon: "color-palette-outline", label: "Painting" },
] as const;

export const topProviders = [
  {
    id: "1",
    name: "Jenny Wilson",
    role: "Cleaner",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&w=200&q=60",
  },
  {
    id: "2",
    name: "Robert Fox",
    role: "Electrician",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&w=200&q=60",
  },
  {
    id: "3",
    name: "Kristin Watson",
    role: "Plumber",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&w=200&q=60",
  },
  {
    id: "4",
    name: "Cody Fisher",
    role: "Painter",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&w=200&q=60",
  },
];
