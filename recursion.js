/** product: calculate the product of an array of numbers. */

function product(nums, idx = 0) {
	if (idx === nums.length) return 1;

	return nums[idx] * product(nums, idx + 1)
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx = 0) {
	if (idx === words.length) return 0;

	return Math.max(words[idx].length, longest(words, idx + 1))
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0) {
	if (idx >= str.length) return "";

	return str[idx] + everyOther(str, idx + 2)
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
	return str === revString(str);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
	if (idx === arr.length) return -1;
	if (arr[idx] === val) return idx;

	return findIndex(arr, val, idx + 1)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = 0) {
	if (idx === str.length) return "";

	return revString(str, idx + 1) + str[idx];
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
	let arr = [];
	for (let val of Object.values(obj)) {
		if (typeof val === 'object') arr.push(...gatherStrings(val));
		else if (typeof val === 'string') arr.push(val);
	}
	return arr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, leftIdx = 0, rightIdx = arr.length - 1) {
	if (leftIdx > rightIdx) return -1;
	let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
  let middleVal = arr[middleIdx];

	if (middleVal < val) {
		return binarySearch(arr, val, middleIdx + 1, rightIdx)
  } else if (middleVal > val) {
		return binarySearch(arr, val, leftIdx, middleIdx - 1)
  } else {
    return middleIdx;
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
