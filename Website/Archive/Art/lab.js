(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.vector = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var frame_rate = 1/24;
		this.data1 = 0;
		this.data2 = 0;
		
		var length_factor = 10;
		
		var width = 150;
		var height = 150;
		
		var _this = this;
		
		
		
		var loop = function(){
			
			_this.removeAllChildren();
			
			var stroke_color = "#4CD957";
			var line =  new createjs.Shape(new createjs.Graphics().beginStroke(stroke_color)
				.moveTo(0,0)
				.lineTo( length_factor*(_this.data1 - 160), length_factor*(_this.data2 - 300))
				.endStroke());
				_this.addChild(line);		
					
				}
		
		setInterval(loop, frame_rate*1000);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ArtLuIAA3bIXbAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.vector, new cjs.Rectangle(-75,-75,150,150), null);


(lib.reset_button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFF0B0").ss(3).p("ACHAAQAAA4goAoQgnAng4AAQg3AAgngnQgogoAAg4QAAg3AogoQAngnA3AAQA4AAAnAnQAoAoAAA3g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4CD957").s().p("AhfBfQgngnAAg4QAAg3AngoQAognA3AAQA4AAAoAnQAnAoAAA3QAAA4gnAnQgoAog4AAQg3AAgogog");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66FFFF").s().p("AhfBfQgngnAAg4QAAg3AngoQAognA3AAQA4AAAoAnQAnAoAAA3QAAA4gnAnQgoAog4AAQg3AAgogog");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#66FF00").s().p("AhfBfQgngnAAg4QAAg3AngoQAognA3AAQA4AAAoAnQAnAoAAA3QAAA4gnAnQgoAog4AAQg3AAgogog");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.m2up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFF0B0").ss(3).p("AAcB1ICMjBQAMgRgKgTQgKgTgWAAIkTAAQgWAAgKATQgKATAMARICMDBQAKAPARAAQASAAAKgPg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCCF19").s().p("AgbB1IiMjBQgMgRAKgTQAKgTAVAAIEUAAQAWAAAKATQAKATgNARIiLDBQgKAPgSAAQgRAAgKgPg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66FFFF").s().p("AgbB1IiMjBQgMgRAKgTQAKgTAVAAIEUAAQAWAAAKATQAKATgNARIiLDBQgKAPgSAAQgRAAgKgPg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("AgbB1IiMjBQgMgRAKgTQAKgTAVAAIEUAAQAWAAAKATQAKATgNARIiLDBQgKAPgSAAQgRAAgKgPg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.6,-20.7,53.3,35.5);


