// src/config/site.ts — Fix'd Fast Handyman demo
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
  googleReviewLink: string;
  googleRating: number;
  googleReviewCount: number;
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
  business: "Fix'd Fast Handyman",
  tagline: "Any job, any size — done right the first time",
  heroEyebrow: "Frisco's #1 Rated Handyman · Book Same Day",
  phone: "+19725550199",
  phoneDisplay: "(972) 555-0199",
  email: "hello@fixdfast.com",
  address: "456 Commerce Dr, Frisco, TX 75034",
  city: "Frisco",
  state: "TX",
  zip: "75034",
  serviceAreas: ["Frisco", "Plano", "McKinney", "Allen", "Prosper", "Celina", "Little Elm"],
  brandColor: "#ea580c",

  services: [
    {
      name: "General Repairs",
      slug: "general-repairs",
      shortDescription: "Drywall patches, door fixes, leaky faucets — if it's broken, we fix it fast.",
      description: "From loose hinges and squeaky floors to drywall patches and sticky doors, our handymen handle the to-do list you've been putting off. No job is too small and nothing sits on the shelf.",
    },
    {
      name: "TV & Appliance Mounting",
      slug: "tv-mounting",
      shortDescription: "Safe, clean TV mounts and appliance installs with cable management.",
      description: "We mount your TV securely on any wall type (drywall, brick, concrete), route cables cleanly behind the wall, and set up your viewing angle. Dishwashers, microwaves, and range hoods too.",
    },
    {
      name: "Furniture Assembly",
      slug: "furniture-assembly",
      shortDescription: "IKEA, Wayfair, Amazon — assembled quickly so you can enjoy it today.",
      description: "Skip the 3-hour struggle. We assemble any flat-pack furniture from any brand, correctly and efficiently. Beds, dressers, desks, shelving units, patio sets — done in a fraction of the time.",
    },
    {
      name: "Painting & Touch-Ups",
      slug: "painting",
      shortDescription: "Interior painting, trim work, and flawless touch-ups that match perfectly.",
      description: "Whether it's a single accent wall, a full room repaint, or touch-ups on scuffs and chips, we deliver clean lines and a professional finish. We match existing colors and handle all prep work.",
    },
    {
      name: "Pressure Washing",
      slug: "pressure-washing",
      shortDescription: "Driveways, patios, fences, and siding blasted clean in hours.",
      description: "Our commercial-grade pressure washing removes years of grime, mold, algae, and staining from concrete, wood, vinyl, and brick. Your curb appeal, transformed in an afternoon.",
    },
    {
      name: "Smart Home Setup",
      slug: "smart-home-setup",
      shortDescription: "Nest, Ring, Sonos, smart locks — installed and fully configured.",
      description: "We install and configure all your smart home devices: thermostats, video doorbells, security cameras, smart locks, speaker systems, and whole-home automation. We stay until everything works.",
    },
    {
      name: "Door & Window Repair",
      slug: "door-window-repair",
      shortDescription: "Drafty windows, stuck doors, broken locks — fixed same day.",
      description: "We repair and replace door hardware, adjust frames that have shifted with the Texas heat, reglaze windows, replace broken screens, and weatherstrip everything properly so your home is sealed.",
    },
    {
      name: "Flooring Installation",
      slug: "flooring",
      shortDescription: "LVP, tile, hardwood, and carpet — measured, cut, and installed cleanly.",
      description: "We install luxury vinyl plank, ceramic tile, hardwood, and laminate flooring with precision. From small bathrooms to full living rooms, we handle demo, subfloor prep, installation, and trim.",
    },
  ],

  images: {},

  yearsInBusiness: 8,
  googleReviewLink: "https://g.page/r/fixdfast-review",
  googleRating: 4.9,
  googleReviewCount: 312,

  testimonials: [
    {
      name: "Zoe K.",
      role: "Homeowner, Frisco",
      text: "Fixed my leaky faucet, patched two drywall holes, and mounted my TV in one visit. Literally could not believe how fast and clean everything was. 10/10.",
      rating: 5,
    },
    {
      name: "Marcus T.",
      role: "Apartment Renter, Plano",
      text: "I had a whole IKEA haul to assemble — 6 pieces. They knocked it all out in under 2 hours while I worked from home. Zero stress, great vibes.",
      rating: 5,
    },
    {
      name: "Priya N.",
      role: "Remote Worker, McKinney",
      text: "Set up my entire smart home — Nest, Ring, 4 cameras, and a smart lock. Walked me through the app setup too. This is the future of home services.",
      rating: 5,
    },
  ],

  footerTagline: "Fast fixes, fair prices, zero hassle.",

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
    booking: false,
    smsForwarding: false,
  },

  calLink: "",
  ownerCell: "",
};
