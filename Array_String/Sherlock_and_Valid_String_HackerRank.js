function isValid(s){
	let dict = {};
	let max = 0;
	let count = 0;
	[...s].forEach((char)=>{
		if(dict[char]){
			dict[char] = dict[char] + 1;
		}else{
			dict[char] = 1;
		}
		max = Math.max(dict[char], max);
	});
	for(let key in dict){
		if(!max-dict[key]){
			count = count + 1;
		}
		if(count > 1) break;
	}
	if(count > 1){
		return "NO";
	}else{
		return "YES";
	}
}

console.log(isValid("aabbccddeefghi"));
console.log(isValid("abcdefghhgfedecba"));