(lib.m2down = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFF0B0").ss(3).p("AAcB1ICMjBQAMgRgKgTQgKgTgWAAIkTAAQgWAAgKATQgKATAMARICMDBQAKAPARAAQASAAAKgPg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCCF19").s().p("AgbB1IiMjBQgMgRAKgTQAKgTAVAAIEUAAQAWAAAKATQAKATgNARIiLDBQgKAPgSAAQgRAAgKgPg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66FFFF").s().p("AgbB1IiMjBQgMgRAKgTQAKgTAVAAIEUAAQAWAAAKATQAKATgNARIiLDBQgKAPgSAAQgRAAgKgPg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("AgbB1IiMjBQgMgRAKgTQAKgTAVAAIEUAAQAWAAAKATQAKATgNARIiLDBQgKAPgSAAQgRAAgKgPg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.6,-20.7,53.3,35.5);


(lib.m1up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFF0B0").ss(3).p("Agch1IiLDBQgMASAKAUQAKATAVAAIEVAAQAVAAAKgTQAKgUgMgSIiLjBQgLgPgSAAQgRAAgLAPg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF3B3B").s().p("AiJCEQgWABgKgUQgKgTAMgSICMjBQAKgPARABQASgBAKAPICMDBQAMASgKATQgKAUgWgBg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66FFFF").s().p("AiJCEQgWABgKgUQgKgTAMgSICMjBQAKgPARABQASgBAKAPICMDBQAMASgKATQgKAUgWgBg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C43000").s().p("AiJCEQgWABgKgUQgKgTAMgSICMjBQAKgPARABQASgBAKAPICMDBQAMASgKATQgKAUgWgBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.6,-14.7,53.3,35.5);


(lib.m1down = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFF0B0").ss(3).p("Agch1IiLDBQgMASAKAUQAKATAVAAIEVAAQAVAAAKgTQAKgUgMgSIiLjBQgLgPgSAAQgRAAgLAPg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF3B3B").s().p("AiJCEQgWABgKgUQgKgTAMgSICMjBQAKgPARABQASgBAKAPICMDBQAMASgKATQgKAUgWgBg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66FFFF").s().p("AiJCEQgWABgKgUQgKgTAMgSICMjBQAKgPARABQASgBAKAPICMDBQAMASgKATQgKAUgWgBg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C43000").s().p("AiJCEQgWABgKgUQgKgTAMgSICMjBQAKgPARABQASgBAKAPICMDBQAMASgKATQgKAUgWgBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.6,-14.7,53.3,35.5);


(lib.k2up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFF0B0").ss(3).p("AAdB1ICLjBQAMgRgKgTQgKgTgVAAIkVAAQgVAAgKATQgKATAMARICLDBQALAPARAAQASAAALgPg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCCF19").s().p("AgcB1IiKjBQgNgRAKgTQAKgTAVAAIEVAAQAVAAAKATQAKATgNARIiKDBQgLAPgSAAQgRAAgLgPg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFF0B0").ss(3).p("AAcB1ICMjBQAMgRgKgTQgKgTgWAAIkTAAQgWAAgKATQgKATAMARICMDBQAKAPARAAQASAAAKgPg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#66FFFF").s().p("AgbB1IiMjBQgMgRAKgTQAKgTAVAAIEUAAQAWAAAKATQAKATgNARIiLDBQgKAPgSAAQgRAAgKgPg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9900").s().p("AgbB1IiMjBQgMgRAKgTQAKgTAVAAIEUAAQAWAAAKATQAKATgNARIiLDBQgKAPgSAAQgRAAgKgPg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_4},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.6,-20.7,53.3,35.5);


(lib.k2down = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFF0B0").ss(3).p("AAcB1ICMjBQAMgRgKgTQgKgTgWAAIkTAAQgWAAgKATQgKATAMARICMDBQAKAPARAAQASAAAKgPg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCCF19").s().p("AgbB1IiMjBQgMgRAKgTQAKgTAVAAIEUAAQAWAAAKATQAKATgNARIiLDBQgKAPgSAAQgRAAgKgPg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66FFFF").s().p("AgbB1IiMjBQgMgRAKgTQAKgTAVAAIEUAAQAWAAAKATQAKATgNARIiLDBQgKAPgSAAQgRAAgKgPg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("AgbB1IiMjBQgMgRAKgTQAKgTAVAAIEUAAQAWAAAKATQAKATgNARIiLDBQgKAPgSAAQgRAAgKgPg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.6,-20.7,53.3,35.5);


(lib.k1up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFF0B0").ss(3).p("Agch1IiLDBQgMASAKAUQAKATAVAAIEVAAQAVAAAKgTQAKgUgMgSIiLjBQgLgPgSAAQgRAAgLAPg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF3B3B").s().p("AiJCEQgWABgKgUQgKgTAMgSICMjBQAKgPARABQASgBAKAPICMDBQAMASgKATQgKAUgWgBg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66FFFF").s().p("AiJCEQgWABgKgUQgKgTAMgSICMjBQAKgPARABQASgBAKAPICMDBQAMASgKATQgKAUgWgBg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C43000").s().p("AiJCEQgWABgKgUQgKgTAMgSICMjBQAKgPARABQASgBAKAPICMDBQAMASgKATQgKAUgWgBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.6,-14.7,53.3,35.5);


(lib.k1down = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFF0B0").ss(3).p("Agch1IiLDBQgMASAKAUQAKATAVAAIEVAAQAVAAAKgTQAKgUgMgSIiLjBQgLgPgSAAQgRAAgLAPg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF3B3B").s().p("AiJCEQgWABgKgUQgKgTAMgSICMjBQAKgPARABQASgBAKAPICMDBQAMASgKATQgKAUgWgBg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66FFFF").s().p("AiJCEQgWABgKgUQgKgTAMgSICMjBQAKgPARABQASgBAKAPICMDBQAMASgKATQgKAUgWgBg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C43000").s().p("AiJCEQgWABgKgUQgKgTAMgSICMjBQAKgPARABQASgBAKAPICMDBQAMASgKATQgKAUgWgBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.6,-14.7,53.3,35.5);


(lib.graphscreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var frame_rate = 1/24;
		var steps = 30;
		this.data1 = new Array(steps).fill(160);
		this.data2 = new Array(steps).fill(300);
		
		var width = 300;
		var height = 150;
		var _this = this;
		
		
		
		var loop = function(){
			
			_this.removeAllChildren();
		
			for (x = 0; x < steps; x += 1){
				start = -width/2 + (width/steps) * x;
				end = start + (width/steps);
				var stroke_color = "#FF7D7D";
				var line =  new createjs.Shape(new createjs.Graphics().beginStroke(stroke_color)
					.moveTo(start, _this.data1[x] - 160)
					.lineTo(end, _this.data1[x + 1] - 160)
					.endStroke());
					_this.addChild(line);
				
				var stroke_color = "#FCE06C";
				var line =  new createjs.Shape(new createjs.Graphics().beginStroke(stroke_color)
					.moveTo(start, _this.data2[x] - 300)
					.lineTo(end, _this.data2[x + 1] - 300)
					.endStroke());
					_this.addChild(line);
				
				
				}
			}
		
		setInterval(loop, frame_rate*1000);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bLuIAA3bMAu3AAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.graphscreen, new cjs.Rectangle(-150,-75,300,150), null);


(lib.fup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFF0B0").ss(3).p("Agch1IiLDCQgMARAKATQAKAUAVAAIEVAAQAVAAAKgUQAKgTgMgRIiLjCQgLgPgSAAQgRAAgLAPg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4CD957").s().p("AiKCFQgVgBgKgSQgKgUAMgRICMjCQAKgPARAAQASAAALAPICKDCQANARgKAUQgKASgWABg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66FFFF").s().p("AiKCFQgVgBgKgSQgKgUAMgRICMjCQAKgPARAAQASAAALAPICKDCQANARgKAUQgKASgWABg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#009966").s().p("AiKCFQgVgBgKgSQgKgUAMgRICMjCQAKgPARAAQASAAALAPICKDCQANARgKAUQgKASgWABg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.6,-14.7,53.3,35.5);


(lib.fdown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFF0B0").ss(3).p("AAdB2ICLjBQAMgSgKgTQgKgTgVAAIkVAAQgVAAgKATQgKATAMASICLDBQALAOARAAQASAAALgOg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4CD957").s().p("AgbB2IiMjBQgMgSAKgTQAKgTAVAAIEUAAQAWAAAKATQAKATgNASIiKDBQgLAOgSAAQgRAAgKgOg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66FFFF").s().p("AgbB2IiMjBQgMgSAKgTQAKgTAVAAIEUAAQAWAAAKATQAKATgNASIiKDBQgLAOgSAAQgRAAgKgOg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#009966").s().p("AgbB2IiMjBQgMgSAKgTQAKgTAVAAIEUAAQAWAAAKATQAKATgNASIiKDBQgLAOgSAAQgRAAgKgOg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.6,-20.6,53.3,38);


(lib.error_screen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Hit refresh to continue.", "24px 'Courier10 BT'", "#D8D8D8");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 543;
	this.text.parent = this;
	this.text.setTransform(-2.4,2.6,0.908,0.908);

	this.text_1 = new cjs.Text("101 error.", "47px 'Courier10 BT'", "#D8D8D8");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 56;
	this.text_1.lineWidth = 463;
	this.text_1.parent = this;
	this.text_1.setTransform(-7.8,-54.6,0.908,0.908);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(9,1,1).p("ABxAAQAAAwghAgQghAigvAAQguAAghgiQghggAAgwQAAgvAhggQAhgiAuAAQAvAAAhAiQAhAgAAAvg");
	this.shape.setTransform(205.2,-2.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkiBWIAAirIBbAAIAACrgADHBVIAAirIBcAAIAACrg");
	this.shape_1.setTransform(205.2,-21.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D8D8D8").s().p("AkjFjIghgeQiGiHAAi+QAAi9CGiGQAQgQARgOQB8hpCnAAQC+AACGCHQCHCGAAC9QAAC+iHCHQiGCGi+AAQinAAh8hogAhrCWQAAAwAiAgQAgAiAuAAQAwAAAggiQAiggAAgwQAAgvgighQggghgwAAQguAAggAhQgiAhAAAvIAAAAgAkdArIBcAAIAAirIhcAAgADNAqIBcAAIAAirIhcAAgAhJDmQgiggAAgwQAAgvAighQAgghAuAAQAwAAAgAhQAiAhAAAvQAAAwgiAgQggAigwAAQguAAgggigAB3CWIAAAAg");
	this.shape_2.setTransform(204.6,-17.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text_1},{t:this.text}]}).wait(1));

	// Layer_3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(9,1,1).p("EhSygu/MCllAAAMAAABd/MillAAAg");
	this.shape_3.setTransform(15.4,-3.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("EhSyAvAMAAAhd/MCllAAAMAAABd/g");
	this.shape_4.setTransform(15.4,-3.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.error_screen, new cjs.Rectangle(-519,-309.1,1068.9,610.6), null);


(lib.b2up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFF0B0").ss(3).p("AAcB1ICMjBQAMgRgKgTQgKgTgWAAIkTAAQgWAAgKATQgKATAMARICMDBQAKAPARAAQASAAAKgPg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCCF19").s().p("AgbB1IiMjBQgMgRAKgTQAKgTAVAAIEUAAQAWAAAKATQAKATgNARIiLDBQgKAPgSAAQgRAAgKgPg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66FFFF").s().p("AgbB1IiMjBQgMgRAKgTQAKgTAVAAIEUAAQAWAAAKATQAKATgNARIiLDBQgKAPgSAAQgRAAgKgPg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("AgbB1IiMjBQgMgRAKgTQAKgTAVAAIEUAAQAWAAAKATQAKATgNARIiLDBQgKAPgSAAQgRAAgKgPg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.6,-20.7,53.3,35.5);


(lib.b2down = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFF0B0").ss(3).p("AAcB1ICMjBQAMgRgKgTQgKgTgWAAIkTAAQgWAAgKATQgKATAMARICMDBQAKAPARAAQASAAAKgPg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCCF19").s().p("AgbB1IiMjBQgMgRAKgTQAKgTAVAAIEUAAQAWAAAKATQAKATgNARIiLDBQgKAPgSAAQgRAAgKgPg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66FFFF").s().p("AgbB1IiMjBQgMgRAKgTQAKgTAVAAIEUAAQAWAAAKATQAKATgNARIiLDBQgKAPgSAAQgRAAgKgPg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("AgbB1IiMjBQgMgRAKgTQAKgTAVAAIEUAAQAWAAAKATQAKATgNARIiLDBQgKAPgSAAQgRAAgKgPg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.6,-20.7,53.3,35.5);


(lib.b1up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFF0B0").ss(3).p("Agch1IiLDBQgMASAKAUQAKATAVAAIEVAAQAVAAAKgTQAKgUgMgSIiLjBQgLgPgSAAQgRAAgLAPg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF3B3B").s().p("AiJCEQgWABgKgUQgKgTAMgSICMjBQAKgPARABQASgBAKAPICMDBQAMASgKATQgKAUgWgBg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66FFFF").s().p("AiJCEQgWABgKgUQgKgTAMgSICMjBQAKgPARABQASgBAKAPICMDBQAMASgKATQgKAUgWgBg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C43000").s().p("AiJCEQgWABgKgUQgKgTAMgSICMjBQAKgPARABQASgBAKAPICMDBQAMASgKATQgKAUgWgBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.6,-14.7,53.3,35.5);


(lib.b1down = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFF0B0").ss(3).p("Agch1IiLDBQgMASAKAUQAKATAVAAIEVAAQAVAAAKgTQAKgUgMgSIiLjBQgLgPgSAAQgRAAgLAPg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF3B3B").s().p("AiJCEQgWABgKgUQgKgTAMgSICMjBQAKgPARABQASgBAKAPICMDBQAMASgKATQgKAUgWgBg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66FFFF").s().p("AiJCEQgWABgKgUQgKgTAMgSICMjBQAKgPARABQASgBAKAPICMDBQAMASgKATQgKAUgWgBg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C43000").s().p("AiJCEQgWABgKgUQgKgTAMgSICMjBQAKgPARABQASgBAKAPICMDBQAMASgKATQgKAUgWgBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.6,-14.7,53.3,35.5);


(lib.labdisplay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var initialize = function(){
			
			_this.frequency = 0;
			_this.block1 = {x: 160, v: 0, mass: 5};
			var wall  = {x: 0,  lx: 30, v: 0, t: 0};
			var spring_length = _this.block1.x - (wall.x + wall_width);
			_this.block2 = {x: _this.block1.x + spring_length + block_size, v: 0, mass: 5};
			
			cover_rect.x = _this.block2.x;
			wall_rect.x = wall.x;
			block1_rect.x = _this.block1.x;
			block2_rect.x = _this.block2.x;
			
			}
		
		
		
		var width  = 490;
		var height = 240;
		
		var block_size = 40;
		var wall_width = 60;
		
		var frame_rate  = 1/24;
		var frame_delay = frame_rate * 1000;
		
		this.reset = false;
		
		this.k = 10;
		this.k2 = 10;
		this.b = 10;
		this.b2 = 10;
		this.frequency = 0;
		this.block1 = {x: 160, v: 0, mass: 5};
		var wall  = {x: 0,  lx: 30, v: 0, t: 0};
		var spring_length = this.block1.x - (wall.x + wall_width);
		this.block2 = {x: this.block1.x + spring_length + block_size, v: 0, mass: 5};
		
		
		
		
		//Draw
		var spring_step = 10;
		var spring_height = 5;
		for (x = -width/2; x < width/2 + spring_step; x += spring_step)
		{
				var stroke_color = "#D8D8D8";
				var spring =  new createjs.Shape(new createjs.Graphics().beginStroke(stroke_color)
				.moveTo(x, -spring_height)
				.lineTo(x + spring_step/2,0)
				.lineTo(x + spring_step, - spring_height)
				.endStroke());
			this.addChild(spring);
		
		}
		
		var stroke_color = "#B0DBED";
		var damper =  new createjs.Shape(new createjs.Graphics().beginStroke(stroke_color)
			.moveTo(-width/2,5)
			.lineTo(width/2,5)
			.endStroke());
			this.addChild(damper);
		
		var cover_rect = new createjs.Shape(new createjs.Graphics().beginFill("#FFFFFF")
						.drawRect(-width/2, -height/2, width, height));
		this.addChild(cover_rect)
		
		var wall_rect = new createjs.Shape(new createjs.Graphics().beginFill("#D8D8D8")
						.drawRect(-width/2 - wall_width/2, -height/2, wall_width, height));
		this.addChild(wall_rect);
		
		var block1_rect = new createjs.Shape(new createjs.Graphics().beginFill("#FF3B3B")
						.drawRect(-width/2,-block_size/2,block_size,block_size));
		this.addChild(block1_rect);
		
		var block2_rect = new createjs.Shape(new createjs.Graphics().beginFill("#FCCF19")
						.drawRect(-width/2,-block_size/2,block_size,block_size));
		this.addChild(block2_rect);
		
		cover_rect.x = this.block2.x;
		wall_rect.x = wall.x;
		block1_rect.x = this.block1.x;
		block2_rect.x = this.block2.x;
		
		
		var _this = this;
		var loop = function() {
			wall.t += frame_rate;
			wall.lx = wall.x;
			wall.x = 15 * Math.sin(2 * Math.PI * _this.frequency * wall.t);
			wall.v = (wall.x - wall.lx) / frame_rate;
			
				var F_spring = -1*_this.k * ( ( _this.block1.x - (wall.x + wall_width) ) - spring_length );
				var F_damper = -1*_this.b * ( _this.block1.v - wall.v );
				var F_spring1 = -1*_this.k2 * (( _this.block2.x - ( _this.block1.x + block_size ))- spring_length);
				var F_damper1 = -1*_this.b2 * ( _this.block1.v - _this.block2.v );
			
					var a = ( F_spring + F_damper + F_spring1 + F_damper1 ) / _this.block1.mass;
					_this.block1.v += a * frame_rate;
					_this.block1.x += _this.block1.v * frame_rate;
					
			
				var F_spring2 = -1*_this.k2 * (( _this.block2.x - ( _this.block1.x + block_size ))- spring_length);
				var F_damper2 = -1*_this.b2 * ( _this.block2.v - _this.block1.v );
					
					var a2 = (F_spring2 + F_damper2 ) / _this.block2.mass;
					_this.block2.v += a2 * frame_rate;
					_this.block2.x += _this.block2.v * frame_rate;
					
			wall_rect.x = wall.x;
			block1_rect.x = _this.block1.x;
			block2_rect.x = _this.block2.x;
			cover_rect.x = _this.block2.x;
			
			if (_this.block2.x < _this.block1.x || _this.block2.x < wall.x || _this.block2.x > width*2){
				_this.error_screen.visible = true;
				_this.addChild(_this.error_screen);
				}
			if (_this.reset) {
				initialize();
				createjs.Tween.get(_this.error_screen)
					.to({alpha:0, visible:false}, 500);
				_this.reset = false;
				}
		
			}
		
		setInterval(loop,frame_delay)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// error
	this.error_screen = new lib.error_screen();
	this.error_screen.name = "error_screen";
	this.error_screen.parent = this;
	this.error_screen.setTransform(-46.5,8);
	this.error_screen.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.error_screen).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgmRASwMAAAglfMBMjAAAMAAAAlfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.labdisplay, new cjs.Rectangle(-565.5,-301.2,1068.9,610.6), null);


// stage content:
(lib.lab = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		
		var frame_rate = 1/24;
		
		this.reset_button.addEventListener("click", reset_clicked.bind(this));
		
		function reset_clicked()
		{
			_this.lab_display.reset = true;
			_this.f_text.text = "0";
		};
		
		var main_loop = function(){
			var x1 = _this.lab_display.block1.x;
			var x2 = _this.lab_display.block2.x;
			_this.graph.data1.push(x1);
			_this.graph.data1.shift(x1);
			_this.graph.data2.push(x2);
			_this.graph.data2.shift(x2);
			
			_this.vector.data1 = x1;
			_this.vector.data2 = x2;
			
		
			
		};
		
		setInterval( main_loop, frame_rate * 1000);
		var _this = this;
		
		this.m1_up.addEventListener("click", m1_up_click.bind(this));
		this.k1_up.addEventListener("click", k1_up_click.bind(this));
		this.b1_up.addEventListener("click", b1_up_click.bind(this));
		this.m2_up.addEventListener("click", m2_up_click.bind(this));
		this.k2_up.addEventListener("click", k2_up_click.bind(this));
		this.b2_up.addEventListener("click", b2_up_click.bind(this));
		this.f_up.addEventListener("click", f_up_click.bind(this));
		this.m1_down.addEventListener("click", m1_down_click.bind(this));
		this.k1_down.addEventListener("click", k1_down_click.bind(this));
		this.b1_down.addEventListener("click", b1_down_click.bind(this));
		this.m2_down.addEventListener("click", m2_down_click.bind(this));
		this.k2_down.addEventListener("click", k2_down_click.bind(this));
		this.b2_down.addEventListener("click", b2_down_click.bind(this));
		this.f_down.addEventListener("click", f_down_click.bind(this));
		
		function m1_up_click() {
			if (parseFloat(_this.m1_text.text) < 10) {
				_this.m1_text.text = parseFloat(_this.m1_text.text) + .5;
				_this.lab_display.block1.mass = parseFloat(_this.m1_text.text);
			}
		}
		
		function k1_up_click() {
			if (parseFloat(_this.k1_text.text) < 0) {
				_this.k1_text.text = parseFloat(_this.k1_text.text) + 1;
				_this.lab_display.k1 = parseFloat(_this.k1_text.text);
			}
		}
		
		function b1_up_click() {
			if (parseFloat(_this.b1_text.text) < 20) {
				_this.b1_text.text = parseFloat(_this.b1_text.text) + 1;
				_this.lab_display.b1 = parseFloat(_this.b1_text.text);
			}
		}
		
		function m2_up_click() {
			if (parseFloat(_this.m2_text.text) < 10) {
				_this.m2_text.text = parseFloat(_this.m2_text.text) + .5;
				_this.lab_display.block2.mass = parseFloat(_this.m2_text.text);
			}
		}
		
		function k2_up_click() {
			if (parseFloat(_this.k2_text.text) < 30) {
				_this.k2_text.text = parseFloat(_this.k2_text.text) + 1;
				_this.lab_display.k2 = parseFloat(_this.k2_text.text);
			}
		}
		
		function b2_up_click() {
			if (parseFloat(_this.b2_text.text) < 20) {
				_this.b2_text.text = parseFloat(_this.b2_text.text) + 1;
				_this.lab_display.b2 = parseFloat(_this.b2_text.text);
			}
		}
		
		function f_up_click() {
			if (parseFloat(_this.f_text.text) < 10) {
				_this.f_text.text = parseFloat(_this.f_text.text) + .5;
				_this.lab_display.frequency = parseFloat(_this.f_text.text);
			}
		}
		
		 function m1_down_click() {
			if (parseFloat(_this.m1_text.text) > .5) {
				_this.m1_text.text = parseFloat(_this.m1_text.text) - .5;
				_this.lab_display.block1.mass = parseFloat(_this.m1_text.text);
			}
		}
		
		function k1_down_click() {
			if (parseFloat(_this.k1_text.text) > 1) {
				_this.k1_text.text = parseFloat(_this.k1_text.text) - 1;
				_this.lab_display.k1 = parseFloat(_this.k1_text.text);
			}
		}
		
		function b1_down_click() {
			if (parseFloat(_this.b1_text.text) > 0) {
				_this.b1_text.text = parseFloat(_this.b1_text.text) - 1;
				_this.lab_display.b1 = parseFloat(_this.b1_text.text);
			}
		}
		
		function m2_down_click() {
			if (parseFloat(_this.m2_text.text) > .5) {
				_this.m2_text.text = parseFloat(_this.m2_text.text) - .5;
				_this.lab_display.block2.mass = parseFloat(_this.m2_text.text);
			}
		}
		
		function k2_down_click() {
			if (parseFloat(_this.k2_text.text) > 0) {
				_this.k2_text.text = parseFloat(_this.k2_text.text) - 1;
				_this.lab_display.k2 = parseFloat(_this.k2_text.text);
			}
		}
		
		function b2_down_click() {
			if (parseFloat(_this.b2_text.text) > 0) {
				_this.b2_text.text = parseFloat(_this.b2_text.text) - 1;
				_this.lab_display.b2 = parseFloat(_this.b2_text.text);
			}
		}
		
		function f_down_click() {
			if (parseFloat(_this.f_text.text) > 0) {
				_this.f_text.text = parseFloat(_this.f_text.text) - .5;
				_this.lab_display.frequency = parseFloat(_this.f_text.text);
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// b2 Down
	this.k2_down = new lib.k2down();
	this.k2_down.name = "k2_down";
	this.k2_down.parent = this;
	this.k2_down.setTransform(997.2,549.1);
	new cjs.ButtonHelper(this.k2_down, 0, 1, 2);

	this.b2_down = new lib.b2down();
	this.b2_down.name = "b2_down";
	this.b2_down.parent = this;
	this.b2_down.setTransform(1085.3,546.7,1,1,0,0,0,0,-3);
	new cjs.ButtonHelper(this.b2_down, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b2_down},{t:this.k2_down}]}).wait(1));

	// m1 Up
	this.k2_text = new cjs.Text("10", "30px 'MS Reference Sans Serif'", "#5B5B5B");
	this.k2_text.name = "k2_text";
	this.k2_text.textAlign = "center";
	this.k2_text.lineHeight = 37;
	this.k2_text.lineWidth = 66;
	this.k2_text.parent = this;
	this.k2_text.setTransform(996,431);

	this.m2_text = new cjs.Text("5", "30px 'MS Reference Sans Serif'", "#5B5B5B");
	this.m2_text.name = "m2_text";
	this.m2_text.textAlign = "center";
	this.m2_text.lineHeight = 37;
	this.m2_text.lineWidth = 66;
	this.m2_text.parent = this;
	this.m2_text.setTransform(907,431);

	this.b1_text = new cjs.Text("10", "30px 'MS Reference Sans Serif'", "#5B5B5B");
	this.b1_text.name = "b1_text";
	this.b1_text.textAlign = "center";
	this.b1_text.lineHeight = 37;
	this.b1_text.lineWidth = 66;
	this.b1_text.parent = this;
	this.b1_text.setTransform(1086,193.8);

	this.k1_text = new cjs.Text("10", "30px 'MS Reference Sans Serif'", "#5B5B5B");
	this.k1_text.name = "k1_text";
	this.k1_text.textAlign = "center";
	this.k1_text.lineHeight = 37;
	this.k1_text.lineWidth = 66;
	this.k1_text.parent = this;
	this.k1_text.setTransform(996,193.8);

	this.m1_text = new cjs.Text("5", "30px 'MS Reference Sans Serif'", "#5B5B5B");
	this.m1_text.name = "m1_text";
	this.m1_text.textAlign = "center";
	this.m1_text.lineHeight = 37;
	this.m1_text.lineWidth = 66;
	this.m1_text.parent = this;
	this.m1_text.setTransform(907.2,193.8);

	this.m1_down = new lib.m1down();
	this.m1_down.name = "m1_down";
	this.m1_down.parent = this;
	this.m1_down.setTransform(907.3,313.7,1,1,180);
	new cjs.ButtonHelper(this.m1_down, 0, 1, 2);

	this.k1_down = new lib.k1down();
	this.k1_down.name = "k1_down";
	this.k1_down.parent = this;
	this.k1_down.setTransform(996.2,312.1,1,1,180);
	new cjs.ButtonHelper(this.k1_down, 0, 1, 2);

	this.b1_down = new lib.b1down();
	this.b1_down.name = "b1_down";
	this.b1_down.parent = this;
	this.b1_down.setTransform(1085.6,312.7,1,1,180);
	new cjs.ButtonHelper(this.b1_down, 0, 1, 2);

	this.b1_up = new lib.b1up();
	this.b1_up.name = "b1_up";
	this.b1_up.parent = this;
	this.b1_up.setTransform(1085.3,271.1);
	new cjs.ButtonHelper(this.b1_up, 0, 1, 2);

	this.k1_up = new lib.k1up();
	this.k1_up.name = "k1_up";
	this.k1_up.parent = this;
	this.k1_up.setTransform(996.2,271.1);
	new cjs.ButtonHelper(this.k1_up, 0, 1, 2);

	this.m1_up = new lib.m1up();
	this.m1_up.name = "m1_up";
	this.m1_up.parent = this;
	this.m1_up.setTransform(907.3,275.3,1,1,0,0,0,0,3);
	new cjs.ButtonHelper(this.m1_up, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.m1_up},{t:this.k1_up},{t:this.b1_up},{t:this.b1_down},{t:this.k1_down},{t:this.m1_down},{t:this.m1_text},{t:this.k1_text},{t:this.b1_text},{t:this.m2_text},{t:this.k2_text}]}).wait(1));

	// f Down
	this.f_down = new lib.fdown();
	this.f_down.name = "f_down";
	this.f_down.parent = this;
	this.f_down.setTransform(310.3,277.5,1,1,0,0,0,0,-1.7);
	new cjs.ButtonHelper(this.f_down, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.f_down).wait(1));

	// f Up
	this.f_up = new lib.fup();
	this.f_up.name = "f_up";
	this.f_up.parent = this;
	this.f_up.setTransform(310.3,168.8,1,1,0,0,0,0,3);
	new cjs.ButtonHelper(this.f_up, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.f_up).wait(1));

	// Reset
	this.reset_button = new lib.reset_button();
	this.reset_button.name = "reset_button";
	this.reset_button.parent = this;
	this.reset_button.setTransform(598,406);
	new cjs.ButtonHelper(this.reset_button, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.reset_button).wait(1));

	// lab_display_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgmRASwMAAAglfMBMjAAAMAAAAlfg");
	mask.setTransform(601,266);

	// lab_display
	this.lab_display = new lib.labdisplay();
	this.lab_display.name = "lab_display";
	this.lab_display.parent = this;
	this.lab_display.setTransform(601,266);
	new cjs.ButtonHelper(this.lab_display, 0, 1, 1);

	var maskedShapeInstanceList = [this.lab_display];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.lab_display).wait(1));

	// graph_mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("A3bLuIAA3bMAu3AAAIAAXbg");
	mask_1.setTransform(508,541);

	// graph
	this.graph = new lib.graphscreen();
	this.graph.name = "graph";
	this.graph.parent = this;
	this.graph.setTransform(508,541);

	var maskedShapeInstanceList = [this.graph];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.graph).wait(1));

	// vector_mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("ArtLuIAA3bIXbAAIAAXbg");
	mask_2.setTransform(764,541);

	// vector
	this.vector = new lib.vector();
	this.vector.name = "vector";
	this.vector.parent = this;
	this.vector.setTransform(764,541);

	var maskedShapeInstanceList = [this.vector];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.vector).wait(1));

	// Cross
	this.text = new cjs.Text("x2", "10px 'Arial Rounded MT Bold'", "#EDEDED");
	this.text.textAlign = "center";
	this.text.lineHeight = 14;
	this.text.lineWidth = 11;
	this.text.parent = this;
	this.text.setTransform(775.6,473.2);

	this.text_1 = new cjs.Text("x1", "10px 'Arial Rounded MT Bold'", "#EDEDED");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 14;
	this.text_1.lineWidth = 11;
	this.text_1.parent = this;
	this.text_1.setTransform(824.6,544.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#EDEDED").ss(4,1,1).p("AAAqIIAAKKIqIAAAAAACIAAKHAKJACIqJAA");
	this.shape.setTransform(763.5,541.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text_1},{t:this.text}]}).wait(1));

	// Simulator
	this.f_text = new cjs.Text("0", "30px 'MS Reference Sans Serif'", "#5B5B5B");
	this.f_text.name = "f_text";
	this.f_text.textAlign = "center";
	this.f_text.lineHeight = 37;
	this.f_text.lineWidth = 66;
	this.f_text.parent = this;
	this.f_text.setTransform(303,204.2);

	this.b2_text = new cjs.Text("10", "30px 'MS Reference Sans Serif'", "#5B5B5B");
	this.b2_text.name = "b2_text";
	this.b2_text.textAlign = "center";
	this.b2_text.lineHeight = 37;
	this.b2_text.lineWidth = 66;
	this.b2_text.parent = this;
	this.b2_text.setTransform(1086,431);

	this.m2_up = new lib.m2up();
	this.m2_up.name = "m2_up";
	this.m2_up.parent = this;
	this.m2_up.setTransform(906,510.8,1,1,180);
	new cjs.ButtonHelper(this.m2_up, 0, 1, 2);

	this.b2_up = new lib.b2up();
	this.b2_up.name = "b2_up";
	this.b2_up.parent = this;
	this.b2_up.setTransform(1086,510.8,1,1,180);
	new cjs.ButtonHelper(this.b2_up, 0, 1, 2);

	this.k2_up = new lib.k2up();
	this.k2_up.name = "k2_up";
	this.k2_up.parent = this;
	this.k2_up.setTransform(997.3,510,1,1,180);
	new cjs.ButtonHelper(this.k2_up, 0, 1, 2);

	this.m2_down = new lib.m2down();
	this.m2_down.name = "m2_down";
	this.m2_down.parent = this;
	this.m2_down.setTransform(906,550.8);
	new cjs.ButtonHelper(this.m2_down, 0, 1, 2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AFAFAF").s().p("AgVAgIgCgFIgEgpIABgGQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQACAAADgEQAEgEAHgCIAEgBQAFAAADACQAGABADAHIABAEIAAADIgCAHIgEAHQgCACgDABQAAABgBAAQAAAAAAAAQgBABAAAAQAAAAAAABIAFAEIARALQADADAAACIgBADQgBABAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIgNgGIgFgEQgJgIgDgGQgCgDAAgCQAAgEAHgBQAGgCADgGQABgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAIgDgBIgDABIgGABQgCACgCAEQgDAFAAAHIACAcIAAAEQgCAEgDAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAg");
	this.shape_1.setTransform(805.4,454.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AFAFAF").s().p("AgHAbIgEgCQgJgIAAgQQAAgJADgGQACgFAEgDQAEgEAEAAQADAAABAFIACADIACABIAHAEIAFAGQAEAFAAAJIAAACIgBAGIgFAFQgGAHgKAAgAgFgJIgDADQgBADAAAHIAAAHQACADADABIADABQADAAAFgFQAEgEAAgDIAAgDQgBgEgHgFIgEgDQAAAAgBAAQAAAAgBABQAAAAgBAAQAAABgBAAg");
	this.shape_2.setTransform(798.4,454.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#AFAFAF").s().p("AABAbIgBgbQAAgRgBgCIgPABIgHgBQgBgBAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBABAAIANgBIAUgBIAJgBQAFAAACACIABADIgDAEIgPAAIgBABIgBAEIACAoIgBADIgCACg");
	this.shape_3.setTransform(791.4,454);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#AFAFAF").s().p("AgFAaQgGgDgEgHQgDgFAAgGQAAgIAHgMIAHgJIAFgFIADAAQADAAACACQABABAAAEIAAADIgDABQgEABgFAJQgFAIAAAFQAAALATADIAHAAIAAACQAAAHgHABIgFABQgHAAgFgEg");
	this.shape_4.setTransform(784.7,454.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#AFAFAF").s().p("AABAiQgCgBgDgEQgEgDgCgFQgFgJAAgZIAAgJIgBgDQAAgGABgBIACgCQACAAAHADIAKAFQAKACAAAGIAAABIgCAAIgCAAIgBAAIgOgBIABAKIAFAAIAIABIABAFIAAAAIABABQAAACgKABIgFABIAAAEIACAJQABAFACABIADABQADAAACgCIADgBIABACIACAFQAAAEgFADIgGABg");
	this.shape_5.setTransform(779.1,454);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#AFAFAF").s().p("AgHAPQgJgPgJgRIgCgGIABgCQAAAAABgBQAAAAAAgBQABAAAAAAQAAgBABAAIADABIAEAEIAQAdIADAEIABAAIAKgcQACgIADgCIADgBQAAAAABAAQABAAAAABQAAAAABAAQAAABAAAAQACADAAADIgOAsQgCAHgFAAQgDAAgKgPg");
	this.shape_6.setTransform(772.5,454.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#AFAFAF").s().p("AgYAVQgBgCAAgGIABgQQACgLACgCQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAABAAIAFADIAGAFIAOAOQABAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAgBIAEgUQAAgGACAAIADABQAEAFAAAJIAAACIAAACIgCANIABADIAAAEIgBADQAAAEgDABIgCABIgFgDIgYgXQgDAAgBAPIgBAJQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAAAABIgDAAQgDAAgCgEg");
	this.shape_7.setTransform(760,454.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#AFAFAF").s().p("AgHAbIgEgCQgJgIAAgQQAAgJADgGQACgFAEgDQAEgEAEAAQADAAABAFIACADIACABIAHAEIAFAGQAEAFAAAJIAAACIgBAGIgFAFQgGAHgKAAgAgFgJIgDADQgBADAAAHIAAAHQABADAEABIADABQADAAAFgFQAEgEAAgDIAAgDQgBgEgHgFIgEgDg");
	this.shape_8.setTransform(753.1,454.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#AFAFAF").s().p("AABAcQgEAAgBgNIgBgMIgBgYQAAgFABgBIACAAIAEABQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABIAFAlQAAAFgCAEQAAADgDABg");
	this.shape_9.setTransform(748.2,454.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#AFAFAF").s().p("AABAbIgBgbQAAgRgBgCIgPABIgHgBQgBgBAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBABAAIANgBIAUgBIAJgBQAFAAACACIABADQAAAAAAABQAAAAgBABQAAAAAAABQgBABAAAAIgQAAIgBABIgBAEIACAoQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAAAQAAABAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAg");
	this.shape_10.setTransform(742.6,454);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#AFAFAF").s().p("AABAcQgEAAAAgNIgBgMIgDgYQABgFACgBIACAAQAAAAABAAQAAAAABAAQAAAAAAABQAAAAAAAAQABABABAAQAAAAAAABQABAAAAABQAAAAAAABIAFAlQgBAFgBAEQgBAEgCAAg");
	this.shape_11.setTransform(737.1,454.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#AFAFAF").s().p("AgGAeIgGgDQgCgDAAgDIACgDIABgCIAEACIAFABIACAAIAEgDQABAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAAgBgFgDQgJgHgFgJQgDgGAAgHIAAgBQABgEADgCIAIgDIAEgBQAEABAAAEQAAAGgDAAIgEACIgBADQAAADADAFQACAEAGAEIAFAFQAFAEAAAFIgBAGQgCAFgGADQgHACgDAAg");
	this.shape_12.setTransform(732.5,454.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#AFAFAF").s().p("AgHAbIgDgCQgLgIAAgQQABgIAEgHQABgFAFgDQAEgEADAAQADAAABAFIACADIAJAFIAGAGQADAGAAAIIAAACIgBAGIgEAFQgIAHgJAAgAgFgJIgDADQgBADAAAHIABAHQAAADADABIAEABQADAAAFgFQAEgDAAgEIAAgDQAAgEgIgFIgDgDQgBAAgBAAQAAAAgBABQAAAAgBAAQAAABgBAAg");
	this.shape_13.setTransform(726.6,454.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#AFAFAF").s().p("AgLAdQgEgEgCgKQgCgIAAgJQAAgJADgHQABgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQABAAAEgEIAEgDIAEgBQAHAAAGAFQAGAFAAAIQAAAKgLAEIgGABIgDAAIgFgBQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAABAAAAIAAADIADASQAAADgEACIgBAAIgCgBgAgEgMIgBADIABACQABAAAAABQAAAAABAAQAAAAABAAQABAAAAAAQACAAAEgCQAEgDAAgDQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBgBAAIgEgBQgEAAgDAGg");
	this.shape_14.setTransform(720.4,454.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#AFAFAF").s().p("AgZAVIgBgIIACgQQABgKADgDQAAAAAAgBQABAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAIAFADIAHAFIACAEIALAKIABgDIAEgUQAAgGACAAIADABQAEAFABAJIgBACIAAACIgBALIAAAFIAAAEIAAADQgCAEgCABIgCABQgCAAgDgDIgXgXQgFAAAAAPIgBAJQAAAAAAABQAAAAAAABQAAAAAAAAQgBAAAAABIgCAAQgDAAgEgEg");
	this.shape_15.setTransform(527.8,454.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#AFAFAF").s().p("AgHAbIgEgCQgJgIAAgQQAAgJADgGQACgFAEgDQAEgEAEAAQADAAABAFIACADIAJAFIAFAGQADAEABAKIAAACIgBAGIgFAFQgHAHgJAAgAgFgJIgDADQgBACAAAIIAAAHQABADAEABIADABQADAAAFgFQAEgDAAgEIAAgDQgBgEgHgFIgEgDQAAAAgBAAQAAAAgBABQAAAAgBAAQAAABgBAAg");
	this.shape_16.setTransform(521,454.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#AFAFAF").s().p("AACAcQgFAAAAgNIgEgkQABgFACgBIACAAIADABIACAEIAFAfIAAAGIgBAJQgCAEgCAAg");
	this.shape_17.setTransform(516,454.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#AFAFAF").s().p("AABAbIgBgbQAAgRgBgCIgPABIgHgBQAAgBgBAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBABAAIANgBIAUgBIAJgBQAFAAACACIABADIgDAEIgPAAIgBABIgBAEIACAoIgBADIgCACg");
	this.shape_18.setTransform(510.4,454);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#AFAFAF").s().p("AACAcQgGAAABgNIgBgMIgCgYQAAgFACgBIABAAIAEABIADAEIADAlQAAAFgBAEQAAADgDABg");
	this.shape_19.setTransform(504.9,454.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#AFAFAF").s().p("AgGAeIgGgDQgCgDAAgDIACgDIABgCIAEACIAFABIACAAIAEgDQAAAAABAAQAAAAABgBQAAAAAAgBQAAAAAAgBIgFgEQgIgGgGgKQgDgGAAgHIAAgBQABgEADgCIAIgDIAEgBQAEABAAAEQAAAGgDAAIgEACIgBADQAAADADAFQACAEAGAEIAFAFQAFAEAAAFIgBAGQgCAEgGAEQgHACgDAAg");
	this.shape_20.setTransform(500.4,454.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#AFAFAF").s().p("AgIAbIgDgCQgKgIAAgQQABgHADgIQADgFADgDQAEgEAEAAQADAAACAFIABADIACABIAHAEIAFAGQAEAFABAJIAAACIgBAGIgGAFQgHAHgJAAgAgEgJIgEADQgBADgBAHIABAHQABADAEABIADABQADAAAFgFQAEgDAAgEIAAgDQgBgEgGgFIgFgDQAAAAgBAAQAAAAgBABQAAAAAAAAQgBABAAAAg");
	this.shape_21.setTransform(494.5,454.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#AFAFAF").s().p("AgMAdQgCgDgDgLQgCgIAAgJQAAgJADgHQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABAAQABAAAEgEIAEgDIADgBQAIAAAGAFQAGAFAAAIQAAAJgMAFQgCABgDAAIgDAAIgFgBQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAAAAAIAAADIADASQAAADgEACIgBAAIgDgBgAgEgMIgCADIACACQABAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQACAAAEgCQAEgDAAgDQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBgBAAIgEgBQgEAAgDAGg");
	this.shape_22.setTransform(488.2,454.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#9B9B9B").s().p("AgMAjIgFgCQgBgBgBgDIgBgaIABgiIACgCIACgBIADACIADACIABAbIABAAQAHAAADgCQABgBAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAIgBgOIAAgCQABgEADAAQAEAAACAEQACAFAAAGIABAHQAAAAAAABQAAAAABABQAAAAAAAAQAAAAABABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQgBABgBAHIgCAMQAAAAgBABQAAABAAAAQgBABAAAAQgBAAAAAAIgCgBQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAIgCgJIAAgIQAAgBgFABIgEABIgCAAIgBgBQgCAAAAAJIAAAPIgBAFg");
	this.shape_23.setTransform(660.2,406.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#9B9B9B").s().p("AgGAfIgGgFQgBgCAAgEIAAgDIACgBIAEACIAEABIADAAQADgBABgCQABAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAAAQABgCgGgEQgJgFgFgKQgCgGAAgGIAAgCQAAgDADgDQADgCAFgBIADAAQAGgBgBAFQAAAFgDACIgEABQAAAAgBABQAAAAAAAAQAAAAAAABQgBAAAAAAQABAEADAFQADAEAFADIAFAGQAEAEAAAGIgBAEQgCAGgFADQgHADgDAAg");
	this.shape_24.setTransform(654.4,405.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#9B9B9B").s().p("AABAiQgCgBgEgEQgEgEgBgDQgFgLAAgYQAAgIgBgBIAAgDIABgHQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAABAAIATAGQAJAEABAEIgBACIgCgBIgDABIAAABIgNgCIABAKIAFAAIAGACIADADIAAABQAAAEgKABIgEAAIAAADQAAAFABAFIACAGIAFABQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAAAIADgCIACADIABAEQAAAEgFACIgGABg");
	this.shape_25.setTransform(649,405);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#9B9B9B").s().p("AgVAgIgCgEIgEgqQAAgGABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQADAAADgDQAEgFAHgDIAEAAQAFAAADABQAFACADAGIACAFIgCALIgEAFIgFAEQAAABgBAAQAAAAgBAAQAAABAAAAQAAAAAAAAIAFAFIAQALQAEADAAABIgBAFQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQAAAAgBgBQAAAAAAAAIgNgHIgEgDQgJgIgEgGIgCgFQAAgDAHgCQAIgDACgFIABgEQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBgBAAIgDgBIgCAAIgGADIgEAFQgEAGAAAHIADAcIgBADQgBAEgDAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBg");
	this.shape_26.setTransform(642.3,405.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#9B9B9B").s().p("AgMAcQgCgBgBgGIgEgsQAAgEABgBQABAAAAgBQAAAAABAAQAAAAABAAQAAAAABgBIADABQACACAGgBIALABQAGABABACQACACAAADIAAACQgBACgFAAIgHAAQgHAAgCABQAAAAgBAAQAAAAgBABQAAAAAAABQAAAAAAABIABAFQAAAAAAABQAAAAAAAAQABABAAAAQAAAAABAAIAVACIADACQAAABAAABQAAAAAAABQAAAAAAAAQAAABgBAAQgCADgPAAIgGACIABASIgBADIgDABQgDgBgCgCg");
	this.shape_27.setTransform(635.5,405.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#9B9B9B").s().p("AABAiQgCgBgEgEQgDgDgCgEQgFgLAAgYIAAgJIgBgDQAAgGABgBIACgBQACAAAHADIAKADQAKAEAAAEIAAACIgCgBIgDABIAAABIgOgCIABAKIAFAAIAIACIABADIAAABIABAAQAAAEgKABIgFAAIAAADIACAKQAAAFADABIADABQADAAACgBIADgCIABADIACAEQAAAEgFACIgGABg");
	this.shape_28.setTransform(629.8,405);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#9B9B9B").s().p("AgVAgIgCgEIgEgqIABgHQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQACAAADgDQAFgFAGgDIAEAAQAFAAADABQAGACADAGIABAFIAAAEIgCAHIgEAFQgCADgDABQAAABgBAAQAAAAAAAAQAAAAgBABQAAAAAAAAIAFAFIARALQADADAAABIgBAFQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIgNgHIgFgDQgJgIgDgGQgCgEAAgBQAAgDAHgCQAGgDADgFIACgEQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAIgDgBIgDAAIgGADQgCABgCAEQgDAFAAAIIACAcIAAADQgCAEgDAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBg");
	this.shape_29.setTransform(623.1,405.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B0DBED").s().p("A27B4Qg6AAgqgqQgqgpAAg7IAAhhMAyTAAAIAABhQAAA6gqAqQgqAqg7AAg");
	this.shape_30.setTransform(501.3,656);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B0DBED").s().p("AdTE7IAAkiMgibAAAILnEYMgptAAAILokYIgEAAIAAipQAAhHAygxQAxgyBHAAMA10AAAQBAAAAtAuQAuAtAABAIAAHag");
	this.shape_31.setTransform(781.5,104.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#8AB9C1").ss(3).p("EglGAAFMBKNgAJ");
	this.shape_32.setTransform(595.5,632.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FCCF19").s().p("AgwAxQgVgUAAgdQAAgcAVgVQAUgUAcAAQAdAAAVAUQAUAVAAAcQAAAdgUAUQgVAVgdAAQgcAAgUgVg");
	this.shape_33.setTransform(295,562);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FCCF19").s().p("AgwAyQgVgVAAgdQAAgcAVgUQAUgVAcAAQAdAAAVAVQAUAUAAAcQAAAdgUAVQgVAUgdAAQgcAAgUgUg");
	this.shape_34.setTransform(295,539);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#999999").s().p("AhlBfQgbAAgVgUQgUgUAAgcIAAg1QAAgcAUgTQAVgVAbABIDLgBQAcAAAUAUQAUAVAAAbIAAA1QAAAcgUAUQgUAUgcAAg");
	this.shape_35.setTransform(302,617.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#999999").s().p("AhlBfQgbAAgVgUQgUgUAAgcIAAg1QAAgcAUgTQAVgVAbABIDLgBQAcAAAUAUQAUAVAAAbIAAA1QAAAcgUAUQgUAUgcAAg");
	this.shape_36.setTransform(301,502.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#999999").s().p("AiSBfQgcAAgUgUQgUgVAAgbIAAg1QAAgcAUgUQAUgUAcAAIEkAAQAdAAAUAUQAUAUAAAcIAAA1QAAAbgUAVQgUAUgdAAg");
	this.shape_37.setTransform(305.5,474.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("ArtLuIAA3bIXbAAIAAXbg");
	this.shape_38.setTransform(764,541);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("A3bLuIAA3bMAu3AAAIAAXbg");
	this.shape_39.setTransform(508,541);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF3B3B").s().p("EgsXAQBQgyAAgjgjQgjgjAAgyIAA8RQAAgyAjgjQAjgjAyAAMBYvAAAQAyAAAjAjQAjAjAAAyIAAcRQAAAygjAjQgjAjgyAAg");
	this.shape_40.setTransform(564,541.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#A4DDEA").s().p("AgfAfQgNgNAAgSQAAgRANgOQANgNASAAQATAAANANQANAOAAARQAAASgNANQgOAOgSAAQgSAAgNgOg");
	this.shape_41.setTransform(484.5,419.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#A4DDEA").s().p("AgfAfQgNgNAAgSQAAgRANgOQANgNASAAQATAAANANQANAOAAARQAAASgNANQgOAOgSAAQgSAAgNgOg");
	this.shape_42.setTransform(468.5,419.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#A4DDEA").s().p("AgfAfQgNgMAAgTQAAgRANgOQANgNASAAQATAAANANQANAOAAARQAAATgNAMQgOAOgSAAQgSAAgNgOg");
	this.shape_43.setTransform(1110.5,591.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#A4DDEA").s().p("AgfAfQgNgMAAgTQAAgRANgOQANgNASAAQATAAANANQANAOAAARQAAATgNAMQgOAOgSAAQgSAAgNgOg");
	this.shape_44.setTransform(1094.5,591.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#4CD957").s().p("AgfAfQgNgMAAgTQAAgRANgOQANgNASAAQATAAANANQANAOAAARQAAATgNAMQgOAOgSAAQgSAAgNgOg");
	this.shape_45.setTransform(902.5,618.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#A4DDEA").s().p("AgfAfQgNgNAAgSQAAgRANgOQANgNASAAQATAAANANQANAOAAARQAAASgNANQgOAOgSAAQgSAAgNgOg");
	this.shape_46.setTransform(1020.5,590.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#A4DDEA").s().p("AgfAfQgNgNAAgSQAAgRANgOQANgNASAAQATAAANANQANAOAAARQAAASgNANQgOAOgSAAQgSAAgNgOg");
	this.shape_47.setTransform(1004.5,590.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#A4DDEA").s().p("AgfAfQgNgNAAgSQAAgRANgOQANgNASAAQATAAANANQANAOAAARQAAASgNANQgOAOgSAAQgSAAgNgOg");
	this.shape_48.setTransform(932.5,589.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#A4DDEA").s().p("AgfAfQgNgNAAgSQAAgRANgOQANgNASAAQATAAANANQANAOAAARQAAASgNANQgOAOgSAAQgSAAgNgOg");
	this.shape_49.setTransform(916.5,589.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#A4DDEA").s().p("AgfAfQgNgNAAgSQAAgRANgOQANgNASAAQATAAANANQANAOAAARQAAASgNANQgOAOgSAAQgSAAgNgOg");
	this.shape_50.setTransform(1109.5,356.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#A4DDEA").s().p("AgfAfQgNgNAAgSQAAgRANgOQANgNASAAQATAAANANQANAOAAARQAAASgNANQgOAOgSAAQgSAAgNgOg");
	this.shape_51.setTransform(1093.5,356.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#A4DDEA").s().p("AgfAfQgNgNAAgSQAAgRANgOQANgNASAAQATAAANANQANAOAAARQAAASgNANQgOAOgSAAQgSAAgNgOg");
	this.shape_52.setTransform(1019.5,355.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#A4DDEA").s().p("AgfAfQgNgNAAgSQAAgRANgOQANgNASAAQATAAANANQANAOAAARQAAASgNANQgOAOgSAAQgSAAgNgOg");
	this.shape_53.setTransform(1003.5,355.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#A4DDEA").s().p("AgfAgQgNgOAAgSQAAgRANgOQANgNASAAQATAAANANQANAOAAARQAAASgNAOQgOANgSAAQgSAAgNgNg");
	this.shape_54.setTransform(931.5,354.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#A4DDEA").s().p("AgfAgQgNgOAAgSQAAgRANgOQANgNASAAQATAAANANQANAOAAARQAAASgNAOQgOANgSAAQgSAAgNgNg");
	this.shape_55.setTransform(915.5,354.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#5B5B5B").s().p("AgFByQgUAAgUgQIgKgIIgBgpQgCgpgLgkQgIglAAgTQAAgRAFgGQADgGAGAAQAJAAANANQAKAKgBALQAAAGAGATQAGATAAAGQAAAGAJgCQAUgDAGAAQALgBAMAGQAoASAAAiIAAAIQgGAngeAYQgNAJgFACQgIADgNAAgAAGASQgGADgEAOQgFANAAAMIABAFQABAFAFAAQAIgBALgKQAPgQAAgQIgCgFQgBgHgMAAQgIAAgDADg");
	this.shape_56.setTransform(1085,403.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AldCvIAAldIK7AAIAAFdg");
	this.shape_57.setTransform(1085,449.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#D8D8D8").s().p("AkhR+QgyAAgjgjQgjgkAAgxMAAAggLQAAgyAjgjQAjgjAyAAIJDAAQAxAAAkAjQAjAjAAAyMAAAAgLQAAAxgjAkQgkAjgxAAg");
	this.shape_58.setTransform(1085,488);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#5B5B5B").s().p("AgiCOQgMgEgDgGQgEgGgCgSQgCgWgDgEQgDgEAAgfQAAgdADgSIABgIQAAgYgOgqQgLgiAAgOQAAgJAGgJQAFgGANAHQAQAIADAXIAcBqIAAAAQABADACABIADABQAFAAACgIQAFgMgBgDQgEgNAKgVQAKgXARAYQAGAKAAAOQAAAPgFAKQgIAXgGAHQgGAJAAAFQAAAHAPARQAOAQAWASQAQANAAAGIAAACIAAAEQgCAKgDACQgDADgJAAQgHAAgTgMQgVgNgGgJQgRgWgFAAIgBAAQgCACgCAaQgBAagGAFQgDADgFAAIgHgCg");
	this.shape_59.setTransform(995.9,400.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AldCvIAAldIK7AAIAAFdg");
	this.shape_60.setTransform(996,449.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#D8D8D8").s().p("AkhR+QgyAAgjgjQgjgkAAgxMAAAggLQAAgyAjgjQAjgjAyAAIJDAAQAyAAAjAjQAjAjAAAyMAAAAgLQAAAxgjAkQgjAjgyAAg");
	this.shape_61.setTransform(996,486);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#5B5B5B").s().p("ABEA+IABgNQAAgOgEgPQgEgQgFAAQgCAAgGAKQgUAkAAAGQAAAFgFAIQgEAIgDABIgBABIgCAAQgFAAgKgFQgKgEgCgDQgCgDABgGIABgNQADgQgBgSQAAgpgIAAQgFAAgKASQgMATgCAJQgBAIgCACQgCACgEARQgDASgFAGQgDAEgLAAQgJAAgFgDQgDgCgEgMQgEgPAAgOIgEhNQAAgOAFgKQAIgOAMAAIAJAIQAJAKAAALQAAAMACAAQACgBAMgOQAXgYAQAAQAIAAAIAMQAKANAEAPQAGARABABQACAAAKgIQAKgFAKgBQAIAAAFAEQAUALAIAQQAJARABAdIABAQQgBAKgFAMQgIANgJACIgEABQgPAAAAgbg");
	this.shape_62.setTransform(906.9,405.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AldCvIAAldIK7AAIAAFdg");
	this.shape_63.setTransform(907,449.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#D8D8D8").s().p("AkhR+QgyAAgjgjQgjgkAAgxMAAAggLQAAgyAjgjQAjgjAyAAIJDAAQAyAAAjAjQAjAjAAAyMAAAAgLQAAAxgjAkQgjAjgyAAg");
	this.shape_64.setTransform(907,488);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#5B5B5B").s().p("AgFByQgUAAgUgPIgKgIIgBgqQgCgogLglQgIglAAgUQAAgQAFgGQADgGAGAAQAJAAANAMQAKAKgBANQAAAFAGAUQAGASAAAFQAAAHAJgBQAUgEAGgBQALAAAMAGQAoASAAAiIAAAJQgGAngeAXQgNAKgFABQgIACgNABgAAGASQgGADgEAOQgFAOAAAKIABAHQABADAFAAQAIAAALgLQAPgPAAgPIgCgGQgBgHgMAAQgIAAgDADg");
	this.shape_65.setTransform(1085,166.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AldCvIAAldIK7AAIAAFdg");
	this.shape_66.setTransform(1085,212.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#D8D8D8").s().p("AkhR+QgyAAgjgjQgjgkAAgxMAAAggLQAAgyAjgjQAjgjAyAAIJDAAQAxAAAkAjQAjAjAAAyMAAAAgLQAAAxgjAkQgkAjgxAAg");
	this.shape_67.setTransform(1085,251);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#999999").s().p("Au7FUQhbAAhAhAQhAhBAAhbIAAjvQAAhbBAhBQBAhABbAAId2AAQBbAABABAQBBBBAABbIAADvQAABbhBBBQhABAhbAAg");
	this.shape_68.setTransform(995.5,600);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#5B5B5B").s().p("AgiCPQgNgFgCgFQgEgGgCgTQgCgXgDgCQgDgFAAgfQAAgeADgQIABgJQAAgYgOgqQgLghAAgPQAAgJAGgJQAFgGANAHQAQAIADAXIAcBrIAAgBQABADACACIADAAQAFAAACgIQAFgMgBgDQgEgNAKgVQAKgXARAYQAGAKAAAOQAAAOgFAMQgIAXgGAGQgGAJAAAFQAAAIAPAQQARATATAPQAQANAAAGIAAADIAAADQgCAKgDADQgDADgJAAQgHAAgTgNQgTgMgIgKQgQgVgGAAIgBAAQgCABgCAaQgBAbgGAEQgDADgFAAIgHgBg");
	this.shape_69.setTransform(997.9,164.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AldCvIAAldIK7AAIAAFdg");
	this.shape_70.setTransform(996,212.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#D8D8D8").s().p("AkhR+QgyAAgjgjQgjgkAAgxMAAAggLQAAgyAjgjQAjgjAyAAIJDAAQAyAAAjAjQAjAjAAAyMAAAAgLQAAAxgjAkQgjAjgyAAg");
	this.shape_71.setTransform(996,251);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#5B5B5B").s().p("ABEA/IABgPQAAgNgEgPQgEgQgFAAQgCAAgGAKQgUAkAAAGQAAAEgFAIQgEAJgDAAIgBACIgCAAQgFgBgKgEQgKgDgCgEQgCgDABgGIABgMQADgQgBgTQAAgqgIAAQgFABgKASQgMASgCAKQgBAIgCACQgCACgEARQgDATgFAEQgDAGgLgBQgJAAgFgCQgDgDgEgMQgEgPAAgNIgEhOQAAgOAFgKQAIgOAMAAIAJAJQAJAJAAALQAAAMACgBQACAAAMgNQAXgZAQAAQAIAAAIAMQAKAMAEAQQAGASABAAQACgBAKgGQAKgHAKAAQAIABAFADQAUAMAIAPQAJARABAdIABAQQgBAKgFAMQgIANgJACIgEABQgPAAAAgag");
	this.shape_72.setTransform(906.9,168.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AldCvIAAldIK7AAIAAFdg");
	this.shape_73.setTransform(907,212.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#D8D8D8").s().p("AkhR+QgyAAgjgjQgjgkAAgxMAAAggLQAAgyAjgjQAjgjAyAAIJDAAQAyAAAjAjQAjAjAAAyMAAAAgLQAAAxgjAkQgjAjgyAAg");
	this.shape_74.setTransform(907,251);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#5B5B5B").s().p("AgGCtIgHgFIAAgeQAAgcgCgmQgCgogCgHQgBgFgLADIgGABQgGgBgIgGIgIgJQgBgCABgFQACgIAEgFQAFgFAJgEIANgGIgFgnQgCgRAAgRQAAgdAHgTQAGgUALgGQAKgEAHAAQAYAAAFAQQACAFACgBQACABACAFQACAEAAAEQAAAFgDAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBgBgBgBQgBgBgIAAQgVAAgEAGQgGAHAAAiIAEA7QAAAAAAAAQAAABAAAAQABAAAAAAQAAAAABAAIASgCIATACQAOAEABAGIACAJQAAAKgbAIIgWAHIAEBFQADAXAAAaQAAAhgEAJQgEALgHAAQgDAAgGgGg");
	this.shape_75.setTransform(254,220.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AldCvIAAldIK7AAIAAFdg");
	this.shape_76.setTransform(303,222.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#4CD957").s().p("AgxBLQgKAAgIgHQgHgIAAgKIAAhjQAAgKAHgIQAIgHAKAAIBjAAQAKAAAIAHQAHAIAAAKIAABjQAAAKgHAIQgIAHgKAAg");
	this.shape_77.setTransform(830.5,423.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FCCF19").s().p("AgxBLQgKAAgIgHQgHgIAAgKIAAhjQAAgKAHgIQAIgHAKAAIBjAAQAKAAAIAHQAHAIAAAKIAABjQAAAKgHAIQgIAHgKAAg");
	this.shape_78.setTransform(807.5,423.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FF3B3B").s().p("AgxBLQgKAAgIgHQgHgIAAgKIAAhjQAAgKAHgIQAIgHAKAAIBjAAQAKAAAIAHQAHAIAAAKIAABjQAAAKgHAIQgIAHgKAAg");
	this.shape_79.setTransform(783.5,423.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#3D3D3D").s().p("EgmbAUtQgyAAgjgjQgjgjAAgyMAAAglpQAAgyAjgjQAjgjAyAAMBM3AAAQAyAAAjAjQAjAjAAAyMAAAAlpQAAAygjAjQgjAjgyAAg");
	this.shape_80.setTransform(601,267.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#4CD957").ss(3).p("AhPCPIAXgIQAcgMAYgZQBKhQAAiu");
	this.shape_81.setTransform(838.5,409.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#999999").s().p("AmZFUQgyAAgjgkQgjgjAAgxIAAm3QAAgyAjgjQAjgjAyAAIOrAAIAAKng");
	this.shape_82.setTransform(292,222);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#D8D8D8").s().p("AjlNhQgyAAgjgjQgjgjAAgyIAA3RQAAgyAjgjQAjgjAyAAIHLAAQAyAAAjAjQAjAjAAAyIAAXRQAAAygjAjQgjAjgyAAg");
	this.shape_83.setTransform(310,221.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#FCCF19").ss(3).p("AhPCPIAZgJQAdgOAZgZQBMhTgGio");
	this.shape_84.setTransform(814.5,409.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#FF3B3B").ss(3).p("ABOCXQgugZgog0QhRhoAaiF");
	this.shape_85.setTransform(775.9,409.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#999999").s().p("AlOBfQgoAAgbgcQgcgcAAgnIAAAAQAAgnAcgbQAbgcAoAAIKdAAQAnAAAcAcQAcAbAAAnIAAAAQAAAngcAcQgcAcgnAAg");
	this.shape_86.setTransform(807,423.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#3D3D3D").s().p("A0SCRQgnAAghgUQgigUgTgjIh5jWMAwRAAAIh5DWQgUAjghAUQgiAUgnAAg");
	this.shape_87.setTransform(600.5,413.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#FFFFFF").ss(9,1,1).p("EhQXg1kMCgvAAAMAAABrJMigvAAAg");
	this.shape_88.setTransform(799.6,399);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.m2_down},{t:this.k2_up},{t:this.b2_up},{t:this.m2_up},{t:this.b2_text},{t:this.f_text}]}).wait(1));

	// Background
	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#D7F9FF").s().p("Eg8sAqHQgyAAgjgjQgjgkAAgxMAAAhQdQAAgyAjgjQAjgjAyAAMB5ZAAAQAxAAAkAjQAjAjAAAyMAAABQdQAAAxgjAkQgkAjgxAAg");
	this.shape_89.setTransform(687.5,393.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_89).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(922,435.6,1079.5,694.8);
// library properties:
lib.properties = {
	id: 'B5456CCC925AF242BDF2A013B8CB149B',
	width: 1366,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['B5456CCC925AF242BDF2A013B8CB149B'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;