import trading from "@/assets/sector-trading.jpg";
import agri from "@/assets/sector-agri.jpg";
import realestate from "@/assets/sector-realestate.jpg";
import telecom from "@/assets/sector-telecom.jpg";
import mining from "@/assets/sector-mining.jpg";
import fishing from "@/assets/sector-fishing.jpg";

export type Sector = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  bullets: string[];
};

export const sectors: Sector[] = [
  {
    slug: "trading-commodities",
    title: "Trading & Commodities",
    tagline: "Essential supply. Global sourcing. Reliable delivery.",
    description:
      "Sourcing, trading and distribution of construction materials, industrial commodities and equipment across MENA and emerging markets.",
    image: trading,
    bullets: [
      "Bulk procurement and competitive pricing",
      "Strong supplier networks in China and Turkey",
      "UAE and Egypt logistics hubs",
      "Capability to supply complex, underserved markets",
    ],
  },
  {
    slug: "food-agriculture",
    title: "Food & Agriculture",
    tagline: "From origin to regional & global markets.",
    description:
      "Integrated food and agricultural value chains, with focus on origin-based products and scalable processing for export markets.",
    image: agri,
    bullets: [
      "End-to-end supply chain control",
      "GCC-compliant food safety standards",
      "Scalable processing capacity",
      "Strong producer and community partnerships",
    ],
  },
  {
    slug: "real-estate-infrastructure",
    title: "Real Estate & Infrastructure",
    tagline: "Developing assets that endure.",
    description:
      "Development, investment and management of high-impact real estate and infrastructure projects across emerging and high-growth markets.",
    image: realestate,
    bullets: [
      "Emerging-market development experience",
      "Hybrid: development, investment, asset management",
      "Diversified income streams",
      "Energy and telecom integrated into projects",
    ],
  },
  {
    slug: "telecom-energy",
    title: "Telecom & Energy",
    tagline: "Powering connectivity & sustainable growth.",
    description:
      "Infrastructure solutions that address connectivity gaps and energy demand through scalable, technology-driven platforms.",
    image: telecom,
    bullets: [
      "Telecom tower deployment and leasing",
      "Solar EPC and renewable energy projects",
      "Predictable recurring revenues (PPAs & leases)",
      "Aligned with national sustainability strategies",
    ],
  },
  {
    slug: "mining-cement",
    title: "Mining & Cement",
    tagline: "Building foundations for growth.",
    description:
      "Extraction, processing and supply of industrial minerals and cement across regional construction markets.",
    image: mining,
    bullets: [
      "Vertical integration across mining and cement",
      "Local and regional distribution networks",
      "Aligned with construction & infrastructure",
      "Scalable operations in emerging markets",
    ],
  },
  {
    slug: "fishing-aquaculture",
    title: "Fishing & Aquaculture",
    tagline: "From sea to market.",
    description:
      "Sustainable fishing and aquaculture operations for local and regional markets, with full cold-chain logistics.",
    image: fishing,
    bullets: [
      "Responsible fishing and sustainable practices",
      "Processing, cold-chain logistics, export-ready",
      "Community engagement and local employment",
      "Supply to GCC and MENA markets",
    ],
  },
];

export type Project = {
  slug: string;
  name: string;
  sector: string;
  location: string;
  status: "Ongoing" | "Completed";
  size: string;
  roi: string;
  timeline: string;
  partners: string;
  importance: string;
  description: string;
  image: string;
};

