let res=[]
function letterCombinations(input_digit) {
  let arr=[0,1,'abc','def','ghi','jkl','mno','pqrs','tuv','wxyz']
	helper(arr,input_digit,res,0,"")
	return res
}
function helper(arr,input_digit,res,index1,str){
	if(str.length===input_digit.length){
		res.push(str)
		return
	}
	if(index1===input_digit.length){
		return
	}
	let match = parseInt(input_digit[index1])
	let ss = arr[match]
	for(let i=0;i<ss.length;i++){
		str=str+ss[i]
		helper(arr,input_digit,res,index1+1,str)
		str=str.substring(0,str.length-1)
	}
}

module.exports = letterCombinations;
