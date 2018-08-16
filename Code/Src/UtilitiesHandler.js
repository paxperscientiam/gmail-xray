// -*- mode: typescript -*-

function formatDateService(date) {
    var date = new Date(date);
    return Utilities.formatDate(date, "GMT-4", "E, d MMM y");
}

function formatTimeService(date) {
    var date = new Date(date);
    return Utilities.formatDate(date, "GMT-4", "h:mm a");
}

function timeConversion(millisec) {
    // https://stackoverflow.com/a/32180863
    var seconds = (millisec / 1000).toFixed(1);

    var minutes = (millisec / (1000 * 60)).toFixed(1);

    var hours = (millisec / (1000 * 60 * 60)).toFixed(1);

    var days = (millisec / (1000 * 60 * 60 * 24)).toFixed(1);

    if (seconds < 60) {
        return seconds + " Sec";
    } else if (minutes < 60) {
        return minutes + " Min";
    } else if (hours < 24) {
        return hours + " Hrs";
    } else {
        return days + " Days";
    }
}

function formatAge(date) {
    var msgDate = new Date(date).getTime();
    var todayDate = Date.now(); // milliseconds

    var age = timeConversion(todayDate - msgDate);

    return age;
}
