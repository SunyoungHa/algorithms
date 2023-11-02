// <!-- Convert a date range consisting of two dates formatted as YYYY-MM-DD into a more readable format.
// The friendly display should use month names instead of numbers and ordinal dates instead of cardinal (1st instead of 1).
// Do not display information that is redundant or that can be inferred by the user: if the date range ends in less than a year from when it begins, do not display the ending year.
// Additionally, if the date range begins in the current year and ends within one year, the year should not be displayed at the beginning of the friendly range.
// If the range ends in the same month that it begins, do not display the ending year or month.


// --
// Keywords

// - Convert: Cause to change
// Date Range
// DATE Object
//  - Two Dates: YYYY-MM-DD
// Formatted
//  - Month Names
//  - Ordinal Dates (1st): A number defining a thing’s position,
//     such as 1st, 2nd, 3rd
// Redundant: repeating information
// Do not repeat information.
// Inferred: information from obvious evidence or reasoning
// Do not include this information.



// If
// - IF-ELSE STATEMENTS
//   - Date Range Less Than a Year, Ending Year Does Not Show
//   - Date Range Begin This Year & Ends Within 1 Year, Current Year Does Not Show at Beginning of Range
//   - Range Ends in Current Month, Ending Year Or Month Does Not Show

// source: https://replit.com/join/eaiguxwulp-catieac
// // create variable. Input for the function yyyy-mm-dd
// let date1 = "2023-11-01"
// let date2 = "2023-12-01"

// // one output for this function will be a range November 1st - December 1st
// function convertDateRange(startDate,endDate){
// // get current year
// const currentYear = new Date().getFullYear();


// }

// convertDateRange(date1,date2);
// // or
// convertDateRange("2023-11-01","2023-12-02");


// // Check if the date range is less than a year
// if ((endYear - startYear) < 1) {
//     // Date range ends within one year from the start
//     if (startYear === currentYear && endYear === currentYear) {
//         // Current year does not need to be displayed
//         return `${startMonth} ${startDay} - ${endMonth} ${endDay}`;
//     } else {
//         // Display the range without ending year
//         return `${startMonth} ${startDay}, ${startYear} - ${endMonth} ${endDay}`;
//     }
// } else if (startMonth === endMonth) {
//     // Date range starts and ends in the same month
//     return `${startMonth} ${startDay} - ${endDay}`;
// } else {
//     // Display the full date range
//     return `${startMonth} ${startDay}, ${startYear} - ${endMonth} ${endDay}, ${endYear}`;