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

  <dd>[Link to labo](https://github.com/LiesbethVanaerschot/labo)</dd>
</dl>
  
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
		``` 

* * *

### Labo 3: Advanced JS part 1 ###

##### Challenge

<dl>
  <dd>Build a mini-framework for a to-do application using object-oriented techniques in Javascript. Basically we had to build your own jQuery. We have to be able to select an element by ID, class, add a class, on click with event listener, ...</dd>
</dl>

##### What I've Learned

<dl>
  <dd>I've learned that you dont always need to implement jQuery in simple applications. I love to use jQuery a lot, and by making my own framework I now understand more how it is build. I've also added an extra onDoubleClick event listener</dd>

  <dd>I've learned that you dont always need to implement jQuery in simple applications. I love to use jQuery a lot, and by making my own framework I now understand more how it is build. I've also added an extra onDoubleClick event listener</dd>
</dl>

##### Lab Notes

**Must Read Articles**

[Introduction to Object Oriented Javascript (great help)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript)
[Learn and understand advanced Javascript code](http://ejohn.org/apps/learn/)
[Slideshow by Robery Nyman about objects](http://www.slideshare.net/robnyman/javascript-like-a-box-of-chocolates)

* * *

### Labo 4: Building an app prototype ###

### Labo 5: Terrappke: continuing with app prototypes ###

### Labo 6: Node.js ###


