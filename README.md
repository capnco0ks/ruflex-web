# Диана Астана Трейд — Премиальный сайт гибкой черепицы RUFLEX

Современный минималистичный веб-сайт для компании **ТОО «Диана Астана Трейд»** — официального дистрибьютора кровельных систем и гибкой черепицы **RUFLEX** в Казахстане (г. Астана).

![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=flat&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=flat&logo=tailwind-css&logoColor=white)

---

## 🌟 Ключевые возможности

1. **Интерактивный Каталог & Примерка цвета кровли**:
   - Полноэкранный архитектурный ракурс загородного дома с кинематографичной плавной сменой оттенков (**Crossfade**).
   - Коллекции: **RUFLEX Runa**, **RUFLEX Sota**, **RUFLEX Dranka**, **RUFLEX Tab**, **RUFLEX Ornami**, **RUFLEX Paramount**.
   - Аутентичные нарезки форм гонтов на прозрачном фоне.
   - Полная палитра оттенков базальтового гранулята (*Балтика, Дюна, Красный крыжовник, Медный отлив, Норвежский фьорд, Тайга, Тёмная ночь, Тёмный шоколад, Терракота, Deep Black*).

2. **Инженерный калькулятор сметы**:
   - Быстрый расчёт необходимого объёма упаковок черепицы, подкладочных ковров RUFLEX Ultra, ендовых элементов, мастики и крепежа.
   - Экспорт готового сметного расчёта прямо в **WhatsApp** менеджеру в 1 клик.

3. **Галерея реализованных объектов в Астане**:
   - Реальные объекты (*Караоткель, Family Village, VIP-городок Астаны, Косшы, мкрн Тельмана*).
   - Полноэкранный просмотр фотогалереи (Lightbox).

4. **Контакты и прямая связь**:
   - Интерактивная карта офиса в Астане (ул. Жубанова, 31, офис 202).
   - Прямая запись в WhatsApp и звонки менеджерам (Гульбахыт, Каким).

---

## 🛠 Стек технологий

- **Фреймворк**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Сборщик**: [Vite](https://vitejs.dev/)
- **Стилизация**: [Tailwind CSS](https://tailwindcss.com/)
- **Анимации**: [Framer Motion](https://www.framer.com/motion/)
- **Иконки**: [Lucide React](https://lucide.dev/)

---

## 🚀 Быстрый запуск локально

### 1. Установка зависимостей
```bash
npm install
```

### 2. Запуск сервера разработки
```bash
npm run dev
```
После запуска сайт доступен по адресу: `http://localhost:3000/`

### 3. Продакшн-сборка
```bash
npm run build
```
Готовый оптимизированный бандл будет скомпилирован в папку `/dist`.

### 4. Предпросмотр продакшн-сборки
```bash
npm run preview
```

---

## 📂 Структура проекта

```
ruflex-web/
├── public/
│   ├── assets/
│   │   ├── products/       # Фотографии домов и оттенков коллекций
│   │   ├── shapes/         # Нарезки гонтов на прозрачном фоне
│   │   └── portfolio/      # Фотографии готовых объектов в Астане
│   └── logo.svg            # Круглый логотип Диана Трейд
├── src/
│   ├── components/         # React-компоненты
│   │   ├── Header.tsx      # Верхняя навигационная панель
│   │   ├── Hero.tsx        # Главный экран
│   │   ├── ColorVisualizer.tsx # Интерактивный каталог и выбор цвета
│   │   ├── CollectionModal.tsx # Модальное окно характеристик
│   │   ├── RoofCalculator.tsx  # Калькулятор сметы кровли
│   │   ├── Advantages.tsx  # Преимущества СБС-битума
│   │   ├── AboutCompany.tsx# О компании Диана Астана Трейд
│   │   ├── Portfolio.tsx   # Галерея объектов с Lightbox
│   │   ├── Contacts.tsx    # Контакты и карта
│   │   └── Footer.tsx      # Подвал сайта
│   ├── data/
│   │   ├── products.ts     # Коллекции, цвета, характеристики
│   │   ├── company.ts      # Телефоны, адреса, реквизиты компании
│   │   └── portfolio.ts    # Список реализованных объектов
│   ├── App.tsx             # Главный контейнер приложения
│   ├── index.css           # Глобальные стили Tailwind
│   └── main.tsx            # Точка входа React
├── index.html              # HTML-шаблон с мета-тегами
├── tailwind.config.js      # Конфигурация Tailwind CSS
├── tsconfig.json           # Настройки TypeScript
└── vite.config.ts          # Конфигурация Vite
```

---

## 📤 Инструкция по публикации на GitHub

Выполните следующие команды в терминале:

```bash
# 1. Инициализация репозитория (если еще не выполнен)
git init

# 2. Добавление всех файлов в коммит
git add .

# 3. Создание первого коммита
git commit -m "feat: initial release of Diana Astana Trade modern roofing website"

# 4. Переименование ветки в main
git branch -M main

# 5. Привязка к вашему GitHub репозиторию (замените YOUR-USERNAME и REPO-NAME на свои)
git remote add origin https://github.com/YOUR-USERNAME/REPO-NAME.git

# 6. Отправка кода на GitHub
git push -u origin main
```

---

## 🌐 Бесплатный деплой в 1 клик

### Вариант 1: Vercel (Рекомендуется)
1. Перейдите на [vercel.com](https://vercel.com/) и войдите через GitHub.
2. Нажмите **Add New...** → **Project**.
3. Выберите ваш репозиторий `ruflex-web`.
4. Нажмите **Deploy** (настройки определятся автоматически: Vite + React).

### Вариант 2: Netlify
1. Перейдите на [netlify.com](https://www.netlify.com/).
2. Выберите **Import from Git** → выберите репозиторий.
3. Build command: `npm run build`, Publish directory: `dist`.
4. Нажмите **Deploy Site**.

---

## 📞 Контакты компании

- **Компания**: ТОО «Диана Астана Трейд»
- **Адрес**: Республика Казахстан, г. Астана, ул. Жубанова, 31, офис 202
- **Телефоны**:
  - `+7 (707) 862-04-61` (Гульбахыт)
  - `+7 (747) 517-56-00` (Каким)
- **Email**: `diana_astana@diana.kz`
