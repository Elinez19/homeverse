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

/* ---------- Explore Screen Data ---------- */

// Articles & Tips
export const homeArticles = [
  {
    id: "1",
    title: "Maximizing Energy Efficiency: Tips for Smart Home Upgrades",
    readTime: "5 min read",
    category: "Smart Home",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&w=800&q=80",
    color: "#93c5fd",
    excerpt: "Learn how to reduce energy costs with smart home technology",
    content: {
      introduction: "Smart home technology isn't just about convenience—it can also significantly reduce your energy bills. By making strategic upgrades, you can cut your energy costs by up to 30% while enjoying a more comfortable living space. This article explores the most effective smart home upgrades for maximizing energy efficiency.",
      sections: [
        {
          title: "Smart Thermostats: Your First Investment",
          content: "A programmable smart thermostat is one of the most impactful upgrades you can make. These devices learn your schedule and preferences, automatically adjusting temperatures to optimize comfort and efficiency. Popular options like Nest and Ecobee can save you 10-23% on heating and cooling costs annually."
        },
        {
          title: "LED Smart Bulbs and Lighting Control",
          content: "Smart LED bulbs use 75% less energy than traditional incandescent bulbs and last 25 times longer. When paired with motion sensors and scheduling, you can ensure lights are only on when needed. Consider installing dimmer switches and smart plugs to further reduce phantom power consumption."
        },
        {
          title: "Energy Monitoring Systems",
          content: "Real-time energy monitoring systems give you insight into which appliances consume the most power. This data helps you make informed decisions about usage patterns and identify opportunities for savings. Many systems integrate with your smartphone for easy tracking."
        },
        {
          title: "Smart Power Strips and Outlets",
          content: "Eliminate vampire power drain with smart power strips that automatically cut power to devices in standby mode. Smart outlets can be scheduled or controlled remotely, ensuring appliances aren't consuming energy when not in use."
        }
      ]
    }
  },
  {
    id: "2",
    title: "Seasonal Home Maintenance: Your Complete Checklist",
    readTime: "4 min read",
    category: "Maintenance",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&w=800&q=80",
    color: "#fca5a5",
    excerpt: "Essential tasks to keep your home in top condition year-round",
    content: {
      introduction: "Regular seasonal maintenance prevents costly repairs and keeps your home running smoothly throughout the year. Following a structured checklist ensures you don't overlook critical tasks that could lead to major problems down the line.",
      sections: [
        {
          title: "Spring: Renewal and Preparation",
          content: "Inspect your roof for winter damage, clean gutters and downspouts, service your air conditioning system, check for foundation cracks, and test your sump pump. Spring is also the perfect time to power wash exterior surfaces and reseal your driveway."
        },
        {
          title: "Summer: Outdoor Focus",
          content: "Maintain your lawn irrigation system, inspect and repair deck or patio surfaces, clean and repair window screens, trim trees and shrubs away from your home, and inspect exterior paint for peeling or damage. Don't forget to clean your dryer vent to prevent fire hazards."
        },
        {
          title: "Fall: Winter Preparation",
          content: "Clean gutters again after leaves fall, have your heating system serviced, insulate pipes in unheated areas, seal gaps around windows and doors, and reverse ceiling fan direction. This is also the time to drain outdoor faucets and store garden hoses."
        },
        {
          title: "Winter: Indoor Maintenance",
          content: "Check for ice dams on your roof, test smoke and carbon monoxide detectors, inspect your attic for proper insulation and ventilation, and maintain humidity levels between 30-50%. Keep an eye on your heating system's performance and change filters monthly."
        }
      ]
    }
  },
  {
    id: "3",
    title: "Choosing the Right Paint Colors for Every Room",
    readTime: "6 min read",
    category: "Interior Design",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&w=800&q=80",
    color: "#c4b5fd",
    excerpt: "Expert color psychology tips for creating the perfect ambiance",
    content: {
      introduction: "Color has a profound psychological impact on our mood and behavior. Choosing the right paint colors for each room can enhance functionality, create desired atmospheres, and even affect how spacious a room feels. Understanding color psychology is key to making informed decisions.",
      sections: [
        {
          title: "Living Room: Warm and Welcoming",
          content: "Opt for warm neutrals like beige, taupe, or warm gray to create an inviting atmosphere. These colors work well with various decor styles and make the space feel cozy. For accent walls, consider deep blues or rich greens to add depth without overwhelming the space."
        },
        {
          title: "Kitchen: Clean and Energizing",
          content: "White and light colors make kitchens feel clean and spacious. Soft yellows can stimulate appetite and conversation, while light blues create a calm, fresh environment. Consider using different finishes—semi-gloss for cabinets and matte for walls—to add visual interest."
        },
        {
          title: "Bedroom: Restful and Serene",
          content: "Cool colors like soft blues, lavenders, and sage greens promote relaxation and better sleep. Avoid bright, energizing colors in bedrooms. If you prefer warmer tones, choose muted versions like dusty rose or warm taupe to maintain a calming environment."
        },
        {
          title: "Home Office: Focus and Productivity",
          content: "Blues and greens enhance concentration and reduce eye strain. Light gray provides a professional backdrop without being stark. Add pops of yellow or orange in accessories to stimulate creativity and energy when needed."
        }
      ]
    }
  },
  {
    id: "4",
    title: "Emergency Plumbing: What to Do Before Help Arrives",
    readTime: "3 min read",
    category: "Emergency Tips",
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&w=800&q=80",
    color: "#86efac",
    excerpt: "Quick actions to minimize damage during plumbing emergencies",
    content: {
      introduction: "Plumbing emergencies can cause significant water damage if not addressed quickly. While waiting for professional help, there are several steps you can take to minimize damage and protect your property. Knowing these emergency procedures can save you thousands in repair costs.",
      sections: [
        {
          title: "Shut Off the Water Supply",
          content: "The first and most critical step is to stop the water flow. Locate your main water shut-off valve—typically found near the water meter or where the main line enters your home. Turn it clockwise to close. For localized issues, use fixture-specific shut-off valves under sinks or behind toilets."
        },
        {
          title: "Contain the Water",
          content: "Use towels, buckets, and mops to contain water and prevent it from spreading to other areas. Move furniture, electronics, and valuables away from the affected area. If water is dripping from a ceiling, poke a small hole in the bulge to release water in a controlled manner into a bucket."
        },
        {
          title: "Document the Damage",
          content: "Take photos and videos of the damage for insurance purposes before cleaning up. Document the source of the leak, affected areas, and any damaged belongings. This documentation will be crucial for insurance claims and can help the plumber diagnose the issue more quickly."
        },
        {
          title: "Address Electrical Hazards",
          content: "If water is near electrical outlets, appliances, or your electrical panel, turn off power to the affected area at your circuit breaker. Never touch electrical devices or outlets with wet hands. If you can't safely access the breaker, evacuate and call emergency services."
        }
      ]
    }
  },
  {
    id: "5",
    title: "Landscaping Trends: Transform Your Outdoor Space",
    readTime: "7 min read",
    category: "Outdoor",
    image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&w=800&q=80",
    color: "#fde68a",
    excerpt: "Modern landscaping ideas to boost your home's curb appeal",
    content: {
      introduction: "Your outdoor space is an extension of your home and a reflection of your personal style. Modern landscaping trends focus on sustainability, low maintenance, and creating functional outdoor living areas. These trends can significantly increase your property value while reducing water consumption and upkeep time.",
      sections: [
        {
          title: "Native Plant Gardens",
          content: "Native plants are adapted to your local climate, requiring less water, fertilizer, and maintenance than exotic species. They also support local wildlife and pollinators. Create layered plantings with native grasses, perennials, and shrubs for year-round interest and minimal upkeep."
        },
        {
          title: "Outdoor Living Spaces",
          content: "Extend your living area outdoors with defined spaces for dining, lounging, and entertaining. Use pavers or composite decking to create distinct zones. Add comfortable seating, outdoor kitchens, and fire features to make these spaces functional year-round."
        },
        {
          title: "Sustainable Water Features",
          content: "Modern water features incorporate recirculating systems and rainwater harvesting. Consider pondless waterfalls, bubbling rocks, or rain gardens that manage stormwater while adding visual interest. These features attract birds and beneficial insects while using minimal water."
        },
        {
          title: "Smart Irrigation Systems",
          content: "Install weather-based irrigation controllers that adjust watering schedules based on rainfall and temperature. Drip irrigation delivers water directly to plant roots, reducing waste by up to 50%. Zone your irrigation to group plants with similar water needs together."
        }
      ]
    }
  },
];

