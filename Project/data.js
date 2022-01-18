const articles = [
  {
    subject: "useState",
    link: "https://javascript.works-hub.com/learn/a-complete-beginners-guide-to-react-usestate-hook-f85a0",
    recommended: "bootcamper",
    caption: "Beginners guide to useState hook",
    image_link: "https://daveceddia.com/images/useState-hook-twitter.png",
  },
  {
    subject: "useState",
    link: "https://medium.com/swlh/how-to-usestate-react-hooks-476794132bd0",
    recommended: "coach",
    caption: "How to use useState hooks",
    image_link: "https://miro.medium.com/max/1400/0*ms9Vukmueceg78Qg",
  },
];

const contents = [
  {
    subject: "useEffect",
    code_example: `import { useState, useEffect } from "react";
  
  function Timer() {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      setTimeout(() => {
        setCount((count) => count + 1);
      }, 1000);
    });`,
    description: `The useEffect Hook allows you to perform side effects in your components.

  Some examples of side effects are: fetching data, directly updating the DOM, and timers.
  
  useEffect accepts two arguments. The second argument is optional.`,
  },
  {
    subject: "useReducer",
    code_example: `const [state, dispatch] = useReducer(reducer, initialArg, init);`,
    description: `An alternative to useState, useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. useReducer also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.`,
  },
  {
    subject: "props",
    code_example: `function Car(props) {
    return <h2>I am a { props.brand }!</h2>;
  }`,
    description: `Props are arguments passed into React components.
  Props are passed to components via HTML attributes.
  props stands for properties`,
  },
  {
    subject: "useState",
    code_example: `import { useState } from "react";

  function FavoriteColor() {
    const [color, setColor] = useState("");
  }`,

    description: `We initialize our state by calling useState in our function component.
  useState accepts an initial state and returns two values:
  
      The current state.
      A function that updates the state.`,
  },
];
