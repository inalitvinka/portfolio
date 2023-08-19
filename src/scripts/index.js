'use strict';
const i18Obj = {
    'en': {
      'skills': 'Skills',
      'portfolio': 'Portfolio',
      'video': 'Video',
      'price': 'Price',
      'contacts': 'Contacts',
      'hero-title': 'Alexa Rise',
      'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
      'hire': 'Hire me',
      'skill-title-1': 'Digital photography',
      'skill-text-1': 'High-quality photos in the studio and on the nature',
      'skill-title-2': 'Video shooting',
      'skill-text-2': 'Capture your moments so that they always stay with you',
      'skill-title-3': 'Rotouch',
      'skill-text-3': 'I strive to make photography surpass reality',
      'skill-title-4': 'Audio',
      'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
      'winter': 'Winter',
      'spring': 'Spring',
      'summer': 'Summer',
      'autumn': 'Autumn',
      'standart': 'Standart',
      'premium': 'Premium',
      'gold': 'Gold',
      'price-description': 'One location 120 photos in color 12 photos in retouch Readiness 2-3 weeks Make up, visage',
      'price-description-1-span-1': 'One location',
      'price-description-1-span-2': '120 photos in color',
      'price-description-1-span-3': '12 photos in retouch',
      'price-description-1-span-4': 'Readiness 2-3 weeks',
      'price-description-1-span-5': 'Make up, visage',
      'price-description-2-span-1': 'One or two locations',
      'price-description-2-span-2': '200 photos in color',
      'price-description-2-span-3': '20 photos in retouch',
      'price-description-2-span-4': 'Readiness 1-2 weeks',
      'price-description-2-span-5': 'Make up, visage',
      'price-description-3-span-1': 'Three locations or more',
      'price-description-3-span-2': '300 photos in color',
      'price-description-3-span-3': '50 photos in retouch',
      'price-description-3-span-4': 'Readiness 1 week',
      'price-description-3-span-5': 'Make up, visage, hairstyle',
      'order': 'Order shooting',
      'contact-me': 'Contact me',
      'email': 'E-mail',
      'phone': 'Phone',
      'message': 'Message',
      'send-message': 'Send message'
    },
    'by': {
        'skills': 'Navyki',
        'portfolio': 'Partfolijo',
        'video': 'Videa',
        'price': 'Košt',
        'contacts': 'Kantakty',
        'hero-title': 'Aleksa Rajs',
        'hero-text': 'Zachavajcie ščyryja emocyi, ramantyčnyja pieražyvanni j ščaślivyja momanty žyćcia razam z prafesijnym fatohrafam Aleksaj Rajs',
        'hire': 'Zaprasić',
        'skill-title-1': 'Fatahrafija',
        'skill-text-1': 'Vysakajakasnyja fota ŭ studyi j na pryrodzie',
        'skill-title-2': 'Videa',
        'skill-text-2': 'Zapišycie lepšyja momanty, kab jany zaŭsiody zastavalisia z vami',
        'skill-title-3': 'Retuš',
        'skill-text-3': 'Ja imknusia da taho, kab fatahrafija pieraŭzychodziła realnaść',
        'skill-title-4': 'Huk',
        'skill-text-4': 'Prafesyjny zapis huku da videa, reklamy, partfolijo',
        'winter': 'Zima ',
        'spring': 'Viasna',
        'summer': 'Leta',
        'autumn': 'Vosień ',
        'standart': 'Standart',
        'premium': 'Premium',
        'gold': 'Hołd',
        'price-description-1-span-1': 'Adna lakacyja',
        'price-description-1-span-2': '120 kalarovych fota',
        'price-description-1-span-3': '12 adretušavanych fota',
        'price-description-1-span-4': 'Hatoŭnaść 2-3 tydni',
        'price-description-1-span-5': 'Makijaž, vizaž',
        'price-description-2-span-1': 'Adna-dźvie lakacyi',
        'price-description-2-span-2': '200 kalarovych fota',
        'price-description-2-span-3': '20 adretušavanych fota',
        'price-description-2-span-4': 'Hatoŭnaść 1-2 tydni',
        'price-description-2-span-5': 'Makijaž, vizaž',
        'price-description-3-span-1': 'Try lakacyi j bolš',
        'price-description-3-span-2': '300 kalarovych fota',
        'price-description-3-span-3': '50 adretušavanych fota',
        'price-description-3-span-4': 'Hatoŭnaść 1 tydzień',
        'price-description-3-span-5': 'Makijaž, vizaž, pryčoska',
        'order': 'Zamović',
        'contact-me': 'Suviaź sa mnoj',
        'email': 'E-mail',
        'phone': 'Telefon',
        'message': 'Paviedamlennie',
        'send-message': 'Adpravić',
      },
    'ru': {
      'skills': 'Навыки',
      'portfolio': 'Портфолио',
      'video': 'Видео',
      'price': 'Цены',
      'contacts': 'Контакты',
      'hero-title': 'Алекса Райс',
      'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
      'hire': 'Пригласить',
      'skill-title-1': 'Фотография',
      'skill-text-1': 'Высококачественные фото в студии и на природе',
      'skill-title-2': 'Видеосъемка',
      'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
      'skill-title-3': 'Ретушь',
      'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
      'skill-title-4': 'Звук',
      'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
      'winter': 'Зима',
      'spring': 'Весна',
      'summer': 'Лето',
      'autumn': 'Осень',
      'standart': 'Стандарт',
      'premium': 'Премиум',
      'gold': 'Голд',
      'price-description-1-span-1': 'Одна локация',
      'price-description-1-span-2': '120 цветных фото',
      'price-description-1-span-3': '12 отретушированных фото',
      'price-description-1-span-4': 'Готовность через 2-3 недели',
      'price-description-1-span-5': 'Макияж, визаж',
      'price-description-2-span-1': 'Одна-две локации',
      'price-description-2-span-2': '200 цветных фото',
      'price-description-2-span-3': '20 отретушированных фото',
      'price-description-2-span-4': 'Готовность через 1-2 недели',
      'price-description-2-span-5': 'Макияж, визаж',
      'price-description-3-span-1': 'Три локации и больше',
      'price-description-3-span-2': '300 цветных фото',
      'price-description-3-span-3': '50 отретушированных фото',
      'price-description-3-span-4': 'Готовность через 1 неделю',
      'price-description-3-span-5': 'Макияж, визаж, прическа',
      'order': 'Заказать съемку',
      'contact-me': 'Свяжитесь со мной',
      'email': 'Электронная почта',
      'phone': 'Телефон',
      'message': 'Сообщение',
      'send-message': 'Отправить'
    }
}

