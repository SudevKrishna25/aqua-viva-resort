export interface Experience {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'Gastronomy' | 'Wellness' | 'Expeditions' | 'Botanical' | 'Rituals' | 'Moments';
  timing: string;
  location: string;
  description: string;
  highlights: string[];
  image: string;
  quote?: string;
}

export const experiences: Experience[] = [
  {
    id: 'culinary-journeys',
    slug: 'culinary-journeys',
    title: 'Culinary Journeys',
    subtitle: 'Epicurean artistry informed by tidal bounty and coastal terroir.',
    category: 'Gastronomy',
    timing: 'Sunrise, Midday & Starlit Suppers',
    location: 'Ephemera Restaurant & Sandbar Dining',
    description: 'Our culinary philosophy is rooted in hyper-seasonal provenance. From day-boat seafood harvested by our resident fishermen to biodynamic herbs grown in our coastal greenhouse, each plate is an artistic expression of salinity, earth, and flame.',
    highlights: [
      'Submerged tasting menu seated within shallow tidal pavilion',
      'Charcoal-ember gastronomy driven by local driftwood & wild aromatics',
      'Bespoke biodynamic wine pairing curated by our Chief Sommelier',
      'Private sandspit dining accessed exclusively by wooden wooden dory'
    ],
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=85',
    quote: '"Food that carries the memory of the ocean and the patience of the seasons."'
  },
  {
    id: 'wellness-stillness',
    slug: 'wellness-stillness',
    title: 'Wellness & Stillness',
    subtitle: 'Ancient hydrotherapy reimagined through modern thermal architecture.',
    category: 'Wellness',
    timing: '07:00 — 21:00 Daily',
    location: 'The Subterranean Thermal Spa',
    description: 'Carved into subterranean mineral rock, the Aqua Viva Spa harnesses the curative power of saltwater, thermal mineral springs, and sound frequencies. Experience warm magnesium pools, cold marine immersions, and treatments utilizing wild coastal kelp and basalt stones.',
    highlights: [
      'Floating sensory-deprivation brine pools with acoustic frequencies',
      'Hot volcanic basalt massage combined with botanical cold compresses',
      'Daily dawn pranayama and sound bath meditation by the tidal pool',
      'Custom hydro-contrast circuits designed for cellular regeneration'
    ],
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=85',
    quote: '"Where breath slows to meet the cadence of the tides."'
  },
  {
    id: 'private-water-escapes',
    slug: 'private-water-escapes',
    title: 'Private Water Escapes',
    subtitle: 'Silent electric navigation across untouched marine sanctuaries.',
    category: 'Expeditions',
    timing: 'Custom Private Itineraries',
    location: 'Archipelago Marine Reserve',
    description: 'Embark on our custom-built 45ft solar-electric yacht, gliding silently across turquoise atolls and secret barrier reefs with zero emissions and zero acoustic disturbance to marine life.',
    highlights: [
      'Guided private drift snorkeling with resident marine biologists',
      'Secluded sandbar champagne picnics set up on ephemeral sand islands',
      'Hydrofoil surfing and underwater sea-scooter adventures',
      'Sunset dolphin tracking along deep ocean currents'
    ],
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85',
    quote: '"A silent communion between traveller and the open sea."'
  },
  {
    id: 'nature-discovery',
    slug: 'nature-discovery',
    title: 'Nature & Discovery',
    subtitle: 'Intimate encounters with native flora, coastal geology, and coral ecosystems.',
    category: 'Botanical',
    timing: 'Early Morning & Dusk',
    location: 'Resort Flora Reserve & Coral Nursery',
    description: 'Immerse your senses in the botanical richness of our 40-hectare coastal reserve. Walk canopied timber boardwalks guided by botanists, discover endemic orchid species, and take part in our micro-fragmentation coral nursery restoration project.',
    highlights: [
      'Botanical scent foraging workshop and bespoke essential oil distillation',
      'Active hands-on coral propagation alongside marine scientists',
      'Canopy birdwatching platform elevated 28 meters above ancient jungle',
      'Geological coastal cave exploration during spring low tides'
    ],
    image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1600&q=85',
    quote: '"We do not inherit nature; we are invited into its sacred rhythm."'
  },
  {
    id: 'sunset-rituals',
    slug: 'sunset-rituals',
    title: 'Sunset Rituals',
    subtitle: 'The sacred transition from blinding daylight to warm ember twilight.',
    category: 'Rituals',
    timing: '17:45 — 19:30 Daily',
    location: 'The Water Amphitheatre',
    description: 'As the sun dips below the ocean horizon, Aqua Viva gathers for a quiet contemplative ritual. Hand-cast brass singing bowls reverberate over the water, floating botanical lanterns are released, and handcrafted botanical elixirs are served.',
    highlights: [
      'Acoustic live harp and Tibetan bowl meditation over reflecting pools',
      'Handcrafted smoked botanical aperitifs with wild coastal herbs',
      'Floating candle offering honoring marine conservation',
      'Slow illumination of architectural torches across the water paths'
    ],
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1600&q=85',
    quote: '"The horizon burns gold, and for a few quiet moments, the world stops."'
  },
  {
    id: 'private-celebrations',
    slug: 'private-celebrations',
    title: 'Private Celebrations',
    subtitle: 'Bespoke milestone occasions crafted with understated elegance.',
    category: 'Moments',
    timing: 'Upon Private Request',
    location: 'Private Peninsulas & Overwater Pavilions',
    description: 'Whether celebrating intimate vows, multi-generational gatherings, or an anniversary under the equatorial stars, our events team crafts extraordinary memories framed by elemental architecture and pristine nature.',
    highlights: [
      'Exclusive buyout options for total peninsula privacy',
      'Custom architectural floral installations using native species only',
      'Michelin-level private degustation menus crafted to your personal tastes',
      'Acoustic music curation and ocean-friendly bio-luminescent lighting'
    ],
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=85',
    quote: '"Celebrations that resonate with timeless architectural grace."'
  }
];
