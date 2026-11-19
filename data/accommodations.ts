export interface Accommodation {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: 'Overwater' | 'Beachfront' | 'Panoramic Sanctuary';
  size: string;
  guests: string;
  bedrooms: string;
  pools: string;
  priceFrom: string;
  description: string;
  longDescription: string;
  architectureDetails: string[];
  features: string[];
  primaryImage: string;
  galleryImages: string[];
  floorPlanNote: string;
}

export const accommodations: Accommodation[] = [
  {
    id: 'water-villas',
    slug: 'the-water-villas',
    name: 'The Water Villas',
    tagline: 'Hovering effortlessly above turquoise mineral shallows.',
    category: 'Overwater',
    size: '340 m² / 3,660 sq.ft',
    guests: 'Up to 3 Guests',
    bedrooms: '1 Master Suite with Open Ocean Vista',
    pools: '14m Private Cantilevered Infinity Pool',
    priceFrom: '$2,850 / night',
    description: 'Suspended above the marine sanctuary with frameless glass facades, private sea access, and an integrated sunken lounge suspended over the tidal flow.',
    longDescription: 'Engineered as an organic extension of the reef, The Water Villas utilize raw travertine stone, marine-grade brushed brass, and floor-to-ceiling glass that dissolves the boundary between architecture and the horizon. Step directly from your private sun deck into crystal-clear mineral waters, or immerse yourself in the 14-meter cantilevered infinity pool that appears to spill into the endless sea.',
    architectureDetails: [
      'Cantilevered concrete slab balancing over the tidal lagoon',
      'Floor-to-ceiling thermal acoustic acoustic glass wall',
      'Sunken marine lounge with underwater mood illumination',
      'Exterior teak deck weathered to soft silver patina'
    ],
    features: [
      'Personal 24-hour dedicated Villa Host & Marine Guide',
      'Submerged outdoor soaking tub carved from solid volcanic basalt',
      'Private direct sea stairs leading to protected coral reef',
      'Custom acoustic soundscape tuned to ocean tide frequencies',
      'Bespoke in-villa culinary pantry and sommelier cellar'
    ],
    primaryImage: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=2000&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1600&q=85'
    ],
    floorPlanNote: 'Master bedroom pavilion with direct ocean orientation, cantilevered infinity terrace, walk-through dressing chamber, and open-air rain atrium.'
  },
  {
    id: 'garden-residences',
    slug: 'the-garden-residences',
    name: 'The Garden Residences',
    tagline: 'Cocooned within endemic botanical sanctuaries and living water gardens.',
    category: 'Beachfront',
    size: '520 m² / 5,600 sq.ft',
    guests: 'Up to 6 Guests',
    bedrooms: '2 Master Suites + Private Studio',
    pools: '22m Mineral Saltwater Garden Pool',
    priceFrom: '$4,200 / night',
    description: 'Secluded amongst lush ancient coastal foliage, featuring rammed-earth walls, private water lilies ponds, and expansive shaded limestone courtyards.',
    longDescription: 'Concealed behind verdant canopies of banyan and coastal palm, The Garden Residences honour the earth element of Aqua Viva. Textured rammed-earth walls temper the tropical warmth, while natural cold-plunge pools and running water channels weave through the interior courtyards, creating a sensory oasis of whispering foliage and cooling mineral breezes.',
    architectureDetails: [
      'Stabilized rammed-earth monolithic walls utilizing native clay',
      'Hand-chiseled Jerusalem limestone flooring extending outward',
      'Living bio-filter aquatic ponds filled with flowering water lilies',
      'Louvered cedar screens providing dynamic dappled light play'
    ],
    features: [
      'Private culinary kitchen equipped for private chef banquets',
      'Detached wellness pavilion with Finnish sauna and herbal steam',
      'Direct secluded pathway to private crescent shell beach',
      'Dedicated buggy service and private outdoor cinema setup',
      'Master bath with twin copper soaking vessels and rain garden'
    ],
    primaryImage: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=2000&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85'
    ],
    floorPlanNote: 'Dual master wings separated by a central high-ceiling salon, exterior dining pavilion, secluded garden meditation lawn, and private wellness enclave.'
  },
  {
    id: 'horizon-suites',
    slug: 'the-horizon-suites',
    name: 'The Horizon Suites',
    tagline: 'Perched upon the highest cliffline with unhindered 270° azure vistas.',
    category: 'Panoramic Sanctuary',
    size: '410 m² / 4,410 sq.ft',
    guests: 'Up to 4 Guests',
    bedrooms: '2 Panoramic Ocean Suites',
    pools: 'Dual-Tier Cliffside Infinity Plunge & Sunset Spa',
    priceFrom: '$3,600 / night',
    description: 'Elevated cliffside sanctuaries offering dramatic panoramic sunsets, brutalist monolithic concrete balconies, and rooftop observation terraces.',
    longDescription: 'Poised on the crest of Aqua Viva’s coastal promontory, The Horizon Suites command a celestial vantage over the entire archipelago. Designed with clean sculptural concrete forms, these residences capture the changing chromatic moods of sky and water from sunrise golden dawn to starlit oceanic twilight.',
    architectureDetails: [
      'Brutalist architectural concrete framed with blackened steel',
      'Rooftop astronomical observation terrace with brass telescope',
      'Cascading waterfall feature connecting dual plunge levels',
      'Full corner frameless glass openings eliminating structural pillars'
    ],
    features: [
      'Panoramic sunset cocktail bar with dedicated mixologist on call',
      'Freestanding oval resin tub overlooking the 100m ocean drop',
      'Fire table lounge carved into cliff rock for cool evening rituals',
      'Priority access to Aqua Viva helipad and coastal yacht tender',
      'Handmade bespoke linen by master Italian weavers'
    ],
    primaryImage: 'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=2000&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1600&q=85'
    ],
    floorPlanNote: 'Upper tier sunset viewing deck, open-concept living gallery, cantilevered master bedroom wing, and twin hydrotherapy plunge pools.'
  }
];
