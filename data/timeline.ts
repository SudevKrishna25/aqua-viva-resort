export interface TimelineStep {
  time: string;
  phase: string;
  title: string;
  headline: string;
  description: string;
  atmosphere: string;
  image: string;
  soundscape: string;
}

export const dayTimeline: TimelineStep[] = [
  {
    time: '06:00',
    phase: 'FIRST LIGHT',
    title: 'Dawn Awakening & Sea Mist',
    headline: 'The quietest breath of the morning.',
    description: 'A gentle silver mist rises off the water. The resort stirs in absolute silence as soft amber rays touch the mineral concrete and mirror-flat infinity pools. Fresh white tea is served in-villa as the marine birds begin their gentle gliding flight.',
    atmosphere: 'Cool silver light, still water, gentle ocean swell',
    soundscape: 'Rhythmic soft tide, distant sea terns, whisper of salt breeze',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85'
  },
  {
    time: '09:00',
    phase: 'MORNING BY THE WATER',
    title: 'Tidal Swims & Architectural Shadows',
    headline: 'Immerse into the rhythm of the tides.',
    description: 'Sunlight strikes the shallow sandbars in brilliant aquamarine clarity. Take a solitary swim in your private cantilevered pool or paddle an electric board across the calm inner lagoon. Breakfast is set under open-air slatted cedar pergolas.',
    atmosphere: 'Crisp turquoise water, dappled shade, invigorating warmth',
    soundscape: 'Lapping ripples, gentle breeze through palm fronds',
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1600&q=85'
  },
  {
    time: '12:00',
    phase: 'A CULINARY PAUSE',
    title: 'Coastal Epicure & Mineral Wines',
    headline: 'Flavours drawn directly from earth and sea.',
    description: 'Seek refuge from midday warmth inside our sunken stone pavilions. Taste hand-pulled burrata with garden heirloom tomatoes, line-caught sashimi kissed with sea citrus, and cold mineral whites from volcanic soils.',
    atmosphere: 'Cool limestone interiors, shaded courtyards, sparkling glass',
    soundscape: 'Chinking crystalline glassware, murmur of falling water, soft acoustic strings',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=85'
  },
  {
    time: '15:00',
    phase: 'AFTERNOON STILLNESS',
    title: 'Subterranean Slumber & Thermal Springs',
    headline: 'Where time gracefully suspends.',
    description: 'The heat of the afternoon invites unhurried contemplation. Retreat to the subterranean thermal chambers for a salt brine float, anoint the body with cold-pressed botanical oils, or lose yourself in an architectural monograph in the library.',
    atmosphere: 'Warm shadows, cool basalt stone, aromatic cedar and sage',
    soundscape: 'Slow dripping water cavern, resonant singing bowl resonance',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=85'
  },
  {
    time: '18:00',
    phase: 'THE GOLDEN HOUR',
    title: 'The Sky Dissolves into Fire & Indigo',
    headline: 'The sacred alchemy of twilight.',
    description: 'As the sun descends toward the ocean horizon, the entire resort is washed in liquid gold and violet hues. Guests gather along the water amphitheatre for cold botanical infusions and the lighting of the architectural flame basins.',
    atmosphere: 'Blazing amber horizon, velvet twilight, glowing fire pits',
    soundscape: 'Resonant bronze gongs, rustle of evening breezes, deep ocean roar',
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1600&q=85'
  },
  {
    time: '21:00',
    phase: 'EVENINGS UNFOLD',
    title: 'Starlight, Embers & Nocturnal Stillness',
    headline: 'A celestial canopy suspended above the water.',
    description: 'Darkness embraces Aqua Viva. Candlelight flickers against raw concrete, reflecting in black obsidian pools. Enjoy an intimate charcoal supper beneath the southern constellations before retiring to the sound of rhythmic waves outside your villa.',
    atmosphere: 'Deep obsidian shadows, warm candlelight, celestial illumination',
    soundscape: 'Continuous gentle surf, nocturnal crickets, distant night birds',
    image: 'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1600&q=85'
  }
];
