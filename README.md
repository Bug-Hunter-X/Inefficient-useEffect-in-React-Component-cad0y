# Inefficient useEffect in React Component

This repository demonstrates a common React bug where the `useEffect` hook is used inefficiently, causing unnecessary re-renders and potential performance problems.

## Bug Description

The `MyComponent` component uses `useEffect` to log the current `count` value to the console.  However, because the dependency array `[count]` is not empty, the effect runs after every render, even though the logging is unnecessary on every update.

## Solution

The solution involves optimizing the useEffect hook by adding the correct dependency array to avoid unnecessary re-renders.  The revised code includes a conditional to prevent log updates that are not necessary.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe the console output.  You'll see that the log message is printed frequently.

## How to Fix

The optimized `useEffect` hook should only run when a relevant state variable changes, this can be controlled by a conditional within the hook itself.