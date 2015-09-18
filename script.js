angular.module("calendarModule", [])

angular.module("calendarModule").controller("calendarController",["$scope", function($scope){

	$scope.calendar = [
	{
		date: "Sunday",
		appt: "take dog to the park",
	},
		{
		date: "Monday",
		appt: "watch Bojack Horseman",
	},
		{
		date: "Tuesday",
		appt: "watch Daria",
	},
		{
		date: "Wednesday",
		appt: "eat at Taco Bell",
	},
		{
		date: "Thursday",
		appt: "make a sandwich",
	},
		{
		date: "Friday",
		appt: "check on that weird noise in the closet",
	},
		{
		date: "Saturday",
		appt: "hair of the dog",
	}
	]

	console.log($scope.calendar)

}])