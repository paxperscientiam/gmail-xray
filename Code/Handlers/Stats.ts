function StatsHandler(threads) {
    threads.forEach((thread) => {
        const rez = new ThreadData(threads[0]);
        Logger.log(rez.sender);
    });
}
