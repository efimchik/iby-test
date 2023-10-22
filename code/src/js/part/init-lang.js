const allLang = ['en', 'de', 'es', 'fr', 'ja', 'pt'];

const systemLang = document.querySelector('html');


function chageUrlLang() {
    let curentLang = checkBrowserLang() || 'en';


    let urlParams = new URLSearchParams(window.location.search);
    urlParams.set('lang', curentLang);
    let newUrl = `${window.location.origin}${window.location.pathname}?${urlParams.toString()}`;



    if(!window.location.search) {
        curentLang = checkBrowserLang() || 'en';
        window.history.replaceState(null, '', newUrl);
    } else {
        curentLang = window.location.search.slice(6);
    }

    if(!allLang.includes(curentLang)) {
        curentLang = 'en';
        window.history.replaceState(null, '', newUrl);
    }


    systemLang.setAttribute('lang', curentLang);


    for(let key in localeList) {
        const elem = document.querySelector(`[data-lang=${key}]`);

        if(elem) {
            elem.innerHTML = localeList[key][curentLang];
        }
    }
}

chageUrlLang();


function checkBrowserLang() {
    const navLang = navigator.language.slice(0, 2).toLowerCase();

    const result = allLang.some(elem => {
        return elem === navLang;
    });

    if(result) {
        return navLang;
    }
}