//  VIDEO PLAYER
// const BUTTONS = document.querySelectorAll('.video-playbuttons');
// const POSTER = document.querySelector('#poster');
const PLAY_SVG = document.querySelector('#play-svg');
const PLAY = document.querySelector('#play');
const PAUSE = document.querySelector('#pause');
const MUTED = document.querySelector('#muted');
const UNMUTED = document.querySelector('#unmuted');
const VOLUME = document.querySelector('#volume');
// document.querySelector('#volume').oninput = volume;

const VIDEO = document.querySelector('#video-screen');

function play() {
    VIDEO.play();
    PLAY.classList.add('video-hide');
    PLAY_SVG.classList.add('video-hide');
    PAUSE.classList.remove('video-hide');
}
function pause() {
    VIDEO.pause();
    PAUSE.classList.add('video-hide');
    PLAY.classList.remove('video-hide');
    PLAY_SVG.classList.remove('video-hide');
}
function changeVolume() {
    let volume = +this.value;
    console.log(volume);
    VIDEO.volume = volume / 100;
    console.log(VIDEO.volume);
    if (volume === 0) {
        console.log('lol');
        MUTED.classList.add('video-hide');
        UNMUTED.classList.remove('video-hide');
    } else {
        MUTED.classList.remove('video-hide');
        UNMUTED.classList.add('video-hide');
    }
    return volume;
}
function muted() {
    VIDEO.volume = 0;
    VOLUME.value = 0;
    MUTED.classList.add('video-hide');
    UNMUTED.classList.remove('video-hide'); 
}
function unmuted() {
    VIDEO.volume = .5;
    VOLUME.value = 50;
    MUTED.classList.remove('video-hide');
    UNMUTED.classList.add('video-hide');
}
document.addEventListener('click', event => {
    const TARGET_VALUE = event.target.dataset.play;
    console.log(TARGET_VALUE);
    if (TARGET_VALUE === 'play') {
        // POSTER.classList.add('video-hide');
        play();
    }
    if (TARGET_VALUE === 'pause') {
        pause()
    }
    if (TARGET_VALUE === 'muted') {
        muted();
    }
    if (TARGET_VALUE === 'unmuted') {
        unmuted();
    }
})
VOLUME.addEventListener('input', changeVolume);

