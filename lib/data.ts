import { Service, TimelineEvent, CoreValue } from "@/types";

export const SERVICES_DATA: Service[] = [
  /*{
    id: "consulting",
    title: "Branding & Consulting",
    description:
      "Strategic insights and advisory services to help your business thrive tomorrow.",
    details: [
      "Operational risk mitigation",
      "Strategic growth roadmap",
      "Investment & cost management",
      "Regulatory compliance audit",
    ],
    iconName: "MessageSquare",
  },*/
  {
    id: "lead-generation",
    title: "Digital Lead Generation for Industries",
    description:
      "Generate qualified business leads by connecting with buyers, distributors, and business partners through digital platforms.",
    details: [
      "B2B lead generation",
      "Buyer identification & outreach",
      "International business enquiries",
      "Digital marketing for industrial projects",
      "Business networking and market expansion",
      "Qualified sales lead support",
    ],
    iconName: "Magnet",
  },
  {
    id: "trading",
    title: "Digital Product Trading & Marketing",
    description:
      "Promote and sell your products online to reach a wider audience and create new business opportunities worldwide.",
    details: [
      "Product promotion on digital platforms",
      "Online product marketing",
      "Global buyer sourcing",
      "Sales opportunity development",
      "Digital business representation",
    ],
    iconName: "Globe",
  },
];

export const TIMELINE_DATA: TimelineEvent[] = [
  {
    year: "2023",
    title: "Our Beginning",
    description:
      "Laid the foundation with a vision to deliver unmatched trading quality and integrity.",
    iconName: "Building",
  },
  {
    year: "2024",
    title: "Expansion Phase",
    description:
      "Entered new domestic industrial markets and broadened product procurement lines.",
    iconName: "TrendingUp",
  },
  {
    year: "2025",
    title: "Diversification",
    description:
      "Strengthened our portfolio with green materials and state-of-the-art tech.",
    iconName: "Layers",
  },
  {
    year: "2026",
    title: "Global Partnerships",
    description:
      "Built robust cross-continental trade partnerships with international clients.",
    iconName: "Globe",
  },
];

export const CORE_VALUES: CoreValue[] = [
  {
    title: "Integrity & Transparency",
    description:
      "We believe transparent and honest dealing forms the ultimate bedrock of business relations.",
  },
  {
    title: "Quality and Reliability",
    description:
      "We deliver consistent quality and dependable solutions you can always trust.",
  },
  {
    title: "Customer First Approach",
    description:
      "We put customer needs first by delivering value with every interaction.",
  },
  {
    title: "Global Connectivity",
    description:
      "We connect businesses worldwide through trusted trade and reliable networks.",
  },
  {
    title: "Long-Term Business Partnerships",
    description:
      "We build lasting partnerships based on trust, growth, and shared success.",
  },
];

export const STATISTICS_DATA = [
  { value: 3, label: "Years of Excellence", suffix: "+" },
  { value: 14, label: "Diverse Industries", suffix: "+" },
  { value: 100, label: "Projects Delivered", suffix: "+" },
  { value: 50, label: "Global Partners", suffix: "+" },
];
