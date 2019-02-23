//Getting Majors, Minors, and and academic offerings

var s = document.createElement("script")
s.src = "https://d3js.org/d3.v5.js"
var body = document.getElementsByTagName("body")[0]
body.after(s)
var l = d3.selectAll(".fusion-text a").nodes()
l.forEach(function(d){ var x = d.innerText; console.log(x)});

//Getting Classes offered in comp. sci

var s = document.createElement("script")
s.src = "https://d3js.org/d3.v5.js"
var body = document.getElementsByTagName("body")[0]
body.after(s)
var l = d3.selectAll("#main li").nodes()
l.forEach(function(d){ var x = d.innerText; console.log(x)});
