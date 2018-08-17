// Sets three properties of different types.
var documentProperties = PropertiesService.getDocumentProperties();
var scriptProperties = PropertiesService.getScriptProperties();
var userProperties = PropertiesService.getUserProperties();


// Set multiple script properties in one call.
var scriptProperties = (PropertiesService.getScriptProperties())
    .setProperties({
        'MAX_THREADS': 10,
        'BRAND_NAME': 'Email X-Ray',
        'MAILBOX_QUERY': 'in:inbox newer_than:5d'
    });
