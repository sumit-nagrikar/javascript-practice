/* function toLowerCase(str){
    if(1 <= str.length <= 100){
    var lowerStr = str.toLowerCase();
    }
    return lowerStr;
}

console.log(toLowerCase("HELLO")); */

function main() {
    var s = "Hello"//readLine();
    console.log(toLowerCase(s));
  }
  var toLowerCase = function(s) {
    let ans = ""
    for (let c of s) {
      let n = c.charCodeAt();
      ans += n > 64 && n < 91 ? String.fromCharCode(n + 32) : c
    }
    return ans
  };
main();