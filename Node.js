// import express framework package
const express = require('express');
// create app to execute express
const app = express();
// import dotenv package
const dotenv = require('dotenv');
dotenv.config;
// assign port to the project, either get port from the environment variable or 3000
const PORT = process.env.PORT || 3000;
// import corspackage
const cors = require('cors');
app.use(cors());

app.use(express.static(__dirname + '/'));
app.use(express.json());

app.get('/', function(req, res)  {
  res.status(200);
  console.log("A request has been processed... ")
})

// Calculate the area of the triangle using base and height
app.get('/areaSH/:c/:h', function(req, res) {
  const c = Number(req.params.c);
  const h = Number(req.params.h);

  if (isNaN(c) || isNaN(h)) {
    res.status(400);
    res.json({error: "Request is not completed."})
    return ;
  }
  const area = ((c * h) / 2).toFixed(2) ;
  console.log("/Area SH requestion has been made...")
  res.json({'areaSH' : area})
});

// Calculate the area of the triangle using Heron's formula
// Area = Square root of s*(s - a)*(s - b)*(s - c)
app.get('/areaSSS/:a/:b/:c', function(req, res) {
  const a = Number(req.params.a);
  const b = Number(req.params.b);
  const c = Number(req.params.c);
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    res.status(400);
    res.json({error: "Request is not completed."})
    return ;
  }
  // calculate a semi-perimeter 
  const s = (a+b+c)/2;
  const area = (Math.sqrt(s*(s-a)*(s-b)*(s-c))).toFixed(2);
  console.log("/Area SSS requestion has been made...")
  res.json({'areaSSS' : area})
});

// Calculate the area of the triangle using "side angle side" (SAS) method
// Area	=	 (b * c * sin(alpha)) / 2;
app.get('/areaSAS/:b/:c/:alpha', function(req, res) {
  const b = Number(req.params.b);
  const c = Number(req.params.c);
  const alpha = Number(req.params.alpha);
  if (isNaN(alpha) || isNaN(b) || isNaN(c)) {
    res.status(400);
    res.json({error: "Request is not completed."})
    return ;
  }
  const area = ((b * c * Math.sin(alpha * (Math.PI / 180))) / 2).toFixed(2);
  console.log("/Area SAS requestion has been made...")
  res.json({'areaSAS' : area})
});

// Calculate the area of the triangle using Sine Law -- (ASA) method
// Given 2 Angles & included Side
app.get('/areaASA/:c/:alpha/:beta', function(req, res) {
  const c = Number(req.params.c);
  const alpha = Number(req.params.alpha);
  const beta = Number(req.params.beta);
  if (isNaN(beta) || isNaN(alpha) || isNaN(c)) {
    res.status(400);
    res.json({error: "Request is not completed."})
    return ;
  }

  // calculate gamma = 180 - beta - aplha
  const gamma = 180 - beta - alpha;
  // calculate b = (c * sin(beta)) / sin(gamma)
  // calculate area using SSA
  // const area = (b * c * Math.sin(alpha * (Math.PI / 180))) / 2;
  const area = ((((c * Math.sin(beta * (Math.PI / 180))) / Math.sin(gamma * (Math.PI / 180))) * c  * Math.sin(alpha * (Math.PI / 180))) / 2).toFixed(2); 
  console.log("/Area ASA requestion has been made...")
  res.json({'areaASA' : area})
});

app.listen(PORT, () => console.log('Server is running...'))