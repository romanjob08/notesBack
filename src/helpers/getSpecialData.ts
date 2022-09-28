const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

export const getSpecialData = () => {
    const wholeDate = new Date();
    const Year = wholeDate.getFullYear();
    const Month = months[wholeDate.getMonth()];
    const Day = () => {
        const day = wholeDate.getDate()
        return day < 10 ? `0${day}` : day
    };
    return `${Month} ${Day()},${Year}`
}