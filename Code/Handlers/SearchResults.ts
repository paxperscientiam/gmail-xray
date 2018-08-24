function SearchResults(query, args) {
    // args
    var MAX_THREADS = props.getProperty("MAX_THREADS");
    //
    var defaultArgs = {
        startingThread: 0,
        endingThread: MAX_THREADS
    }

    var options = OptionsHandler(defaultArgs, args);
    Logger.log(options);

    this.threads = GmailApp.search(query,
                                   options.startingThread,
                                   options.endingThread);





}
