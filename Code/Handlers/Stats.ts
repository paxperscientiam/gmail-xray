function StatsHandler(threads) {
    const length = [];
    const sender = [];

    threads.forEach((thread) => {
        const rez = new ThreadData(thread);
        length.push(rez.count);
        sender.push(rez.sender);
    });

    this.length = mean(length);

    const comp = compressArray(sender);
    const rotated = {};

    comp.forEach((thing) => {
        rotated[thing.value] = thing.count;
    });

    this.topSender = rankedFirst(rotated);
}
