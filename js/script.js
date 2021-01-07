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
          advs = document.querySelectorAll( '.promo__adv img' ),
          form = document.querySelector( 'form.add' ),
          addInput = form.querySelector( '.adding__input' ),
          checkbox = form.querySelector( '[type="checkbox"]' );
    
    bgHeader.style.backgroundImage = 'url("img/bg.jpg")';
    genre.textContent = 'драма';

    addEventListener( 'submit', ( event ) => {
        event.preventDefault();

        let newFilms = addInput.value;
        let favorit = checkbox.checked;

        if( newFilms ) {
            if( newFilms.length > 21 ) {
                newFilms = `${newFilms.slice(0, 22)}...`;
            }
            movieDB.movies.push( newFilms.toUpperCase() );
            sortArr( movieDB.movies );

            creatMovieList( movieList, movieDB.movies );
        }

        event.target.reset();

    });
    
    function delElems( array ) {
        array.forEach( elem => {
            elem.remove();
        });
    }
    
    function sortArr( arr ) {
        arr.sort();
    }

    function creatMovieList( arr, parent ) {
        arr.innerHTML = '';
        parent.forEach( (elem, i) => {
            arr.innerHTML += `
                <li class="promo__interactive-item">${i+1} ${elem}
                    <div class="delete"></div>
                </li>
            `
        });

        document.querySelectorAll( '.delete' ).forEach( (btn, i) => {
            btn.addEventListener( 'click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice( i, 1);

                creatMovieList( movieList, movieDB.movies );

            });

        } );
    }

    delElems( advs );
    creatMovieList( movieList, movieDB.movies );
    sortArr( movieList );

});
