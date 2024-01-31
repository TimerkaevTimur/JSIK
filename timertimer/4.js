function getDayOfWeek(lang, day) {
    const daysEn = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const daysRu = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    if (lang === 'en') {
        return daysEn[day % 7];
    } else if (lang === 'ru') {
        return daysRu[day % 7];
    } else {
        return 'Invalid language';
    }
}
console.log(getDayOfWeek('ru', 3));
