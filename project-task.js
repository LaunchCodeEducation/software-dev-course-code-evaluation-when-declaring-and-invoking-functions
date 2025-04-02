/*
Objective:
Students will deepen their understanding of how the call stack operates
by analyzing and debugging a nested function scenario. They will visualize
the function execution order, explain the role of the call stack,
and correctly predict the console output.



Instructions:
    Study the provided code snippet, which involves nested function calls.
    Predict the order in which the functions are added to and removed from the call stack.
    Draw a simple representation of the call stack at each step of execution.
    Write the expected console output and explain how the call stack managed the function calls.
*/



// Code Snippet: Nested Function Challenge
function start() {
    console.log("Start of program");
    firstTask();
    console.log("Back in start");
}

function firstTask() {
    console.log("First task running");
    secondTask();
    console.log("First task completed");
}

function secondTask() {
    console.log("Second task in progress");
}

start();
console.log("End of program");



/*
Steps for Students to Follow

Predict the Call Stack Behavior:
    Write down the order in which functions are added to the call stack and when they are removed.
    Indicate which function is currently being executed at each step.

Draw the Call Stack:
    Use a simple vertical list to represent the call stack, with the most recent function call at the top.

Write the Console Output:
    Predict and write the exact sequence of outputs that will be logged to the console.

Explain Execution Flow:
    Describe how the call stack enables JavaScript to pause one function, execute another, and then resume the original function.
*/
