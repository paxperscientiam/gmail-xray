// Set multiple script properties in one call.
const props = (PropertiesService.getScriptProperties())
    .setProperties({
        BRAND_NAME: "Email X-Ray",
        IMG_EXCLAMATION: "https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/64/exclamation.png",
        IMG_STAR: "https://raw.githubusercontent.com/paxperscientiam/gmail-xray/master/Img/material/star/ic_star_rate_black_18dp_1x.png",
        IMG_ENVELOPE: "https://raw.githubusercontent.com/paxperscientiam/gmail-xray/master/Img/encharm/Font-Awesome-SVG-PNG/master/black/png/64/envelope-o.png",
        IMG_ENVELOPE_OPEN: "https://raw.githubusercontent.com/paxperscientiam/gmail-xray/master/Img/encharm/Font-Awesome-SVG-PNG/master/black/png/64/envelope-open-o.png",
        MAILBOX_QUERY: "in:inbox and is:starred and is:unread",
        MAX_THREADS: 10,
        MAX_THREAD_DEPTH: 10,
        TIME_ZONE: "GMT-4",
    });
