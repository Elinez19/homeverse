import { ServiceDetail, ServiceSummary } from "@/types/service";

const serviceDetails: ServiceDetail[] = [
  {
    id: "deep-house-cleaning",
    title: "Deep House Cleaning",
    category: "Home Cleaning",
    provider: "Jenny Wilson Services",
    rating: 4.5,
    reviews: 365,
    price: "$65.00 / hr",
    totalPrice: "$180.00",
    priceLabel: "Total Price",
    location: "New York, USA",
    address: "1012 Ocean Avenue, New York, USA",
    image:
      "https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&w=900&q=60",
    summary:
      "Premium deep clean for apartments and family homes with attention to every detail, using eco-friendly supplies.",
    description:
      "Our Deep House Cleaning service covers every corner of your home. From baseboards to ceiling fans, kitchen appliances to bathroom tile, our trained team uses hospital-grade disinfectants and hypoallergenic products to keep your family safe. Flexible scheduling, verified professionals, and satisfaction guaranteed.",
    highlights: [
      { label: "Duration", value: "3 hrs avg" },
      { label: "Supplies", value: "Eco products" },
      { label: "Support", value: "24/7 chat" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&w=400&q=60",
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&w=400&q=60",
      "https://images.unsplash.com/photo-1484632152040-840235adc262?auto=format&w=400&q=60",
      "https://images.unsplash.com/photo-1462219184704-54ee455e1ee0?auto=format&w=400&q=60",
    ],
    provider: {
      name: "Jenny Wilson",
      role: "Service Provider",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&w=200&q=60",
      phone: "+1 516-503-1111",
    },
    duration: "Up to 4 hrs",
    availability: "Mon - Sun",
  },
  {
    id: "smart-home-installation",
    title: "Smart Home Installation",
    category: "Home Automation",
    provider: "Tech Builders",
    rating: 4.9,
    reviews: 192,
    price: "$120.00 / hr",
    totalPrice: "$320.00",
    priceLabel: "Starting At",
    location: "Queens, NY",
    address: "4109 Queen Street, Queens, NY",
    image:
      "https://images.unsplash.com/photo-1580894908361-967195033215?auto=format&w=900&q=60",
    summary:
      "Upgrade your apartment or townhouse with professional installation of smart locks, thermostats, and lighting.",
    description:
      "Certified installers configure every device, integrate voice assistants, and provide training so you can automate climate, lighting, and security. Includes network optimization, custom scenes, and post-install support. Hardware recommendations available upon request.",
    highlights: [
      { label: "Devices", value: "Up to 8" },
      { label: "Warranty", value: "12 months" },
      { label: "Support", value: "Phone & chat" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&w=400&q=60",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&w=400&q=60",
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&w=400&q=60",
      "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&w=400&q=60",
    ],
    provider: {
      name: "Calvin Flores",
      role: "Lead Technician",
      avatar:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&w=200&q=60",
      phone: "+1 718-244-8892",
    },
    duration: "2 - 5 hrs",
    availability: "Mon - Sat",
  },
  {
    id: "landscape-refresh",
    title: "Landscape Refresh",
    category: "Landscaping",
    provider: "Outdoor Oasis",
    rating: 4.7,
    reviews: 88,
    price: "$180.00 / project",
    totalPrice: "$480.00",
    priceLabel: "Package Price",
    location: "Jersey City, NJ",
    address: "88 Liberty Drive, Jersey City, NJ",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&w=900&q=60",
    summary:
      "Seasonal refresh for lawns and small gardens. Includes trimming, mulching, and planter styling.",
    description:
      "Our crew revitalizes front yards, patios, and rooftop terraces. Includes soil testing, irrigation check, and disposal of green waste. Optional add-ons for planter installation and lighting accents.",
    highlights: [
      { label: "Lot Size", value: "Up to 1,800 sqft" },
      { label: "Team", value: "2 specialists" },
      { label: "Guarantee", value: "14-day touch up" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&w=400&q=60",
      "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&w=400&q=60",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&w=400&q=60",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&w=400&q=60",
    ],
    provider: {
      name: "Patricia Ortega",
      role: "Lead Gardener",
      avatar:
        "https://images.unsplash.com/photo-1525130413817-d45c1d127c42?auto=format&w=200&q=60",
      phone: "+1 201-325-2240",
    },
    duration: "1 day",
    availability: "Tue - Sun",
  },
];

export const services: ServiceSummary[] = serviceDetails.map((service) => ({
  id: service.id,
  title: service.title,
  provider: service.provider,
  rating: service.rating,
  price: service.price,
  location: service.location,
  image: service.image,
}));

export function getServiceDetail(serviceId: string) {
  return serviceDetails.find((service) => service.id === serviceId);
}

