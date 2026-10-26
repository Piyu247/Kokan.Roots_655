/**
 * 9 Distinct Earthy Colour Themes for Kokan Roots categories.
 *
 * Shared across CategoryGrid, ProductGrid, ProductCard and ProductModal
 * so that every category's subtle colour identity is consistent throughout
 * the entire browsing experience.
 */

export interface CategoryTheme {
  bgTint: string;          // Subtle card / section background tint
  containerBg: string;     // Image container background
  accentBorder: string;    // Border colour matching the earthy hue
  badgeBg: string;         // Dark badge background
  badgeText: string;       // Badge text (light, high contrast)
  accentChip: string;      // Decorative accent / arrow colour
}

const categoryThemes: Record<string, CategoryTheme> = {
  'pickles-chutneys': {
    // warm mango beige #F2E4D3
    bgTint: '#F2E4D3',
    containerBg: '#E8D8C3',
    accentBorder: '#D8C3AA',
    badgeBg: '#6E4528',
    badgeText: '#FFF9F2',
    accentChip: '#8C5632'
  },
  'cashews-nuts': {
    // almond beige #EAE1D0
    bgTint: '#EAE1D0',
    containerBg: '#DDD2BD',
    accentBorder: '#CFC2A9',
    badgeBg: '#594A38',
    badgeText: '#FAF6EE',
    accentChip: '#75634D'
  },
  'flours-rice-grains': {
    // pale grain green #E4E9D9
    bgTint: '#E4E9D9',
    containerBg: '#D6DDC7',
    accentBorder: '#C4CCB1',
    badgeBg: '#344E2B',
    badgeText: '#F5F8F0',
    accentChip: '#496B3E'
  },
  'spices-masalas': {
    // muted terracotta #EBD9CB
    bgTint: '#EBD9CB',
    containerBg: '#DEC6B5',
    accentBorder: '#CEB29D',
    badgeBg: '#6F3A22',
    badgeText: '#FFF5EE',
    accentChip: '#8E4828'
  },
  'kokum-fruit-specials': {
    // soft berry tint #E9DFE8
    bgTint: '#E9DFE8',
    containerBg: '#DACCD9',
    accentBorder: '#CAB6C8',
    badgeBg: '#5C3358',
    badgeText: '#FCF7FB',
    accentChip: '#784373'
  },
  'snacks-laddus-chivda-chakli': {
    // toasted gold #F0E4C9
    bgTint: '#F0E4C9',
    containerBg: '#E5D6B4',
    accentBorder: '#D6C49C',
    badgeBg: '#6A521E',
    badgeText: '#FFFDF6',
    accentChip: '#896A27'
  },
  'papads': {
    // light sage #DCE8DF
    bgTint: '#DCE8DF',
    containerBg: '#CADACF',
    accentBorder: '#B5C9BC',
    badgeBg: '#2D4B39',
    badgeText: '#F2F8F4',
    accentChip: '#3F654F'
  },
  'syrups-beverages': {
    // coastal blue-green #E1E8E8
    bgTint: '#E1E8E8',
    containerBg: '#CDDADA',
    accentBorder: '#B7C9C9',
    badgeBg: '#26484D',
    badgeText: '#F1F7F7',
    accentChip: '#356167'
  },
  'special-products': {
    // muted indigo #E3E0ED
    bgTint: '#E3E0ED',
    containerBg: '#D2CEDE',
    accentBorder: '#BEB8CD',
    badgeBg: '#3D3B5C',
    badgeText: '#F7F6FB',
    accentChip: '#524F7B'
  }
};

/** Default neutral theme used as fallback for unknown category IDs. */
export const defaultTheme: CategoryTheme = {
  bgTint: '#FCFAF5',
  containerBg: '#F3EFE6',
  accentBorder: '#EDE5D2',
  badgeBg: '#244D3A',
  badgeText: '#F8F4EA',
  accentChip: '#244D3A'
};

/** Look up the theme for a given category ID. Returns a neutral fallback for unknown IDs. */
export function getCategoryTheme(categoryId: string): CategoryTheme {
  return categoryThemes[categoryId] || defaultTheme;
}

export default categoryThemes;
