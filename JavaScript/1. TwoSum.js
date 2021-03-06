/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
	var res = [];
	var obj = {};
	for(var i=0; i<nums.length; i++){
		if(obj[nums[i]] === undefined){
			obj[target-nums[i]] = i;
		}else{
			res.push(obj[nums[i]]);
			res.push(i);
			return res;
		}
	}
	return res;
};
// var twoSum = function(nums, target) {
// 		var res = [];
// 	    if(!(nums instanceof Array) || (typeof target !== "number") || (nums.length === 0))
// 	        return res;
// 	    var obj= new Object();
// 	    for(var i=0; i < nums.length; i++){
// 	    	obj[nums[i]] = i;
// 	    }
// 		for(var i=0; i < nums.length; i++){
// 	    	if(typeof obj[target-nums[i]] === "number" && obj[target-nums[i]] != i){
// 	    		res.push(i);
// 	    		res.push(obj[target-nums[i]]);
// 	    		console.log(res);
// 	    		return res;
// 	    	}
// 	    }
// 	    return res;
// 	};
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
