export const serviceLocations = [
  {
    id: "north-raleigh",
    city: "Raleigh, NC",
    region: "North Raleigh & Midtown",
    h3Heading: "Premium Estate Care in North Raleigh & Falls River",
    image: "/images/loc-north-raleigh.jpg",
    zipCodes: ["27615", "27614", "27609", "27613", "27612", "27608"],
    neighborhoods: ["Falls River", "North Ridge Country Club", "Bedford at Falls River", "WoodValley", "Five Points", "Hayes Barton"],
    description: "North Raleigh's mature tree canopies demand specialized high-lift turf mowing, acid-soil pH management, and aggressive annual fescue overseeding to counter dense shade.",
    routeDays: "Monday & Tuesday Routes",
    activeCrews: 4,
    establishedClients: 142
  },
  {
    id: "wake-forest",
    city: "Wake Forest, NC",
    region: "Wake Forest & Heritage",
    h3Heading: "Precision Turf Maintenance for Wake Forest & Heritage Communities",
    image: "/images/loc-wake-forest.jpg",
    zipCodes: ["27587", "27588"],
    neighborhoods: ["Heritage", "Hasentree", "Holding Village", "Wakefield Plantation", "Traditions", "Crenshaw Hall"],
    description: "Expansive multi-acre properties requiring zero-turn commercial precision striping, laser sodding, and heavy fall oak leaf vacuuming services.",
    routeDays: "Wednesday & Thursday Routes",
    activeCrews: 3,
    establishedClients: 98
  },
  {
    id: "cary",
    city: "Cary, NC",
    region: "Cary & Prestonwood",
    h3Heading: "Precision Sod Solutions & Estate Care for Cary Homeowners",
    image: "/images/loc-cary.jpg",
    zipCodes: ["27519", "27513", "27511", "27518"],
    neighborhoods: ["Preston", "Lochmere", "MacGregor Downs", "Amberly", "Carpenter", "Wellsley"],
    description: "Strict HOA compliance lawn management, pristine concrete edging definition, and warm-season Bermuda & Zoysia aeration programs.",
    routeDays: "Thursday & Friday Routes",
    activeCrews: 3,
    establishedClients: 115
  },
  {
    id: "apex-morrisville",
    city: "Apex & Morrisville, NC",
    region: "Apex, Morrisville & RTP Corridor",
    h3Heading: "Golf-Grade Turf & Landscape Construction in Apex & Morrisville",
    image: "/images/loc-apex.jpg",
    zipCodes: ["27502", "27523", "27539", "27560"],
    neighborhoods: ["Sweetwater", "Bella Casa", "Twin Lakes", "Salem Village", "Kitts Creek"],
    description: "Fast-growing high-tech corridor estates needing turnkey weekly property care, smart irrigation monitoring, and fresh mulch bed renewals.",
    routeDays: "Tuesday & Friday Routes",
    activeCrews: 2,
    establishedClients: 76
  }
];

export const isZipServiced = (inputZip) => {
  const cleanZip = String(inputZip).trim().slice(0, 5);
  for (const loc of serviceLocations) {
    if (loc.zipCodes.includes(cleanZip)) {
      return {
        serviced: true,
        location: loc,
        message: `Serviced on ${loc.routeDays} by ${loc.activeCrews} active crews in ${loc.region}.`
      };
    }
  }
  return {
    serviced: false,
    message: "We currently restrict regular routes to Raleigh, Wake Forest, Cary, Apex & Morrisville municipal bounds to guarantee 180-second responsiveness and consistent weekly schedules."
  };
};
