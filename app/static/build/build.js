(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = React.createClass({displayName: "exports",
  render: function() {
    return React.createElement("div", {
      "className": "jumbotron"
    }, React.createElement("h1", null, " Flacore Template"), React.createElement("p", null, " ..loaded! Now let\'s get to work. "));
  }
});


},{}],2:[function(require,module,exports){
var AppViewController;

AppViewController = require('./AppViewController.cjsx');

React.render(React.createElement(AppViewController, null), document.getElementsByTagName('body')[0]);


},{"./AppViewController.cjsx":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy5udm0vdjAuMTAuMjYvbGliL25vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL21pdGNoL2ZsYWNvcmUtc2VlZC9hcHAvc3RhdGljL3NjcmlwdHMvQXBwVmlld0NvbnRyb2xsZXIuY2pzeCIsIi9Vc2Vycy9taXRjaC9mbGFjb3JlLXNlZWQvYXBwL3N0YXRpYy9zY3JpcHRzL2luZGV4LmNqc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxNQUFNLENBQUMsT0FBUCxHQUNBLEtBQUssQ0FBQyxXQUFOLENBQ0M7RUFBQSxNQUFBLEVBQVEsU0FBQTtXQUNQLEtBQUssQ0FBQyxhQUFOLENBQW9CLEtBQXBCLEVBQTJCO01BQUMsV0FBQSxFQUFhLFdBQWQ7S0FBM0IsRUFDQyxLQUFLLENBQUMsYUFBTixDQUFvQixJQUFwQixFQUEwQixJQUExQixFQUFnQyxtQkFBaEMsQ0FERCxFQUVDLEtBQUssQ0FBQyxhQUFOLENBQW9CLEdBQXBCLEVBQXlCLElBQXpCLEVBQStCLHFDQUEvQixDQUZEO0VBRE8sQ0FBUjtDQUREOzs7O0FDREEsSUFBQTs7QUFBQSxpQkFBQSxHQUFvQixPQUFBLENBQVEsMEJBQVI7O0FBRXBCLEtBQUssQ0FBQyxNQUFOLENBQ0MsS0FBSyxDQUFDLGFBQU4sQ0FBb0IsaUJBQXBCLEVBQXVDLElBQXZDLENBREQsRUFFQyxRQUFRLENBQUMsb0JBQVQsQ0FBOEIsTUFBOUIsQ0FBc0MsQ0FBQSxDQUFBLENBRnZDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzID1cblJlYWN0LmNyZWF0ZUNsYXNzXG5cdHJlbmRlcjogLT5cblx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcImNsYXNzTmFtZVwiOiBcImp1bWJvdHJvblwifSxcblx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCBudWxsLCBcIiBGbGFjb3JlIFRlbXBsYXRlXCIpLFxuXHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgXCIgLi5sb2FkZWQhIE5vdyBsZXRcXCdzIGdldCB0byB3b3JrLiBcIilcblx0XHQpIiwiQXBwVmlld0NvbnRyb2xsZXIgPSByZXF1aXJlICcuL0FwcFZpZXdDb250cm9sbGVyLmNqc3gnXG5cblJlYWN0LnJlbmRlcihcblx0UmVhY3QuY3JlYXRlRWxlbWVudChBcHBWaWV3Q29udHJvbGxlciwgbnVsbCksXG5cdGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF1cbikiXX0=
