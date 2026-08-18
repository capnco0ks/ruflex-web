export interface PortfolioProject {
  id: string;
  title: string;
  location: string;
  collection: string;
  color: string;
  roofArea: number; // m2
  year: number;
  description: string;
  style: 'Шале' | 'Хай-тек / Барнхаус' | 'Классика' | 'Скандинавский';
  imageUrl: string;
  gallery: string[];
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'residence-karaotkel',
    title: 'Загородная резиденция в пос. Караоткель',
    location: 'Акмолинская обл., пос. Караоткель',
    collection: 'RUFLEX Dranka',
    color: 'Deep Black',
    roofArea: 480,
    year: 2024,
    style: 'Хай-тек / Барнхаус',
    description: 'Монтаж сложной кровли с массивной архитектурной черепицей в угольно-черном оттенке. Идеальная ветроустойчивость в условиях открытой местности.',
    imageUrl: '/assets/portfolio/karaotkel.webp',
    gallery: [
      '/assets/portfolio/karaotkel.webp',
      '/assets/portfolio/karaotkel2.webp',
      '/assets/portfolio/karaotkel3.webp',
      '/assets/portfolio/karaotkel4.webp'
    ]
  },
  {
    id: 'family-village-chalet',
    title: 'Коттедж в жилом массиве Family Village',
    location: 'г. Астана, массив Family Village',
    collection: 'RUFLEX Runa',
    color: 'Медный отлив',
    roofArea: 320,
    year: 2023,
    style: 'Шале',
    description: 'Эффектная многоскатная кровля с объемными тенями гонтов Runa. Теплый медный отлив подчеркивает кладку из клинкерного кирпича и деревянные балки.',
    imageUrl: '/assets/portfolio/family-village.webp',
    gallery: [
      '/assets/portfolio/family-village.webp'
    ]
  },
  {
    id: 'vip-gorodok-astana',
    title: 'Вилла в VIP-городке Астаны',
    location: 'г. Астана, район Есиль',
    collection: 'RUFLEX Runa',
    color: 'Балтика',
    roofArea: 610,
    year: 2024,
    style: 'Скандинавский',
    description: 'Масштабный проект в элитном районе столицы. Сланцево-серый графит Балтика идеально гармонирует с монолитными светлыми фасадами виллы.',
    imageUrl: '/assets/portfolio/vip-gorodok.webp',
    gallery: [
      '/assets/portfolio/vip-gorodok.webp',
      '/assets/portfolio/vip-gorodok-2.webp'
    ]
  },
  {
    id: 'kosshy-manor',
    title: 'Усадьба в пригороде Косшы',
    location: 'Акмолинская обл., г. Косшы',
    collection: 'RUFLEX Sota',
    color: 'Тайга',
    roofArea: 390,
    year: 2023,
    style: 'Классика',
    description: 'Шестигранная сотовая геометрия в выразительном цвете с надежным сплошным самоклеящимся слоем, устойчивым к осадкам и температурным перепадам.',
    imageUrl: '/assets/portfolio/kosshy.webp',
    gallery: [
      '/assets/portfolio/kosshy.webp',
      '/assets/portfolio/kosshy2.jpeg',
      '/assets/portfolio/kosshy3.jpeg'
    ]
  },
  {
    id: 'telmana-residence',
    title: 'Современный дом в мкрн Тельмана',
    location: 'г. Астана, мкрн Тельмана',
    collection: 'RUFLEX Tab',
    color: 'Тёмная ночь',
    roofArea: 285,
    year: 2024,
    style: 'Скандинавский',
    description: 'Прямоугольная кладка RUFLEX Tab в цвете Тёмная ночь с контрастными тенями на скатах. Полная герметичность и бесшумность во время дождей.',
    imageUrl: '/assets/portfolio/telmana1.webp',
    gallery: [
      '/assets/portfolio/telmana1.webp',
      '/assets/portfolio/telmana2.webp',
      '/assets/portfolio/telmana3.webp'
    ]
  }
];
