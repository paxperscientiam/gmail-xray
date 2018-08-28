function mean(v) {
    return v.reduce(function(prev, curr, index, array) {
        const getSum = prev + curr;
        return (index === array.length - 1)
            ? getSum / array.length
            : getSum;
    });
}


function compressArray(original) {
    //https://gist.github.com/ralphcrisostomo/3141412
	  var compressed = [];
	  // make a copy of the input array
	  var copy = original.slice(0);

	  // first loop goes over every element
	  for (var i = 0; i < original.length; i++) {

		    var myCount = 0;
		    // loop over every element in the copy and see if it's the same
		    for (var w = 0; w < copy.length; w++) {
			      if (original[i] == copy[w]) {
				        // increase amount of times duplicate is found
				        myCount++;
				        // sets item to undefined
				        delete copy[w];
			      }
		    }

		    if (myCount > 0) {
			      var a = new Object();
			      a.value = original[i];
			      a.count = myCount;
			      compressed.push(a);
		    }
	  }

	  return compressed;
};
