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
  primary: ["#FF4500", "#FF6347", "#FF7F50"] as const,
  secondary: [
    "rgba(255, 69, 0, 0.2)", // soft orangered
    "rgba(255, 99, 71, 0.15)", // tomato tint
    "rgba(255, 127, 80, 0.1)", // coral tint
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
