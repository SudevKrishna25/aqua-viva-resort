export interface GalleryItem {
  id: string;
  title: string;
  category: 'Architecture' | 'Water' | 'Interiors' | 'Botanical' | 'Rituals';
  location: string;
  caption: string;
  aspect: 'landscape' | 'portrait' | 'wide';
  image: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 'arch-01',
    title: 'The Water Villa Cantilever',
    category: 'Architecture',
    location: 'Lagoon Wing',
    caption: 'Tensioned architectural concrete hovering above the tidal reef, catching the morning reflections.',
    aspect: 'wide',
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1920&q=85'
  },
  {
    id: 'water-01',
    title: 'The Obsidian Tidal Basin',
    category: 'Water',
    location: 'Central Water Garden',
    caption: 'Mirror-flat saltwater basin designed to reflect passing cloud formations and golden hour skies.',
    aspect: 'landscape',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85'
  },
  {
    id: 'int-01',
    title: 'Minimalist Master Chamber',
    category: 'Interiors',
    location: 'Garden Residence No. 4',
    caption: 'Linen textiles, weathered teak, and raw travertine illuminated by filtered morning sunlight.',
    aspect: 'portrait',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 'botanical-01',
    title: 'Endemic Coastal Palm Canopy',
    category: 'Botanical',
    location: 'The Flora Reserve',
    caption: 'Lush biodiversity shielding private pathways and preserving local coastal microclimates.',
    aspect: 'portrait',
    image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 'arch-02',
    title: 'Brutalist Monolith at Sunset',
    category: 'Architecture',
    location: 'Horizon Promontory',
    caption: 'Board-formed concrete textures interacting with warm low-angle coastal sunlight.',
    aspect: 'landscape',
    image: 'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1600&q=85'
  },
  {
    id: 'rituals-01',
    title: 'The Solitary Tea Chamber',
    category: 'Rituals',
    location: 'Subterranean Spa Pavilions',
    caption: 'A quiet pavilion carved into living coastal bedrock for contemplation and botanical infusions.',
    aspect: 'portrait',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 'water-02',
    title: 'The Infinite Horizon Line',
    category: 'Water',
    location: 'Ocean Wing',
    caption: 'Where the infinity edge merges imperceptibly into the deep azure currents of the sea.',
    aspect: 'wide',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1920&q=85'
  },
  {
    id: 'int-02',
    title: 'Sunken Bathing Atrium',
    category: 'Interiors',
    location: 'Water Villa Suite 02',
    caption: 'Hand-carved volcanic rock vessel with frameless glass opening directly to the ocean horizon.',
    aspect: 'landscape',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=85'
  },
  {
    id: 'rituals-02',
    title: 'Twilight Fire Ritual',
    category: 'Rituals',
    location: 'Water Amphitheatre',
    caption: 'Evening fire bowls ignited as dusk settles across the still reflecting lagoon.',
    aspect: 'landscape',
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1600&q=85'
  }
];
