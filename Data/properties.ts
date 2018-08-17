// Set multiple script properties in one call.
var props = (PropertiesService.getScriptProperties())
    .setProperties({
        BRAND_NAME: "Email X-Ray",
        MAILBOX_QUERY: "in:inbox newer_than:5d",
        MAX_THREADS: 10,
    });
