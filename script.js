function leapYear(y) {
    if
     (((y % 4 == 0) && (y % 100 != 0)) || (y % 400 == 0)) {
        console.log("This is a Leap Year!");
    } 
    else {
        console.log("This is'nt a Leap Year!");
    }
}
leapYear(2016);

function ticketPricing(age) {

    if (age <= 12) {
        console.log("10$");
    } else if ((age >= 13) && (age <= 17)) {
        console.log("15$");
    } else {
        console.log("20$");
    }

}
ticketPricing(100);

function isPalindrome(string) {
    let rev = "";
    for (let i = string.length - 1; i >= 0; i--) {
        rev += string[i];
    }
    if (rev == string) {
        return true
    } else {
        return false;
    }
}
console.log(isPalindrome(prompt()));