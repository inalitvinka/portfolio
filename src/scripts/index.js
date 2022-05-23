const portfolioBtn = document.querySelectorAll('.portfolio-btn');
const portfolioImages = document.querySelectorAll('.portfolio-pic');
const btn = document.querySelector('.portfolio-buttons');
// const winter = document.querySelector('[data-season = "winter"]');


// Array.from(portfolioImages).forEach(item => item.addEventListener('click', event => {
//     portfolioImages.forEach((img, index) => img.src = `./assets/images/winter/${++index}.jpg`);
// }));

// GET DIFFERENT SEASONS 
portfolioBtn[0].addEventListener('click', event => {
    portfolioImages.forEach((img, index) => img.src = `./assets/images/winter/${++index}.jpg`);
});
portfolioBtn[1].addEventListener('click', event => {
    portfolioImages.forEach((img, index) => img.src = `./assets/images/spring/${++index}.jpg`);
});
portfolioBtn[2].addEventListener('click', event => {
    portfolioImages.forEach((img, index) => img.src = `./assets/images/summer/${++index}.jpg`);
});
portfolioBtn[3].addEventListener('click', event => {
    portfolioImages.forEach((img, index) => img.src = `./assets/images/autumn/${++index}.jpg`);
});
console.log(btn.hasAttribute('dataSeason'))

// GET DIFFERENT SEASONS =>  ВТОРОЙ ВАРИАНТ / ПЕРЕДЕЛАТЬ НОРМАЛЬНО
// const changeImgSeasons = event => {
//     if (event.target.classList.contains('portfolio-btn')) {
//         portfolioImages.forEach((img, index) => img.src = `./assets/images/winter/${index + 1}.jpg`);
//     }
// };
// btn.addEventListener('click', changeImgSeasons);

// СДЕЛАТЬ ЧЕРЕЗ DATA-АТРИБУТ
/*
Получить data-атрибут элемента при помощи dataset и ключа - слова, 
которое в названии атрибута идёт после префикса data-. 
первая кнопка 
dataset.season = "winter", 
вторая 
dataset.season = "spring";
третья
dataset.season = "summer";
четвертая
dataset.season = "autumn";
*/
/*
В коде функции changeImage(), которая выполняется при клике по кнопке, 
необходимо определить значение dataset.season этой кнопки 
и подставить его в шаблонную строку, определяющую src изображения. 
Благодаря этому при клике по кнопке с data-атрибутом "winter" 
на странице будут отображаться картинки из папки "winter", 
а если data-атрибут кнопки – "summer", 
то и картинки будут отображаться из папки "summer".
*/

// ADD ACTIVE CLASS
let activeBtn = portfolioBtn[3].classList.add('active');
let prevVal;
const changeClassActive = (event) => {
    const ev = event.target;
    if (!ev.classList.contains('portfolio-btn')) return; // is it right??
    if (prevVal === activeBtn) portfolioBtn[3].classList.remove('active');
    if (prevVal) prevVal.classList.remove('active');
    ev.classList.add('active');
    prevVal = ev;
}
btn.addEventListener('click', changeClassActive);



// IMAGE CACHING
/*
const seasons = ['winter', 'spring', 'summer', 'autumn'];
const preloadImages = () => {
    seasons.forEach(item => {
        for(let i = 1; i <= 6; i++) {
            const img = new Image();
            img.src = `./assets/img/${item[i]}/${i}.jpg`;
        }
    })
}

function preloadSummerImages() {
    for(let i = 1; i <= 6; i++) {
      const img = new Image();
      img.src = `./assets/img/summer/${i}.jpg`;
    }
  }
  preloadSummerImages();
*/