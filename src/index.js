var uniqueRandomArray = require('unique-random-array'); //this will give back an item from an array
var nums = require('./nums.json');

module.exports = {
    all: nums,
    random: uniqueRandomArray(nums)
}