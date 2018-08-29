// Set multiple script properties in one call.
const props = (PropertiesService.getScriptProperties())
    .setProperties({
        BRAND_NAME: "Email X-Ray",
        //
        IMG_EXCLAMATION: "https://raw.githubusercontent.com/paxperscientiam/gmail-xray/332f172e7b729d48ea0c61e111b4926d99550833/Img/exclamation-circle_64.png",
        IMG_STAR: "https://raw.githubusercontent.com/paxperscientiam/gmail-xray/332f172e7b729d48ea0c61e111b4926d99550833/Img/star-o_64.png",
        IMG_ENVELOPE: "https://raw.githubusercontent.com/paxperscientiam/gmail-xray/332f172e7b729d48ea0c61e111b4926d99550833/Img/envelope-o_64.png",
        IMG_ENVELOPE_OPEN: "https://raw.githubusercontent.com/paxperscientiam/gmail-xray/332f172e7b729d48ea0c61e111b4926d99550833/Img/envelope-open-o_64.png",
        IMG_STAR_EXCLAMATION: "https://raw.githubusercontent.com/paxperscientiam/gmail-xray/1bfa288678ca5a6826c474102b1d317abd89282c/Img/star%2Bexclamation.png",
        IMG_BARS: "https://raw.githubusercontent.com/paxperscientiam/gmail-xray/master/Img/bars_64.png",
        IMG_COMPOSE_NEW: "https://raw.githubusercontent.com/paxperscientiam/gmail-xray/master/Img/plus-circle-64.png",
        IMG_REPLY_THIS: "https://raw.githubusercontent.com/paxperscientiam/gmail-xray/master/Img/reply-64.png",
        IMG_REPLY_THAT: "https://raw.githubusercontent.com/paxperscientiam/gmail-xray/master/Img/reply-64.png",
        //
        MAILBOX_QUERY: "in:inbox and newer_than:10d",
        MAX_THREADS: 20,
        MAX_THREAD_DEPTH: 10,
        TIME_ZONE: "GMT-4",

        QUERY_SUGGESTION_A: "in:inbox and newer_than:10d",
        QUERY_SUGGESTION_B: "is:starred and newer_than:10d",
    });
