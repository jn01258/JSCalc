Project: Building An On Screen Calculator Using Javascript

Warmup Exercises:

1. Build a function my_max() which takes an array and returns the maximum number.

2. Build a function vowel_count() which takes a string and returns the number of vowels (AEIOUY).

3. Build a function reverse() which takes a string and returns all the characters in the opposite position, e.g. reverse("this is a string") // "gnirts a si siht"

Calculator

It's time to build an on-screen calculator

Build a function add() which takes two numbers and adds them together.
Build multiply, divide and subtract functions in a similar fashion.
Build a grid of <div>s in the browser that are labeled with the numbers 0-9.
Set up a listener so when the user clicks on one of these squares, it displays that number in the console log. This can be done by assigning a function to the onclick() property of the div (use this if you haven't been introduced to jQuery listeners before). It's okay to hard-code them in for now (e.g. onclick(function(){ console.log "1" }))
Now add "buttons" (more divs) to your calculator which represent "+", "-", "*", "/", "=" and "clear".
Make your calculator work! This means that you'll need to "save" the first number that is pressed (to a variable or array) and you'll also need to "save" which operation has been chosen (e.g. addition). Once the equals sign is pressed, it should run a function which evaluates the expression by calling the simple functions you created earlier and outputting the result to the command line. It may take some practice to be able to pass the values from your "buttons" to your main calculator function. It's a bit tricky, but you can do it.
Pressing "=" or "clear" should clear any saved variables or operations so you can start over.

(Source of Project Idea: The Odin Project)
