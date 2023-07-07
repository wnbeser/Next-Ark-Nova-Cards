import { EffectType } from '@/types/Effect';
import { SponsorCard } from '@/types/SponsorCard';
import { OtherTag } from '@/types/Tags';
// import {Size} from "@/types/Size";

export const SponsorsData: SponsorCard[] = [
  {
    id: '201',
    name: 'SCIENCE LAB',
    // upper
    strength: 5, // Size;
    rock: 0,
    water: 0,
    requirements: [OtherTag.SponsorsII],
    tags: [OtherTag.Science],

    // middle
    effects: [
      {
        effectType: EffectType.INCOME,
        effectDesc: 'Take 1 card from the deck or in reputation range.',
      },
      {
        effectType: EffectType.IMMEDIATE,
        effectDesc: 'Take 1 card from the deck or in reputation range.',
        display: false,
      },
      {
        effectType: EffectType.ENDGAME,
        effectDesc:
          'Gain {ConservationPoint-1} / {ConservationPoint-2} for 3 / 6 research icons.',
      },
    ],
    // bottom
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,

    // meta data
    source: 'Base',
  },
  {
    id: '202',
    name: 'SPOKESPERSON',
    strength: 5,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [],
    effects: [],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: 'Base',
  },

  {
    id: '203',
    name: 'VETERINARIAN',
    strength: 4,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [],
    effects: [],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: 'Base',
  },

  {
    id: '204',
    name: 'SCIENCE MUSEUM',
    strength: 4,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [],
    effects: [],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: 'Base',
  },

  {
    id: '205',
    name: 'GORILLA FIELD RESEARCH',
    strength: 3,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [],
    effects: [],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: 'Base',
  },

  {
    id: '206',
    name: 'MEDICAL BREAKTHROUGH',
    strength: 5,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [],
    effects: [],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: 'Base',
  },

  {
    id: '207',
    name: 'BASIC RESEARCH',
    strength: 4,
    rock: 0,
    water: 0,
    requirements: [OtherTag.SponsorsII],
    tags: [OtherTag.Science],

    // middle
    effects: [
      {
        effectType: EffectType.IMMEDIATE,
        effectDesc:
          'Gain {ConservationPoint-1} each for 2 different continent and/or animal category icons. For each {ConservationPoint-1} that you gain this way, all other players gain {Money-2} .',
        fontSize: 'sm',
      },
    ],
    // bottom
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,

    // meta data
    source: 'Base',
  },

  {
    id: '208',
    name: 'SCIENCE LIBRARY',
    strength: 4,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [],
    effects: [],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: 'Base',
  },

  {
    id: '209',
    name: 'TECHNOLOGY INSTITUTE',
    strength: 5,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [],
    effects: [],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: 'Base',
  },

  {
    id: '210',
    name: 'EXPERT ON THE AMERICAS',
    strength: 4,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [],
    effects: [],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: 'Base',
  },

  {
    id: '211',
    name: 'EXPERT ON EUROPE',
    strength: 5,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [],
    effects: [],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: 'Base',
  },

  {
    id: '212',
    name: 'EXPERT ON AUSTRALIA',
    strength: 5,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [],
    effects: [],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: 'Base',
  },

  {
    id: '213',
    name: 'EXPERT ON ASIA',
    strength: 5,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [],
    effects: [],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: 'Base',
  },

  {
    id: '214',
    name: 'EXPERT ON AFRICA',
    strength: 4,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [],
    effects: [],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: 'Base',
  },

  {
    id: '216',
    name: 'TALENTED COMMUNICATOR',
    strength: 5,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [],
    effects: [],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: 'Base',
  },

  {
    id: '217',
    name: 'ENGINEER',
    strength: 4,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [],
    effects: [],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: 'Base',
  },

  {
    id: '218',
    name: 'BREEDING PROGRAM',
    strength: 4,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [],
    effects: [],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: 'Base',
  },

  {
    id: '219',
    name: 'DIVERSITY RESEARCHER',
    strength: 5,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [],
    effects: [],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: 'Base',
  },

  {
    id: '220',
    name: 'FEDERAL GRANTS',
    strength: 4,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [],
    effects: [],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: 'Base',
  },

  {
    id: '221',
    name: 'ARCHEOLOGIST',
    strength: 4,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [],
    effects: [],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: 'Base',
  },

  {
    id: '222',
    name: 'RELEASE OF PATENTS',
    strength: 5,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [],
    effects: [],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: 'Base',
  },

  {
    id: '223',
    name: 'SCIENCE INSTITUTE',
    strength: 3,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [],
    effects: [],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: 'Base',
  },

  {
    id: '224',
    name: 'MIGRATION RECORDING',
    strength: 4,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [],
    effects: [],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: 'Base',
  },

  {
    id: '225',
    name: 'QUARANTINE LAB',
    strength: 3,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [],
    effects: [],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: 'Base',
  },

  {
    id: '226',
    name: 'FOREIGN INSTITUTE',
    strength: 6,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [],
    effects: [],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: 'Base',
  },

  {
    id: '227',
    name: 'WAZA SPECIAL ASSIGNMENT',
    strength: 6,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [],
    effects: [],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: 'Base',
  },

  {
    id: '228',
    name: 'WAZA SMALL ANIMAL PROGRAM',
    strength: 5,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [],
    effects: [],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: 'Base',
  },

  {
    id: '229',
    name: 'EXPERT IN SMALL ANIMALS',
    strength: 5,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [],
    effects: [],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: 'Base',
  },

  {
    id: '230',
    name: 'EXPERT IN LARGE ANIMALS',
    strength: 4,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [],
    effects: [],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: 'Base',
  },

  {
    id: '236',
    name: 'PRIMATOLOGIST',
    strength: 4,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [],
    effects: [],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: 'Base',
  },

  {
    id: '237',
    name: 'HERPETOLOGIST',
    strength: 4,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [],
    effects: [],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: 'Base',
  },

  {
    id: '238',
    name: 'ORNITHOLOGIST',
    strength: 4,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [],
    effects: [],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: 'Base',
  },

  {
    id: '239',
    name: 'EXPERT IN PREDATORS',
    strength: 4,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [],
    effects: [],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: 'Base',
  },

  {
    id: '240',
    name: 'EXPERT IN HERBIVORES',
    strength: 4,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [],
    effects: [],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: 'Base',
  },

  {
    id: '241',
    name: 'HYDROLOGIST',
    strength: 5,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [],
    effects: [],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: 'Base',
  },

  {
    id: '242',
    name: 'GEOLOGIST',
    strength: 5,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [],
    effects: [],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: 'Base',
  },

  {
    id: '243',
    name: 'MEERKAT DEN',
    strength: 5,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [],
    effects: [],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: 'Base',
  },

  {
    id: '244',
    name: 'PENGUIN POOL',
    strength: 5,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [],
    effects: [],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: 'Base',
  },

  {
    id: '245',
    name: 'AQUARIUM',
    strength: 5,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [],
    effects: [],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: 'Base',
  },

  {
    id: '247',
    name: 'BABOON ROCK',
    strength: 6,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [],
    effects: [],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: 'Base',
  },

  {
    id: '248',
    name: 'RHESUS MONKEY PARK',
    strength: 5,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [],
    effects: [],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: 'Base',
  },

  {
    id: '249',
    name: 'BARRED OWL HUT',
    strength: 6,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [],
    effects: [],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: 'Base',
  },

  {
    id: '250',
    name: 'SEA TURTLE TANK',
    strength: 5,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [],
    effects: [],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: 'Base',
  },

  {
    id: '251',
    name: 'POLAR BEAR EXHIBIT',
    strength: 5,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [],
    effects: [],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: 'Base',
  },

  {
    id: '252',
    name: 'SPOTTED HYENA COMPOUND',
    strength: 5,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [],
    effects: [],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: 'Base',
  },

  {
    id: '253',
    name: 'OKAPI STABLE',
    strength: 6,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [],
    effects: [],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: 'Base',
  },

  {
    id: '254',
    name: 'ZOO SCHOOL',
    strength: 5,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [],
    effects: [],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: 'Base',
  },

  {
    id: '255',
    name: 'ADVENTURE PLAYGROUND',
    strength: 3,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [],
    effects: [],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: 'Base',
  },

  {
    id: '256',
    name: 'WATER PLAYGROUND',
    strength: 3,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [],
    effects: [],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: 'Base',
  },

  {
    id: '257',
    name: 'SIDE ENTRANCE',
    strength: 3,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [],
    effects: [],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: 'Base',
  },

  {
    id: '258',
    name: 'NATIVE SEABIRDS',
    strength: 5,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [],
    effects: [],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: 'Base',
  },

  {
    id: '259',
    name: 'NATIVE LIZARDS',
    strength: 5,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [],
    effects: [],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: 'Base',
  },

  {
    id: '260',
    name: 'NATIVE FARM ANIMALS',
    strength: 5,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [],
    effects: [],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: 'Base',
  },

  {
    id: '261',
    name: 'GUIDED SCHOOL TOURS',
    strength: 3,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [],
    effects: [],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: 'Base',
  },

  {
    id: '262',
    name: 'EXPLORER',
    strength: 5,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [],
    effects: [],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: 'Base',
  },

  {
    id: '263',
    name: 'WAZA LARGE ANIMAL PROGRAM',
    strength: 5,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [],
    effects: [],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: 'Base',
  },
  {
    id: '281',
    name: 'ARCADE',
    strength: 3,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [],
    effects: [],
    reputation: 0,
    appeal: 2,
    conservationPoint: 0,
    source: 'Base',
  },
];