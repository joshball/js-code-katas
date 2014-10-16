The first exercise we are going to do is look at different JavaScript inheritance patterns. 

We generally use inheritance to keep code DRY. We want to reuse code. Typical examples are things like Employees are People, and Managers are Employees. 

The problem is that inherited objects are (by definition) tightly coupled to the parent. And this can create problems. 

We should prefer composition over inheritance.

So, lets look at a couple of approaches to the same problem.

The three we are going to examine are:
- Classical Inheritance
- Prototypal Inheritance
- Mixins

The problem is taken directly from the book [Pro JavaScript Design Patterns](http://jsdesignpatterns.com/), by Ross Harmes and Dustin Diaz.

The code can [be fetched here](http://jsdesignpatterns.com/code.zip), but I have placed the solutions in the repo here as well.

## Your kata, if you choose to accept it:
1. run the app (just static files, should be able to serve out of an ide). Should probably add a grunt task.
2. play with it, see how it works (simple edit in place)

## Options:
### Easier (not easy, just easier ;-)
1. Look at the file: 01-Inheritance_Patterns/solutions/ClassicalEditInPlaceField.js
2. Without looking at the other solutions, solve it using prototypal and/or mixins

### Harder
1. Don't look at any solution files.
2. Implement your own in all three styles

## Questions To Answer
TBD.