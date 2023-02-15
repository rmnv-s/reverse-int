module.exports = function reverse (n) {
	const str = Math.abs(n).toString().split('').reverse().join('') 
  return Number(str)	
}
