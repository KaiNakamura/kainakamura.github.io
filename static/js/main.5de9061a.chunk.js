(this["webpackJsonpkainakamura.github.io"]=this["webpackJsonpkainakamura.github.io"]||[]).push([[0],{22:function(e,t,i){},29:function(e,t,i){},35:function(e,t,i){},36:function(e,t,i){},37:function(e,t,i){},38:function(e,t,i){},39:function(e,t,i){},40:function(e,t,i){},41:function(e,t,i){},42:function(e,t,i){},43:function(e,t,i){},44:function(e,t,i){},45:function(e,t,i){},46:function(e,t,i){},47:function(e,t,i){},48:function(e,t,i){},49:function(e,t,i){"use strict";i.r(t);var s=i(1),n=i.n(s),a=i(23),r=i.n(a),c=(i(29),i(2)),o=i(3),h=i(5),l=i(4),u=i(12),d=i(0),j=function(e){Object(h.a)(i,e);var t=Object(l.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return Object(d.jsx)("li",{children:Object(d.jsx)(u.c,{exact:"/"===this.props.href,to:this.props.href,activeClassName:"active",children:this.props.name})})}}]),i}(n.a.Component),p=(i(35),function(e){Object(h.a)(i,e);var t=Object(l.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"handleClick",value:function(e){this.setState({active:e})}},{key:"render",value:function(){return Object(d.jsx)("nav",{className:"Navbar",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)(j,{name:"Kai Nakamura",href:"/"}),Object(d.jsx)(j,{name:"Projects",href:"projects"}),Object(d.jsx)(j,{name:"Music",href:"music"}),Object(d.jsx)(j,{name:"Contact",href:"contact"})]})})}}]),i}(n.a.Component)),m=(i(36),function(e){Object(h.a)(i,e);var t=Object(l.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return Object(d.jsx)("header",{className:"Header",children:Object(d.jsx)(p,{})})}}]),i}(n.a.Component)),b=function(e){Object(h.a)(i,e);var t=Object(l.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:this.props.href,target:"_blank",rel:"noreferrer noopener",children:this.props.name})})}}]),i}(n.a.Component),f=(i(37),function(e){Object(h.a)(i,e);var t=Object(l.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return Object(d.jsx)("footer",{className:"Footer",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)(b,{name:"Source Code",href:"https://github.com/KaiNakamura/kainakamura.github.io"}),Object(d.jsx)(b,{name:"Report Bug",href:"https://github.com/KaiNakamura/kainakamura.github.io/issues"})]})})}}]),i}(n.a.Component)),g=function(){function e(t){Object(c.a)(this,e),this.sketch=t,this.radius=100,this.animationFrame=0,this.sketch.mouseX=-this.radius,this.sketch.mouseY=-this.radius}return Object(o.a)(e,[{key:"getPosition",value:function(){return[/Android/i,/webOS/i,/iPhone/i,/iPad/i,/iPod/i,/BlackBerry/i,/Windows Phone/i].some((function(e){return navigator.userAgent.match(e)}))&&!this.sketch.mouseIsPressed?this.sketch.createVector(-this.radius,-this.radius):this.sketch.createVector(this.sketch.mouseX,this.sketch.mouseY)}},{key:"draw",value:function(){this.sketch.mouseIsPressed&&this.animationFrame<12?this.animationFrame++:!this.sketch.mouseIsPressed&&this.animationFrame>0&&this.animationFrame--;var e=this.getPosition();this.sketch.stroke(100),this.sketch.strokeWeight(2),this.sketch.noFill(),this.sketch.ellipse(e.x,e.y,2*this.radius-this.easeInOutQuad(this.animationFrame)),this.sketch.noStroke(),this.sketch.fill(100),this.sketch.ellipse(e.x,e.y,this.radius/4+2*this.easeInOutQuad(this.animationFrame))}},{key:"easeInOutQuad",value:function(e){var t=e/12;return 12*(t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2)}}]),e}(),O=i(14),x=i.n(O),v=.4,k=function(){function e(t){Object(c.a)(this,e),this.sketch=t,this.position=t.createVector(t.random(t.width),t.random(t.height)),this.velocity=x.a.Vector.random2D(),this.velocity.setMag(3),this.acceleration=t.createVector(),this.resize()}return Object(o.a)(e,[{key:"resize",value:function(){this.size=.01*this.sketch.width}},{key:"edges",value:function(){this.position.x>this.sketch.width+this.size?this.position.x=-this.size:this.position.x<-this.size&&(this.position.x=this.sketch.width+this.size),this.position.y>this.sketch.height+this.size?this.position.y=-this.size:this.position.y<-this.size&&(this.position.y=this.sketch.height+this.size)}},{key:"flock",value:function(e,t){var i=this,s=this.sketch.createVector(),n=this.sketch.createVector(),a=this.sketch.createVector(),r=0,c=t.getPosition(),o=this.position.dist(c);if(o<t.radius&&o>0)if(this.sketch.mouseIsPressed)n.add(c),n.sub(this.position);else{var h=x.a.Vector.sub(this.position,c);h.mult(1/o),a.add(h)}else e.forEach((function(e){var t=i.position.dist(e.position);if(e!==i&&t<75&&t>0){s.add(e.velocity),n.add(e.position);var c=x.a.Vector.sub(i.position,e.position);c.mult(1/t),a.add(c),r++}}));r>0&&(s.setMag(3),s.sub(this.velocity),s.limit(v),s.mult(1.2),n.div(r),n.sub(this.position),n.setMag(3),n.sub(this.velocity),n.limit(v),n.mult(.8),a.div(r),a.setMag(3),a.sub(this.velocity),a.limit(v),a.mult(1)),this.acceleration.add(s),this.acceleration.add(n),this.acceleration.add(a)}},{key:"update",value:function(){this.position.add(this.velocity),this.acceleration.limit(v),this.velocity.add(this.acceleration),this.velocity.limit(3),this.acceleration.set(0,0),this.edges()}},{key:"draw",value:function(){var e=x.a.Vector.normalize(this.velocity);this.sketch.push(),this.sketch.stroke(100),this.sketch.strokeWeight(2),this.sketch.noFill(),this.sketch.translate(this.position.x,this.position.y),this.sketch.rotate(e.heading()),this.sketch.translate(e.mag(),0),this.sketch.triangle(0,this.size/3,0,-this.size/3,this.size,0),this.sketch.pop()}}]),e}(),y=(i(38),function(e){Object(h.a)(i,e);var t=Object(l.a)(i);function i(e){var s;return Object(c.a)(this,i),(s=t.call(this,e)).Sketch=function(e){var t,i=document.getElementById("Boids"),s=getComputedStyle(document.body).getPropertyValue("--gray"),n=Array(100);e.setup=function(){e.createCanvas(i.offsetWidth,i.offsetHeight),t=new g(e),n=n.fill().map((function(){return new k(e)}))},e.draw=function(){e.background(s),t.draw(),n.forEach((function(e){return e.flock(n,t)})),n.forEach((function(e){return e.update()})),n.forEach((function(e){return e.draw()}))},e.windowResized=function(){e.resizeCanvas(i.offsetWidth,i.offsetHeight),n.forEach((function(e){return e.resize()}))}},s.myRef=n.a.createRef(),s}return Object(o.a)(i,[{key:"componentDidMount",value:function(){this.p5=new x.a(this.Sketch,this.myRef.current)}},{key:"render",value:function(){return Object(d.jsx)("div",{id:"Boids",ref:this.myRef})}}]),i}(n.a.Component)),w=i.p+"static/media/kai-nakamura.5bce4bef.png",C=(i(39),function(e){Object(h.a)(i,e);var t=Object(l.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return Object(d.jsxs)("section",{className:"Hero",children:[Object(d.jsx)(y,{}),Object(d.jsxs)("div",{className:"HeroContent",children:[Object(d.jsxs)("div",{className:"Title",children:[Object(d.jsx)("h1",{children:"Hi, I'm Kai"}),Object(d.jsx)("h2",{children:"Software Dev / Student"})]}),Object(d.jsx)("img",{className:"ProfilePicture",src:w,alt:"Kai Nakamura"})]}),Object(d.jsxs)("div",{className:"Arrow",children:[Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{})]})]})}}]),i}(n.a.Component)),A=(i(40),function(e){Object(h.a)(i,e);var t=Object(l.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"Card",children:[Object(d.jsxs)("div",{className:"CardHeading",children:[null!=e.props.title?Object(d.jsx)("h1",{children:e.props.title}):null,null!=e.props.title?Object(d.jsx)("h2",{children:e.props.subtitle}):null,this.props.heading]}),this.props.img,Object(d.jsx)("div",{className:"CardDescription",children:this.props.children})]})}}]),i}(n.a.Component)),G=(i(41),function(e){Object(h.a)(i,e);var t=Object(l.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return Object(d.jsx)(A,{heading:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{className:this.props.language,children:this.props.language}),Object(d.jsx)("h1",{children:this.props.title})]}),img:this.props.img,children:this.props.children})}}]),i}(A)),Y=(i(42),function(e){Object(h.a)(i,e);var t=Object(l.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){var e=this;return Object(d.jsx)("div",{className:"CardButton",onClick:this.props.onClick,children:null!=e.props.href&&"/"===e.props.href.charAt(0)?Object(d.jsx)(u.b,{to:e.props.href,children:Object(d.jsx)("span",{children:e.props.name})}):Object(d.jsx)("a",{href:e.props.href,target:"_blank",rel:"noreferrer noopener",children:Object(d.jsx)("span",{children:e.props.name})})})}}]),i}(n.a.Component)),M=i.p+"static/media/chess.59aa7ae7.png",E=i.p+"static/media/graphing-calculator.b27921d7.png",I=i.p+"static/media/speedrun-showdown.c8c0dc69.png",N=i.p+"static/media/workday-schedule-exporter.a216e06f.png",R=(i(22),function(e){Object(h.a)(i,e);var t=Object(l.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"Cards",children:[Object(d.jsxs)(G,{title:"Chess Engine",language:"javascript",img:Object(d.jsx)("img",{src:M,alt:"Chess"}),children:[Object(d.jsxs)("p",{children:["This project is a work in progress. I plan to make an AI that can play chess using a ",Object(d.jsx)("a",{href:"https://en.wikipedia.org/wiki/Minimax",target:"_blank",rel:"noreferrer noopener",children:"minimax"})," algorithm."]}),Object(d.jsx)("p",{children:"Right now I have code for basic piece movement and capturing. Check out the current status of the project on GitHub."}),Object(d.jsx)(Y,{name:"View on GitHub",href:"https://github.com/KaiNakamura/ChessEngine"})]}),Object(d.jsxs)(G,{title:"Gun Gator",language:"gdscript",img:Object(d.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAMAAABOo35HAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAYUExURf/x6AAAADSXQf/u4/++k9WFYB5lQwAAAP00iR8AAAAIdFJOU/////////8A3oO9WQAAAAlwSFlzAAAOwwAADsMBx2+oZAAABR1JREFUeF7t2EtuHEsUA1G/r/a/Y09iQICGdYmWSrYRZ1qZXcUY9rc3nRlrYKyBsQbGGhhrYKyBsQbGGhhrYKyBsQbGGhhrYKyBsQbGGhhrYKzBB8T69qdjp7Eu2GmsC3Ya64Kdxrpgp7Eu2GmsC3Ya64Kdxrpgp7Eu2GmsC3Ya64Kdxrpgp7Eu2GmsC3Ya64Kdxrpgp7Eu2GmsC3busbif/vqjMCox3ViFUYnpxiqMSkw3VmFUYrqxCqMS041VGJWYbqzCqMR0YxVGJaYbqzAqMd1YhVGJ6cYqjEpMN1ZhVGK6sQqjEtONVRiVmG6swqjEdGMVRiWmG6swKjHdWIVRienvxOJw4ifT378vFiR2JmoYq7AzUcNYhZ2JGsYq7EzUMFZhZ6KGsQo7EzWMVdiZqGGsws5EDWMVdiZqGKuwM1HDWIWdiRrGKuxM1DBWYWeihrEKOxM1jFXYmahhrMLORA1jFXYmahirsDNRw1iFnYkaGYsnifuJt/wcZ9/B4a/ElySmJwIZqzA9EchYhemJQMYqTE8EMlZheiKQsQrTE4GMVZieCGSswvREIGMVpicCGaswPRHIWIXpiUDGKkxPBDJWYXoikLEK0xOBjFWYnghkrML0RCBjFaYnAhmrMD0RyFiF6YlAnxTrB7j+Dg4/htcmpicCGaswPRHIWIXpiUDGKkxPBDJWYXoikLEK0xOBjFWYnghkrML0RCBjFaYnAhmrMD0RyFiF6YlAxipMTwQyVmF6IpCxCtMTgYxVmJ4IZKzC9EQgYxWmJwIZqzA9EchYhemJQF8aiydfiS9JTE8EMlZheiKQsQrTE4GMVZieCGSswvREIGMVpicCGaswPRHIWIXpiUDGKkxPBDJWYXoikLEK0xOBjFWYnghkrML0RCBjFaYnAhmrMD0RyFiF6YlAxipMTwQyVmF6ItBzsX5NjEpMTwQyVmF6IpCxCtMTgYxVmJ4IZKzC9EQgYxWmJwIZqzA9EchYhemJQMYqTE8EMlZheiKQsQrTE4GMVZieCGSswvREIGMVpicCGaswPRHIWIXpiUDGKkxPBDJWYXoikLEK0xOBfrVY/xRe+xymJwIZqzA9EchYhemJQMYqTE8EMlZheiKQsQrTE4GMVZieCGSswvREIGMVpicCGaswPRHIWIXpiUDGKkxPBDJWYXoikLEK0xOBjFWYnghkrML0RCBjFaYnAhmrMD0RyFiF6YlAz8X691PxcYkJH4FAxrogkLEuCGSsCwIZ64JAxrogkLEuCGSsCwIZ64JAxrogkLEuCGSsCwIZ64JAxrogkLEuCGSsCwIZ64JAxrogkLEuCPRJsf57Gh+XmBDY+QJjDYw1MNbAWANjDYw1MNbAWANjDYw1MNbAWANjDYw1MNbAWANjDdZY/1/wZ+9z+LjEhMDOFxhrYKyBsQbGGhhrYKyBsQbGGhhrYKyBsQbGGhhrYKyBsQbGGhhrYKzBB8TiyWMIlHiSmBDY+QJjDYw1MNbAWANjDYw1MNbAWANjDYw1MNbAWANjDYw1MNbAWANjDYw1WGP9AIcfw2vfweHAzhcYa2CsgbEGxhoYa2CsgbEGxhoYa2CsgbEGxhoYa2CsgbEGxhoYa2CswU9j3XD/Mbx2xvUXGGtgrIGxBsYaGGtgrIGxBsYaGGtgrIGxBsYaGGtgrIGxBsYaGGvw+NTfmbEGxhoYa2CsgbEGxhoYa2CsgbEGxhoYa2CsgbEGxhoYa2CsgbEGxjp7e/sO7/ErNubniHIAAAAASUVORK5CYII=",alt:"Gun Gator"}),children:[Object(d.jsxs)("p",{children:["I made this 2D pixel platformer while I was learning how to use the ",Object(d.jsx)("a",{href:"https://godotengine.org/",target:"_blank",rel:"noreferrer noopener",children:"Godot game engine"}),"."]}),Object(d.jsxs)("p",{children:["The game is heavily inspired by Vlambeer's outstanding ",Object(d.jsx)("a",{href:"http://supercratebox.com/",target:"_blank",rel:"noreferrer noopener",children:"Super Crate Box"}),", but with my own art, music, and code."]}),Object(d.jsx)(Y,{name:"Play on Itch.io",href:"https://kainakamura.itch.io/gun-gator"}),Object(d.jsx)(Y,{name:"View on GitHub",href:"https://github.com/KaiNakamura/GunGator"})]}),Object(d.jsxs)(G,{title:"Graphing Calculator",language:"java",img:Object(d.jsx)("img",{src:E,alt:"Graphing Calculator"}),children:[Object(d.jsxs)("p",{children:["I built a ",Object(d.jsx)("a",{href:"https://en.wikipedia.org/wiki/Recursive_descent_parser",target:"_blank",rel:"noreferrer noopener",children:"recursive descent parser"})," graphing calculator using ",Object(d.jsx)("a",{href:"https://en.wikipedia.org/wiki/Context-free_grammar",target:"_blank",rel:"noreferrer noopener",children:"context-free grammar (CFG)"}),"."]}),Object(d.jsx)("p",{children:"Strings are converted into an expression tree that represents the steps used to evaluate the expression with respect to order of operations."}),Object(d.jsx)(Y,{name:"View on GitHub",href:"https://github.com/KaiNakamura/GraphingCalculator"})]}),Object(d.jsxs)(G,{title:"kainakamura.github.io",language:"reactjs",children:[Object(d.jsx)("p",{children:"You're looking at it right now! This is where I show off all the cool stuff I've been working on recently."}),Object(d.jsxs)("p",{children:["This website went through a lot of different changes but currently it's running on ",Object(d.jsx)("a",{href:"https://reactjs.org",target:"_blank",rel:"noreferrer noopener",children:"ReactJs"}),". Check out the GitHub repo to view the full history of my website."]}),Object(d.jsx)(Y,{name:"View on GitHub",href:"https://github.com/KaiNakamura/kainakamura.github.io"})]}),Object(d.jsxs)(G,{title:"Speedrun Showdown",language:"java",img:Object(d.jsx)("img",{src:I,alt:"Speedrun Showdown"}),children:[Object(d.jsx)("p",{children:"This project is a Minecraft speedrunning and PvP plugin. Teams of players race to be the first to beat the game."}),Object(d.jsxs)("p",{children:["It was used in the ",Object(d.jsx)("a",{href:"https://smash.gg/mcss",target:"_blank",rel:"noreferrer noopener",children:"Minecraft Speedrun Showdown"})," tournament in which 32 streamers competed for a $1000 prize."]}),Object(d.jsx)(Y,{name:"View on GitHub",href:"https://github.com/KaiNakamura/SpeedrunShowdown"})]}),Object(d.jsxs)(G,{title:"Workday Schedule Exporter",language:"reactjs",img:Object(d.jsx)("img",{src:N,alt:"Workday Schedule Exporter"}),children:[Object(d.jsxs)("p",{children:["This was the first project I ever made while at WPI. I made it with my roommate, ",Object(d.jsx)("a",{href:"https://github.com/Akalay27",target:"_blank",rel:"noreferrer noopener",children:"Adam"}),", so that students would have an easy way to export their Workday schedules to a calendar app of their choice."]}),Object(d.jsx)(Y,{name:"View Website",href:"https://akalay27.github.io/workday-schedule-exporter/"}),Object(d.jsx)(Y,{name:"View on GitHub",href:"https://github.com/Akalay27/workday-schedule-exporter"})]})]})}}]),i}(n.a.Component)),P=(i(43),function(){return Object(d.jsxs)("div",{className:"HomePage",children:[Object(d.jsx)(C,{}),Object(d.jsxs)("section",{className:"Content",children:[Object(d.jsxs)("p",{children:["I like programming robots, websites, games, and whatever else comes to mind. Right now I'm pursuing a Bachelor's in Computer Science at ",Object(d.jsx)("a",{href:"https://wpi.edu",target:"_blank",rel:"noreferrer noopener",children:"WPI"}),"."]}),Object(d.jsxs)("p",{children:["Check out some of the cool stuff I've been working on below. If you've got any questions or are interested in working with me feel free to ",Object(d.jsx)(u.b,{to:"contact",children:"shoot me an email"}),"."]})]}),Object(d.jsx)(R,{})]})}),S=(i(44),function(){return Object(d.jsx)("div",{className:"ProjectsPage",children:Object(d.jsx)(R,{})})}),B=i(10),D=(i(45),function(e){Object(h.a)(i,e);var t=Object(l.a)(i);function i(e){var s;return Object(c.a)(this,i),(s=t.call(this,e)).state={canPlay:!1,playing:!1,volumeControlsOpen:!1,currentTime:0,duration:0,volume:1,currentlyDragged:null},s.audioPlayerRef=n.a.createRef(),s.progressSliderRef=n.a.createRef(),s.volumeSliderRef=n.a.createRef(),s.canPlay=s.canPlay.bind(Object(B.a)(s)),s.ended=s.ended.bind(Object(B.a)(s)),s.togglePlay=s.togglePlay.bind(Object(B.a)(s)),s.toggleVolumeControls=s.toggleVolumeControls.bind(Object(B.a)(s)),s.updateTime=s.updateTime.bind(Object(B.a)(s)),s.updateVolume=s.updateVolume.bind(Object(B.a)(s)),s.mouseDown=s.mouseDown.bind(Object(B.a)(s)),s.mouseMove=s.mouseMove.bind(Object(B.a)(s)),s.mouseUp=s.mouseUp.bind(Object(B.a)(s)),s}return Object(o.a)(i,[{key:"canPlay",value:function(){this.setState({canPlay:!0,duration:this.audioPlayerRef.current.duration})}},{key:"ended",value:function(){this.setState({playing:!1,currentTime:0})}},{key:"togglePlay",value:function(){this.state.playing?this.audioPlayerRef.current.pause():this.audioPlayerRef.current.play(),this.setState((function(e){return{playing:!e.playing}}))}},{key:"toggleVolumeControls",value:function(){this.setState((function(e){return{volumeControlsOpen:!e.volumeControlsOpen}}))}},{key:"updateTime",value:function(){this.setState({currentTime:this.audioPlayerRef.current.currentTime})}},{key:"updateVolume",value:function(){this.setState({volume:this.audioPlayerRef.current.volume})}},{key:"mouseDown",value:function(e){this.isDraggable(e.target)&&this.setState({currentlyDragged:e.target})}},{key:"mouseMove",value:function(e){null!=this.state.currentlyDragged&&this[this.state.currentlyDragged.dataset.method](e)}},{key:"mouseUp",value:function(){this.setState({currentlyDragged:null})}},{key:"isDraggable",value:function(e){var t=!1;return Array.from(e.classList).forEach((function(e){"pin"===e&&(t=!0)})),t}},{key:"getRangeBox",value:function(e){var t=e.target,i=this.state.currentlyDragged;return"click"===e.type&&this.isDraggable(e.target)&&(t=e.target.parentElement.parentElement),"mousemove"!==e.type&&"touchmove"!==e.type||(t=i.parentElement.parentElement),t}},{key:"inRange",value:function(e){var t=this.getRangeBox(e);if(null==t)return!1;var i=t.getBoundingClientRect(),s=t.dataset.direction;if("horizontal"===s){var n=t.offsetLeft,a=n+t.offsetWidth;if(e.clientX<n||e.clientX>a)return!1}else if("vertical"===s){var r=i.top,c=r+t.offsetHeight;if(e.clientY<r||e.clientY>c)return!1}return!0}},{key:"getCoefficient",value:function(e){var t,i,s=this.getRangeBox(e),n=s.getBoundingClientRect(),a=0;if("touchmove"===e.type?(t=e.touches[0].clientX,i=e.touches[0].clientY):(t=e.clientX,i=e.clientY),"horizontal"===s.dataset.direction)a=(t-s.offsetLeft)/s.clientWidth;else if("vertical"===s.dataset.direction){var r=s.clientHeight;a=1-(i-n.top)/r}return a=Math.max(0,Math.min(1,a))}},{key:"changeProgress",value:function(e){if(this.inRange(e)){var t=this.audioPlayerRef.current;t.currentTime=t.duration*this.getCoefficient(e)}}},{key:"changeVolume",value:function(e){this.inRange(e)&&(this.audioPlayerRef.current.volume=this.getCoefficient(e),this.updateVolume())}},{key:"render",value:function(){var e=this,t=function(e){var t=Math.floor(e/60),i=Math.floor(e%60);return t+":"+(i<10?"0"+i:i)};return Object(d.jsxs)("div",{className:"CardAudio",onMouseDown:this.mouseDown,onMouseMove:this.mouseMove,onMouseUp:this.mouseUp,onMouseLeave:this.mouseUp,onTouchStart:this.mouseDown,onTouchMove:this.mouseMove,onTouchCancel:this.mouseUp,children:[e.state.canPlay?Object(d.jsx)("div",{className:e.state.playing?"pause-btn":"play-btn",onClick:e.togglePlay}):Object(d.jsx)("div",{className:"loading",children:Object(d.jsx)("div",{className:"spinner"})}),Object(d.jsxs)("div",{className:"controls",children:[Object(d.jsx)("span",{className:"current-time",children:t(this.state.currentTime)}),Object(d.jsx)("div",{className:"slider",ref:this.progressSliderRef,"data-direction":"horizontal",onClick:function(t){return e.changeProgress(t)},children:Object(d.jsx)("div",{className:"slider-bar",style:{width:function(){var t=e.state.currentTime,i=e.state.duration,s=0;return 0!==i&&(s=t/i*100),s+"%"}()},children:Object(d.jsx)("div",{className:"pin",id:"progress-pin","data-method":"changeProgress"})})}),Object(d.jsx)("span",{className:"total-time",children:t(this.state.duration)})]}),Object(d.jsxs)("div",{className:"volume",children:[Object(d.jsx)("div",{className:"volume-btn",onClick:this.toggleVolumeControls}),e.state.volumeControlsOpen?Object(d.jsx)("div",{className:"volume-controls",children:Object(d.jsx)("div",{className:"slider",ref:e.volumeSliderRef,"data-direction":"vertical",onClick:function(t){return e.changeVolume(t)},children:Object(d.jsx)("div",{className:"slider-bar",style:{height:100*e.state.volume+"%"},children:Object(d.jsx)("div",{className:"pin",id:"volume-pin","data-method":"changeVolume"})})})}):null]}),Object(d.jsx)("audio",{crossOrigin:"anonymous",ref:this.audioPlayerRef,onCanPlay:this.canPlay,onLoadedMetadata:this.canPlay,onTimeUpdate:this.updateTime,onEnded:this.ended,children:Object(d.jsx)("source",{src:this.props.audio,type:"audio/mpeg"})})]})}}]),i}(n.a.Component)),V=i.p+"static/media/Gravity_Cycles.353b12fe.mp3",W=i.p+"static/media/There_Will_Come_Soft_Rains.103f4167.mp3",F=i.p+"static/media/Deep_Blue_255.0321d97f.mp3",K=i.p+"static/media/Saccharine_Squares.9968f5d2.mp3",T=i.p+"static/media/Reverse_Entropy.98d86986.mp3",z=function(e){Object(h.a)(i,e);var t=Object(l.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"Cards",children:[Object(d.jsxs)(A,{title:"Gravity Cycles",children:[Object(d.jsxs)("p",{children:["I made this piece for my final project in my Electronic Music Composition class taught by professor ",Object(d.jsx)("a",{href:"https://www.vjmanzo.com/",target:"_blank",rel:"noreferrer noopener",children:"V.J. Manzo"}),"."]}),Object(d.jsx)("p",{children:"I wanted to make something that would showcase what I've learned over the duration of this course. So I took several unfinished projects I made before taking this class and remixed them all together in the style of a chiptune song."}),Object(d.jsx)(D,{audio:V})]}),Object(d.jsxs)(A,{title:"There Will Come Soft Rains",children:[Object(d.jsxs)("p",{children:["I was inspired to make this piece by a chapter from my favorite book, ",Object(d.jsx)("a",{href:"https://en.wikipedia.org/wiki/The_Martian_Chronicles",target:"_blank",rel:"noreferrer noopener",children:"The Martian Chronicles"})," by Ray Bradbury."]}),Object(d.jsx)("p",{children:"I used voice lines from an audiobook to tell the story and experimented with different instrumentation to fit the mood."}),Object(d.jsx)(D,{audio:W})]}),Object(d.jsxs)(A,{title:"Deep Blue 255",children:[Object(d.jsx)("p",{children:"An ambient piece I made by using a very spacy pad with lots of reverb. I also added some frequency sweeps so the sound of the pad is always changing."}),Object(d.jsx)("p",{children:"All the while a random number generator plays notes on a quiet bell."}),Object(d.jsx)(D,{audio:F})]}),Object(d.jsxs)(A,{title:"Saccharine Squares",children:[Object(d.jsx)("p",{children:"A fun 8-bit chiptune melody I wrote to be used for a 2D platformer."}),Object(d.jsx)(D,{audio:K})]}),Object(d.jsxs)(A,{title:"Reverse Entropy",children:[Object(d.jsx)("p",{children:"My stab at creating an EDM beat with some different synths I made."}),Object(d.jsx)(D,{audio:T})]})]})}}]),i}(n.a.Component),Q=(i(46),function(){return Object(d.jsx)("div",{className:"MusicPage",children:Object(d.jsx)(z,{})})}),J=(i(47),function(){return Object(d.jsx)("div",{className:"ContactPage",children:Object(d.jsxs)("section",{className:"Content",children:[Object(d.jsx)("h1",{children:"Contact"}),Object(d.jsxs)("p",{children:["Email: ",Object(d.jsx)("a",{target:"_blank",rel:"noreferrer noopener",href:"mailto:kaihnakamura@gmail.com",children:"kaihnakamura@gmail.com"})]})]})})}),H=(i(48),function(){return Object(d.jsx)("div",{className:"NotFoundPage",children:Object(d.jsxs)("section",{className:"Content",children:[Object(d.jsx)("h1",{children:"404: Page Not Found"}),Object(d.jsx)(u.b,{to:"/",children:"Go to Home"})]})})}),U=i(6);function Z(){var e=Object(U.f)().pathname;return Object(s.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var q=function(){return Object(d.jsx)(u.a,{children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(m,{}),Object(d.jsx)(Z,{}),Object(d.jsxs)(U.c,{children:[Object(d.jsx)(U.a,{exact:!0,path:"/",component:P}),Object(d.jsx)(U.a,{path:"/projects",component:S}),Object(d.jsx)(U.a,{path:"/music",component:Q}),Object(d.jsx)(U.a,{path:"/contact",component:J}),Object(d.jsx)(U.a,{path:"*",component:H})]}),Object(d.jsx)(f,{})]})})},_=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,50)).then((function(t){var i=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;i(e),s(e),n(e),a(e),r(e)}))};r.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(q,{})}),document.getElementById("root")),_()}},[[49,1,2]]]);
//# sourceMappingURL=main.5de9061a.chunk.js.map