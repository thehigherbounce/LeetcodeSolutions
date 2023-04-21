/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if(nums1.length > 1000 || nums2.length > 1000) return;
    if(nums1.some((ele) => ele > 10 ** 6 || ele < -1 * 10 ** 6)) return;
    if(nums2.some((ele) => ele > 10 ** 6 || ele < -1 * 10 ** 6)) return;
    var newAry = nums1.concat(nums2).sort(function(a, b){return a - b});
    var length = newAry.length;
    if(length % 2 == 1) return newAry[Math.floor(newAry.length / 2)];
    else return (newAry[length / 2 - 1] + newAry[length / 2]) / 2;
};