//    TRANSLATE
const _getTranslate = lang => {
    const ELEMENTS_TO_TRANSLATE = document.querySelectorAll('[data-i18n]');
    ELEMENTS_TO_TRANSLATE.forEach(item => {
        const val = item.dataset.i18n;
        if (item.placeholder) {
            item.placeholder = i18Obj[lang][val];
            item.textContent = '';
        };
        if (item.matches('span')) item.innerHTML = `<span>${i18Obj[lang][val]}<br></span`;
        else item.innerHTML = i18Obj[lang][val];
        // if (item.matches('span')) console.log(item);
        // if (item.matches('h2')) {
        //     item.innerHTML = `<span>${i18Obj[lang][val]}</span`;
        // } else item.innerHTML = i18Obj[lang][val];
        // if (item.outerHTML.includes('h2')) console.log(item)
        // console.log(item.matches('h2'));
        // console.log(i18Obj[lang][val]);

        // item.innerHTML = i18Obj[lang][val];

        // item.innerHTML = `<span>${i18Obj[lang][val]}</span`;
        // проверить элемент title ли это и добавить span 
    })
} 
function getLanguageValue() {
    let activeLang = document.querySelector('.header-lang_active');
    let value = activeLang.innerHTML;
    const LANGUAGE = document.querySelector('.header-lang');
    LANGUAGE.addEventListener('click', event => {
        activeLang.classList.remove('header-lang_active');
        activeLang = event.target;
        activeLang.classList.add('header-lang_active');
        const TARGET = event.target.dataset.lang;
        if(TARGET) {
            value = TARGET;
            _getTranslate(value);
        } else return;
    })
}
getLanguageValue();

// CHANGE THEME

// const PORTFOLIO_ACTIVE = document.querySelector('.portfolio-active');
// PORTFOLIO_ACTIVE.style.background = 'rgba(0, 0, 0, .8)';

const SWITCH = document.querySelector('.header-switch');
SWITCH.addEventListener('click', event => {
    if (localStorage.getItem('theme') === 'light') {
        localStorage.removeItem('theme');
    } else {
        localStorage.setItem('theme', 'light');
    }
    changeThemeOnThePage();
})

function changeThemeOnThePage() {
    const BODY = document.body;
    const LOGO = document.querySelector('.header-logo');
    const HEADER_NAV =  document.querySelectorAll('.nav-link');
    const HEADER_LANG = document.querySelector('.header-lang_active');
    const HERO = document.querySelector('div.background-wrapper');
    const BUTTONS = document.querySelectorAll('#button-tolight');
    const PORTFOLIO_BTNS = document.querySelectorAll('.portfolio-btn');
    const PORTFOLIO_ACTIVE = document.querySelector('.portfolio-active');
    const CONTACTS = document.querySelector('.contacts');
    const FORM = document.querySelectorAll('.contacts-field');
    const FOOTER_ITEMS = document.querySelectorAll('.footer-light');
    const GH_LOGO = document.querySelector('.footer-githublogo');

    const SWITH_LIGHT = document.querySelector('.header-light');
    const SWITH_DARK = document.querySelector('.header-dark');
    try {
        if (localStorage.getItem('theme') === 'light') {
            BODY.classList.add('light-theme');
            HEADER_NAV.forEach(item => item.classList.add('nav-light'));
            HEADER_LANG.classList.add('lang-light');
            HERO.classList.add('hero-light');
            LOGO.classList.add('logo-light');
            CONTACTS.classList.add('contacts-light');
            BUTTONS.forEach(item => item.classList.add('contacts-btnlight'));
            PORTFOLIO_BTNS.forEach(item => item.classList.add('portfolo-light'));
            PORTFOLIO_ACTIVE.classList.add('.portfolio-light__active');
            FORM.forEach(item => item.classList.add('contacts-fieldlight'));
            FOOTER_ITEMS.forEach(item => item.classList.add('svg-light'));
            GH_LOGO.classList.add('gh-light');

            SWITH_LIGHT.style.display = 'none';
            SWITH_DARK.style.display = 'block';
        } else {
            BODY.classList.remove('light-theme');
            HEADER_NAV.forEach(item => item.classList.remove('nav-light'));
            HEADER_LANG.classList.remove('lang-light');
            HERO.classList.remove('hero-light');
            LOGO.classList.remove('logo-light');
            CONTACTS.classList.remove('contacts-light');
            BUTTONS.forEach(item => item.classList.remove('contacts-btnlight'));
            PORTFOLIO_BTNS.forEach(item => item.classList.remove('portfolo-light'));
            PORTFOLIO_ACTIVE.classList.remove('portfolio-light__active');
            FORM.forEach(item => item.classList.remove('contacts-fieldlight'));
            FOOTER_ITEMS.forEach(item => item.classList.remove('svg-light'));
            GH_LOGO.classList.remove('gh-light');

            SWITH_LIGHT.style.display = 'block';
            SWITH_DARK.style.display = 'none';
        }
    } catch (err) {}
}
changeThemeOnThePage();


