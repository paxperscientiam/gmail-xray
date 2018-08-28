function mean(v) {
    return v.reduce(function(prev, curr, index, array) {
        const getSum = prev + curr;
        return (index === array.length - 1)
            ? getSum / array.length
            : getSum;
    });
}
