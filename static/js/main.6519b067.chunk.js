(this["webpackJsonpkainakamura.github.io"]=this["webpackJsonpkainakamura.github.io"]||[]).push([[0],{22:function(e,t,i){},29:function(e,t,i){},35:function(e,t,i){},36:function(e,t,i){},37:function(e,t,i){},38:function(e,t,i){},39:function(e,t,i){},40:function(e,t,i){},41:function(e,t,i){},42:function(e,t,i){},43:function(e,t,i){},44:function(e,t,i){},45:function(e,t,i){},46:function(e,t,i){},47:function(e,t,i){},48:function(e,t,i){},49:function(e,t,i){"use strict";i.r(t);var n=i(1),a=i.n(n),s=i(23),r=i.n(s),c=(i(29),i(2)),o=i(3),h=i(5),l=i(4),u=i(12),d=i(0),j=function(e){Object(h.a)(i,e);var t=Object(l.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return Object(d.jsx)("li",{children:Object(d.jsx)(u.c,{exact:"/"===this.props.href,to:this.props.href,activeClassName:"active",children:this.props.name})})}}]),i}(a.a.Component),p=(i(35),function(e){Object(h.a)(i,e);var t=Object(l.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"handleClick",value:function(e){this.setState({active:e})}},{key:"render",value:function(){return Object(d.jsx)("nav",{className:"Navbar",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)(j,{name:"Kai Nakamura",href:"/"}),Object(d.jsx)(j,{name:"Projects",href:"projects"}),Object(d.jsx)(j,{name:"Music",href:"music"}),Object(d.jsx)(j,{name:"Contact",href:"contact"})]})})}}]),i}(a.a.Component)),m=(i(36),function(e){Object(h.a)(i,e);var t=Object(l.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return Object(d.jsx)("header",{className:"Header",children:Object(d.jsx)(p,{})})}}]),i}(a.a.Component)),b=function(e){Object(h.a)(i,e);var t=Object(l.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:this.props.href,target:"_blank",rel:"noreferrer noopener",children:this.props.name})})}}]),i}(a.a.Component),f=(i(37),function(e){Object(h.a)(i,e);var t=Object(l.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return Object(d.jsx)("footer",{className:"Footer",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)(b,{name:"Source Code",href:"https://github.com/KaiNakamura/kainakamura.github.io"}),Object(d.jsx)(b,{name:"Report Bug",href:"https://github.com/KaiNakamura/kainakamura.github.io/issues"})]})})}}]),i}(a.a.Component)),g=function(){function e(t){Object(c.a)(this,e),this.sketch=t,this.radius=100,this.animationFrame=0,this.sketch.mouseX=-this.radius,this.sketch.mouseY=-this.radius}return Object(o.a)(e,[{key:"getPosition",value:function(){return[/Android/i,/webOS/i,/iPhone/i,/iPad/i,/iPod/i,/BlackBerry/i,/Windows Phone/i].some((function(e){return navigator.userAgent.match(e)}))&&!this.sketch.mouseIsPressed?this.sketch.createVector(-this.radius,-this.radius):this.sketch.createVector(this.sketch.mouseX,this.sketch.mouseY)}},{key:"draw",value:function(){this.sketch.mouseIsPressed&&this.animationFrame<12?this.animationFrame++:!this.sketch.mouseIsPressed&&this.animationFrame>0&&this.animationFrame--;var e=this.getPosition();this.sketch.stroke(100),this.sketch.strokeWeight(2),this.sketch.noFill(),this.sketch.ellipse(e.x,e.y,2*this.radius-this.easeInOutQuad(this.animationFrame)),this.sketch.noStroke(),this.sketch.fill(100),this.sketch.ellipse(e.x,e.y,this.radius/4+2*this.easeInOutQuad(this.animationFrame))}},{key:"easeInOutQuad",value:function(e){var t=e/12;return 12*(t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2)}}]),e}(),O=i(14),v=i.n(O),x=.4,k=function(){function e(t){Object(c.a)(this,e),this.sketch=t,this.position=t.createVector(t.random(t.width),t.random(t.height)),this.velocity=v.a.Vector.random2D(),this.velocity.setMag(3),this.acceleration=t.createVector(),this.resize()}return Object(o.a)(e,[{key:"resize",value:function(){this.size=.01*this.sketch.width}},{key:"edges",value:function(){this.position.x>this.sketch.width+this.size?this.position.x=-this.size:this.position.x<-this.size&&(this.position.x=this.sketch.width+this.size),this.position.y>this.sketch.height+this.size?this.position.y=-this.size:this.position.y<-this.size&&(this.position.y=this.sketch.height+this.size)}},{key:"flock",value:function(e,t){var i=this,n=this.sketch.createVector(),a=this.sketch.createVector(),s=this.sketch.createVector(),r=0,c=t.getPosition(),o=this.position.dist(c);if(o<t.radius&&o>0)if(this.sketch.mouseIsPressed)a.add(c),a.sub(this.position);else{var h=v.a.Vector.sub(this.position,c);h.mult(1/o),s.add(h)}else e.forEach((function(e){var t=i.position.dist(e.position);if(e!==i&&t<75&&t>0){n.add(e.velocity),a.add(e.position);var c=v.a.Vector.sub(i.position,e.position);c.mult(1/t),s.add(c),r++}}));r>0&&(n.setMag(3),n.sub(this.velocity),n.limit(x),n.mult(1.2),a.div(r),a.sub(this.position),a.setMag(3),a.sub(this.velocity),a.limit(x),a.mult(.8),s.div(r),s.setMag(3),s.sub(this.velocity),s.limit(x),s.mult(1)),this.acceleration.add(n),this.acceleration.add(a),this.acceleration.add(s)}},{key:"update",value:function(){this.position.add(this.velocity),this.acceleration.limit(x),this.velocity.add(this.acceleration),this.velocity.limit(3),this.acceleration.set(0,0),this.edges()}},{key:"draw",value:function(){var e=v.a.Vector.normalize(this.velocity);this.sketch.push(),this.sketch.stroke(100),this.sketch.strokeWeight(2),this.sketch.noFill(),this.sketch.translate(this.position.x,this.position.y),this.sketch.rotate(e.heading()),this.sketch.translate(e.mag(),0),this.sketch.triangle(0,this.size/3,0,-this.size/3,this.size,0),this.sketch.pop()}}]),e}(),y=(i(38),function(e){Object(h.a)(i,e);var t=Object(l.a)(i);function i(e){var n;return Object(c.a)(this,i),(n=t.call(this,e)).Sketch=function(e){var t,i=document.getElementById("Boids"),n=getComputedStyle(document.body).getPropertyValue("--gray"),a=Array(100);e.setup=function(){e.createCanvas(i.offsetWidth,i.offsetHeight),t=new g(e),a=a.fill().map((function(){return new k(e)}))},e.draw=function(){e.background(n),t.draw(),a.forEach((function(e){return e.flock(a,t)})),a.forEach((function(e){return e.update()})),a.forEach((function(e){return e.draw()}))},e.windowResized=function(){e.resizeCanvas(i.offsetWidth,i.offsetHeight),a.forEach((function(e){return e.resize()}))}},n.myRef=a.a.createRef(),n}return Object(o.a)(i,[{key:"componentDidMount",value:function(){this.p5=new v.a(this.Sketch,this.myRef.current)}},{key:"render",value:function(){return Object(d.jsx)("div",{id:"Boids",ref:this.myRef})}}]),i}(a.a.Component)),w=i.p+"static/media/kai-nakamura.5bce4bef.png",C=(i(39),function(e){Object(h.a)(i,e);var t=Object(l.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return Object(d.jsxs)("section",{className:"Hero",children:[Object(d.jsx)(y,{}),Object(d.jsxs)("div",{className:"HeroContent",children:[Object(d.jsxs)("div",{className:"Title",children:[Object(d.jsx)("h1",{children:"Hi, I'm Kai"}),Object(d.jsx)("h2",{children:"Software Dev / Student"})]}),Object(d.jsx)("img",{className:"ProfilePicture",src:w,alt:"Kai Nakamura"})]}),Object(d.jsxs)("div",{className:"Arrow",children:[Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{})]})]})}}]),i}(a.a.Component)),N=(i(40),function(e){Object(h.a)(i,e);var t=Object(l.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"Card",children:[Object(d.jsxs)("div",{className:"CardHeading",children:[null!=e.props.title?Object(d.jsx)("h1",{children:e.props.title}):null,null!=e.props.title?Object(d.jsx)("h2",{children:e.props.subtitle}):null,this.props.heading]}),this.props.img,Object(d.jsx)("div",{className:"CardDescription",children:this.props.children})]})}}]),i}(a.a.Component)),P=(i(41),function(e){Object(h.a)(i,e);var t=Object(l.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return Object(d.jsx)(N,{heading:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{className:this.props.language,children:this.props.language}),Object(d.jsx)("h1",{children:this.props.title})]}),img:this.props.img,children:this.props.children})}}]),i}(N)),S=(i(42),function(e){Object(h.a)(i,e);var t=Object(l.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){var e=this;return Object(d.jsx)("div",{className:"CardButton",onClick:this.props.onClick,children:null!=e.props.href&&"/"===e.props.href.charAt(0)?Object(d.jsx)(u.b,{to:e.props.href,children:Object(d.jsx)("span",{children:e.props.name})}):Object(d.jsx)("a",{href:e.props.href,target:"_blank",rel:"noreferrer noopener",children:Object(d.jsx)("span",{children:e.props.name})})})}}]),i}(a.a.Component)),R=i.p+"static/media/chess.59aa7ae7.png",I=i.p+"static/media/graphing-calculator.b27921d7.png",M=i.p+"static/media/speedrun-showdown.c8c0dc69.png",V=i.p+"static/media/workday-schedule-exporter.a216e06f.png",T=(i(22),function(e){Object(h.a)(i,e);var t=Object(l.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"Cards",children:[Object(d.jsxs)(P,{title:"Chess Engine",language:"javascript",img:Object(d.jsx)("img",{src:R,alt:"Kai Nakamura"}),children:[Object(d.jsxs)("p",{children:["This project is a work in progress. I plan to make an AI that can play chess using a ",Object(d.jsx)("a",{href:"https://en.wikipedia.org/wiki/Minimax",target:"_blank",rel:"noreferrer noopener",children:"minimax"})," algorithm."]}),Object(d.jsx)("p",{children:"Right now I have code for basic piece movement and capturing. Check out the current status of the project on GitHub."}),Object(d.jsx)(S,{name:"View on GitHub",href:"https://github.com/KaiNakamura/ChessEngine"})]}),Object(d.jsxs)(P,{title:"Graphing Calculator",language:"java",img:Object(d.jsx)("img",{src:I,alt:"Graphing Calculator"}),children:[Object(d.jsxs)("p",{children:["I built a ",Object(d.jsx)("a",{href:"https://en.wikipedia.org/wiki/Recursive_descent_parser",target:"_blank",rel:"noreferrer noopener",children:"recursive descent parser"})," graphing calculator using ",Object(d.jsx)("a",{href:"https://en.wikipedia.org/wiki/Context-free_grammar",target:"_blank",rel:"noreferrer noopener",children:"context-free grammar (CFG)"}),"."]}),Object(d.jsx)("p",{children:"Strings are converted into an expression tree that represents the steps used to evaluate the expression with respect to order of operations."}),Object(d.jsx)(S,{name:"View on GitHub",href:"https://github.com/KaiNakamura/GraphingCalculator"})]}),Object(d.jsxs)(P,{title:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("span",{children:"kainakamura."}),Object(d.jsx)("span",{children:"github.io"})]}),language:"reactjs",children:[Object(d.jsx)("p",{children:"You're looking at it right now! This is where I show off all the cool stuff I've been working on recently."}),Object(d.jsxs)("p",{children:["This website went through a lot of different changes but currently it's running on ",Object(d.jsx)("a",{href:"https://reactjs.org",target:"_blank",rel:"noreferrer noopener",children:"ReactJs"}),". Check out the GitHub repo to view the full history of my website."]}),Object(d.jsx)(S,{name:"View on GitHub",href:"https://github.com/KaiNakamura/kainakamura.github.io"})]}),Object(d.jsxs)(P,{title:"Speedrun Showdown",language:"java",img:Object(d.jsx)("img",{src:M,alt:"Speedrun Showdown"}),children:[Object(d.jsx)("p",{children:"This project is a Minecraft speedrunning and PvP plugin. Teams of players race to be the first to beat the game."}),Object(d.jsxs)("p",{children:["It was used in the ",Object(d.jsx)("a",{href:"https://smash.gg/mcss",target:"_blank",rel:"noreferrer noopener",children:"Minecraft Speedrun Showdown"})," tournament in which 32 streamers competed for a $1000 prize."]}),Object(d.jsx)(S,{name:"View on GitHub",href:"https://github.com/KaiNakamura/SpeedrunShowdown"})]}),Object(d.jsxs)(P,{title:"Workday Schedule Exporter",language:"reactjs",img:Object(d.jsx)("img",{src:V,alt:"Workday Schedule Exporter"}),children:[Object(d.jsxs)("p",{children:["This was the first project I ever made while at WPI. I made it with my roommate, ",Object(d.jsx)("a",{href:"https://github.com/Akalay27",target:"_blank",rel:"noreferrer noopener",children:"Adam"}),", so that students would have an easy way to export their Workday schedules to a calendar app of their choice."]}),Object(d.jsx)(S,{name:"View Website",href:"https://akalay27.github.io/workday-schedule-exporter/"}),Object(d.jsx)(S,{name:"View on GitHub",href:"https://github.com/Akalay27/workday-schedule-exporter"})]})]})}}]),i}(a.a.Component)),_=(i(43),function(){return Object(d.jsxs)("div",{className:"HomePage",children:[Object(d.jsx)(C,{}),Object(d.jsxs)("section",{className:"Content",children:[Object(d.jsxs)("p",{children:["I like programming robots, websites, games, and whatever else comes to mind. Right now I'm pursuing a Bachelor's in Computer Science at ",Object(d.jsx)("a",{href:"https://wpi.edu",target:"_blank",rel:"noreferrer noopener",children:"WPI"}),"."]}),Object(d.jsxs)("p",{children:["Check out some of the cool stuff I've been working on below. If you've got any questions or are interested in working with me feel free to ",Object(d.jsx)(u.b,{to:"contact",children:"shoot me an email"}),"."]})]}),Object(d.jsx)(T,{})]})}),z=(i(44),function(){return Object(d.jsx)("div",{className:"ProjectsPage",children:Object(d.jsx)(T,{})})}),D=i(10),E=(i(45),function(e){Object(h.a)(i,e);var t=Object(l.a)(i);function i(e){var n;return Object(c.a)(this,i),(n=t.call(this,e)).state={canPlay:!1,playing:!1,volumeControlsOpen:!1,currentTime:0,duration:0,volume:1,currentlyDragged:null},n.audioPlayerRef=a.a.createRef(),n.progressSliderRef=a.a.createRef(),n.volumeSliderRef=a.a.createRef(),n.canPlay=n.canPlay.bind(Object(D.a)(n)),n.ended=n.ended.bind(Object(D.a)(n)),n.togglePlay=n.togglePlay.bind(Object(D.a)(n)),n.toggleVolumeControls=n.toggleVolumeControls.bind(Object(D.a)(n)),n.updateTime=n.updateTime.bind(Object(D.a)(n)),n.updateVolume=n.updateVolume.bind(Object(D.a)(n)),n.mouseDown=n.mouseDown.bind(Object(D.a)(n)),n.mouseMove=n.mouseMove.bind(Object(D.a)(n)),n.mouseUp=n.mouseUp.bind(Object(D.a)(n)),n}return Object(o.a)(i,[{key:"canPlay",value:function(){this.setState({canPlay:!0,duration:this.audioPlayerRef.current.duration})}},{key:"ended",value:function(){this.setState({playing:!1,currentTime:0})}},{key:"togglePlay",value:function(){this.state.playing?this.audioPlayerRef.current.pause():this.audioPlayerRef.current.play(),this.setState((function(e){return{playing:!e.playing}}))}},{key:"toggleVolumeControls",value:function(){this.setState((function(e){return{volumeControlsOpen:!e.volumeControlsOpen}}))}},{key:"updateTime",value:function(){this.setState({currentTime:this.audioPlayerRef.current.currentTime})}},{key:"updateVolume",value:function(){this.setState({volume:this.audioPlayerRef.current.volume})}},{key:"mouseDown",value:function(e){this.isDraggable(e.target)&&this.setState({currentlyDragged:e.target})}},{key:"mouseMove",value:function(e){null!=this.state.currentlyDragged&&this[this.state.currentlyDragged.dataset.method](e)}},{key:"mouseUp",value:function(){this.setState({currentlyDragged:null})}},{key:"isDraggable",value:function(e){var t=!1;return Array.from(e.classList).forEach((function(e){"pin"===e&&(t=!0)})),t}},{key:"getRangeBox",value:function(e){var t=e.target,i=this.state.currentlyDragged;return"click"===e.type&&this.isDraggable(e.target)&&(t=e.target.parentElement.parentElement),"mousemove"!==e.type&&"touchmove"!==e.type||(t=i.parentElement.parentElement),t}},{key:"inRange",value:function(e){var t=this.getRangeBox(e);if(null==t)return!1;var i=t.getBoundingClientRect(),n=t.dataset.direction;if("horizontal"===n){var a=t.offsetLeft,s=a+t.offsetWidth;if(e.clientX<a||e.clientX>s)return!1}else if("vertical"===n){var r=i.top,c=r+t.offsetHeight;if(e.clientY<r||e.clientY>c)return!1}return!0}},{key:"getCoefficient",value:function(e){var t,i,n=this.getRangeBox(e),a=n.getBoundingClientRect(),s=0;if("touchmove"===e.type?(t=e.touches[0].clientX,i=e.touches[0].clientY):(t=e.clientX,i=e.clientY),"horizontal"===n.dataset.direction)s=(t-n.offsetLeft)/n.clientWidth;else if("vertical"===n.dataset.direction){var r=n.clientHeight;s=1-(i-a.top)/r}return s=Math.max(0,Math.min(1,s))}},{key:"changeProgress",value:function(e){if(this.inRange(e)){var t=this.audioPlayerRef.current;t.currentTime=t.duration*this.getCoefficient(e)}}},{key:"changeVolume",value:function(e){this.inRange(e)&&(this.audioPlayerRef.current.volume=this.getCoefficient(e),this.updateVolume())}},{key:"render",value:function(){var e=this,t=function(e){var t=Math.floor(e/60),i=Math.floor(e%60);return t+":"+(i<10?"0"+i:i)};return Object(d.jsxs)("div",{className:"CardAudio",onMouseDown:this.mouseDown,onMouseMove:this.mouseMove,onMouseUp:this.mouseUp,onMouseLeave:this.mouseUp,onTouchStart:this.mouseDown,onTouchMove:this.mouseMove,onTouchCancel:this.mouseUp,children:[e.state.canPlay?Object(d.jsx)("div",{className:e.state.playing?"pause-btn":"play-btn",onClick:e.togglePlay}):Object(d.jsx)("div",{className:"loading",children:Object(d.jsx)("div",{className:"spinner"})}),Object(d.jsxs)("div",{className:"controls",children:[Object(d.jsx)("span",{className:"current-time",children:t(this.state.currentTime)}),Object(d.jsx)("div",{className:"slider",ref:this.progressSliderRef,"data-direction":"horizontal",onClick:function(t){return e.changeProgress(t)},children:Object(d.jsx)("div",{className:"slider-bar",style:{width:function(){var t=e.state.currentTime,i=e.state.duration,n=0;return 0!==i&&(n=t/i*100),n+"%"}()},children:Object(d.jsx)("div",{className:"pin",id:"progress-pin","data-method":"changeProgress"})})}),Object(d.jsx)("span",{className:"total-time",children:t(this.state.duration)})]}),Object(d.jsxs)("div",{className:"volume",children:[Object(d.jsx)("div",{className:"volume-btn",onClick:this.toggleVolumeControls}),e.state.volumeControlsOpen?Object(d.jsx)("div",{className:"volume-controls",children:Object(d.jsx)("div",{className:"slider",ref:e.volumeSliderRef,"data-direction":"vertical",onClick:function(t){return e.changeVolume(t)},children:Object(d.jsx)("div",{className:"slider-bar",style:{height:100*e.state.volume+"%"},children:Object(d.jsx)("div",{className:"pin",id:"volume-pin","data-method":"changeVolume"})})})}):null]}),Object(d.jsx)("audio",{crossOrigin:"anonymous",ref:this.audioPlayerRef,onCanPlay:this.canPlay,onLoadedMetadata:this.canPlay,onTimeUpdate:this.updateTime,onEnded:this.ended,children:Object(d.jsx)("source",{src:this.props.audio,type:"audio/mpeg"})})]})}}]),i}(a.a.Component)),F=i.p+"static/media/Gravity_Cycles.353b12fe.mp3",B=i.p+"static/media/There_Will_Come_Soft_Rains.103f4167.mp3",H=i.p+"static/media/Deep_Blue_255.0321d97f.mp3",A=i.p+"static/media/Saccharine_Squares.9968f5d2.mp3",W=i.p+"static/media/Reverse_Entropy.98d86986.mp3",G=function(e){Object(h.a)(i,e);var t=Object(l.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"Cards",children:[Object(d.jsxs)(N,{title:"Gravity Cycles",children:[Object(d.jsxs)("p",{children:["I made this piece for my final project in my Electronic Music Composition class taught by professor ",Object(d.jsx)("a",{href:"https://www.vjmanzo.com/",target:"_blank",rel:"noreferrer noopener",children:"V.J. Manzo"}),"."]}),Object(d.jsx)("p",{children:"I wanted to make something that would showcase what I've learned over the duration of this course. So I took several unfinished projects I made before taking this class and remixed them all together in the style of a chiptune song."}),Object(d.jsx)(E,{audio:F})]}),Object(d.jsxs)(N,{title:"There Will Come Soft Rains",children:[Object(d.jsxs)("p",{children:["I was inspired to make this piece by a chapter from my favorite book, ",Object(d.jsx)("a",{href:"https://en.wikipedia.org/wiki/The_Martian_Chronicles",target:"_blank",rel:"noreferrer noopener",children:"The Martian Chronicles"})," by Ray Bradbury."]}),Object(d.jsx)("p",{children:"I used voice lines from an audiobook to tell the story and experimented with different instrumentation to fit the mood."}),Object(d.jsx)(E,{audio:B})]}),Object(d.jsxs)(N,{title:"Deep Blue 255",children:[Object(d.jsx)("p",{children:"An ambient piece I made by using a very spacy pad with lots of reverb. I also added some frequency sweeps so the sound of the pad is always changing."}),Object(d.jsx)("p",{children:"All the while a random number generator plays notes on a quiet bell."}),Object(d.jsx)(E,{audio:H})]}),Object(d.jsxs)(N,{title:"Saccharine Squares",children:[Object(d.jsx)("p",{children:"A fun 8-bit chiptune melody I wrote to be used for a 2D platformer."}),Object(d.jsx)(E,{audio:A})]}),Object(d.jsxs)(N,{title:"Reverse Entropy",children:[Object(d.jsx)("p",{children:"My stab at creating an EDM beat with some different synths I made."}),Object(d.jsx)(E,{audio:W})]})]})}}]),i}(a.a.Component),K=(i(46),function(){return Object(d.jsx)("div",{className:"MusicPage",children:Object(d.jsx)(G,{})})}),U=(i(47),function(){return Object(d.jsx)("div",{className:"ContactPage",children:Object(d.jsxs)("section",{className:"Content",children:[Object(d.jsx)("h1",{children:"Contact"}),Object(d.jsxs)("p",{children:["Email: ",Object(d.jsx)("a",{target:"_blank",rel:"noreferrer noopener",href:"mailto:kaihnakamura@gmail.com",children:"kaihnakamura@gmail.com"})]})]})})}),L=(i(48),function(){return Object(d.jsx)("div",{className:"NotFoundPage",children:Object(d.jsxs)("section",{className:"Content",children:[Object(d.jsx)("h1",{children:"404: Page Not Found"}),Object(d.jsx)(u.b,{to:"/",children:"Go to Home"})]})})}),Y=i(6);function X(){var e=Object(Y.f)().pathname;return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var q=function(){return Object(d.jsx)(u.a,{children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(m,{}),Object(d.jsx)(X,{}),Object(d.jsxs)(Y.c,{children:[Object(d.jsx)(Y.a,{exact:!0,path:"/",component:_}),Object(d.jsx)(Y.a,{path:"/projects",component:z}),Object(d.jsx)(Y.a,{path:"/music",component:K}),Object(d.jsx)(Y.a,{path:"/contact",component:U}),Object(d.jsx)(Y.a,{path:"*",component:L})]}),Object(d.jsx)(f,{})]})})},J=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,50)).then((function(t){var i=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;i(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(q,{})}),document.getElementById("root")),J()}},[[49,1,2]]]);
//# sourceMappingURL=main.6519b067.chunk.js.map