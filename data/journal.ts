export interface JournalArticle {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  author: string;
  category: 'Architecture' | 'Philosophy' | 'Rituals' | 'Living';
  excerpt: string;
  heroImage: string;
  content: string[];
}

export const journalArticles: JournalArticle[] = [
  {
    id: 'architecture-of-stillness',
    slug: 'the-architecture-of-stillness',
    title: 'The Architecture of Stillness',
    subtitle: 'How space, shadow, and silence inform the creation of Aqua Viva.',
    date: 'Autumn 2026',
    readTime: '6 min read',
    author: 'Elena Vance — Principal Architect',
    category: 'Architecture',
    excerpt: 'True luxury does not clamour for attention. It resides in the precision of a shadow falling across honed limestone, and the quiet dignity of uncluttered horizons.',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85',
    content: [
      'In a world dominated by visual excess and relentless pace, true sanctuary has become the rarest commodity. When we first walked the untouched coastal headland that would become Aqua Viva, the prompt was not to construct an imposing monument, but to listen to what the terrain was already saying.',
      'Mineral Modernism began with a singular premise: architecture must submit to the natural cadence of light and tide. We chose board-formed concrete because over time, the salt mist gently silvers its surface, turning human construction into an organic mineral feature of the coastal cliff.',
      'Every villa is conceived as an acoustic frame. By orienting openings parallel to prevailing ocean drafts, interior temperatures remain naturally temperate without intrusive mechanical hums. You do not just look at the ocean; you inhabit its breath.'
    ]
  },
  {
    id: 'finding-beauty-in-the-water',
    slug: 'finding-beauty-in-the-water',
    title: 'Finding Beauty in the Water',
    subtitle: 'Water not as an amenity, but as the master sculptor of human consciousness.',
    date: 'Summer 2026',
    readTime: '5 min read',
    author: 'Dr. Julian Thorne — Marine Ecologist',
    category: 'Philosophy',
    excerpt: 'Water teaches us yielding strength. In its ripples and infinite depths, the restless mind discovers its own capacity for calm and regeneration.',
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=85',
    content: [
      'Neuroscientists refer to the "Blue Mind" — the mildly meditative state characterized by calmness, peacefulness, general happiness, and a satisfaction with life in the moment, that is triggered when we are in or near water.',
      'At Aqua Viva, water is never treated as a passive decorative pond or a mere recreational pool. It is an active collaborator. The reflection pools are carefully calibrated to double the sky’s luminosity during dawn and dusk, flooding the interior spaces with shifting, dappled caustics.',
      'Our guests frequently report that by their second sunrise, the compulsion to check watches or digital feeds simply evaporates. The tidal surge becomes their timepiece; the shimmer of the reef becomes their focus.'
    ]
  },
  {
    id: 'the-art-of-slowing-down',
    slug: 'the-art-of-slowing-down',
    title: 'The Art of Slowing Down',
    subtitle: 'Unlearning urgency and embracing the unmeasured hours of coastal life.',
    date: 'Spring 2026',
    readTime: '7 min read',
    author: 'Amara Sen — Wellness Curator',
    category: 'Living',
    excerpt: 'To slow down is not to do less; it is to arrive fully in the moment you are currently living.',
    heroImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1800&q=85',
    content: [
      'Modern life rewards acceleration. We compress schedules, optimize minutes, and measure worth by output. But the body and soul operate on biological, geological time.',
      'At Aqua Viva, the day does not begin with an alarm, but with the changing colour of the sea. Our morning rituals — silent tea drinking on the sunrise deck, slow immersion in magnesium-rich tidal waters — are invitations to dissolve the artificial pressures of urgency.',
      'Here, slow living is an art form. It is savoring a single sun-ripened fig drizzled with raw coastal honey; it is floating under the canopy of southern stars until the boundary between self and cosmos feels beautifully porous.'
    ]
  }
];
