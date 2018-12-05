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


(lib.DamperHead = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(15).p("AD6AAQAABohJBJQhJBJhoAAQhnAAhJhJQhJhJAAhoQAAhnBJhJQBJhJBnAAQBoAABJBJQBJBJAABng");
	this.shape.setTransform(0,42);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AHMEiIAApDIDIAAIAAJDgAqTEiIAApDIDIAAIAAJDg");
	this.shape_1.setTransform(-0.5,-6.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E0E0E0").s().p("AmtP6QjHhUiYiZQiaiZhTjGQhXjNAAjhQAAjgBXjNQBTjGCaiZQCYiaDHhTQDNhXDgAAQDhAADNBXQDGBTCZCaQCZCZBUDGQBXDNAADgQAADhhXDNQhUDGiZCZQiZCZjGBUQjNBXjhAAQjgAAjNhXgAj5GkQAABnBJBKQBJBJBnAAQBnAABKhJQBJhKAAhnQAAhohJhJQhKhJhnAAQhnAAhJBJQhJBJAABoIAAAAgAHHDhIDIAAIAApDIjIAAgAqYDhIDIAAIAApDIjIAAgAiwJVQhJhKAAhnQAAhoBJhJQBJhJBnAAQBnAABKBJQBJBJAABoQAABnhJBKQhKBJhnAAQhnAAhJhJgAD6GkIAAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.DamperHead, new cjs.Rectangle(-110.5,-110.5,221,221), null);


// stage content:
(lib.load = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var target = this.damp;
		var tween = createjs.Tween.get(target, {
			loop: true
		})
			.to({rotation: -360}, 4000, createjs.Ease.bounceOut)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.damp = new lib.DamperHead();
	this.damp.name = "damp";
	this.damp.parent = this;
	this.damp.setTransform(683.5,384.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E0E0E0").s().p("AgcAfQgNgLAAgUQAAgRAMgMQAMgMARAAQARAAANAMQAMAMAAARQAAAUgMALQgNALgRAAQgQAAgMgLg");
	this.shape.setTransform(881.7,194);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E0E0E0").s().p("AgcAfQgNgLAAgUQAAgRAMgMQAMgMARAAQARAAANAMQAMAMAAARQAAAUgMALQgNALgRAAQgQAAgMgLg");
	this.shape_1.setTransform(862.7,194);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E0E0E0").s().p("AgcAfQgNgLAAgUQAAgRAMgMQAMgMARAAQARAAANAMQAMAMAAARQAAAUgMALQgNALgRAAQgQAAgMgLg");
	this.shape_2.setTransform(843.7,194);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E0E0E0").s().p("AhHDFQgngPgbgbQgcgcgOgoQgOgmAAgxQAAgvANgnQAPgnAcgcQAbgcAngOQAogPAxAAQApAAAgALQAgALATARQAUARAKASQAKASAAAPQAAAQgLALQgMALgQAAQgJAAgIgEQgJgEgFgIQgPgYgLgMQgLgNgRgIQgSgIgcAAQgcAAgWAKQgXAJgQAUQgQASgIAcQgJAbAAAhQAABGAhAoQAhAmA6AAQAcAAAagIQAZgHAagOIAAhCIhAAAQgXAAgMgHQgMgHAAgRQAAgOAKgHQAKgJARAAIBeAAQARAAAMADQAMADAHAJQAHALABAVIAABPQAAAPgEAJQgCAJgJAIQgIAHgMAIQgmATgiAKQgiAJgoAAQguAAgngOg");
	this.shape_3.setTransform(795.3,177.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E0E0E0").s().p("ABqDQQgJgEgHgGQgIgHgHgJIgNgTIiajuIAADvQAAAXgLAMQgLAMgRAAQgRAAgLgMQgLgMAAgXIAAk6QAAgUAFgMQAFgMAMgIQANgIAOAAQALAAAIAEQAIADAGAHQAGAFAGAKIANAVICeDvIAAjxQAAgYAKgMQAKgMARAAQASAAALAMQAKAMAAAYIAAE/QAAA2gtAAQgLAAgJgDg");
	this.shape_4.setTransform(750.2,177.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E0E0E0").s().p("AgdDHQgLgOAAgYIAAlBQAAgZALgMQALgNASAAQASAAAMANQALAMAAAZIAAFBQAAAZgLANQgMAMgSAAQgRAAgMgMg");
	this.shape_5.setTransform(718.5,177.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E0E0E0").s().p("Ah5DMQgXAAgLgGQgMgIgDgMQgEgMABgUIAAkqQgBgbAMgMQANgMAaAAIBsAAQApAAAeAIQAeAHAYAWQBBA3AABvQAAAjgHAfQgGAfgOAYQgNAYgVATQgQAPgUAJQgTAJgXADQgXAEgaAAgAhbCKIA/AAQAVABAKgCQAMgBAMgFQANgEAJgIQApgjAAhUQABg9gTgeQgSgegbgJQgbgHgkgBIg3AAg");
	this.shape_6.setTransform(688.2,177.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E0E0E0").s().p("ACEDQQgHgEgFgGQgEgGgGgMIgJgWIgUgzIilAAIgTA0QgLAegIALQgJALgSAAQgQAAgLgLQgMgMAAgPQAAgIACgJIAKgZIBokHIALgbQAGgQAHgLQAHgLAMgHQALgGARAAQAQAAAMAGQAMAHAHALQAHAJAFAMIAMAgIBrEGQAMAeAAAOQAAAPgMAMQgMALgQAAQgKAAgHgDgAg+AtIB5AAIg8iog");
	this.shape_7.setTransform(644.6,177.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E0E0E0").s().p("AhVDDQglgPgagcQgZgcgNgoQgNgnAAgtQAAgvANgnQAOgoAagbQAZgcAlgOQAlgPAvAAQA+AAAuAaQAtAZAYAwQAXAvAABAQAAAugNAnQgNAngaAdQgZAcgmAPQgkAPgxAAQguAAgngQgAguiHQgVAKgPARQgQASgIAcQgJAcAAAiQAAAiAJAcQAIAcARATQAPASAWAJQAUAKAYAAQAfgBAbgQQAbgQAPggQAQgiAAgvQAAgtgPghQgOgggagSQgcgQghAAQgZgBgVAKg");
	this.shape_8.setTransform(602.5,177.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E0E0E0").s().p("AheDQQgbgBgMgLQgMgMAAgbIAAk6QAAgZAMgMQALgMASAAQATAAALAMQAMAMAAAZIAAEoICmAAQAUABALAJQALAKAAAPQAAAPgLAKQgKAJgVAAg");
	this.shape_9.setTransform(566.1,176.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.damp}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1162,525.5,481,353.5);
// library properties:
lib.properties = {
	id: '254D87DECCE736468334151109401099',
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
an.compositions['254D87DECCE736468334151109401099'] = {
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