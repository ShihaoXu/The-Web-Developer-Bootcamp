#Introduction to Express

* What is a framework? How is it different from a library?
* What is Express?  
* Why are we using Express?
	* Express is a light-weight framework
	* Express is unopinionated: it's flexible, it let you do thing the way you want

#Our First Express App!!!!!

* Review an existing app (DogDemo)
* Review HTTP response/request lifecycle
* Create our own simple Express app!

#NPM Init and Package.json

* Use the `--save` flag to install packages
	* It will take the package name and version and automatically save it into our `package.json` file if we have one.
	* Install the package and save it to the "dependency" section of our `package.json`
* Explain what the package.json file does
* Use `npm init` to create a new package.json
	* `entry point` refers to the file where application starts. In most of our applications, it's going to be `app.js`.
	* It's really common for us to create our own `package.json` using `npm init`


# More Routing!

* Show the `*` route matcher
* Write routes containing route parameters
* Discuss route order
	* Order of routes matters! If you put the "/*" at the first, it will match everything.
	* The first route that matches a given request is the only route that will be run. 