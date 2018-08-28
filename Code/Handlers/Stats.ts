function StatsHandler(threads) {
    const length = [];

    threads.forEach((thread) => {
        const rez = new ThreadData(thread);
        length.push(rez.count);
    });

    this.length = mean(length);
}
