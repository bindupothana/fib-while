var app=angular.module('fibApp',[]);
app.controller('fibCtrl',function($scope){
	 
	$scope.fibonacci=function(num){
	 var i=1;
	 var a=0, b=1 ,output=0; 
	 $scope.result = [];
   	 $scope.result.push(a)
	 $scope.result.push(b)
	 while(i < $scope.num-a){
      console.log("Result", $scope.result)
	    output=a+b;

	     a=b;
	      b=output;	   
	      ++i;   
	     $scope.result.push(output)	        
	        // i++;

	  }
	  // i++;
	    return a;
       console.log("Result", $scope.result)

	}


});