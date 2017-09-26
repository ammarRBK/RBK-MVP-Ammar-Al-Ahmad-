var myApp = angular.module('app',[]);

myApp.controller('Ctrl', function(tasks) {
	this.signupFunc=function(signup){
		
	};

  this.tasks = 'ammar';
})
myApp.component('app', {
  template: `<div><h1> _____________________________Welcom to our site_________________________________________ 
  <image height=100% width=100% src="https://rayyaninstitute.com/wp-content/uploads/2016/06/todo_list.jpg"/></h1>
  <button ng-click="$ctrl.signupFunc"  classname="sign-up">sign-up</button>
  <button  classname="sign-in">sign-in</button></div>
  `
  });