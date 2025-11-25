// Note: This function doesn't appear to be used anywhere except in a console.log statement, and
// the date has not been changed since 2024

function GetNextGangDate(OrderDate) {
    // Mon=1, Tue=2, Wed=3, Thu=4, Fri=5, Sat=6, Sun=7
    var d = new Date(OrderDate);
    var targetDay = 3; // Wed

    if (d.getDay() >=3 && d.getDay()<=4) {
        targetDay = 5; // Fri
    }

    d.setDate(d.getDate() + (((targetDay + 7 - d.getDay()) % 7) || 7));
    return d;
}

$(window).load(function () {
    // Mon=1, Tue=2, Wed=3, Thu=4, Fri=5, Sat=6, Sun=7
    // var d = new Date();
    // const targetDay = 4; // Thursday
    // d.setDate(d.getDate() + (((1 + 7 - d.getDay()) % 7) || 7));
    // d.setDate(d.getDate() + (((targetDay + 7 - d.getDay()) % 7) || 7));
    console.log(GetNextGangDate('5/10/2024'));
});