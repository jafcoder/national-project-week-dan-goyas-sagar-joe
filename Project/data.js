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
  {
    subject: "useEffect",
    link: "https://dev.to/antdp425/react-fetch-data-from-api-with-useeffect-27le",
    recommended: "coach",
    caption: "Fetch data from API with useEffect",
    image_link:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--0uiUtO_h--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vrvd98wcbw5lasortf4s.png",
  },
  {
    subject: "useEffect",
    link: "https://www.freecodecamp.org/news/beginners-guide-to-using-react-hooks/",
    recommended: "bootcamper",
    caption: "Beginners guide to using react hooks",
    image_link:
      "https://www.freecodecamp.org/news/content/images/size/w600/2020/06/beginners-guide-to-hooks.png",
  },
  {
    subject: "useReducer",
    link: "https://dmitripavlutin.com/react-usereducer/",
    recommended: "coach",
    caption: "An easy guide to useRedcuer",
    image_link:
      "https://dmitripavlutin.com/static/c47eb25d68bef042100d2b32083d7c0a/aaf91/cover.webp",
  },
  {
    subject: "useReducer",
    link: "https://javascript.works-hub.com/learn/a-complete-beginners-guide-to-usereducer-hook-f4a78",
    recommended: "bootcamper",
    caption: "Beginners guide to useReducer",
    image_link:
      "https://functionalworks-backend--prod.s3.amazonaws.com/logos/0ac885e225a62529cc5eedbf6beb98b9",
  },
  {
    subject: "props",
    link: "https://reactjs.org/docs/components-and-props.html",
    recommended: "coach",
    caption: "Components and Props - React Docs",
    image_link: "https://miro.medium.com/max/1138/1*27LtOtFyJe7MguQkNcZQjQ.png",
  },
  {
    subject: "props",
    link: "https://www.w3schools.com/react/react_props.asp",
    recommended: "bootcamper",
    caption: "W3 Schools learn React props",
    image_link:
      "https://yt3.ggpht.com/dW6to0x5Crmeh7yi-YPLcQRqVrBtx2BSh8eoKTJbE8NbjloQ0sqlmdszIlxokJU_97-ndOt_=s900-c-k-c0x00ffffff-no-rj",
  },
];

const videos = [
  {
    subject: "useState",
    link: "https://www.youtube.com/watch?v=O6P86uwfdR0",
    recommended: "bootcamper",
  },
  {
    subject: "useState",
    link: "https://www.youtube.com/watch?v=mxK8b99iJTg",
    recommended: "coach",
  },
  {
    subject: "useEffect",
    link: "https://www.youtube.com/watch?v=0ZJgIjIuY7U",
    recommended: "bootcamper",
  },
  {
    subject: "useEffect",
    link: "https://www.youtube.com/watch?v=06Y6aJzTmXY",
    recommended: "coach",
  },
  {
    subject: "useReducer",
    link: "https://www.youtube.com/watch?v=cVYp4u1m6iA",
    recommended: "bootcamper",
  },
  {
    subject: "useReducer",
    link: "https://www.youtube.com/watch?v=kK_Wqx3RnHk",
    recommended: "coach",
  },
  {
    subject: "props",
    link: "https://www.youtube.com/watch?v=IYvD9oBCuJI",
    recommended: "bootcamper",
  },
  {
    subject: "props",
    link: "https://www.youtube.com/watch?v=PHaECbrKgs0",
    recommended: "coach",
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

export default { videos, articles, contents };
