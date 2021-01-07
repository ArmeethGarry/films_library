/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener( 'DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const contentHeader = document.querySelector( '.promo__content' ),
          bgHeader = contentHeader.querySelector( '.promo__bg' ),
          genre = bgHeader.querySelector('.promo__genre'),
          movieList = document.querySelector( '.promo__interactive-list' ),
          advs = document.querySelectorAll( '.promo__adv img' );
    
    bgHeader.style.backgroundImage = 'url("img/bg.jpg")';
    genre.textContent = 'драма';
    movieList.innerHTML = '';
    
    function delElems( array ) {
        array.forEach( elem => {
            elem.remove();
        });
    }
    
    delElems( advs );
    
    movieDB.movies.sort();
    movieDB.movies.forEach( (elem, i) => {
        movieList.innerHTML += `
            <li class="promo__interactive-item">${i+1} ${elem}
                <div class="delete"></div>
            </li>
        `
    })
});
