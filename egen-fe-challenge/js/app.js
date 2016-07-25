(function(){
	var app= angular.module('calc',[]);
	app.controller('calcCtrl', function($scope){
	//Define a calculator base class
	var Calculator = function(val1, val2) { 
	  this.add = function(val1, val2) { 
	  	$scope.output = parseInt(val1) + parseInt(val2);
	  	return val1 + val2; 
	  }; 
	  this.multiply = function(val1, val2) { 
	  	$scope.output = parseInt(val1) * parseInt(val2);
	  	return val2 * val1; }; 
	  this.subtract = function(val1, val2) { 
	  	$scope.output = parseInt(val1) - parseInt(val2);
	  	return val1 - val2; 
	  }; 
	  this.divide = function(val1, val2) { 
	    if (val1/val2 === Infinity) {
	      return Infinity - Infinity; 
	    } else {
	    	$scope.output = parseInt(val1) / parseInt(val2);
	    	return val1/val2; 
	    }
	  }; 
	};
	$scope.Calculator = new Calculator();

	//define a sub class scientific calculator
	function ScientificCalculator() {}
	ScientificCalculator.prototype = new Calculator();
	ScientificCalculator.prototype.constructor = Calculator;
	//Add methods to the base class
	ScientificCalculator.prototype.sin = function(x) {
		var result = Math.sin(eval(x));
		document.getElementById('scOutput').innerHTML = result;
	 	return result;
	}

	ScientificCalculator.prototype.cos = function(x) {
		var result = Math.cos(eval(x));
		document.getElementById('scOutput').innerHTML = result;
	  	return result;
	}

	ScientificCalculator.prototype.tan = function(x) {
	  	var result = Math.tan(eval(x));
		document.getElementById('scOutput').innerHTML = result;
	  	return result;
	}

	ScientificCalculator.prototype.log = function(x) {
	  	var result = Math.log(eval(x));
		document.getElementById('scOutput').innerHTML = result;
	  	return result;
	}
	$scope.ScientificCalculator = new ScientificCalculator();
	});
})();