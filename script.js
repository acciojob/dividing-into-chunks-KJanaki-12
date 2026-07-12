const arr = [4, 3, 2, 1];

const divide = (arr, n) => {
  // Write your code here
	let ans = [];
	let sum = 0;
	let prefixSum = 0;
	let j = 0;
	let k = 0;
	for(let i=0; i<arr.length; i++){
		prefixSum += arr[i];
		if(prefixSum > n){
			ans[k++] = arr.slice(j, i);
			j = i;
			i = i-1;
			prefixSum = 0;
		}
	}
	ans[k] = arr.slice(j, arr.length);
	return ans;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
