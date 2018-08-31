const Uitl = {};

//获取语言
Uitl.getLang = function () {
    let lang = '' ;
    lang = localStorage.getItem('lang') || 'cn';
    return lang
}

// 设置语言
Uitl.setLang = function (lang) {
    localStorage.setItem('lang',lang)
}

export default Uitl;