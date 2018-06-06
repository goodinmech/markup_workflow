# Markup workflow

### Установка
```
$ npm install
$ bower install
```

### Включенные библиотеки

* bourbon
* bourbon-neat
* html5shiv
* normalize-scss

### Структура папок

* css - Минифицированный CSS
* fontello - Font-icons
* gulp-tasks - Gulp задачи
* html - Макеты, кусочки шаблонов, которые непосредственно верстаем
* html_build - Собранная верстка
* image - Изображения
* index - Удобный список, для навигации по макетам
* js - Пользовательский JS
* sass - SCSS стили
* vendor - Стороние библиотеки

### Конфигурация Gulp

markup_workflow/gulp-tasks/config.js

### Задачи Gulp

* build - Запускает сборку (template, sass, css)
* css - Минификация, оптимизация CSS
* indexGeneration - Создает индекс макетов
* sass - Трансляция SASS/SCSS в CSS
* reload - Live-reload
* template - Склеивает шаблоны из слоев
* watch - Запускает Live-reload, автоматически выполняет сборку при изменениях

### Include шаблонов (https://www.npmjs.com/package/gulp-include)
```
<!--=include layout/header.html -->
```
