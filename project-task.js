/*
===========================================
📚 Call Stack Debugging Activity
===========================================

🎯 Objective:
Students will deepen their understanding of how the call stack operates
by analyzing and debugging a nested function scenario.

They will:
- Visualize the function execution order
- Explain the role of the call stack
- Predict the correct console output

---
🧭 Instructions:

1️⃣ Study the provided code snippet, which involves nested function calls.

2️⃣ Predict the order in which functions are added to and removed from the call stack.

3️⃣ Draw a simple representation of the call stack at each step of execution.

4️⃣ Write the expected console output and explain how the call stack managed the function calls.
*/

// ============================================
// 🔍 Code Snippet: Nested Function Challenge
// ============================================

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

// ============================================
// 🧠 Steps for Students to Follow
// ============================================

/*
🔹 Predict the Call Stack Behavior:
    - Write down the order in which functions are added to the call stack and when they are removed.
    - Indicate which function is currently being executed at each step.

🔹 Draw the Call Stack:
    - Use a vertical stack (text or diagram) with the most recent function call on top.

🔹 Write the Console Output:
    - Predict and write the exact sequence of outputs that will appear in the console.

🔹 Explain Execution Flow:
    - Describe how JavaScript pauses a function, executes another, and returns back — all managed by the call stack.
*/
