var block = {x: 300, v: 0, mass: 0.5};
var wall  = {x: 30,  lx: 30, v: 0, t: 0, frequency: 0};
var spring_length = block.x - wall.x;
var block2 = {x: block.x+spring_length, v: 0, mass: 0.5};


var main = function(){

/* Spring stiffness, in kg / s^2 */
var k = -20;
var k2 = -20;


/* Damping constant, in kg / s */
var b = -0.5;
var b2 = -0.5;

/* Block position and velocity. */


var frameRate  = 1/30;
var frameDelay = frameRate * 1000;

var canvas;
var ctx;
var width  = 1000;
var height = 200;


var loop = function() {

/* Move the wall. */
wall.t += frameRate;
wall.lx = wall.x;
wall.x = 30 + 70 * Math.sin(2 * Math.PI * wall.frequency * wall.t);
wall.v = (wall.x - wall.lx) / frameRate;


/* Move the block. */


var F_spring = k * ( (block.x - wall.x) - spring_length );
var F_damper = b * ( block.v - wall.v );

var F_spring1 = k * ((block2.x - block.x)- spring_length);
var F_damper1 = b * ( block.v - block2.v );

var a = ( F_spring + F_damper + F_spring1 + F_damper1 ) / block.mass;
block.v += a * frameRate;
block.x += block.v * frameRate;

var F_spring2 = k * ((block2.x - block.x)- spring_length);
var F_damper2 = b * ( block2.v - block.v );

var a2 = (F_spring2 + F_damper2 ) / block.mass;
block2.v += a2 * frameRate;
block2.x += block2.v * frameRate;

// add_to_graph(chart, block.x, 20);


/* Drawing */
ctx.clearRect(0, 0, width, height);

ctx.save();

for (x = wall.x; x < block.x; x += 20)
{
    ctx.strokeStyle = 'blue';
    ctx.beginPath();
    ctx.moveTo(x, height / 2 - 10);
    ctx.lineTo(x + 10, height / 2);
    ctx.lineTo(x + 20, height / 2 - 10);
    ctx.stroke();
    ctx.closePath();

}

for (x = block.x; x < block2.x; x += 20)
{
    ctx.strokeStyle = 'blue';
    ctx.beginPath();
    ctx.moveTo(x, height / 2 - 10);
    ctx.lineTo(x + 10, height / 2);
    ctx.lineTo(x + 20, height / 2 - 10);
    ctx.stroke();
    ctx.closePath();

}
ctx.strokeStyle = 'red';
ctx.beginPath();
ctx.moveTo(0, height / 2 + 10);
ctx.lineTo(block.x, height / 2 + 10);
ctx.stroke();
ctx.closePath();

ctx.strokeStyle = 'red';
ctx.beginPath();
ctx.moveTo(block.x, height / 2 + 10);
ctx.lineTo(block2.x, height / 2 + 10);
ctx.stroke();
ctx.closePath();

ctx.fillStyle = '#CCCCCC';
ctx.fillRect(0, 0, wall.x, height);

ctx.fillStyle = 'black';
ctx.fillRect(block.x, height - (height / 2 + 25), 50, 50);

ctx.fillStyle = 'black';
ctx.fillRect(block2.x, height - (height / 2 + 25), 50, 50);

ctx.restore();


};

var setup = function() {

canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');


document.getElementById('k_slider').onchange = function() {
    this.innerHTML = this.value;
    k = -1 * parseInt(this.value);
    document.getElementById('k_slider_label').innerHTML = k;
};

document.getElementById('b_slider').onchange = function() {
    this.innerHTML = this.value;
    b = -1 * parseFloat(this.value);
    document.getElementById('b_slider_label').innerHTML = b;
};

document.getElementById('f_slider').onchange = function() {
    this.innerHTML = this.value;
    wall.frequency = parseFloat(this.value);
    document.getElementById('f_slider_label').innerHTML = wall.frequency;
};

document.getElementById('m_slider').onchange = function() {
    this.innerHTML = this.value;
    block.mass = parseFloat(this.value);
    document.getElementById('m_slider_label').innerHTML = block.mass;
};


document.getElementById('k_slider2').onchange = function() {
    this.innerHTML = this.value;
    k2 = -1 * parseInt(this.value);
    document.getElementById('k_slider_label2').innerHTML = k2;
};

document.getElementById('b_slider2').onchange = function() {
    this.innerHTML = this.value;
    b2 = -1 * parseFloat(this.value);
    document.getElementById('b_slider_label2').innerHTML = b2;
};

document.getElementById('m_slider2').onchange = function() {
    this.innerHTML = this.value;
    block2.mass = parseFloat(this.value);
    document.getElementById('m_slider_label2').innerHTML = block2.mass;
};

setInterval(loop, frameDelay);
};




setup();




}

window.onload=main();
