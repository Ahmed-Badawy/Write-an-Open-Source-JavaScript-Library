var nums = require('./index');
var expect = require('chai').expect;

describe('main-test',function(){

	it("should work",function(){ expect(true).to.be.true; });
	it("all method works",function(){ expect(nums.all).to.include("one") });
	it("random method works",function(){ 
		var random_item = nums.random();
		expect(nums.all).to.include(random_item); 
	});

	describe('Nums',function(){
		it('should have an array of strings',function(){
			// expect(nums.all).to.not.satisfy(isArrayOfStrings);
			expect(nums.all).to.satisfy(isArrayOfStrings);
			function isArrayOfStrings(array){
				return array.every( item=>typeof item === 'string' )
			}
		})
	});

});

