// src/config/site.ts — Done Right Handyman Services demo (Wylie, TX)
// All client-specific content lives here. Never hard-code business details in components.

export interface Service {
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  image?: string;
}

export interface SiteImages {
  hero?: string;
  about?: string;
}

export interface Testimonial {
  name: string;
  role?: string;
  text: string;
  rating?: number;
}

export interface SiteTheme {
  headerStyle?: "white" | "brand";
  heroLayout?: "split" | "centered";
  heroPattern?: boolean;
  footerStyle?: "dark" | "brand";
  showTrustBar?: boolean;
  roundness?: "sm" | "md" | "lg" | "full";
}

export interface SiteConfig {
  business: string;
  tagline: string;
  heroEyebrow?: string;
  phone: string;
  phoneDisplay: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  serviceAreas: string[];
  services: Service[];
  images: SiteImages;
  brandColor: string;
  yearsInBusiness: number;
  // Field names say "google*" for historical reasons, but they drive the
  // review section generically for whichever platform the client's real
  // reputation lives on — see `reviewPlatform` below.
  googleReviewLink: string;
  googleRating: number;
  googleReviewCount: number;
  reviewPlatform?: "Google" | "Yelp";
  footerTagline?: string;
  theme?: SiteTheme;
  testimonials?: Testimonial[];
  features: {
    reviewsWidget: boolean;
    booking: boolean;
    smsForwarding: boolean;
  };
  calLink: string;
  ownerCell: string;
}

export const site: SiteConfig = {
  business: "Done Right Handyman Services",
  tagline: "Handyman work, fences & gates — done right, every time",
  heroEyebrow: "Wylie's Locally-Owned Handyman · Free Estimates",
  phone: "+18067818940",
  phoneDisplay: "(806) 781-8940",
  email: "hello@donerighthandymanwylie.com",
  address: "Wylie, TX 75098",
  city: "Wylie",
  state: "TX",
  zip: "75098",
  serviceAreas: ["Wylie", "Sachse", "Murphy", "Garland", "Rockwall", "Plano"],
  brandColor: "#b45309",

  services: [
    {
      name: "General Handyman Repairs",
      slug: "general-repairs",
      shortDescription: "Assembly, caulking, drywall, and the to-do list you've been putting off.",
      description: "From furniture assembly and caulking to small drywall and hardware fixes, we handle the everyday repairs Wylie-area homeowners need most. No job too small.",
      image: "/images/services/general-repairs.jpg",
    },
    {
      name: "Fence & Gate Services",
      slug: "fence-gate-services",
      shortDescription: "New gates built from scratch, fence repairs, staining, and weatherproofing.",
      description: "We design and build custom gates, repair storm and wear damage, and stain and weatherproof fences so they hold up through another Texas summer. Free estimates on every fence project.",
      image: "/images/services/fence-gate-services.jpg",
    },
    {
      name: "Pressure & Power Washing",
      slug: "pressure-washing",
      shortDescription: "Fences, decks, driveways, and patios blasted clean and ready for staining.",
      description: "Years of grime, mildew, and weathering removed from wood, concrete, and brick — often the first step before a fence staining or deck refresh project.",
      image: "/images/services/pressure-washing.jpg",
    },
    {
      name: "Door Installation & Repair",
      slug: "door-window-repair",
      shortDescription: "New door installs, sticking doors, and hardware repaired or replaced.",
      description: "We install new interior and exterior doors and fix the ones that stick, drag, or won't latch — including hardware replacement and frame adjustments.",
      image: "/images/services/door-window-repair.jpg",
    },
    {
      name: "Tile Installation & Replacement",
      slug: "tile-installation",
      shortDescription: "Bathrooms, backsplashes, and floors — tiled cleanly and measured right.",
      description: "From a single cracked tile to a full bathroom re-tile, we measure, cut, and install with clean lines and properly sealed grout.",
      image: "/images/services/tile-installation.jpg",
    },
    {
      name: "Appliance Installation",
      slug: "appliance-installation",
      shortDescription: "Dishwashers, microwaves, washers, and more — installed and tested.",
      description: "We install new appliances correctly the first time, including hookups, leveling, and a final test run — so you're not stuck reading a manual on a Saturday.",
      image: "/images/services/appliance-installation.jpg",
    },
    {
      name: "Carpentry & Deck Repair",
      slug: "carpentry-decks",
      shortDescription: "Deck board repair, pathway rails, and custom carpentry built to last.",
      description: "From deck board replacement and railing repair to custom carpentry projects, we bring the same craftsmanship to outdoor structures as we do indoors.",
      image: "/images/services/carpentry-decks.jpg",
    },
  ],

  images: {},

  yearsInBusiness: 3,
  googleReviewLink: "https://www.yelp.com/biz/done-right-handyman-services-wylie-4",
  googleRating: 4.8,
  googleReviewCount: 24,
  reviewPlatform: "Yelp",

  testimonials: [
    {
      name: "Tyler R.",
      role: "Houston, TX",
      text: "Travis was fantastic. Consulted and quoted via text — fast and simple. Came when he said he would and worked fast. Transparent and reasonable price. Did a great job on my fence and gate. Highly recommend.",
      rating: 5,
    },
    {
      name: "Pikeren D.",
      role: "Richardson, TX",
      text: "Contacted Travis about making a gate for our backyard — wanted a design that would allow some airflow. Two days later, we had a brand new gate made from scratch and installed. Very, very pleased — exceeded our expectations. Highly recommend Travis for your projects.",
      rating: 5,
    },
    {
      name: "Gerald W.",
      role: "Garden Grove, CA",
      text: "Very professional and fixed multiple issues around my house. Very knowledgeable and helpful. I have more projects coming up and Done Right will be my first call — they do quality work for a fair price. Highly recommend.",
      rating: 5,
    },
  ],

  footerTagline: "Locally owned. Quality work. Fair prices.",

  theme: {
    headerStyle: "white",
    heroLayout: "split",
    heroPattern: false,
    footerStyle: "dark",
    showTrustBar: true,
    roundness: "lg",
  },

  features: {
    reviewsWidget: false,
    booking: true,
    smsForwarding: false,
  },

  calLink: "",
  ownerCell: "",
};
