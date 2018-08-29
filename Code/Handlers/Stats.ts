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
    const derp = [];

    comp.forEach((thing) => {
        derp.push(thing);
      //   Logger.log(thing.count);
//         Logger.log(thing.value);
    });
    Logger.log(derp);
}
