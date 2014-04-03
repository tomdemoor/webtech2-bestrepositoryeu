Webtechnology Labs
==================

Webtechnology labo solutions for 2IMD by Tom De Moor

### Labo 1: GIT To Work ###

##### Challenge

<dl>
  <dd>We had to form a team of 3-4 people and make a mini website with cooking receipes to refresh our memory about CSS and HTML, basic things we've learned in a previous course. Learn to work with GIT and its features. Commit the project, and your invidivual work, to one directory.</dd>
</dl>
  
##### What I've Learned

<dl>
  <dd>In this lesson I had my first experience working with GIT. The syntax, the commands, the right workflow, etc. I've learned it's an easy way to share code with others and to analyse your own workflow. By being able to view all changes it's easy to fall back on a previous version of a project.</dd>
</dl>

[Link to labo](https://github.com/LiesbethVanaerschot/labo)
  
##### Lab Notes

</dl>
 
Command | Description 
--- | --- 
`git init` | creates a git repository directory 
`git clone url` | clones git repository to current map location
`git status` | check tracked files and their status compared with the original directory on github
`git branch` | shows all branches, working stations you make when working on your repository files
`git checkout name` | switches to a branch 'name'
`git checkout –b name` | creates a branch 'name' and switches to it
`git branch -D name` | Deletes the branch name
`git add filename` | adds file changes in your current directory to your index
`git add -A` | adds files and all removed files will also get discarted
`git rm filename` | removes file changes in your current directory to your index
`git commit -m 'info' ` | add a description to the changes you've made after you add them
`git checkout master` | go to your master branch
`git merge name ` | merges a branch called 'name' with your current one (master)
`git push master origin ` | pushes everything to repository on github


* * *

### Labo 2: Mastering CSS animations and transformations ###

##### Challenge

<dl>
  <dd>This is an individual exercise. We got a workshop of what we can do with CSS3 animations which we afterwards had to implement in our own work. We had to build 2 webpages with the focus on the animations shown in the example and make them as close as possible to the original.</dd>
</dl>

##### What I've Learned

<dl>
  <dd>Everything about animations, transitions, transformations and translates. What to use when and what do they mean. I've learned you realy have to know what you are doing to make them work and use them accordingly. Use the right vendor prefixes for the right browsers.</dd>
</dl>

##### Lab Notes

* **Translates**: Used in transformations. It's a method to move an element from its current position depending on the parameters given for the left (X-axis) and the top (Y-axis) position. 
	```CSS
	   transform: translate(50px,100px);
	   ``` 
* **Transformations**: Physically change the the look of an element. Use tags like scale(), rotate(), skew(),… They can be 2D and 3D.
	```CSS
	   transform: scale(2.2) translate(200px, 100px) skew(10deg) rotate(45deg);
	   ``` 
* **Transitions**: Needs to be triggered. Go from point A to B. Always be formal about which properties you want to animate.
	```CSS
	   transition: width 2s;
	   ``` 
* **Animations**: Go from A over B, C, D, etc to Z via keyframes. They can loop and start automatically. They will call a transform for each keyframe.
	```CSS
	   .automatic
		{
		-webkit-animation: moveIt 2s infinite;
		}
		
		@-webkit-keyframes moveIt
		{
		0% { }
		25% { -webkit-transform: rotate(45deg);}
		50% { left:50%; top: 50%; -webkit-transform: scale(2.5) rotate(45deg);}
		100% { -webkit-transform: rotate(0deg);}
		}
		

* * *

### Labo 3: Advanced JS part 1 ###

##### Challenge

<dl>
  <dd>Build a mini-framework for a to-do application using object-oriented techniques in Javascript. Basically we had to build your own jQuery. We have to be able to select an element by ID, class, add a class, on click with event listener, ...</dd>
</dl>

##### What I've Learned

<dl>
  <dd>I've learned that you dont always need to implement jQuery in simple applications. I love to use jQuery a lot, and by making my own framework I now understand more how it is build. I've also added an extra onDoubleClick event listener.</dd>
</dl>

##### Lab Notes

*Must Read Articles*

* [Introduction to Object Oriented Javascript (great help)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript)
* [Learn and understand advanced Javascript code](http://ejohn.org/apps/learn/)
* [Slideshow by Robery Nyman about objects](http://www.slideshare.net/robnyman/javascript-like-a-box-of-chocolates)

* * *

### Labo 4: Building an app prototype ###

##### Challenge

<dl>
  <dd>Build a full working weather app using prototyping. Use developer.forecast.io as an API, work with jsonp, geolocation, ajax calls, localstorage and prototypical inheritance.</dd>
</dl>

##### What I've Learned

<dl>
  <dd>I've learned to work with prototypical inheritance. It was a bit of a search to not work with just functions, but it's a cleaner way of coding. I have learned to work with all of the elements mentioned in the challenge. It was a very eye-opening challenge. It's my first actual application I had to build and it was very enjoyable. From this moment on I am feeling like this course is really lifting off.</dd>
</dl>

##### Lab Notes

*Must Read Articles*

* The best scource was the help from our teacher and slowly build up the app.
* [How to design your app](http://insideintercom.io/the-dribbblisation-of-design/)
* [Wiki: Same-origin policy](http://en.wikipedia.org/wiki/Same-origin_policy)
* [Wiki: JSONP](http://en.wikipedia.org/wiki/JSONP)
* [Stackoverflow Answer: Callbacks JSONP](http://stackoverflow.com/questions/2067472/what-is-jsonp-all-about)
* [Local storage in HTML5](http://diveintohtml5.info/storage.html)

* * *

### Labo 5: Terrappke - continuing with app prototypes ###

##### Challenge

<dl>
  <dd>We've now learned to build web app prototypes. Buid an app the teacher proposed or pitch your own idea. Work alone or in group.</dd>

  <dd>I've chosen to work with a classmate. We worked on our teachers app idea. Building an extension for the weather app regarding engaging new students to come to our school, have a drink outside if the weather is nice with teachers and talk about the education.</dd>
</dl>

##### What I've Learned

<dl>
  <dd>We've combined everything we have learned this course to build a prototype. We have done a great job building it so our app will be chosen for our schools campaign. I am very proud of my teammate and myself.</dd>

  <dd>Working more, consistent and harder gets you places.</dd>
</dl>

* * *

### Labo 6: Node.js ###

##### Challenge

<dl>
  <dd>Build an app that allows anyone in the chatroom to ask a short question. All users can see the questions and vote on them. Voting will enlargen the question. We could also make our own variant as long as the idea was the same. I have made the question app but within a facebook setting. For the layout I have chosen a 90s design.</dd>
</dl>

##### What I've Learned

<dl>
  <dd>Having fun building an app gets you a long way. My personal design made it much more fun. It's a bit more code but I'm here to learn so, this is not a bad thing.</dd>

  <dd>I've learned to work with node.js and faye (websockets). This class was very interesting and I feel like a developer more and more with every lab.</dd>
</dl>

##### Lab Notes

<dl>
  <dd>Install node.js, express, nodemon. Use the terminal.</dd>
</dl>

*Must Read Articles*

* [VIDEO: What is node.js all about](http://www.sitepoint.com/whats-node-js-all-about/)
* [An example building an app with node.js code explained](http://www.goodbytes.be/blog/article/building-a-multiplayer-game-iphone-controlled-with-nodejs-socket-canvas)
* [A node.js guide: free beginner book](http://www.nodebeginner.org/)
* [What is node.js and understanding it](http://blog.envylabs.com/post/50589070360/understanding-node-js)
* [Another app example: drawing game](http://tutorialzine.com/2012/08/nodejs-drawing-game/)
* [What is node.js: Pros and Cons, Modules, FaQ](http://stackoverflow.com/questions/1884724/what-is-node-js)

* * *