//  BURGER MENU
function showBergerMenu() {
    const BODY = document.body;
    const BURGER = document.querySelector('.burger');
    const NAV = document.querySelector('.nav');
    const SHADOW = document.querySelector('.burger-shadow');
    let isOpen = false;
    BURGER.addEventListener('click', controlBurgerMenu);
    NAV.addEventListener('click', controlBurgerMenu);
    BODY.addEventListener('click', event => {
        const burgerTarget = event.composedPath().includes(BURGER);
        if (!burgerTarget) {
            BURGER.classList.remove('open');
            NAV.classList.remove('open');
            BODY.classList.remove("lock");
            SHADOW.classList.remove('open');
            BODY.style.overflow = "auto";
            isOpen = false;
        }
    });
    function controlBurgerMenu() {
        if (!isOpen) {
            BURGER.classList.add('open');
            NAV.classList.add('open');
            SHADOW.classList.add('open');
            BODY.classList.add("lock"); 
            BODY.style.overflow = "hidden";
            isOpen = true;
        } else {
            BURGER.classList.remove('open');
            NAV.classList.remove('open');
            SHADOW.classList.remove('open');
            BODY.classList.remove("lock"); 
            BODY.style.overflow = "auto";
            isOpen = false;
        }
    }
}
showBergerMenu()    

// CHANGE IMAGES
const portfolioBtn = document.querySelectorAll('.portfolio-btn');
const portfolioImages = document.querySelectorAll('.portfolio-pic');
const btn = document.querySelector('.portfolio-buttons');
// console.log(btn)

// const changeImgSeasons = (event) => portfolioImages.forEach((img, index) => img.src = `./assets/images/${item.dataset.season}/${++index}.jpg`); 
// portfolioBtn.forEach(item => item.addEventListener('click', changeImgSeasons));
portfolioBtn.forEach(item => item.addEventListener('click', event => {
    portfolioImages.forEach((img, index) => img.src = `./assets/images/${item.dataset.season}/${++index}.jpg`);
})); 

// GET DIFFERENT SEASONS 
// portfolioBtn[0].addEventListener('click', event => {
//     portfolioImages.forEach((img, index) => img.src = `./assets/images/winter/${++index}.jpg`);
// });
// portfolioBtn[1].addEventListener('click', event => {
//     portfolioImages.forEach((img, index) => img.src = `./assets/images/spring/${++index}.jpg`);
// });
// portfolioBtn[2].addEventListener('click', event => {
//     portfolioImages.forEach((img, index) => img.src = `./assets/images/summer/${++index}.jpg`);
// });
// portfolioBtn[3].addEventListener('click', event => {
//     portfolioImages.forEach((img, index) => img.src = `./assets/images/autumn/${++index}.jpg`);
// });

// GET DIFFERENT SEASONS =>  ВТОРОЙ ВАРИАНТ / ПЕРЕДЕЛАТЬ НОРМАЛЬНО
// const changeImgSeasons = event => {
//     if (event.target.classList.contains('portfolio-btn')) {
//         portfolioImages.forEach((img, index) => img.src = `./assets/images/winter/${index + 1}.jpg`);
//     }
// };
// btn.addEventListener('click', changeImgSeasons);
// const winter = document.querySelector('[data-season = "winter"]');

// ADD ACTIVE CLASS
// PREV VERSION
/* 
let activeBtn = portfolioBtn[3].classList.add('portfolio-active');
let prevVal;
const changeClassActive = (event) => {
    const ev = event.target;
    if (!ev.classList.contains('portfolio-btn')) return; // is it right??
    if (prevVal === activeBtn) portfolioBtn[3].classList.remove('portfolio-active');
    if (prevVal) prevVal.classList.remove('portfolio-active');
    ev.classList.add('portfolio-active');
    prevVal = ev;
}
btn.addEventListener('click', changeClassActive);
*/
// ADD ACTIVE CLASS TO THE GALLERY BUTTON
// THE LAST VERSION
let activeBtn = document.querySelector('.portfolio-btn.portfolio-active');
let prevVal;
const changeClassActive = (event) => {
    const target = event.target;
    if (!target.classList.contains('portfolio-btn')) return; // is it right??
    if (prevVal !== activeBtn) activeBtn.classList.remove('portfolio-active');
    if (prevVal) prevVal.classList.remove('portfolio-active');
    target.classList.add('portfolio-active');
    prevVal = target;
}
btn.addEventListener('click', changeClassActive);
// IMAGE CANCHING
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