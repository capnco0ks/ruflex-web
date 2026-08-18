export interface CompanyInfo {
  name: string;
  legalName: string;
  city: string;
  address: string;
  office: string;
  fullAddress: string;
  phones: {
    primary: string;
    primaryClean: string;
    primaryName: string;
    secondary: string;
    secondaryClean: string;
    secondaryName: string;
  };
  email: string;
  workingHours: {
    weekdays: string;
    weekend: string;
    timezone: string;
  };
  experienceYears: number;
  completedObjects: number;
  guaranteeYears: number;
  locationGeo: {
    lat: number;
    lng: number;
    zoom: number;
  };
  socialLinks: {
    whatsapp: string;
    telegram: string;
  };
}

export const COMPANY_INFO: CompanyInfo = {
  name: 'Диана Астана Трейд',
  legalName: 'ТОО «Диана Астана Трейд»',
  city: 'Астана',
  address: 'ул. Жубанова, 31',
  office: 'офис 202',
  fullAddress: 'Республика Казахстан, г. Астана, ул. Жубанова, 31, офис 202',
  phones: {
    primary: '+7 (707) 862-04-61',
    primaryClean: '+77078620461',
    primaryName: 'Гульбахыт',
    secondary: '+7 (747) 517-56-00',
    secondaryClean: '+77475175600',
    secondaryName: 'Каким',
  },
  email: 'diana_astana@diana.kz',
  workingHours: {
    weekdays: '09:00 – 18:00',
    weekend: 'Выходной',
    timezone: 'Астана (UTC+5)',
  },
  experienceYears: 13,
  completedObjects: 1540,
  guaranteeYears: 50,
  locationGeo: {
    lat: 51.1605,
    lng: 71.4704,
    zoom: 15,
  },
  socialLinks: {
    whatsapp: 'https://wa.me/77078620461?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C%20%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8E%20%D0%BF%D0%BE%20%D0%B3%D0%B8%D0%B1%D0%BA%D0%BE%D0%B9%20%D1%87%D0%B5%D1%80%D0%B5%D0%BF%D0%B8%D1%86%D0%B5%20RUFLEX',
    telegram: 'https://t.me/dianaastana_roof',
  }
};

export interface Advantage {
  id: string;
  number: string;
  title: string;
  description: string;
  detail: string;
}

export const ADVANTAGES: Advantage[] = [
  {
    id: 'sbs',
    number: '01',
    title: '100% СБС-модифицированный битум',
    description: 'Эластичность гонтов сохраняется даже при экстремальных морозах Астаны до -50°C, исключая растрескивание.',
    detail: 'Специальный искусственный каучук придает черепице упругость при монтаже в холодный период и стабильность в летнюю жару до +110°C.',
  },
  {
    id: 'granulate',
    number: '02',
    title: 'Керамизированный базальт',
    description: 'Цветные гранулы не выгорают на солнце десятилетиями благодаря высокотемпературному обжигу при 1200°C.',
    detail: '100% покрытие базальтовыми фракциями защищает битум от ультрафиолетового излучения и механических повреждений градом.',
  },
  {
    id: 'acoustic',
    number: '03',
    title: 'Абсолютная акустическая тишина',
    description: 'В отличие от металлочерепицы и профлиста, битумная черепица полностью поглощает шум дождя и града.',
    detail: 'Мансардный этаж остается комфортным и тихим в любую непогоду без обустройства дополнительной звукоизоляции.',
  },
  {
    id: 'lifetime',
    number: '04',
    title: 'Пожизненная заводская гарантия',
    description: 'Официальный именной сертификат от завода RUFLEX с прямой юридической ответственностью производителя.',
    detail: 'Действует при монтаже кровельной системы с оригинальными подкладочными коврами Ultra и комплектующими RUFLEX.',
  },
  {
    id: 'climate',
    number: '05',
    title: 'Стойкость к ветровым нагрузкам РК',
    description: 'Сплошной самоклеящийся слой гонтов выдерживает порывистый степной ветер до 180-200 км/ч.',
    detail: 'Под воздействием солнечного тепла гонты спекаются в единый герметичный монолитный гидроизоляционный ковер.',
  },
  {
    id: 'efficiency',
    number: '06',
    title: 'Безотходный монтаж сложных кровель',
    description: 'Минимальный процент обрезков (до 2-5%) даже на сложных многоскатных, купольных и вальмовых крышах.',
    detail: 'Экономия до 30% бюджета по сравнению с листовыми кровельными материалами при сложной геометрии дома.',
  }
];

export interface BrandPartner {
  name: string;
  country: string;
  description: string;
  badge: string;
}

export const BRAND_PARTNERS: BrandPartner[] = [
  { name: 'RUFLEX', country: 'Россия / ЕС', description: 'Премиальная гибкая черепица с пожизненной гарантией', badge: 'Генеральный партнёр' },
  { name: 'KATEPAL', country: 'Финляндия', description: 'Оригинальная финская СБС-модифицированная черепица', badge: 'Официальный дистрибьютор' },
  { name: 'LUXARD', country: 'Технониколь', description: 'Композитная черепица с базальтовой посыпкой', badge: 'Официальный поставщик' },
  { name: 'SHINGLAS', country: 'Технониколь', description: 'Многослойная гибкая черепица', badge: 'Партнёр' },
  { name: 'METROTILE', country: 'Бельгия', description: 'Элитная композитная кровля', badge: 'Прямые поставки' },
  { name: 'FAKRO', country: 'Польша', description: 'Энергосберегающие мансардные окна и лестницы', badge: 'Комплектующие' },
  { name: 'VILPE', country: 'Финляндия', description: 'Вентиляционные кровельные выходы и проходки', badge: 'Кровельная вентиляция' }
];
