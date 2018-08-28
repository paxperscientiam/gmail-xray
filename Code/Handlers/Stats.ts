function StatsHandler(threads) {
    const length = [];
    const sender = [];

    threads.forEach((thread) => {
        const rez = new ThreadData(thread);
        length.push(rez.count);
        sender.push(rez.sender);
    });

    this.length = mean(length);

    Logger.log(compressArray(sender).slice(0, 1));

}
