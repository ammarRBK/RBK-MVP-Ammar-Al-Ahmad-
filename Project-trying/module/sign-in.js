var myApp = angular.module('sign-in',[]);

myApp.controller('Ctrl', function(tasks) {

  this.tasks = 'ammar';
})
myApp.component('app', {
  template: `<h1> _____________________________Put you name and password_________________________________________ 
  <image height=100% width=100% src="https://rayyaninstitute.com/wp-content/uploads/2016/06/todo_list.jpg"/></h1>
  <form>
  <input type="text" name="username"/>
  <input type= "password" name="password"/>
  </form>
  `
  });