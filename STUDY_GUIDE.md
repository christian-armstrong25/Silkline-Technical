# Complete React & Web Development Study Guide

## Stoplight Component - Line-by-Line Explanation

---

## Table of Contents

1. [Web Development Fundamentals](#web-development-fundamentals)
2. [React Core Concepts](#react-core-concepts)
3. [TypeScript Basics](#typescript-basics)
4. [Project Structure Overview](#project-structure-overview)
5. [Complete Code Walkthrough](#complete-code-walkthrough)
6. [How Everything Works Together](#how-everything-works-together)
7. [Key Concepts Summary](#key-concepts-summary)
8. [Practice Exercises](#practice-exercises)

---

## Web Development Fundamentals

### What is the DOM?

The **DOM (Document Object Model)** is a programming interface that represents the structure of HTML documents as a tree of objects. When you write HTML, the browser creates a DOM tree that JavaScript can interact with.

**Key Points:**

- The DOM is the browser's representation of your HTML
- JavaScript can read and modify the DOM to change what users see
- React manages DOM updates automatically for you

**Example:**

```html
<!-- HTML -->
<div id="myDiv">Hello</div>

<!-- JavaScript can access and modify it -->
<script>
	const element = document.getElementById("myDiv");
	element.textContent = "Goodbye"; // Changes what's displayed
</script>
```

### The Three Pillars of Web Development

1. **HTML (HyperText Markup Language)**

   - Defines the structure and content of web pages
   - Uses tags like `<div>`, `<span>`, `<button>`, etc.

2. **CSS (Cascading Style Sheets)**

   - Controls the visual appearance and layout
   - Defines colors, fonts, spacing, positioning

3. **JavaScript**
   - Adds interactivity and dynamic behavior
   - Can manipulate the DOM, handle events, make API calls

### What is React?

**React** is a JavaScript library for building user interfaces, particularly web applications. It was created by Facebook and is now maintained by Meta.

**Key Concepts:**

- **Component-Based**: Build UIs using reusable components
- **Declarative**: Describe what the UI should look like, React handles how to update it
- **Virtual DOM**: React creates a virtual representation of the DOM for efficient updates

**Why React?**

- Reusable components save time
- Efficient updates (only changes what's necessary)
- Large ecosystem and community
- Works well with TypeScript for type safety

---

## React Core Concepts

### Components

A **component** is a reusable piece of code that returns JSX (JavaScript XML) to describe what should appear on the screen.

**Function Component Example:**

```jsx
function Welcome() {
	return <h1>Hello, World!</h1>;
}
```

**Key Points:**

- Components are like JavaScript functions that return JSX
- They can accept "props" (properties) as input
- They can have their own state (data that can change)
- Component names must start with a capital letter

### JSX (JavaScript XML)

**JSX** is a syntax extension that lets you write HTML-like code in JavaScript. It makes React code more readable and intuitive.

**JSX Example:**

```jsx
const element = <h1 className="title">Hello, World!</h1>;
```

**Important JSX Rules:**

1. Use `className` instead of `class` (since `class` is a reserved word in JavaScript)
2. Use `htmlFor` instead of `for` in labels
3. Self-closing tags must have a slash: `<img />` not `<img>`
4. Must return a single parent element (or use React Fragment `<>...</>`)

**JSX Gets Transformed:**

```jsx
// What you write:
<div className="container">Hello</div>;

// What it becomes (simplified):
React.createElement("div", { className: "container" }, "Hello");
```

### Props (Properties)

**Props** are how you pass data from a parent component to a child component. They are read-only and cannot be modified by the child.

**Example:**

```jsx
// Parent component
function App() {
	return <Welcome name="Alice" age={25} />;
}

// Child component receives props
function Welcome({ name, age }) {
	return (
		<h1>
			Hello, {name}! You are {age} years old.
		</h1>
	);
}
```

### State

**State** is data that can change over time. When state changes, React automatically re-renders the component to reflect the new state.

**Key Points:**

- State is component-specific
- Changing state triggers a re-render
- State should be used for data that changes and affects what's displayed

---

## React Hooks Explained

### useState Hook

The `useState` hook lets you add state to function components.

**Syntax:**

```javascript
const [state, setState] = useState(initialValue);
```

**Breaking it Down:**

- `state`: The current value of the state
- `setState`: A function to update the state
- `initialValue`: The starting value for the state

**Example:**

```jsx
function Counter() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<p>Count: {count}</p>
			<button onClick={() => setCount(count + 1)}>Increment</button>
		</div>
	);
}
```

**How it Works:**

1. `useState(0)` initializes `count` to `0`
2. `setCount(5)` updates `count` to `5`
3. React re-renders the component with the new value
4. The display updates to show the new count

**Important Notes:**

- State updates are asynchronous
- Always use the setter function, never modify state directly
- The setter function can accept a function: `setCount(prev => prev + 1)`

### useEffect Hook

The `useEffect` hook lets you perform side effects in function components. Side effects include:

- Setting up timers
- Fetching data from APIs
- Subscribing to events
- Manually changing the DOM

**Syntax:**

```javascript
useEffect(() => {
	// Effect code here
	return () => {
		// Cleanup code (optional)
	};
}, [dependencies]);
```

**Three Parts:**

1. **Effect Function**: Code that runs after render
2. **Cleanup Function** (optional): Code that runs before the next effect or when component unmounts
3. **Dependency Array**: Controls when the effect runs

**Dependency Array Options:**

```jsx
// Runs after every render
useEffect(() => {
	console.log("Rendered!");
});

// Runs only once (on mount)
useEffect(() => {
	console.log("Component mounted!");
}, []); // Empty array = no dependencies

// Runs when 'count' changes
useEffect(() => {
	console.log("Count changed:", count);
}, [count]); // Re-runs when count changes
```

**Cleanup Example:**

```jsx
useEffect(() => {
	const timer = setTimeout(() => {
		console.log("Timer fired!");
	}, 1000);

	// Cleanup: cancel timer if component unmounts or effect re-runs
	return () => {
		clearTimeout(timer);
	};
}, []);
```

**Why Cleanup is Important:**

- Prevents memory leaks
- Cancels ongoing operations
- Removes event listeners
- Stops timers

---

## TypeScript Basics

### What is TypeScript?

**TypeScript** is a superset of JavaScript that adds static type checking. It helps catch errors before your code runs and makes code more maintainable.

**Key Benefits:**

- Catches errors early (during development, not runtime)
- Better IDE support (autocomplete, refactoring)
- Self-documenting code (types show what data is expected)
- Easier to maintain large codebases

### Basic TypeScript Types

```typescript
// Primitive types
let name: string = "Alice";
let age: number = 25;
let isActive: boolean = true;

// Arrays
let numbers: number[] = [1, 2, 3];
let names: string[] = ["Alice", "Bob"];

// Objects
let person: { name: string; age: number } = {
	name: "Alice",
	age: 25,
};
```

### Type Aliases

Create custom types for reuse:

```typescript
type LightColor = "red" | "yellow" | "green";

// Now LightColor can only be one of these three values
let currentLight: LightColor = "red"; // ✅ Valid
let currentLight: LightColor = "blue"; // ❌ Error!
```

### Interfaces

Define the shape of objects:

```typescript
interface Person {
	name: string;
	age: number;
	email?: string; // Optional property (the ? makes it optional)
}

let alice: Person = {
	name: "Alice",
	age: 25,
	// email is optional, so we can omit it
};
```

### Union Types

Allow a value to be one of several types:

```typescript
type Status = "loading" | "success" | "error";
type ID = string | number;
```

---

## Project Structure Overview

```
Silkline-Technical/
├── index.html              # HTML entry point
├── src/
│   ├── main.tsx           # React entry point
│   ├── App.tsx            # Main app component
│   ├── index.css          # Global styles (includes Tailwind)
│   └── components/
│       └── Stoplight.tsx  # Stoplight component
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── vite.config.ts         # Vite build tool configuration
```

**File Responsibilities:**

- `index.html`: The HTML page that loads everything
- `main.tsx`: Initializes React and renders the app
- `App.tsx`: Root component that contains other components
- `Stoplight.tsx`: The stoplight component with all the logic
- `index.css`: Global styles and Tailwind directives

---

## Complete Code Walkthrough

### File: `index.html`

```html
<!DOCTYPE html>
```

**Purpose:** Declares this is an HTML5 document. Tells the browser to use modern HTML standards.

```html
<html lang="en"></html>
```

**Purpose:** Root element of the HTML document. `lang="en"` specifies the language is English (helps with accessibility and SEO).

```html
<head>
	<meta charset="UTF-8" />
</head>
```

**Purpose:** Sets character encoding to UTF-8, which supports all characters including emojis and international characters.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

**Purpose:** Makes the page responsive on mobile devices. Without this, mobile browsers might zoom out to show the desktop version.

```html
<title>Silkline Technical</title>
```

**Purpose:** Sets the text that appears in the browser tab.

```html
<body>
	<div id="root"></div>
</body>
```

**Purpose:** Creates an empty container div with id "root". This is where React will mount (attach) the entire application.

```html
<script type="module" src="/src/main.tsx"></script>
```

**Purpose:** Loads the TypeScript entry point as an ES6 module. The browser will execute this script, which starts the React app.

---

### File: `src/main.tsx`

```typescript
import React from "react";
```

**Purpose:** Imports the React library. Needed for JSX to work (though modern React doesn't always require this import).

**What it does:** Makes React available in this file.

```typescript
import ReactDOM from "react-dom/client";
```

**Purpose:** Imports ReactDOM, which provides methods to render React components into the DOM.

**What it does:** `ReactDOM` is the bridge between React components and the actual DOM.

```typescript
import App from "./App";
```

**Purpose:** Imports the `App` component from the `App.tsx` file in the same directory.

**What it does:** Brings the App component into scope so we can use it.

```typescript
import "./index.css";
```

**Purpose:** Imports the CSS file. This loads Tailwind CSS and any global styles.

**What it does:** Makes all the CSS classes available throughout the app.

```typescript
ReactDOM.createRoot(document.getElementById("root")!);
```

**Purpose:** Creates a React root and finds the DOM element where React will render.

**Breaking it down:**

- `document.getElementById("root")`: Finds the `<div id="root">` element from the HTML
- `!`: TypeScript non-null assertion operator. Tells TypeScript "I'm sure this won't be null"
- `createRoot()`: Creates a React 18 root (new way of rendering, more efficient)

**Why the `!`?** TypeScript thinks `getElementById` might return `null` (if the element doesn't exist). We know it exists, so we use `!` to tell TypeScript we're certain.

```typescript
.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

**Purpose:** Renders the App component into the root element.

**Breaking it down:**

- `.render()`: Actually puts the React component into the DOM
- `<React.StrictMode>`: A wrapper that helps catch potential problems during development
- `<App />`: Our main App component (the self-closing syntax is JSX)

**What happens:** React takes the App component, converts it to DOM elements, and inserts them into the `<div id="root">` element.

---

### File: `src/App.tsx`

```typescript
import Stoplight from "./components/Stoplight";
```

**Purpose:** Imports the Stoplight component from the components folder.

**What it does:** Makes the Stoplight component available to use in App.

```typescript
function App() {
```

**Purpose:** Defines a function component named `App`. This is the root component of our application.

**What it does:** Creates a reusable component that returns JSX.

```typescript
  return (
```

**Purpose:** Returns JSX that describes what should be rendered.

**What it does:** Everything after `return` is what will appear on the screen.

```typescript
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
```

**Purpose:** Creates a container div with Tailwind CSS classes for styling.

**Breaking down the classes:**

- `min-h-screen`: Minimum height of 100vh (full viewport height)
- `bg-gray-900`: Dark gray background color
- `flex`: Makes this a flexbox container
- `items-center`: Centers children vertically (cross-axis)
- `justify-center`: Centers children horizontally (main-axis)

**What it does:** Creates a full-screen dark container that centers its children both horizontally and vertically.

```typescript
<Stoplight />
```

**Purpose:** Renders the Stoplight component.

**What it does:** This is where our stoplight component appears. The self-closing syntax `<Stoplight />` is equivalent to `<Stoplight></Stoplight>`.

```typescript
export default App;
```

**Purpose:** Exports the App component so it can be imported in other files (like `main.tsx`).

**What it does:** Makes App available to other files that want to use it.

---

### File: `src/components/Stoplight.tsx` - Complete Line-by-Line

#### Import Statement

```typescript
import { useEffect, useState } from "react";
```

**Purpose:** Imports the React hooks we need: `useState` for managing state and `useEffect` for side effects.

**What it does:** Makes these hooks available in our component.

---

#### Type Definitions

```typescript
type LightColor = "red" | "yellow" | "green";
```

**Purpose:** Creates a custom type that can only be one of these three string values.

**What it does:**

- Type safety: TypeScript will error if we try to use any other value
- Self-documenting: Makes it clear what values are valid
- Autocomplete: IDEs can suggest these values

**Example:**

```typescript
let light: LightColor = "red"; // ✅ Valid
let light: LightColor = "blue"; // ❌ TypeScript error!
```

```typescript
interface LightSequence {
	color: LightColor;
	duration: number;
}
```

**Purpose:** Defines the shape/structure of a light sequence object.

**What it does:**

- Ensures every sequence object has a `color` (of type LightColor) and `duration` (a number)
- Provides type checking and autocomplete

**Example:**

```typescript
const sequence: LightSequence = {
	color: "green", // Must be "red", "yellow", or "green"
	duration: 5000, // Must be a number
};
```

---

#### Default Sequence Constant

```typescript
const DEFAULT_SEQUENCE: LightSequence[] = [
	{ color: "green", duration: 5000 }, // 5 seconds
	{ color: "yellow", duration: 1000 }, // 1 second
	{ color: "red", duration: 2000 }, // 2 seconds
];
```

**Purpose:** Defines the default sequence of lights and their durations.

**Breaking it down:**

- `const`: Cannot be reassigned (but array contents can change)
- `DEFAULT_SEQUENCE`: The variable name
- `: LightSequence[]`: Type annotation - an array of LightSequence objects
- `[{...}, {...}, {...}]`: Array with three objects

**What it does:**

- Stores the order: green → yellow → red
- Stores durations in milliseconds (5000ms = 5 seconds)
- This is the data that drives the stoplight cycle

**Why milliseconds?** JavaScript's `setTimeout` uses milliseconds, so it's convenient to store durations this way.

---

#### Component Function Declaration

```typescript
function Stoplight() {
```

**Purpose:** Defines the Stoplight component as a function.

**What it does:** Creates a reusable React component that can be rendered like `<Stoplight />`.

---

#### State Declarations

```typescript
const [activeLight, setActiveLight] = useState<LightColor>("green");
```

**Purpose:** Creates state to track which light is currently active.

**Breaking it down:**

- `const [activeLight, setActiveLight]`: Array destructuring
  - `activeLight`: Current value (read-only)
  - `setActiveLight`: Function to update the value
- `useState<LightColor>("green")`:
  - `useState`: React hook for state
  - `<LightColor>`: TypeScript generic - ensures the value is always a LightColor
  - `"green"`: Initial value

**What it does:**

- Initializes `activeLight` to `"green"`
- When `setActiveLight("red")` is called, React re-renders the component
- The component will show the red light as active

**How it works:**

```typescript
// Initial render: activeLight = "green"
// Later, when we call:
setActiveLight("yellow");
// React re-renders the component with activeLight = "yellow"
```

```typescript
const [currentIndex, setCurrentIndex] = useState(0);
```

**Purpose:** Tracks which position we're at in the sequence array.

**Breaking it down:**

- `currentIndex`: Current position (0, 1, or 2)
- `setCurrentIndex`: Function to update the index
- `useState(0)`: Starts at index 0 (the first item: green)

**What it does:**

- Index 0 = green (first item in array)
- Index 1 = yellow (second item)
- Index 2 = red (third item)
- When index changes, we move to the next light in sequence

**Why track index?** It's easier to cycle through an array by index than by color name.

---

#### useEffect Hook - The Timing Logic

```typescript
useEffect(() => {
```

**Purpose:** Starts a useEffect hook that will run side effects (timing logic).

**What it does:** This code runs after the component renders (or re-renders).

```typescript
const currentConfig = DEFAULT_SEQUENCE[currentIndex];
```

**Purpose:** Gets the current sequence configuration based on the index.

**Breaking it down:**

- `DEFAULT_SEQUENCE[currentIndex]`: Accesses array element at currentIndex
- If `currentIndex = 0`: Gets `{ color: "green", duration: 5000 }`
- If `currentIndex = 1`: Gets `{ color: "yellow", duration: 1000 }`
- If `currentIndex = 2`: Gets `{ color: "red", duration: 2000 }`

**What it does:** Retrieves the color and duration for the current step in the sequence.

```typescript
setActiveLight(currentConfig.color);
```

**Purpose:** Updates the active light to match the current sequence step.

**What it does:**

- Sets `activeLight` to the color from `currentConfig`
- This triggers a re-render, updating the visual display
- The light matching this color will appear "on"

```typescript
	const timer = setTimeout(() => {
```

**Purpose:** Schedules a function to run after a delay.

**Breaking it down:**

- `setTimeout`: Browser API that runs code after a specified time
- `timer`: Variable that stores the timer ID (needed to cancel it)
- `() => { ... }`: Arrow function that will run after the delay

**What it does:** Sets up a timer that will fire after the current light's duration expires.

```typescript
setCurrentIndex((prevIndex) => (prevIndex + 1) % DEFAULT_SEQUENCE.length);
```

**Purpose:** Moves to the next light in the sequence, wrapping around to the beginning.

**Breaking it down:**

- `setCurrentIndex`: Updates the index state
- `(prevIndex) => ...`: Function form of setState - receives previous value
- `prevIndex + 1`: Increments the index (0 → 1 → 2)
- `% DEFAULT_SEQUENCE.length`: Modulo operator for wrapping
  - `3 % 3 = 0` (wraps back to start)
  - `4 % 3 = 1`
  - `5 % 3 = 2`

**The Modulo Magic:**

```
Index 0: (0 + 1) % 3 = 1 % 3 = 1 ✅
Index 1: (1 + 1) % 3 = 2 % 3 = 2 ✅
Index 2: (2 + 1) % 3 = 3 % 3 = 0 ✅ (wraps to start!)
```

**What it does:** Cycles through: 0 → 1 → 2 → 0 → 1 → 2 (infinite loop)

```typescript
	}, currentConfig.duration);
```

**Purpose:** Sets the delay for setTimeout to the current light's duration.

**What it does:**

- Green: waits 5000ms (5 seconds)
- Yellow: waits 1000ms (1 second)
- Red: waits 2000ms (2 seconds)

```typescript
return () => clearTimeout(timer);
```

**Purpose:** Cleanup function that cancels the timer if needed.

**When it runs:**

- Before the effect runs again (if dependencies change)
- When the component unmounts (is removed from the page)

**Why it's important:**

- Prevents memory leaks
- Cancels timers that are no longer needed
- Prevents state updates on unmounted components

**Example scenario:**

```typescript
// Component mounts, timer starts (5 seconds)
// User navigates away after 2 seconds
// Without cleanup: Timer would still fire, try to update unmounted component → Error!
// With cleanup: Timer is cancelled, no error ✅
```

```typescript
}, [currentIndex]);
```

**Purpose:** Dependency array - controls when the effect re-runs.

**What it does:**

- Effect runs when component first mounts
- Effect re-runs whenever `currentIndex` changes
- This creates the cycle: index changes → effect runs → timer set → index changes → repeat

**The Cycle:**

1. Component mounts → `currentIndex = 0` → effect runs → green light, 5s timer
2. Timer fires → `currentIndex = 1` → effect runs → yellow light, 1s timer
3. Timer fires → `currentIndex = 2` → effect runs → red light, 2s timer
4. Timer fires → `currentIndex = 0` → back to step 1 (infinite loop)

---

#### Light Component (Inner Component)

```typescript
const Light = ({ color, label }: { color: LightColor; label: string }) => {
```

**Purpose:** Defines an inner component that renders a single light.

**Breaking it down:**

- `const Light =`: Creates a component (arrow function)
- `({ color, label })`: Destructures props
- `: { color: LightColor; label: string }`: TypeScript type for props
- `=> {`: Arrow function syntax

**What it does:** Creates a reusable component for rendering individual lights. This is defined inside Stoplight, so it has access to `activeLight`.

**Why inner component?** It's only used within Stoplight, so we keep it local. Could be extracted to a separate file if needed elsewhere.

```typescript
const isActive = activeLight === color;
```

**Purpose:** Determines if this light is currently active.

**What it does:**

- Compares the light's color to the active light
- Returns `true` if they match, `false` otherwise
- Used to conditionally style the light

**Example:**

```typescript
// If activeLight = "red" and color = "red"
isActive = true; // This light should be bright

// If activeLight = "red" and color = "green"
isActive = false; // This light should be dim
```

```typescript
const colorClasses = {
	red: isActive ? "bg-red-500 shadow-lg shadow-red-500/50" : "bg-red-900/30",
	yellow: isActive
		? "bg-yellow-500 shadow-lg shadow-yellow-500/50"
		: "bg-yellow-900/30",
	green: isActive
		? "bg-green-500 shadow-lg shadow-green-500/50"
		: "bg-green-900/30",
};
```

**Purpose:** Creates an object mapping each color to its CSS classes based on active state.

**Breaking it down:**

- Object with keys: `red`, `yellow`, `green`
- Each value uses a ternary operator: `condition ? valueIfTrue : valueIfFalse`
- Active classes: bright color + shadow for glow effect
- Inactive classes: dark, semi-transparent color

**Tailwind Classes Explained:**

- `bg-red-500`: Bright red background
- `bg-red-900/30`: Dark red with 30% opacity
- `shadow-lg`: Large shadow
- `shadow-red-500/50`: Red shadow with 50% opacity (glow effect)

**What it does:** Provides the right CSS classes for each light based on whether it's active.

```typescript
	return (
```

**Purpose:** Returns JSX to render the light.

```typescript
		<div className="flex items-center gap-4">
```

**Purpose:** Container div with flexbox layout.

**Classes:**

- `flex`: Makes this a flex container
- `items-center`: Centers items vertically
- `gap-4`: Adds spacing (1rem) between children

**What it does:** Creates a horizontal row with the light circle and labels, centered vertically.

```typescript
<div
	className={`w-20 h-20 rounded-full border-4 border-gray-700 ${colorClasses[color]} transition-all duration-300`}
/>
```

**Purpose:** The actual light circle.

**Breaking it down:**

- `` className={`...`} ``: Template literal for dynamic classes
- `w-20 h-20`: Width and height of 5rem (80px)
- `rounded-full`: Makes it a perfect circle
- `border-4 border-gray-700`: 4px gray border
- `${colorClasses[color]}`: Dynamically inserts the color classes
- `transition-all duration-300`: Smooth 300ms transition for all property changes

**What it does:** Renders a circular light that changes color and brightness based on active state, with smooth transitions.

```typescript
<span className="text-white font-semibold">{label}</span>
```

**Purpose:** Displays the light's label (Red, Yellow, or Green).

**Classes:**

- `text-white`: White text color
- `font-semibold`: Semi-bold font weight

**What it does:** Shows the color name next to the light.

```typescript
<span className="text-gray-400 text-sm">({isActive ? "On" : "Off"})</span>
```

**Purpose:** Shows the on/off status.

**Breaking it down:**

- `text-gray-400`: Light gray text
- `text-sm`: Small text size
- `{isActive ? "On" : "Off"}`: Ternary operator - shows "On" if active, "Off" if not

**What it does:** Displays "(On)" or "(Off)" next to each light.

---

#### Main Return Statement

```typescript
	return (
```

**Purpose:** Returns the JSX that makes up the stoplight component.

```typescript
		<div className="flex flex-col items-center">
```

**Purpose:** Outer container that centers the stoplight.

**Classes:**

- `flex flex-col`: Vertical flexbox layout
- `items-center`: Centers children horizontally

**What it does:** Centers the stoplight housing on the page.

```typescript
			<div className="bg-gray-800 rounded-lg p-6 shadow-2xl">
```

**Purpose:** The stoplight housing/box.

**Classes:**

- `bg-gray-800`: Dark gray background
- `rounded-lg`: Large border radius (rounded corners)
- `p-6`: Padding of 1.5rem (24px) on all sides
- `shadow-2xl`: Very large shadow for depth

**What it does:** Creates a dark box that contains the lights, giving it a 3D appearance.

```typescript
				<div className="flex flex-col gap-4">
```

**Purpose:** Container for the three lights, stacked vertically.

**Classes:**

- `flex flex-col`: Vertical flexbox
- `gap-4`: Spacing between lights

**What it does:** Stacks the three lights vertically with spacing.

```typescript
					<Light color="red" label="Red" />
					<Light color="yellow" label="Yellow" />
					<Light color="green" label="Green" />
```

**Purpose:** Renders the three light components.

**Breaking it down:**

- Each `<Light />` is a component instance
- `color` prop: Which color this light represents
- `label` prop: Text to display next to the light
- The component uses `activeLight` to determine if each should be on or off

**What it does:** Creates three lights, but only the one matching `activeLight` will appear bright.

```typescript
export default Stoplight;
```

**Purpose:** Exports the component so it can be imported in other files.

**What it does:** Makes Stoplight available to import, like we do in `App.tsx`.

---

## How Everything Works Together

### The Complete Flow

1. **Browser loads `index.html`**

   - HTML structure is created
   - `<div id="root">` is empty
   - Script tag loads `main.tsx`

2. **`main.tsx` executes**

   - React and ReactDOM are loaded
   - App component is imported
   - CSS is loaded (Tailwind styles available)
   - `ReactDOM.createRoot()` finds the `#root` div
   - App component is rendered into the DOM

3. **App component renders**

   - App returns JSX with a centered container
   - `<Stoplight />` component is rendered

4. **Stoplight component initializes**

   - State is set: `activeLight = "green"`, `currentIndex = 0`
   - Component renders with green light active
   - `useEffect` runs (first time)

5. **useEffect executes**

   - Gets sequence config: `{ color: "green", duration: 5000 }`
   - Sets active light to green (already is, but ensures consistency)
   - Sets a 5-second timer
   - Timer callback is scheduled

6. **After 5 seconds**

   - Timer fires
   - `setCurrentIndex(1)` is called
   - React detects state change
   - Component re-renders

7. **Re-render triggers useEffect**

   - `currentIndex` changed (dependency array)
   - Effect runs again
   - Gets new config: `{ color: "yellow", duration: 1000 }`
   - Sets active light to yellow
   - Component re-renders (yellow light becomes bright)
   - Sets a 1-second timer

8. **Cycle continues**
   - After 1 second → red light (2 seconds)
   - After 2 seconds → green light (5 seconds)
   - Infinite loop!

### Visual Representation

```
Time: 0s
┌─────────────┐
│   🔴 (Off)  │  currentIndex = 0
│   🟡 (Off)  │  activeLight = "green"
│   🟢 (On)   │  Timer: 5s
└─────────────┘

Time: 5s
┌─────────────┐
│   🔴 (Off)  │  currentIndex = 1
│   🟡 (On)   │  activeLight = "yellow"
│   🟢 (Off)  │  Timer: 1s
└─────────────┘

Time: 6s
┌─────────────┐
│   🔴 (On)   │  currentIndex = 2
│   🟡 (Off)  │  activeLight = "red"
│   🟢 (Off)  │  Timer: 2s
└─────────────┘

Time: 8s → Back to green (cycle repeats)
```

---

## Key Concepts Summary

### React Concepts

| Concept       | Description                    | Example                                 |
| ------------- | ------------------------------ | --------------------------------------- |
| **Component** | Reusable piece of UI           | `function Stoplight() { ... }`          |
| **JSX**       | HTML-like syntax in JavaScript | `<div>Hello</div>`                      |
| **Props**     | Data passed to components      | `<Light color="red" />`                 |
| **State**     | Data that can change           | `const [count, setCount] = useState(0)` |
| **useState**  | Hook for managing state        | `useState(initialValue)`                |
| **useEffect** | Hook for side effects          | `useEffect(() => {...}, [deps])`        |
| **Re-render** | React updates the display      | Happens when state changes              |

### TypeScript Concepts

| Concept             | Description                     | Example                             |
| ------------------- | ------------------------------- | ----------------------------------- |
| **Type**            | Defines what values are allowed | `type Color = "red" \| "blue"`      |
| **Interface**       | Defines object shape            | `interface Person { name: string }` |
| **Type Annotation** | Explicitly states the type      | `const age: number = 25`            |
| **Generic**         | Type parameter                  | `useState<string>("hello")`         |
| **Union Type**      | One of several types            | `string \| number`                  |

### Web Development Concepts

| Concept         | Description                              |
| --------------- | ---------------------------------------- |
| **DOM**         | Browser's representation of HTML         |
| **Virtual DOM** | React's representation (for efficiency)  |
| **Event Loop**  | How JavaScript handles asynchronous code |
| **setTimeout**  | Runs code after a delay                  |
| **Cleanup**     | Code that runs to prevent memory leaks   |

---

## Practice Exercises

### Exercise 1: Understanding State

**Question:** What happens if we change the initial state from `"green"` to `"red"`?

**Answer:** The stoplight will start with red active, but the sequence will still be green → yellow → red. The first `useEffect` run will set it to green (index 0), so it will immediately switch.

### Exercise 2: Modifying Duration

**Question:** How would you make green last 10 seconds instead of 5?

**Answer:** Change `duration: 5000` to `duration: 10000` in the DEFAULT_SEQUENCE array.

### Exercise 3: Adding a New Light

**Question:** How would you add a blue light to the sequence?

**Steps:**

1. Add `"blue"` to the `LightColor` type
2. Add a blue entry to `DEFAULT_SEQUENCE`
3. Add a `<Light color="blue" label="Blue" />` in the return statement
4. Add blue color classes to `colorClasses` object

### Exercise 4: Understanding useEffect

**Question:** What happens if we remove `currentIndex` from the dependency array?

**Answer:** The effect would only run once on mount. The timer would fire and update `currentIndex`, but the effect wouldn't re-run, so the light wouldn't change after the first cycle.

### Exercise 5: Cleanup Function

**Question:** Why is the cleanup function important?

**Answer:** Without it, if the component unmounts or the effect re-runs, the old timer would still fire and try to update state on an unmounted component, causing errors and memory leaks.

---

## Additional Resources

### React Documentation

- [React Official Docs](https://react.dev)
- [React Hooks Reference](https://react.dev/reference/react)

### TypeScript Documentation

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript for React](https://react-typescript-cheatsheet.netlify.app/)

### Tailwind CSS

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Tailwind Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)

### JavaScript Fundamentals

- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [JavaScript.info](https://javascript.info/)

---

## Glossary

- **Component**: A reusable piece of UI code
- **Hook**: A special function that lets you use React features
- **JSX**: JavaScript XML - HTML-like syntax in JavaScript
- **Props**: Properties passed to components
- **State**: Data that can change and trigger re-renders
- **Side Effect**: Code that affects something outside the component
- **TypeScript**: JavaScript with static type checking
- **DOM**: Document Object Model - browser's representation of HTML
- **Virtual DOM**: React's efficient representation of the DOM
- **Cleanup**: Code that runs to prevent memory leaks
- **Dependency Array**: Controls when useEffect runs
- **Template Literal**: String interpolation with backticks
- **Destructuring**: Extracting values from objects/arrays
- **Modulo Operator (%)**: Returns remainder after division
- **Ternary Operator**: Shorthand if/else: `condition ? true : false`

---

_This study guide covers the complete stoplight component implementation. Review each section, experiment with the code, and try the practice exercises to solidify your understanding!_
