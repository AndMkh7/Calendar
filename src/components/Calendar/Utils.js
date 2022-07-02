const daysInMonthArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYear(year) {
    return !((year % 4 === 0) || (!(year % 100 !== 0)) && (year % 400 === 0));
}  // Returns leap year or no , i.e. February of 28 days or 29/365 or 366 days in year

const Month = {
    January: 0,
    February: 1,
    March: 2,
    April: 3,
    May: 4,
    June: 5,
    July: 6,
    August: 7,
    September: 8,
    October: 9,
    November: 10,
    December: 11
};


export const getDaysInMonth = (date) => { // Returns how many days are in each month
    const month = date.getMonth();
    const year = date.getFullYear();
    const daysInMonth = daysInMonthArr[month];

    if (isLeapYear(year) && month === Month.February) {
        return daysInMonth + 1; // 28 + 1 days , for leap year
    } else {
        return daysInMonth;
    }
};


export const getDayOfWeek = (date) => { // here we set the index of the days of the week, since on the basic data,
                                        // the index of the day of Sunday is 0,
                                        // but we give for Sunday index 6, from other days we simply do -1
    const dayOfWeek = date.getDay();

    if (dayOfWeek === 0)
        return 6;
    return dayOfWeek - 1;

};

export const getMonthData = (year, month ) => {//
    const result = [];
    const date = new Date(year, month);
    let day = 1;
    const daysInMonth = getDaysInMonth(date); // Function for knowing the count of the days in each month based on
                                             // the date
    const monthStartsOn = getDayOfWeek(date); // Function for knowing which day of the week the month starts based on
                                             // the date ( etc from Monday to Sunday )

    //adding a massive for days in month per week
    for (let i = 0; i < (daysInMonth + monthStartsOn) / 7; i++) {  // here we get the count of weeks in the current
                                                                   // month
        result[i] = [];

        for (let j = 0; j < 7; j++) { //in there 7 is a count of days in 1 week

            if ((i === 0 && j < monthStartsOn) || day > daysInMonth) {  // We get the days of the month and until those
                                                                        // places where the day of the current month begins
                                                                        // or after the day when the month ends, we put Undefined,
                                                                        // so that on the calendar there are empty
                                                                        // places for these days.
                result[i][j] = undefined;
            } else {
                result[i][j] = new Date(year, month, day++);
            }
        }
    }
    return result;
}