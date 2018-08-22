// Set multiple script properties in one call.
const props = (PropertiesService.getScriptProperties())
    .setProperties({
        BRAND_NAME: "Email X-Ray",
        IMG_URL: {
            EXCLAMATION: "https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/64/exclamation.png",
            STAR: "https://raw.githubusercontent.com/paxperscientiam/gmail-xray/master/Img/material/star/ic_star_rate_black_18dp_1x.png",
            EVENLOPE: "https://raw.githubusercontent.com/paxperscientiam/gmail-xray/master/Img/encharm/Font-Awesome-SVG-PNG/master/black/png/64/envelope-o.png",
            ENVELOPE_OPEN: "https://raw.githubusercontent.com/paxperscientiam/gmail-xray/master/Img/encharm/Font-Awesome-SVG-PNG/master/black/png/64/envelope-open-o.png",
        },
        MAILBOX_QUERY: "in:inbox and is:starred and is:unread",
        MAX_THREADS: 10,
        MAX_THREAD_DEPTH: 10,
        TIME_ZONE: "GMT-4",
    });
