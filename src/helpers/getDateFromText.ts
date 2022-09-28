export const getDateFromText = (content: string) => {
    const regExp = /(3[01]|[12]\d|0?[1-9])\/(1[0-2]|0?[1-9])\/\d{4}/g;
    const dates = content.match(regExp);
    if (dates && dates.length) {
        console.log(dates.join(', '))
        return dates.join(', ');
    } else {
        return ''
    }
}