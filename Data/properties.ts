// Set multiple script properties in one call.
const props = (PropertiesService.getScriptProperties())
    .setProperties({
        BRAND_NAME: "Email X-Ray",
        MAILBOX_QUERY: "in:inbox and is:starred and is:unread",
        MAX_THREADS: 10,
        MAX_THREAD_DEPTH: 10,
    });
