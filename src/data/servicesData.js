export const tieredPackages = [
  {
    id: "basic-mowing",
    tierName: "Basic Mowing",
    badge: "Entry Layer",
    subtitle: "Essential weekly precision maintenance for pristine curb appeal.",
    price: 49,
    period: "per visit",
    monthlyEstimate: "$165 / mo",
    strategicObjective: "Low-friction entry layer to establish physical access to new residential properties.",
    popular: false,
    color: "emerald",
    deliverables: [
      "Precision rotary mowing tailored to grass variety heights",
      "Multi-angle string trimming along fence lines & landscape structures",
      "Concrete edge mechanical blade definition (curbs, driveways, sidewalks)",
      "Thorough hardscape debris clearance & high-velocity air blast cleanup",
      "Regular blade sharpening cycle ensuring clean cuts with zero turf tearing",
      "Real-time digital service arrival & departure timestamps"
    ],
    idealFor: "Homeowners seeking dependable, immaculate weekly turf cutting without chemical programs."
  },
  {
    id: "premium-lawn-care",
    tierName: "Premium Lawn Care",
    badge: "Most Popular • Top Value",
    subtitle: "Complete agronomic turf health & scheduled scientific nutrition.",
    price: 199,
    period: "per month",
    monthlyEstimate: "$199 / mo ($2,388 / yr)",
    strategicObjective: "Our primary up-sell target maximizing margin-to-labor efficiency ratios.",
    popular: true,
    color: "brand",
    deliverables: [
      "Everything in Basic Mowing Package included weekly/bi-weekly",
      "Bi-annual core mechanical aeration relieving soil compaction",
      "NC State-certified Tall Fescue & Bermuda overseeding routines",
      "Tailored 4-phase slow-release macro-nutrient fertilization scheduling",
      "Proactive pre-emergent crabgrass & winter annual weed barriers",
      "Targeted post-emergent broadleaf weed remediation sprays",
      "Mid-season soil pH testing and agricultural lime application",
      "Free priority service calls for fungus & armyworm checks"
    ],
    idealFor: "Homeowners wanting dense, emerald-green turf that resists Wake County summer heat and weed invasion."
  },
  {
    id: "full-seasonal-property-care",
    tierName: "Full Seasonal Property Care",
    badge: "All-Inclusive VIP",
    subtitle: "Exhaustive estate-level groundskeeping covering turf, beds & shrubs.",
    price: 389,
    period: "per month",
    monthlyEstimate: "$389 / mo (Turnkey Estate)",
    strategicObjective: "High-value VIP layer capturing maximum wallet share from upscale homeowners.",
    popular: false,
    color: "gold",
    deliverables: [
      "Everything in Premium Lawn Care included unconditionally",
      "Exhaustive autumn leaf vacuuming, mulching & curbside haul-away",
      "Annual spring hardwood double-shredded mulch replenishment (up to 5 yards included)",
      "Seasonal hand-pruning of ornamental trees & horticultural shrub shaping",
      "Deep root shrub fertilization and anti-desiccant evergreen foliar spray",
      "Perimeter landscape bed pre-emergent weed suppression & hand weeding",
      "Winter structural property treatments & storm debris clearance",
      "Direct dedicated account manager via priority VIP SMS dispatch"
    ],
    idealFor: "Affluent residential estates in North Raleigh, Wakefield, and Preston desiring zero-effort perfection."
  }
];

export const specializedServices = [
  {
    id: "aeration-overseeding",
    title: "Core Aeration & Fescue Overseeding",
    tagline: "Wake County's #1 Fall Turf Renewal Ritual",
    description: "North Carolina's red clay heavily compacts over hot summers. Our commercial hollow-tine aerators pull 2.5-3 inch soil cores, allowing air, water, and specialized NC State-certified drought-hardy Tall Fescue seed to establish deep root systems before winter.",
    icon: "Wheat",
    image: "/images/aeration-service.jpg",
    highlights: ["Hollow-core extraction", "Certified Blue Tag seed", "Starter booster fertilizer", "Clay relief guarantee"],
    pricing: "From $180 / service"
  },
  {
    id: "sod-installation",
    title: "Precision Laser-Leveled Sod Installation",
    tagline: "Instant Lawn Transformation in 24-48 Hours",
    description: "From bare builder topsoil to lush, manicured turf. We excavate weed growth, grade with laser precision to correct drainage grading, incorporate nutrient-rich organic compost, and lay farm-fresh North Carolina sod (Zeon Zoysia, TifTuf Bermuda, or Black Beauty Fescue).",
    icon: "Layers",
    image: "/images/sod-service.jpg",
    highlights: ["Laser-guided grading", "Fresh local farm cut sod", "Starter fertilization", "Automated watering schedule blueprint"],
    pricing: "Custom Quote by Sq. Ft."
  },
  {
    id: "hardscape-patio",
    title: "Hardscaping & Outdoor Living Spaces",
    tagline: "Architectural Stone Patios, Walkways & Retaining Walls",
    description: "Expand your outdoor entertaining footprint with premium Belgard and Techo-Bloc pavers, custom stone fire features, engineered retaining walls to prevent soil erosion, and integrated low-voltage brass LED landscape lighting.",
    icon: "Boxes",
    image: "/images/hardscape-service.jpg",
    highlights: ["ICPI-certified installation", "Commercial gravel base prep", "Lifetime paver warranty", "3D architectural render"],
    pricing: "Custom Design Consultation"
  },
  {
    id: "mulch-pruning",
    title: "Hardwood Mulch & Ornamental Shrub Care",
    tagline: "Horticultural Health & Crisp Visual Contrast",
    description: "Re-edge all garden beds with deep 3-inch trenches before installing rich, triple-shredded hardwood bark mulch. Our horticulturally-trained crews selectively hand-prune crape myrtles, boxwoods, and ornamentals to maximize seasonal blooming.",
    icon: "Trees",
    image: "/images/mulch-service.jpg",
    highlights: ["Natural hardwood mulch", "Crisp spade bed trenching", "Selective hand pruning", "Organic weed barrier"],
    pricing: "From $120 / yard installed"
  },
  {
    id: "seasonal-leaf-removal",
    title: "Exhaustive Seasonal Leaf Vacuuming",
    tagline: "High-Volume Vacuum Collection & Eco-Composting",
    description: "Don't let oak and pine needles suffocate your delicate cool-season grass. Our truck-mounted debris loaders and high-velocity cyclone blowers clear all beds, turf, driveways, and gutters, removing damp debris that attracts pests and fungus.",
    icon: "Wind",
    image: "/images/leaf-removal-service.jpg",
    highlights: ["Cyclone blowers", "Truck-mounted vacuum loader", "Zero property bagging hassle", "Off-site eco-recycling"],
    pricing: "From $140 / cleanup"
  },
  {
    id: "commercial-maintenance",
    title: "Commercial Grounds & HOA Management",
    tagline: "Turnkey Exterior Care for Raleigh Enterprises & Communities",
    description: "Comprehensive maintenance agreements for office parks, luxury townhome developments, retail centers, and residential HOA common areas. Strict adherence to property standards, vendor compliance, and $2M umbrella insurance coverage.",
    icon: "Building2",
    image: "/images/commercial-service.jpg",
    highlights: ["Dedicated property manager", "Consistent weekly routes", "Digital service proof logs", "Net-30 municipal billing"],
    pricing: "Custom RFP Proposals"
  }
];
