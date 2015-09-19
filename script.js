angular.module("calendarModule", [])

angular.module("calendarModule").controller("calendarController",["$scope", function($scope){

	$scope.calendar = [
		{
			date        :    "Sunday",
			appointment :    "dentist"
				},
				{
			date       : "Monday",
			appointment: "car wash"
		},
				{
			date       : "Tuesday",
			appointment: "doctor john's"
		},
				{
			date       : "Wednesday",
			appointment: "milk the cow"
		},
				{
			date       : "Thursday",
			appointment: "put out recycling"
		},
				{
			date       : "Friday",
			appointment: "eat a banana"
		},
				{
			date       : "Saturday",
			appointment: "check the mail"
		},
				{
			date        :    "Sunday",
			appointment :    "dentist"
				},
				{
			date       : "Monday",
			appointment: "car wash"
		},
				{
			date       : "Tuesday",
			appointment: "doctor john's"
		},
				{
			date       : "Wednesday",
			appointment: "milk the cow"
		},
				{
			date       : "Thursday",
			appointment: "put out recycling"
		},
				{
			date       : "Friday",
			appointment: "eat a banana"
		},
				{
			date       : "Saturday",
			appointment: "check the mail"
		}
	]

	$scope.editCalendar = [
		{
			date       : "Sunday",
			appointment: ""
		},
				{
			date       : "Monday",
			appointment: ""
		},
				{
			date       : "Tuesday",
			appointment: ""
		},
				{
			date       : "Wednesday",
			appointment: ""
		},
				{
			date       : "Thursday",
			appointment: ""
		},
				{
			date       : "Friday",
			appointment: ""
		},
				{
			date       : "Saturday",
			appointment: ""
		},
				{
			date       : "Sunday",
			appointment: ""
		},
				{
			date       : "Monday",
			appointment: ""
		},
				{
			date       : "Tuesday",
			appointment: ""
		},
				{
			date       : "Wednesday",
			appointment: ""
		},
				{
			date       : "Thursday",
			appointment: ""
		},
				{
			date       : "Friday",
			appointment: ""
		},
				{
			date       : "Saturday",
			appointment: ""
		}
	]

	console.log($scope.calendar)

	$scope.editClick = function ( index ) {
		$scope.calendar[index].visibility = true;
		$scope.editCalendar.appointment = ""
	}

	$scope.submitClick = function ( index ) {
		$scope.calendar[index].visibility = false;
		$scope.calendar[index].appointment = $scope.editCalendar.appointment
	}


}])