export const projects: Project[] = [
  {
    slug: "aden-cold-chain",
    name: "Aden Cold-Chain & Processing Hub",
    sector: "Food & Agriculture",
    location: "Aden, Yemen",
    status: "Ongoing",
    size: "$48M",
    roi: "18% IRR",
    timeline: "2025 – 2027",
    partners: "Local cooperatives, GCC distributors",
    importance: "Strengthens regional food security and unlocks origin-based exports.",
    description:
      "An integrated cold-storage, processing and export terminal connecting Yemeni producers to GCC and MENA markets.",
    image: agri,
  },
  {
    slug: "abu-dhabi-mixed-use",
    name: "Al Falah Mixed-Use Development",
    sector: "Real Estate & Infrastructure",
    location: "Abu Dhabi, UAE",
    status: "Ongoing",
    size: "$210M",
    roi: "14% IRR",
    timeline: "2024 – 2028",
    partners: "Sovereign-backed developers",
    importance: "Anchor asset combining residential, office and integrated energy systems.",
    description:
      "A premium mixed-use development integrating smart-building, solar and telecom infrastructure on a single platform.",
    image: realestate,
  },
  {
    slug: "egypt-solar-epc",
    name: "Upper Egypt Solar EPC Platform",
    sector: "Telecom & Energy",
    location: "Aswan, Egypt",
    status: "Ongoing",
    size: "$95M",
    roi: "12% IRR + PPA",
    timeline: "2026 – 2029",
    partners: "Egyptian Electricity Holding, equipment OEMs",
    importance: "Recurring revenues via 20-year power purchase agreements.",
    description:
      "A scalable solar EPC platform delivering utility-scale plants with predictable recurring cash flows.",
    image: telecom,
  },
  {
    slug: "china-sourcing-corridor",
    name: "China – MENA Sourcing Corridor",
    sector: "Trading & Commodities",
    location: "Hong Kong → UAE",
    status: "Ongoing",
    size: "$60M / yr",
    roi: "Rolling",
    timeline: "Continuous",
    partners: "Tier-1 Chinese manufacturers",
    importance: "Backbone of HS Group's industrial supply for MENA.",
    description:
      "An always-on procurement corridor from Chinese manufacturing into UAE and Egypt logistics hubs.",
    image: trading,
  },
  {
    slug: "yemen-cement",
    name: "Aden Cement & Aggregates",
    sector: "Mining & Cement",
    location: "Aden, Yemen",
    status: "Completed",
    size: "$35M",
    roi: "16% IRR",
    timeline: "2022 – 2024",
    partners: "Regional construction firms",
    importance: "Vertically integrated supply for reconstruction projects.",
    description:
      "Cement and aggregate production plant supplying regional reconstruction and infrastructure demand.",
    image: mining,
  },
  {
    slug: "aquaculture-platform",
    name: "Red Sea Aquaculture Platform",
    sector: "Fishing & Aquaculture",
    location: "Red Sea coast",
    status: "Ongoing",
    size: "$22M",
    roi: "20% IRR",
    timeline: "2025 – 2027",
    partners: "Local fisheries, GCC retailers",
    importance: "Sustainable seafood supply with full cold-chain.",
    description:
      "Integrated aquaculture pens, processing and cold-chain enabling export-ready seafood production.",
    image: fishing,
  },
];

export const newsPosts = [
  {
    slug: "hs-launches-egypt-solar",
    title: "HS Investment Launches Upper Egypt Solar Platform",
    date: "May 2026",
    category: "Energy",
    excerpt:
      "Group commits $95M to a scalable solar EPC platform anchored by 20-year power purchase agreements.",
  },
  {
    slug: "aden-cold-chain-groundbreaking",
    title: "Groundbreaking on Aden Cold-Chain & Processing Hub",
    date: "April 2026",
    category: "Food & Agriculture",
    excerpt:
      "A flagship food-security investment connecting Yemeni producers to GCC and MENA markets.",
  },
  {
    slug: "china-mena-corridor",
    title: "Scaling the China – MENA Sourcing Corridor",
    date: "March 2026",
    category: "Trading",
    excerpt:
      "HS Trading & Commodities expands long-term agreements with Tier-1 Chinese manufacturers.",
  },
  {
    slug: "esg-report-2025",
    title: "HS Investment Releases 2025 ESG Highlights",
    date: "February 2026",
    category: "ESG",
    excerpt:
      "Renewable energy, food security and digital inclusion drove measurable impact across the portfolio.",
  },
];

export const kpis = [
  { label: "Active Sectors", value: "8+" },
  { label: "Operating Countries", value: "6" },
  { label: "Group-Wide Capital", value: "$500M+" },
  { label: "Years of Execution", value: "15+" },
];

export const countries = [
  { code: "UAE", role: "Group HQ, governance, compliance, investor relations" },
  { code: "China", role: "Global sourcing, manufacturing, technology access" },
  { code: "Turkey", role: "Regional trade bridge and industrial sourcing hub" },
  { code: "Egypt", role: "Processing, logistics, cost-efficient operations" },
  { code: "Yemen", role: "Origin-based resources and emerging-market opportunity" },
  { code: "Canada", role: "North American partnerships and capital network" },
];