// Trending Services
export const trendingServices = [
  {
    id: "trend-1",
    title: "Smart Lock Installation",
    category: "Smart Home",
    price: "From $180",
    rating: 4.9,
    reviews: 342,
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&w=600&q=60",
    trending: true,
    badge: "🔥 Hot",
  },
  {
    id: "trend-2",
    title: "Solar Panel Installation",
    category: "Energy",
    price: "From $2,500",
    rating: 4.8,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&w=600&q=60",
    trending: true,
    badge: "⚡ Popular",
  },
  {
    id: "trend-3",
    title: "Home Theater Setup",
    category: "Entertainment",
    price: "From $450",
    rating: 4.7,
    reviews: 256,
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&w=600&q=60",
    trending: true,
    badge: "⭐ New",
  },
];

// Service Categories with Images
export const exploreCategoriesWithImages = [
  {
    id: "cat-1",
    name: "Cleaning Services",
    serviceCount: 24,
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&w=600&q=60",
    icon: "sparkles-outline",
    color: "#3b82f6",
  },
  {
    id: "cat-2",
    name: "Electrical Work",
    serviceCount: 18,
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&w=600&q=60",
    icon: "flash-outline",
    color: "#f59e0b",
  },
  {
    id: "cat-3",
    name: "Plumbing",
    serviceCount: 21,
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&w=600&q=60",
    icon: "water-outline",
    color: "#06b6d4",
  },
  {
    id: "cat-4",
    name: "HVAC Services",
    serviceCount: 15,
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&w=600&q=60",
    icon: "thermometer-outline",
    color: "#8b5cf6",
  },
  {
    id: "cat-5",
    name: "Painting",
    serviceCount: 12,
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&w=600&q=60",
    icon: "color-palette-outline",
    color: "#ec4899",
  },
  {
    id: "cat-6",
    name: "Landscaping",
    serviceCount: 19,
    image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&w=600&q=60",
    icon: "leaf-outline",
    color: "#10b981",
  },
];

