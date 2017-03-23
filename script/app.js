var app=angular.module('fibApp',[]);
app.controller('fibCtrl',function($scope){
	 
	$scope.fibonacci=function(num){
	 var i=0;
	 var a=0, b=1 ,output=1; 
	 $scope.result = [];
   	 $scope.result.push(a)
	 $scope.result.push(b)

	 while(output<$scope.num){
      console.log("Result", $scope.result)
      $scope.result.push(output)
	    output=a+b;
	     a=b;
	     b=output;	     
	   //if(output<num){

	    		
	   // }
	   
	    
	    // i++;   

	      

	  }
	  
	    return output;
       console.log("Result", $scope.result)

	}


});