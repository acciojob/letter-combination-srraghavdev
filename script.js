function letterCombinations(input_digit) {
  let arr=[0,1,'abc','def','ghi','jkl','mno','pqrs','tuv','wxyz']
	let res=[]
	helper(arr,input_digit,res,0,0,"")
	return arr
}
function helper(arr,input_digit,res,index1,index2,str){
	if(str.length===input_digit.length){
		arr.push(str)
		return
	}

	let match = parseInt(input_digit[index1])
	let ss = arr[match]
	str=str+ss[index1]
	helper(arr,input_digit,res,index1+1,index2,str)
	str=str.substring(0,str.length())
	helper(arr,input_digit,res,index1+1,index2,str)
}

module.exports = letterCombinations;