// Expert Tips (Quick Tips Section)
export const expertTips = [
  {
    id: "tip-1",
    title: "Save on Energy Bills",
    description: "Install a programmable thermostat to reduce heating and cooling costs by up to 30%",
    icon: "bulb-outline",
    color: "#fbbf24",
  },
  {
    id: "tip-2",
    title: "Prevent Water Damage",
    description: "Check your water heater annually and replace it every 8-12 years",
    icon: "water-outline",
    color: "#3b82f6",
  },
  {
    id: "tip-3",
    title: "Boost Home Value",
    description: "Fresh paint and updated fixtures can increase your home's value by 5-10%",
    icon: "trending-up-outline",
    color: "#10b981",
  },
  {
    id: "tip-4",
    title: "Safety First",
    description: "Test smoke detectors monthly and replace batteries twice a year",
    icon: "shield-checkmark-outline",
    color: "#ef4444",
  },
];

/* ---------- Chat Data ---------- */
export const chatList = [
  {
    id: "1",
    name: "Jenny Wilson",
    role: "Cleaner",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&w=200&q=60",
    lastMessage: "I'll be there in about 10 minutes.",
    time: "10:30 AM",
    unread: 2,
    online: true,
  },
  {
    id: "2",
    name: "Robert Fox",
    role: "Electrician",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&w=200&q=60",
    lastMessage: "Can you send me a picture of the panel?",
    time: "Yesterday",
    unread: 0,
    online: false,
  },
  {
    id: "3",
    name: "Kristin Watson",
    role: "Plumber",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&w=200&q=60",
    lastMessage: "The parts have arrived, we can schedule for tomorrow.",
    time: "Yesterday",
    unread: 0,
    online: true,
  },
  {
    id: "4",
    name: "Cody Fisher",
    role: "Painter",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&w=200&q=60",
    lastMessage: "Thanks for the review!",
    time: "Tue",
    unread: 0,
    online: false,
  },
];

