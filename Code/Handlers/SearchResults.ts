function SearchResults(query, args) {
    const MAX_THREADS = props.getProperty("MAX_THREADS");
    //
    this.threads = GmailApp.search(query,
                                   0,
                                   MAX_THREADS);
}
