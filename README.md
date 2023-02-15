# Игра "Спрячься от Даши!"

Простейший проект на Vue3 и TS с использованием Vite и Capacitor.

## Установка и запуск

Установка зависимостей: `npm i`

Команды dev, build и preview аналогично базовому Vite приложению.

## Capacitor

Добавление android проекта: `npx cap add android`

**Запуск проекта в Android Studio:**

Сначала билд: `npm run build`

Синхронизация android проекта со свежим билдом: `npx cap sync`

Запуск Android Studio с открытым проектом: `npx cap open android`

Игнорируем рекомендации Android Studio. Добавляем виртуальное устройство, например Google Pixel 4, нажимаем Play.

**Генерация иконок**

`npx capacitor-assets generate --android --iconBackgroundColor '#eeeeee' --iconBackgroundColorDark '#222222' --splashBackgroundColor '#eeeeee' --splashBackgroundColorDark '#111111'`
