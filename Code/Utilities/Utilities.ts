// -*- mode: typescript -*-

function formatDateService(date) {
    const timeZone = props.getProperty("TIME_ZONE");
    const date = new Date(date);
    return Utilities.formatDate(date, timeZone, "E, d MMM y");
}

function formatTimeService(date) {
    const timeZone = props.getProperty("TIME_ZONE");
    const date = new Date(date);
    return Utilities.formatDate(date, timeZone, "h:mm a");
}

function dateArray() {
    const timeZone = props.getProperty("TIME_ZONE");
    const date = new Date();

    this.HOUR = Utilities.formatDate(date, timeZone, "H");
    this.WEEKDAY = Utilities.formatDate(date, timeZone, "EEEE");
    this.WEEK_DAY = this.WEEKDAY;
    this.MONTH = Utilities.formatDate(date, timeZone, "MMMM");
    this.TIME = Utilities.formatDate(date, timeZone, "h:mm a");

    if (this.HOUR >= 0 && this.HOUR < 12 ) {
        this.GREETING = Translate("Good morning");
    } else if (this.HOUR >= 12 && this.HOUR < 18) {
        this.GREETING = Translate("Good afternoon");
    } else {
        this.GREETING = Translate("Good evening");
    }
}

function timeConversion(millisec) {
    // https://stackoverflow.com/a/32180863
    const seconds = Math.round((millisec / 1000).toFixed(1));

    const minutes = Math.round((millisec / (1000 * 60)).toFixed(1));

    const hours = Math.round((millisec / (1000 * 60 * 60)).toFixed(1));

    const days = Math.round((millisec / (1000 * 60 * 60 * 24)).toFixed(1));

    if (seconds < 60) {
        return seconds + " Seconds";
    } else if (minutes < 60) {
        return minutes + " Minutes";
    } else if (hours < 24) {
        return hours + " Hours";
    } else {
        return days + " Days";
    }
}

function formatAge(date) {
    const msgDate = new Date(date).getTime();
    const todayDate = Date.now(); // milliseconds

    const age = timeConversion(todayDate - msgDate);

    return age;
}

/**
 * Returns an object with the values of the argument objects.
 * If multiple objects have the same property value, the last value set is retained.
 * @param {...Object}
 * @returns {Object}
 */

function mergeObjs() {
    const obj = arguments[0];
    for (i = 1; i < arguments.length; i++) {
        const src = arguments[i];
        for (const key in src) {
            if (src.hasOwnProperty(key)) {
                obj[key] = src[key];
            }
        }
    }
    return obj;
}
