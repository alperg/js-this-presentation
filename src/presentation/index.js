// Import React
import React from "react";

// Import Playground
import Playground from "component-playground";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import Bootstrap (for the playground demo)
import "bootstrap/dist/css/bootstrap.min.css";
// Import CSS
import "normalize.css";
import "spectacle/lib/themes/default/index.css";
import "./../assets/styles.css";

// Import Spectacle Core tags
import { Deck, Slide, Heading, ListItem, List, Appear, S } from "spectacle";
import { Underline, ResetCSS, PlaygroundContainer } from "../custom/components";

import theme from "../custom/theme";

const snippets = {
  sfc1: require("../assets/simple-function-call1"),
  sfc2: require("../assets/simple-function-call2"),
  sfc3: require("../assets/simple-function-call3"),
  ib1: require("../assets/implicit-binding1"),
  ib2: require("../assets/implicit-binding2"),
  eb1: require("../assets/explicit-binding1"),
  eb2: require("../assets/explicit-binding2"),
  nb: require("../assets/new-binding"),
  af: require("../assets/arrow-functions"),
};

class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme} progress="bar">

        <Slide transition={["zoom"]} bgColor="tertiary">
          <Heading size={6} textColor="secondary">A Quick Refresher for the</Heading>
          <Heading size={1} caps lineHeight={1} textColor="primary">This</Heading>
          <Heading size={6} textColor="secondary">keyword in JavaScript</Heading>
        </Slide>

        <Slide bgColor="primary">
          <Heading size={4} textColor="secondary">
          It’s easy to forget the rules around what JavaScript’s this keyword points to in different scenarios.
          </Heading>
        </Slide>

        <Slide transition={["spin"]} bgColor="primary" textColor="secondary">
          <span style={{ fontSize: "27pt" }}>
          You'll almost always use <S type="bold">this</S> in the context of a function, but just remember that if <S type="bold">this</S> is used in the global context, then it points to the <S type="bold">global</S> object (e.g.: <S type="bold">window</S> in the browser and global in Node.js).
          </span>
          <Underline />
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary" textColor="secondary">
          <Heading textAlign="center" size={3} textColor="secondary">
            Four Rules
          </Heading>
          <Underline />
          <span style={{ fontSize: "27pt" }}>
            The value of <S type="bold">this</S> differs depending on how a function is invoked (the call site), so we can’t know the value of <S type="bold">this</S> just by looking at the function itself, but we need to know the context in which the function is invoked.
            <br /> <br />
            There are 4 rules to keep in mind. Let’s quickly review these rules.
          </span>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary" textColor="secondary">
        <List>
            <ListItem>
              <span style={{ fontSize: "32pt" }}>
                1. Simple Function Call
              </span>
            </ListItem>
            <Appear>
              <ListItem>
                <span style={{ fontSize: "32pt" }}>
                  2. Implicit Binding
                </span>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <span style={{ fontSize: "32pt" }}>
                  3. Explicit Binding (call, apply, bind)
                </span>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <span style={{ fontSize: "32pt" }}>
                  4. <S type="bold underline">new</S> Binding (constructor functions)
                </span>
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary" textColor="secondary">
          <Heading textAlign="center" size={3} textColor="secondary">
            1. Simple Function Call
          </Heading>
          <Underline />
          <span style={{ fontSize: "22pt" }}>
            <S type="bold">this</S> is the global object in non-strict mode, and <S type="bold">undefined</S> in strict mode.
            <br /> <br />
            In the case of a simple function call, in <S type="underline">non-strict mode</S> <S type="bold">this</S> will default to the global object:
          </span>
          <ResetCSS>
            <PlaygroundContainer codeHeight="280px" previewHeight="0">
              <Playground
                codeText={snippets.sfc1}
                scope={{ window }}
                theme={"material"}
                noRender={true}
              />
            </PlaygroundContainer>
          </ResetCSS>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <span style={{ fontSize: "22pt" }}>
            In the same scenario, but in <S type="underline">strict mode</S> mode, <S type="bold">this</S> will be <S type="underline">undefined</S>. Our example errors-out because we can’t access boo on <S type="underline">undefined</S>:
          </span>
          <ResetCSS>
            <PlaygroundContainer codeHeight="360px" previewHeight="0">
              <Playground
                codeText={snippets.sfc2}
                scope={{ window }}
                theme={"material"}
                noRender={true}
              />
            </PlaygroundContainer>
          </ResetCSS>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Underline />
          <span style={{ fontSize: "22pt" }}>
            As a side note, variables declared with <S type="underline">let</S> or <S type="underline">const</S> at the global level are not stored in the global object, but instead in an inaccessible declarative environment record, so our previous example gives us a different result when using <S type="underline">let</S>:
          </span>
          <Underline />
          <ResetCSS>
            <PlaygroundContainer codeHeight="360px" previewHeight="0">
              <Playground
                codeText={snippets.sfc3}
                scope={{ window }}
                theme={"material"}
                noRender={true}
              />
            </PlaygroundContainer>
          </ResetCSS>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary" textColor="secondary">
          <Heading textAlign="center" size={3} textColor="secondary">
            2. Implicit Binding
          </Heading>
          <Underline />
          <span style={{ fontSize: "20pt" }}>
            <S type="bold">this</S> points to the object on which the function is called (what’s to the left of the period when the function is called).
            <br /> <br />
            This rule will apply for the majority of cases in your day-to-day code and applies when calling a method on an object:
          </span>
          <ResetCSS>
            <PlaygroundContainer codeHeight="290px" previewHeight="0">
              <Playground codeText={snippets.ib1} scope={{ window }} theme={"material"} noRender={true} />
            </PlaygroundContainer>
          </ResetCSS>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <span style={{ fontSize: "20pt" }}>
            Note also that we get the same result if our object only contains a reference to the function:
          </span>
          <ResetCSS>
            <PlaygroundContainer codeHeight="320px" previewHeight="0">
              <Playground
                codeText={snippets.ib2}
                scope={{ window }}
                theme={"material"}
                noRender={true}
              />
            </PlaygroundContainer>
          </ResetCSS>
        </Slide>

       <Slide align="center" transition={["zoom"]} bgColor="primary" textColor="secondary">
          <Heading textAlign="center" size={3} textColor="secondary">
            3. Explicit Binding
          </Heading>
          <Underline />
          <span style={{ fontSize: "16pt" }}>
            We can explicitly tell the JavaScript engine to set <S type="bold">this</S> to point to a certain value using <S type="underline">call</S>, <S type="underline">apply</S> or <S type="underline">bind</S>.
            <br />
            <S type="underline">call</S> and <S type="underline">apply</S> can be used to invoke a function with a specific value for <S type="bold">this</S>:
          </span>
          <ResetCSS>
            <PlaygroundContainer codeHeight="350px" previewHeight="0">
              <Playground codeText={snippets.eb1} scope={{ window }} theme={"material"} noRender={true} />
            </PlaygroundContainer>
          </ResetCSS>
          <span style={{ fontSize: "16pt" }}>
          Both <S type="underline">call</S> and <S type="underline">apply</S> accomplish the same task, and the first argument to both should be what <S type="bold">this</S> points to. The difference is only apparent if additional arguments need to be passed to the invoked function. With <S type="underline">call</S>, the additional arguments are passed as a normal comma-separated list of arguments, and with <S type="underline">apply</S> an array of arguments can be passed-in.
          </span>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <span style={{ fontSize: "18pt" }}>
          <S type="underline">bind</S> is used to create a new function that’s permanently bound to a <S type="bold">this</S> value. In the following example, we create a new function that has its <S type="bold">this</S> permanently bound to myGhost and re-assign ghost to that new permanently bound function:
          </span>
          <ResetCSS>
            <PlaygroundContainer codeHeight="350px" previewHeight="0">
              <Playground codeText={snippets.eb2} scope={{ window }} theme={"material"} noRender={true} />
            </PlaygroundContainer>
          </ResetCSS>
        </Slide>

       <Slide transition={["zoom"]} bgColor="primary" textColor="secondary">
          <Heading textAlign="center" size={3} textColor="secondary">
            4. new Binding
          </Heading>
          <Underline />
          <span style={{ fontSize: "22pt" }}>
            Using the <S type="bold">new</S> keyword constructs a new object, and <S type="bold">this</S> points to it.
            <br /> <br />
            When a function is invoked as a constructor function using the <S type="bold">new</S> keyword, <S type="bold">this</S> points to the new object that’s created:
          </span>
          <ResetCSS>
            <PlaygroundContainer codeHeight="250px" previewHeight="0">
              <Playground codeText={snippets.nb} scope={{ window }} theme={"material"} noRender={true} />
            </PlaygroundContainer>
          </ResetCSS>
        </Slide>

       <Slide transition={["slide"]} bgColor="primary" textColor="secondary">
          <Heading textAlign="center" size={4} textColor="secondary">
            Bonus Rule: Arrow functions
          </Heading>
          <Underline />
          <span style={{ fontSize: "22pt" }}>
            With <S type="underline">arrow functions</S>, <S type="bold">this</S> keeps the same value as its parent scope.
            <br /> <br />
            For example, here <S type="bold">this</S> in the arrow function keeps the same value as this in its enclosing <S type="bold">Ghost</S> function:
          </span>
          <ResetCSS>
            <PlaygroundContainer codeHeight="330px" previewHeight="0">
              <Playground codeText={snippets.af} scope={{ window }} theme={"material"} noRender={true} />
            </PlaygroundContainer>
          </ResetCSS>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading textAlign="left" size={1} textColor="secondary">
            Questions?
          </Heading>
          <Underline />
        </Slide>
        <Slide bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Time to Code!
          </Heading>
        </Slide>
      </Deck>
    );
  }
}

export default Presentation;
