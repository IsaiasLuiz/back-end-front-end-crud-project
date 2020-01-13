import moment from 'moment';

export const validDate = (startDate, finalDate) => {
    const format = 'YYYY/MM/DD';
    const now = moment(Date.now()).format(format);
    startDate = moment(startDate).format(format);
    finalDate = moment(finalDate).format(format);                

    if (!moment(startDate, format).isSameOrAfter(now) && !moment(finalDate, format).isSameOrAfter(now)) {
        return false;
    } else if (!moment(startDate, format).isSameOrBefore(finalDate)) {
        return false;
    }
    return true;
};