export const chatMessages = {
  "1": [
    {
      id: "m1",
      text: "Hi Jenny, are we still on for today?",
      sender: "user",
      time: "10:00 AM",
    },
    {
      id: "m2",
      text: "Yes! I'm just finishing up another job nearby.",
      sender: "other",
      time: "10:05 AM",
    },
    {
      id: "m3",
      text: "Great, see you soon.",
      sender: "user",
      time: "10:06 AM",
    },
    {
      id: "m4",
      text: "I'll be there in about 10 minutes.",
      sender: "other",
      time: "10:30 AM",
    },
  ],
  "2": [
    {
      id: "m1",
      text: "Hello, I have an issue with my circuit breaker.",
      sender: "user",
      time: "Yesterday, 2:00 PM",
    },
    {
      id: "m2",
      text: "Hi! I can help with that. Is it tripping frequently?",
      sender: "other",
      time: "Yesterday, 2:15 PM",
    },
    {
      id: "m3",
      text: "Yes, every time I turn on the AC.",
      sender: "user",
      time: "Yesterday, 2:20 PM",
    },
    {
      id: "m4",
      text: "Can you send me a picture of the panel?",
      sender: "other",
      time: "Yesterday, 2:25 PM",
    },
  ],
};

/* ---------- Profile Data ---------- */
export const userProfile = {
  name: "Olivia James",
  email: "olivia@homeverse.app",
  phone: "+1 (555) 123-4567",
  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&w=200&q=80",
  location: "San Francisco, CA",
  memberSince: "August 2023",
  membership: "Premium Member",
};

export const profileStats = [
  { label: "Bookings", value: "12" },
  { label: "Reviews", value: "5" },
  { label: "Favorites", value: "8" },
];

export const profileMenu = [
  {
    title: "Account",
    items: [
      { icon: "person-outline", label: "Personal Information", route: "/profile/info" },
      { icon: "card-outline", label: "Payment Methods", route: "/profile/payments" },
      { icon: "location-outline", label: "Addresses", route: "/profile/addresses" },
      { icon: "notifications-outline", label: "Notifications", route: "/profile/notifications" },
    ],
  },
  {
    title: "General",
    items: [
      { icon: "settings-outline", label: "Settings", route: "/profile/settings" },
      { icon: "language-outline", label: "Language", value: "English (US)", route: "/profile/language" },
      { icon: "moon-outline", label: "Dark Mode", isSwitch: true, route: null },
    ],
  },
  {
    title: "Support",
    items: [
      { icon: "help-circle-outline", label: "Help Center", route: "/profile/help" },
      { icon: "chatbubble-ellipses-outline", label: "Contact Support", route: "/profile/support" },
      { icon: "document-text-outline", label: "Terms & Privacy", route: "/profile/legal" },
    ],
  },
];

/* ---------- Cart & Favorites Data ---------- */
export const cartItems = [
  {
    id: "1",
    serviceId: "1",
    title: "Emergency Plumbing",
    price: 120,
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&w=600&q=60",
    category: "Plumbing",
    date: "2023-11-25",
    time: "10:00 AM",
  },
  {
    id: "2",
    serviceId: "2",
    title: "Professional Painting",
    price: 300,
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&w=600&q=60",
    category: "Painting",
    date: "2023-11-28",
    time: "02:00 PM",
  }
];

export const favoriteItems = [
  {
    id: "1",
    title: "Emergency Plumbing",
    price: "From $120",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&w=600&q=60",
    category: "Plumbing",
    reviews: 128,
  },
  {
    id: "3",
    title: "HVAC Maintenance",
    price: "From $200",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&w=600&q=60",
    category: "HVAC",
    reviews: 85,
  },
   {
    id: "trend-1",
    title: "Smart Lock Installation",
    category: "Smart Home",
    price: "From $180",
    rating: 4.9,
    reviews: 342,
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&w=600&q=60",
  },
];
