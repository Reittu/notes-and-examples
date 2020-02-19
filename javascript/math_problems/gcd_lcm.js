// Implements Euclidean Algorithm
// Can be used for lcm

function gcd(x,y) { return y === 0 ? x : gcd(y, x%y); }

function lcm(arr) {
    let range = [];
    for (let i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--)
      range.push(i);
    
    let lcm = range[0];
    for (i = 1; i < range.length; i++) {
      let GCD = gcd(lcm, range[i]);
      lcm = (lcm * range[i]) / GCD;
    }
    return lcm;
}