(this["webpackJsonpkainakamura.github.io"]=this["webpackJsonpkainakamura.github.io"]||[]).push([[0],{27:function(e,t,i){},33:function(e,t,i){},34:function(e,t,i){},35:function(e,t,i){},36:function(e,t,i){},37:function(e,t,i){},38:function(e,t,i){},39:function(e,t,i){},40:function(e,t,i){},41:function(e,t,i){},42:function(e,t,i){},43:function(e,t,i){},44:function(e,t,i){},45:function(e,t,i){},46:function(e,t,i){"use strict";i.r(t);var s=i(1),n=i.n(s),c=i(21),a=i.n(c),r=(i(27),i(2)),o=i(3),h=i(6),u=i(5),j=i(11),l=i(0),d=function(e){Object(h.a)(i,e);var t=Object(u.a)(i);function i(){return Object(r.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return Object(l.jsx)("li",{children:Object(l.jsx)(j.c,{exact:"/"===this.props.href,to:this.props.href,activeClassName:"active",children:this.props.name})})}}]),i}(n.a.Component),b=(i(33),function(e){Object(h.a)(i,e);var t=Object(u.a)(i);function i(){return Object(r.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"handleClick",value:function(e){this.setState({active:e})}},{key:"render",value:function(){return Object(l.jsx)("nav",{className:"Navbar",children:Object(l.jsxs)("ul",{children:[Object(l.jsx)(d,{name:"Kai Nakamura",href:"/"}),Object(l.jsx)(d,{name:"Projects",href:"projects"}),Object(l.jsx)(d,{name:"Skills",href:"skills"}),Object(l.jsx)(d,{name:"Contact",href:"contact"})]})})}}]),i}(n.a.Component)),p=(i(34),function(e){Object(h.a)(i,e);var t=Object(u.a)(i);function i(){return Object(r.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return Object(l.jsx)("header",{className:"Header",children:Object(l.jsx)(b,{})})}}]),i}(n.a.Component)),f=function(e){Object(h.a)(i,e);var t=Object(u.a)(i);function i(){return Object(r.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:this.props.href,target:"_blank",rel:"noreferrer noopener",children:this.props.name})})}}]),i}(n.a.Component),m=(i(35),function(e){Object(h.a)(i,e);var t=Object(u.a)(i);function i(){return Object(r.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return Object(l.jsx)("footer",{className:"Footer",children:Object(l.jsxs)("ul",{children:[Object(l.jsx)(f,{name:"Source Code",href:"https://github.com/KaiNakamura/kainakamura.github.io"}),Object(l.jsx)(f,{name:"Report Bug",href:"https://github.com/KaiNakamura/kainakamura.github.io/issues"})]})})}}]),i}(n.a.Component)),O=function(){function e(t){Object(r.a)(this,e),this.sketch=t,this.radius=100,this.separationStrength=100,this.attractionStrength=100}return Object(o.a)(e,[{key:"draw",value:function(){this.sketch.stroke(100),this.sketch.strokeWeight(2),this.sketch.noFill(),this.sketch.ellipse(this.sketch.mouseX,this.sketch.mouseY,2*this.radius),this.sketch.noStroke(),this.sketch.fill(100),this.sketch.ellipse(this.sketch.mouseX,this.sketch.mouseY,this.radius/4)}}]),e}(),k=i(13),g=i.n(k),x=.4,v=function(){function e(t){Object(r.a)(this,e),this.sketch=t,this.position=t.createVector(t.random(t.width),t.random(t.height)),this.velocity=g.a.Vector.random2D(),this.velocity.setMag(t.random(2,4)),this.acceleration=t.createVector(),this.resize()}return Object(o.a)(e,[{key:"resize",value:function(){this.size=.01*this.sketch.width}},{key:"edges",value:function(){this.position.x>this.sketch.width+this.size?this.position.x=-this.size:this.position.x<-this.size&&(this.position.x=this.sketch.width+this.size),this.position.y>this.sketch.height+this.size?this.position.y=-this.size:this.position.y<-this.size&&(this.position.y=this.sketch.height+this.size)}},{key:"flock",value:function(e,t){var i=this,s=this.sketch.createVector(),n=this.sketch.createVector(),c=this.sketch.createVector(),a=this.sketch.createVector(),r=0;e.forEach((function(e){var t=i.position.dist(e.position);if(e!==i&&t<50&&t>0){s.add(e.velocity),n.add(e.position);var a=g.a.Vector.sub(i.position,e.position);a.mult(1/t),c.add(a),r++}}));var o=this.sketch.createVector(this.sketch.mouseX,this.sketch.mouseY),h=this.position.dist(o);if(h<t.radius&&h>0)if(this.sketch.mouseIsPressed)a.add(o),a.sub(this.position),a.mult(t.attractionStrength);else{var u=g.a.Vector.sub(this.position,o);u.mult(t.separationStrength/h),c.add(u)}r>0&&(s.setMag(3),s.sub(this.velocity),s.limit(x),s.mult(1.5),n.div(r),n.sub(this.position),n.setMag(3),n.sub(this.velocity),n.limit(x),n.mult(1),c.div(r),c.setMag(3),c.sub(this.velocity),c.limit(x),c.mult(1.5)),this.acceleration.add(s),this.acceleration.add(n),this.acceleration.add(c),this.acceleration.add(a)}},{key:"update",value:function(){this.position.add(this.velocity),this.acceleration.limit(x),this.velocity.add(this.acceleration),this.velocity.limit(3),this.acceleration.set(0,0),this.edges()}},{key:"draw",value:function(){var e=g.a.Vector.normalize(this.velocity);this.sketch.push(),this.sketch.stroke(100),this.sketch.strokeWeight(2),this.sketch.noFill(),this.sketch.translate(this.position.x,this.position.y),this.sketch.rotate(e.heading()),this.sketch.translate(e.mag(),0),this.sketch.triangle(0,this.size/3,0,-this.size/3,this.size,0),this.sketch.pop()}}]),e}(),y=(i(36),function(e){Object(h.a)(i,e);var t=Object(u.a)(i);function i(e){var s;return Object(r.a)(this,i),(s=t.call(this,e)).Sketch=function(e){var t,i=document.getElementById("Boids"),s=getComputedStyle(document.body).getPropertyValue("--gray"),n=Array(200);e.setup=function(){e.createCanvas(i.offsetWidth,i.offsetHeight),t=new O(e),n=n.fill().map((function(){return new v(e)}))},e.draw=function(){e.background(s),t.draw(),n.forEach((function(e){return e.flock(n,t)})),n.forEach((function(e){return e.update()})),n.forEach((function(e){return e.draw()}))},e.windowResized=function(){e.resizeCanvas(i.offsetWidth,i.offsetHeight),n.forEach((function(e){return e.resize()}))}},s.myRef=n.a.createRef(),s}return Object(o.a)(i,[{key:"componentDidMount",value:function(){this.p5=new g.a(this.Sketch,this.myRef.current)}},{key:"render",value:function(){return Object(l.jsx)("div",{id:"Boids",ref:this.myRef})}}]),i}(n.a.Component)),w=i.p+"static/media/kai-nakamura.5bce4bef.png",N=(i(37),function(e){Object(h.a)(i,e);var t=Object(u.a)(i);function i(){return Object(r.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return Object(l.jsxs)("section",{className:"Hero",children:[Object(l.jsx)(y,{}),Object(l.jsxs)("div",{className:"HeroContent",children:[Object(l.jsxs)("div",{className:"Title",children:[Object(l.jsx)("h1",{children:"Hi, I'm Kai"}),Object(l.jsx)("h2",{children:"Software Dev / Student"})]}),Object(l.jsx)("img",{className:"ProfilePicture",src:w,alt:"Kai Nakamura"})]}),Object(l.jsxs)("div",{className:"Arrow",children:[Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{})]})]})}}]),i}(n.a.Component)),C=(i(38),function(e){Object(h.a)(i,e);var t=Object(u.a)(i);function i(){return Object(r.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return Object(l.jsxs)("div",{className:"Project",children:[Object(l.jsxs)("div",{className:"ProjectHeading",children:[Object(l.jsx)("h2",{className:this.props.language,children:this.props.language}),Object(l.jsx)("h1",{children:this.props.title})]}),this.props.img,Object(l.jsx)("div",{className:"ProjectDescription",children:this.props.children})]})}}]),i}(n.a.Component)),S=(i(39),function(e){Object(h.a)(i,e);var t=Object(u.a)(i);function i(){return Object(r.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return Object(l.jsx)("div",{className:"ProjectButton",children:void 0!==this.props.href&&"/"===this.props.href.charAt(0)?Object(l.jsx)(j.b,{to:this.props.href,children:Object(l.jsx)("span",{children:this.props.name})}):Object(l.jsx)("a",{href:this.props.href,target:"_blank",rel:"noreferrer noopener",children:Object(l.jsx)("span",{children:this.props.name})})})}}]),i}(n.a.Component)),P=i.p+"static/media/chess.59aa7ae7.png",z=i.p+"static/media/speedrun-showdown.c8c0dc69.png",I=(i(40),function(e){Object(h.a)(i,e);var t=Object(u.a)(i);function i(){return Object(r.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return Object(l.jsxs)("div",{className:"Projects",children:[Object(l.jsxs)(C,{title:"Chess Engine",language:"javascript",img:Object(l.jsx)("img",{src:P,alt:"Kai Nakamura"}),children:[Object(l.jsxs)("p",{children:["This project is a work in progress. I plan to make an AI that can play chess using a ",Object(l.jsx)("a",{href:"https://en.wikipedia.org/wiki/Minimax",target:"_blank",rel:"noreferrer noopener",children:"minimax"})," algorithm."]}),Object(l.jsx)("p",{children:"Right now I have code for basic piece movement and capturing. Check out the current status of the project on GitHub."}),Object(l.jsx)(S,{name:"View on GitHub",href:"https://github.com/KaiNakamura/ChessEngine"})]}),Object(l.jsxs)(C,{title:"kainakamura.github.io",language:"reactjs",children:[Object(l.jsx)("p",{children:"You're looking at it right now! This is where I show off all the cool stuff I've been working on recently."}),Object(l.jsxs)("p",{children:["This website went through a lot of different changes but currently it's running on ",Object(l.jsx)("a",{href:"https://reactjs.org",target:"_blank",rel:"noreferrer noopener",children:"ReactJs"}),". Check out the GitHub repo to view the full history of my website."]}),Object(l.jsx)(S,{name:"View on GitHub",href:"https://github.com/KaiNakamura/kainakamura.github.io"})]}),Object(l.jsxs)(C,{title:"Speedrun Showdown",language:"java",img:Object(l.jsx)("img",{src:z,alt:"Speedrun Showdown"}),children:[Object(l.jsx)("p",{children:"This project is a Minecraft speedrunning and PvP plugin. Teams of players race to be the first to beat the game."}),Object(l.jsxs)("p",{children:["It was used in the ",Object(l.jsx)("a",{href:"https://smash.gg/mcss",target:"_blank",rel:"noreferrer noopener",children:"Minecraft Speedrun Showdown"})," tournament in which 32 streamers competed for a $1000 prize."]}),Object(l.jsx)(S,{name:"View on GitHub",href:"https://github.com/KaiNakamura/SpeedrunShowdown"})]})]})}}]),i}(n.a.Component)),V=(i(41),function(){return Object(l.jsxs)("div",{className:"HomePage",children:[Object(l.jsx)(N,{}),Object(l.jsxs)("section",{className:"Content",children:[Object(l.jsxs)("p",{children:["I like programming robots, websites, games, and whatever else comes to mind. Right now I'm pursuing a Bachelor's in Computer Science at ",Object(l.jsx)("a",{href:"https://wpi.edu",target:"_blank",rel:"noreferrer noopener",children:"WPI"}),"."]}),Object(l.jsxs)("p",{children:["Check out some of the cool stuff I've been working on below. If you've got any questions or are interested in working with me feel free to ",Object(l.jsx)(j.b,{to:"contact",children:"shoot me an email"}),"."]})]}),Object(l.jsx)(I,{})]})}),H=(i(42),function(){return Object(l.jsx)("div",{className:"ProjectsPage",children:Object(l.jsx)(I,{})})}),E=(i(43),function(){return Object(l.jsx)("div",{className:"SkillsPage",children:Object(l.jsxs)("section",{className:"Content",children:[Object(l.jsx)("h1",{children:"Skills"}),Object(l.jsx)("p",{children:"Lorem ipsum dolor sit amet"})]})})}),F=(i(44),function(){return Object(l.jsx)("div",{className:"ContactPage",children:Object(l.jsxs)("section",{className:"Content",children:[Object(l.jsx)("h1",{children:"Contact"}),Object(l.jsx)("a",{target:"_blank",rel:"noreferrer noopener",href:"mailto:kaihnakamura@gmail.com",children:"kaihnakamura@gmail.com"})]})})}),K=(i(45),function(){return Object(l.jsx)("div",{className:"NotFoundPage",children:Object(l.jsxs)("section",{className:"Content",children:[Object(l.jsx)("h1",{children:"404: Page Not Found"}),Object(l.jsx)(j.b,{to:"/",children:"Go to Home"})]})})}),M=i(4);function R(){var e=Object(M.f)().pathname;return Object(s.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var T=function(){return Object(l.jsx)(j.a,{children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(p,{}),Object(l.jsx)(R,{}),Object(l.jsxs)(M.c,{children:[Object(l.jsx)(M.a,{exact:!0,path:"/",component:V}),Object(l.jsx)(M.a,{path:"/projects",component:H}),Object(l.jsx)(M.a,{path:"/skills",component:E}),Object(l.jsx)(M.a,{path:"/contact",component:F}),Object(l.jsx)(M.a,{path:"*",component:K})]}),Object(l.jsx)(m,{})]})})},B=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,47)).then((function(t){var i=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,a=t.getTTFB;i(e),s(e),n(e),c(e),a(e)}))};a.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(T,{})}),document.getElementById("root")),B()}},[[46,1,2]]]);
//# sourceMappingURL=main.faed6a97.chunk.js.map