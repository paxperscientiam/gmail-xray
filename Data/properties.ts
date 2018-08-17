// Set multiple script properties in one call.
var props = (PropertiesService.getScriptProperties())
    .setProperties({
        BRAND_NAME: "Email X-Ray",
        MAILBOX_QUERY: "from:cht-brightstreet@googlegroups.com",
        MAX_THREADS: 10,
        MAX_THREAD_DEPTH: 10,
    });
