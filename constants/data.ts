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

/* ---------- Featured Services ---------- */
export const featuredServices = [
  {
    id: "1",
    title: "Emergency Plumbing",
    description: "24/7 emergency plumbing services for urgent repairs and maintenance",
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&w=600&q=60",
    icon: "water-outline",
    price: "From $120",
    rating: 4.8,
    category: "Plumbing",
  },
  {
    id: "2",
    title: "Professional Painting",
    description: "Transform your space with expert interior and exterior painting services",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&w=600&q=60",
    icon: "color-palette-outline",
    price: "From $300",
    rating: 4.9,
    category: "Painting",
  },
  {
    id: "3",
    title: "HVAC Maintenance",
    description: "Keep your home comfortable with professional heating and cooling services",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&w=600&q=60",
    icon: "thermometer-outline",
    price: "From $200",
    rating: 4.7,
    category: "HVAC",
  },
  {
    id: "4",
    title: "Electrical Services",
    description: "Safe and certified electrical installations, repairs, and upgrades",
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&w=600&q=60",
    icon: "flash-outline",
    price: "From $150",
    rating: 4.8,
    category: "Electrical",
  },
];

/* ---------- Benefits/Features ---------- */
export const benefits = [
  {
    id: "1",
    icon: "shield-checkmark-outline",
    title: "Verified Professionals",
    description: "All service providers are background-checked and certified",
    color: "#3b82f6",
  },
  {
    id: "2",
    icon: "time-outline",
    title: "24/7 Support",
    description: "Round-the-clock customer support for all your needs",
    color: "#8b5cf6",
  },
  {
    id: "3",
    icon: "cash-outline",
    title: "Best Price Guarantee",
    description: "Competitive pricing with transparent quotes",
    color: "#10b981",
  },
  {
    id: "4",
    icon: "star-outline",
    title: "Quality Assured",
    description: "100% satisfaction guarantee on all services",
    color: "#f59e0b",
  },
];

/* ---------- Special Offers ---------- */
export const specialOffers = [
  {
    id: "1",
    title: "First Time Customer",
    discount: "20% OFF",
    description: "Get 20% off on your first service booking",
    code: "FIRST20",
    color: ["#ec4899", "#f472b6"],
    icon: "gift-outline",
  },
  {
    id: "2",
    title: "Weekend Special",
    discount: "15% OFF",
    description: "Save 15% on weekend bookings",
    code: "WEEKEND15",
    color: ["#8b5cf6", "#a78bfa"],
    icon: "calendar-outline",
  },
  {
    id: "3",
    title: "Refer & Earn",
    discount: "$50 Credit",
    description: "Refer a friend and earn $50 credit",
    code: "REFER50",
    color: ["#10b981", "#34d399"],
    icon: "people-outline",
  },
];

/* ---------- How It Works ---------- */
export const howItWorksSteps = [
  {
    id: "1",
    step: "01",
    title: "Choose Service",
    description: "Browse and select from our wide range of home services",
    icon: "search-outline",
  },
  {
    id: "2",
    step: "02",
    title: "Book Appointment",
    description: "Pick a convenient date and time that works for you",
    icon: "calendar-outline",
  },
  {
    id: "3",
    step: "03",
    title: "Get It Done",
    description: "Our verified professionals arrive and complete the job",
    icon: "checkmark-circle-outline",
  },
  {
    id: "4",
    step: "04",
    title: "Rate & Review",
    description: "Share your experience and help others make informed choices",
    icon: "star-outline",
  },
];
