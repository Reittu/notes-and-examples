 function permute(str, l, r) 
    { 
        if (l == r) 
            result.push(str);
        else
        { 
            for (let i = l; i <= r; i++) 
            { 
                str = swap(str, l, i); 
                permute(str, l + 1, r); 
		// Swap back
                str = swap(str, l, i); 
            } 
        } 
    } 
  
    function swap(a, i, j) 
    { 
        let temp; 
        let charArray = a.split(''); 
        temp = charArray[i]; 
        charArray[i] = charArray[j]; 
        charArray[j] = temp; 
        let s = charArray.join('');
        return s; 
    } 
  
    let result = [];
    let str = "QUICK";
    permute(str, 0, str.length-1); 
    console.log(result);

    // Number of permutations = (elements)! / (elements - set_size)!	e.g. ABCD -> AB AC AD ... 12 elements (4!/2!)
									if set_size is the same, just (elements)!

    // Unique permutations for strings: nr_of_permutations / ( a_repetitions! * b_repetitions! * ... ) -- MISSISSIPPI = 11!/(4!4!2!)
    console.log(new Set(result));

    
    // For combinations, order doesn't matter => AB = BA
    // Number of combinations: permutations / (set_size)! = (elements)! / ((elements - set_size)! * (set_size)!)


// Faster implementation:

function permute(permutation) {
  var length = permutation.length,
      result = [permutation.slice()],
      c = new Array(length).fill(0),
      i = 1, k, p;

  while (i < length) {
    if (c[i] < i) {
      k = i % 2 && c[i];
      p = permutation[i];
      permutation[i] = permutation[k];
      permutation[k] = p;
      ++c[i];
      i = 1;
      result.push(permutation.slice());
    } else {
      c[i] = 0;
      ++i;
    }
  }
  return result;
}

console.log(permute([1, 2, 3]));
