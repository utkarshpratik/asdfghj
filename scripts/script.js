var app = angular.module('directivesApp',['ngSanitize']); 

app.run(function($rootScope) {
	$rootScope.someProperty = "You are creating property on global Scope";
});

app.controller('DirectivesController',function($scope,$sce){
	$scope.companyName = "KLFS Services";
	$scope.unsafeContent = "<span style='color:red'>Content won't appear in red</span>";
	$scope.safeContent = $sce.trustAsHtml("<span style='color:red'>Content should appear in red</span>");
	$scope.flag = true;
	$scope.customStyle = {'color':'yellow','background-color':'black','font-family':'candara'};
	$scope.cssClass = "customClass";
	$scope.cssEvenClass="evenElementStyle";
	$scope.cssOddClass="oddElementStyle";
	$scope.names = 	[
						"Rajesh Bishikar",
						"Ashwini Bhide",
						"Madhav",
						"Reva",
						"Mangala ",
						"Rashmi",
						"Tanmaya",
						"Diya Mirza",
						
					];
	$scope.imageSource = "delete.png";
	$scope.urlSource = "angularjs.org";
	$scope.partialPage = "partials/partial.html";
	
});

var eventNameSpace = angular.module('eventApp',[]);

eventNameSpace.controller('EventController',function($scope){
	$scope.counter = 0;
	$scope.status=false;
	$scope.statusText="Unchecked";
	
	$scope.IncrementCounter = function(){
		$scope.counter++;
	};
	
	$scope.ChangeCounter = function(flag){
		if(flag) 
			$scope.counter++;
		else
			$scope.counter--;
	};
	
	$scope.ChangeStatus = function(status){
		if(status)
			$scope.statusText="Checked";
		else
			$scope.statusText="Unchecked";
	};
});



