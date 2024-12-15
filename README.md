# Unhandled Promise Rejection in Node.js

This repository demonstrates a common error in Node.js applications: unhandled promise rejections.  The `bug.js` file shows code with a promise that can reject but doesn't have proper error handling.  The `bugSolution.js` demonstrates how to handle promise rejections correctly, preventing unexpected application crashes.

## Problem

Asynchronous operations are essential in Node.js, often using promises or async/await.  If an error occurs within a promise's `catch` block, and that error isn't handled, Node.js might emit a warning or even crash, especially in production environments where uncaught exceptions can halt execution. This can be difficult to debug as it does not immediately stop the application. 

## Solution

Always handle promise rejections using `.catch()` to gracefully manage errors and prevent unexpected application termination.  Consider using a centralized error-handling mechanism for production applications to provide logging and other suitable responses to errors.