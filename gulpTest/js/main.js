function test(a){this.a=1};
test.prototype.method_name=function(a){
	console.log(this.a)
};
