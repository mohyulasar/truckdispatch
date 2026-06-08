export const SITE = {
  name: "Global Dispatch Services",
  shortName: "Global Dispatch",
  tagline: "Professional truck dispatch for owner-operators and small fleets",
  description:
    "Global Dispatch Services helps owner-operators and small fleets find better loads, negotiate rates, and stay on the road — without the hassle of load boards and broker calls.",
  url: "https://globaldispatchservices.com",
  phone: "(254) 218-3957",
  phoneHref: "tel:+12542183957",
  email: "globaldispatchservices247@gmail.com",
  dispatchEmail: "globaldispatchservices247@gmail.com",
  hours: "24/7 dispatch — including after hours, weekends & federal holidays",
  serviceArea: "Serving carriers nationwide across the United States",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export const TRUST_STATS = [
  { value: "500+", label: "Loads dispatched monthly" },
  { value: "150+", label: "Active carriers" },
  { value: "5+", label: "Years of experience" },
  { value: "24/7", label: "Dispatch support" },
] as const;

export const EQUIPMENT_PRICING = [
  {
    equipment: "Semi Truck & Semi Trailer",
    rate: "3.5%",
    description: "Our most competitive rate for OTR semi and trailer operations.",
    featured: true,
  },
  {
    equipment: "Box Truck",
    rate: "6%",
    description: "Dedicated dispatch for box truck carriers and regional freight.",
    featured: false,
  },
  {
    equipment: "Hotshot",
    rate: "6%",
    description: "Load sourcing and broker support tailored to hotshot operations.",
    featured: false,
  },
  {
    equipment: "Sprinter Van & Cargo Van",
    rate: "10%",
    description: "Specialized dispatch for expedited and last-mile van freight.",
    featured: false,
  },
] as const;

export const PAYMENT_TERMS = {
  headline: "No Upfront Charges",
  subheadline: "Start dispatching with zero risk",
  description:
    "Your first full week of dispatch is on us — no advance dispatch fee. You only pay starting on day 8, based on the loads we book for you.",
  highlights: [
    {
      title: "Zero upfront fees",
      description: "No setup charges, deposits, or advance dispatch payments to get started.",
    },
    {
      title: "Full week on us",
      description: "Complete your first 7 days of dispatch before any fees apply.",
    },
    {
      title: "Pay from day 8",
      description: "Dispatch fees begin only after your complimentary first week.",
    },
  ],
} as const;

export const SERVICES = [
  {
    title: "Load Sourcing & Booking",
    description:
      "We search load boards and broker networks to find profitable freight that matches your equipment, lanes, and rate goals.",
    icon: "truck" as const,
  },
  {
    title: "Rate Negotiation",
    description:
      "Our dispatchers negotiate on your behalf to maximize revenue per mile, reduce deadhead, and protect your margins.",
    icon: "trending" as const,
  },
  {
    title: "Broker Communication",
    description:
      "We handle check calls, rate confirmations, and broker updates around the clock so you can focus on driving.",
    icon: "message" as const,
  },
  {
    title: "Paperwork & Documentation",
    description:
      "Rate cons, BOL support, and invoicing assistance to keep every load compliant and paid on time.",
    icon: "file" as const,
  },
] as const;

export const MULTILINGUAL_LANGUAGES = [
  {
    language: "English",
    note: "Full dispatch, broker calls, and load coordination in English.",
  },
  {
    language: "Chinese (Mandarin)",
    note: "Native-language support for carriers and broker communication.",
  },
  {
    language: "Pashto / Dari",
    note: "Afghani-language dispatch support for seamless load management.",
  },
  {
    language: "Spanish",
    note: "Bilingual dispatchers for Spanish-speaking owner-operators and fleets.",
  },
  {
    language: "Urdu",
    note: "Dispatch and broker coordination in Urdu for clear, fast communication.",
  },
  {
    language: "Punjabi",
    note: "Punjabi-language support so nothing gets lost in translation on the road.",
  },
] as const;

export const SUPPORT_COVERAGE = [
  {
    title: "After-Hours Team",
    description:
      "Brokers don't stop at 5 PM — neither do we. Our after-hours dispatch team handles load updates, check calls, and urgent issues when you're on the road.",
    icon: "moon" as const,
  },
  {
    title: "Weekend Coverage",
    description:
      "Saturday and Sunday dispatch support keeps your trucks moving. Weekend loads, broker calls, and ETA updates are covered without waiting until Monday.",
    icon: "calendar" as const,
  },
  {
    title: "Federal & Public Holidays",
    description:
      "Freight runs year-round. We provide dispatch support on federal and public holidays so you're never stranded without load coverage or broker response.",
    icon: "shield" as const,
  },
] as const;

export const LOAD_ISSUE_SERVICES = [
  {
    title: "Detention Claims",
    description:
      "We document wait times, communicate with brokers, and pursue detention pay when you're held at pickup or delivery beyond free time.",
    icon: "clock" as const,
  },
  {
    title: "TONU Resolution",
    description:
      "Truck Ordered Not Used? We handle broker communication, documentation, and TONU fee recovery so you're compensated for cancelled loads.",
    icon: "alert" as const,
  },
  {
    title: "Lumper Fee Coordination",
    description:
      "We arrange lumper payments, obtain receipts, and ensure fees are reimbursed or built into your rate — no out-of-pocket surprises.",
    icon: "dollar" as const,
  },
  {
    title: "ETA Calls & Emails",
    description:
      "Full broker-side ETA support — we manage check calls, status updates, and email correspondence so you stay focused on driving safely.",
    icon: "phone" as const,
  },
] as const;

export const CARRIER_SERVICES = [
  {
    title: "Roadside Assistance",
    description:
      "Breakdown on the road? We coordinate roadside assistance, communicate delays to brokers, and help you get back under load as quickly as possible.",
    icon: "wrench" as const,
  },
  {
    title: "Factoring Setup",
    description:
      "We help you connect with a factoring company to purchase your broker invoices — improving cash flow so you get paid faster on completed loads.",
    icon: "bank" as const,
  },
] as const;

export const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: "Apply & Connect",
    description:
      "Fill out our quick quote form. We'll review your MC authority, equipment, and preferred lanes.",
  },
  {
    step: 2,
    title: "Onboarding Setup",
    description:
      "We configure your dispatch profile, load preferences, and communication channels within 24–48 hours.",
  },
  {
    step: 3,
    title: "First Load Booked",
    description:
      "Your dedicated dispatcher starts sourcing loads. You approve each load before we book it.",
  },
  {
    step: 4,
    title: "Ongoing Support",
    description:
      "Continuous load coverage, rate optimization, and 24/7 support. Dispatch fees begin on day 8 — your first week is free.",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Global Dispatch Services changed my business. I'm making more per mile and spending zero time on load boards.",
    author: "Marcus T.",
    role: "Owner-Operator, Semi Truck",
  },
  {
    quote:
      "We added 3 trucks last year without hiring dispatch staff. They handle everything for our fleet.",
    author: "Sarah K.",
    role: "Fleet Owner, 8 Trucks",
  },
  {
    quote:
      "Transparent pricing, responsive team, and they actually know the lanes I run. Highly recommend.",
    author: "James R.",
    role: "Owner-Operator, Hotshot",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "What is a truck dispatch service?",
    answer:
      "A dispatch service finds and books freight loads on your behalf, negotiates rates with brokers, handles communication, and supports paperwork — so you can focus on driving instead of searching load boards.",
  },
  {
    question: "Do I need my own MC authority?",
    answer:
      "Yes. Global Dispatch Services works with carriers who hold their own MC authority. We are a dispatch service, not a broker — you maintain your carrier relationship and authority.",
  },
  {
    question: "How much does dispatch cost?",
    answer:
      "Our fees range from 3–10% of gross load revenue depending on equipment type: Semi Truck & Semi Trailer at 3.5%, Box Truck and Hotshot at 6%, and Sprinter Van & Cargo Van at 10%. Contact us for a custom quote.",
  },
  {
    question: "What equipment types do you support?",
    answer:
      "We dispatch Semi Truck, Semi Trailer, Box Truck, Hotshot, Sprinter Van, and Cargo Van. Tell us your equipment type when you request a quote and we'll confirm lane availability.",
  },
  {
    question: "Do you offer multilingual dispatch support?",
    answer:
      "Yes. We provide dispatch support in English, Chinese (Mandarin), Pashto/Dari, Spanish, Urdu, and Punjabi — so broker calls and load coordination happen in your preferred language.",
  },
  {
    question: "Are you available after hours and on weekends?",
    answer:
      "Absolutely. Our dispatch team is available 24/7, including after hours, weekends, and federal/public holidays. Freight doesn't stop — and neither do we.",
  },
  {
    question: "Are there any upfront charges?",
    answer:
      "No. There are zero upfront fees. You get a full week of dispatch with no advance dispatch fee — you only pay starting on day 8, based on the loads we book for you.",
  },
  {
    question: "Can I choose which loads to accept?",
    answer:
      "Absolutely. You always have final approval on every load before we book it. We present options with rate, miles, and pickup/delivery details — you decide.",
  },
  {
    question: "Is there a long-term contract?",
    answer:
      "We offer flexible agreements. Most carriers start with a simple dispatch agreement with clear terms. Ask about our options during your free consultation.",
  },
] as const;

export const EQUIPMENT_OPTIONS = [
  "Semi Truck",
  "Semi Trailer",
  "Box Truck",
  "Hotshot",
  "Sprinter Van",
  "Cargo Van",
  "Other",
] as const;

export const HEARD_ABOUT_OPTIONS = [
  "Google Search",
  "Referral",
  "Social Media",
  "Truck Stop / Industry Event",
  "Other",
] as const;
