# Как редактировать контент
Весь редактируемый контент создается на языке [Markdown](https://ru.wikipedia.org/wiki/Markdown). Краткое обучение можно пройти [здесь](https://www.markdowntutorial.com/) или еще найти еще какую-нибудь 
[шпаргалку](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet). Для удобного редактирования статей можно использовать [онлайн-редактор](http://dillinger.io/) или поставить что-то себе.

## Контент на главной

Контент на главной странице разбит на секции и для каждой секции текст расположен в отдельном файле в папке [`_data`](_data).
Структуру файла необходимо сохранить, при необходимости отредактирвоав текст или добавив новй элемент в список `items`
Сопоставление секций и файлов:

1. Баннер - [main.yml](_data/main.yml)
2. Веб-карты на платформе SkyoriGIS - [map.yml](_data/map.yml)
3. Геопортал на платформе SkyoriGIS - [geoportal.yml](_data/geoportal.yml)
4. Импортозамещение - [subimport.yml](_data/subimport.yml)

## Проекты
Контент проектов расположен в папке [`public_pages/_projects`](public_pages/_projects), каждый проект в отдельном файле.

### Скриншоты интерфейса
Скриншоты интерфейса проектов находятся в каталоге [`img/projects`](img/projects), чтобы изображение отобразилось на станице проекта необходимо добавить фото в каталог `img/projects`, и добавить название файла вместе с расширением в список `imgs`, все названия изображений в списке указываются через запятую.

Размер изображения 540*auto, больше не нужно, можно изменить размер с помощью любого онлайн-сервиса (например https://www.iloveimg.com/), тамже можно сжать изображения.

Размер изображения для обложки проекта на главной 395*auto.

Изображения большего размера использовать можно, но не нужно, тк тяжелые и большие изображения долго загружаются и тормозят работу сайта.

### Атрибуты
При добавлении нового проекта необходимо в начале файла указать следующие атрибуты:

| Наименование атрибута | За что отвечает      | Где отображается                                          |
|-----------------------|----------------------|-----------------------------------------------------------|
| `title`               | Наименование проекта | В плитках на главной и в заголовке на странице проекта    |
| `description`         | Краткое описание     | В плитках на главной и под заголовком на странице проекта |
| `logo`                | Логотип              | В плитках на главной |
| `cover`               | Скрин интерфейса     | В плитках на главной |
| `imgs`                | Скрины интерфейса    | На странице проекта |
| `layout`              | Шаблон страницы      |  |
| `permalink`           | url                  |  |


