import React from "react";

const Blog = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            How will you improve the performance of a React Application?
          </h2>
          <p>
            1.By Keeping component file local where necessary 2.By dynamic
            import 3.By not doing unnecessary rendering 4.By Using Callback hook
            5.Lazy loading images in React
          </p>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            What are the different ways to manage a state in a React
            application?
          </h2>
          <p>
            The Four Kinds of React State to Manage.Such as,Local state,Global
            state,Server state,URL state.Local state is data we manage in one or
            another component.Global state is data we manage across multiple
            components.Data that comes from an external server that must be
            integrated with our UI state.Data that exists on our URLs, including
            the pathname and query parameters.
          </p>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            How does prototypical inheritance work?
          </h2>
          <p>
            n JavaScript, objects have a special hidden property [Prototype] (as
            named in the specification), that is either null or references
            another object. That object is called “a prototype”.When we read a
            property from object, and it is missing, JavaScript automatically
            takes it from the prototype. In programming, this is called
            “prototypal inheritance”. And soon we will study many examples of
            such inheritance, as well as cooler language features built upon
            it.The property [Prototype] is internal and hidden, but there are
            many ways to set it
          </p>
          
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            Why you do not set the state directly in React?
          </h2>
          <p>
            Mutating state directly can lead to odd bugs, and components that are hard to optimize. Here is an example. As you may already know, a common way to tune a React component for performance is to make it “pure,” which causes it to only re-render when its props change (instead of every time its parent re-renders). This can be done automatically by extending React.PureComponent instead of React.Component, or manually by implementing the shouldComponentUpdate lifecycle method to compare nextProps with current props. If the props look the same, it skips the render, andsaves some time.So there you go: that is why you shouldn not mutate state, even if you immediately call setState. Optimized components might not re-render if you do, and the rendering bugs will be tricky to track down.


          </p>
          
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">What is a unit test? Why should write unit tests?</h2>
          <p>UNIT TESTING is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.
           In SDLC, STLC, V Model, Unit testing is first level of testing done before integration testing. Unit testing is a WhiteBox testing technique that is usually performed by the developer. Though, in a practical world due to time crunch or reluctance of developers to tests, QA engineers also do unit testing.</p>
          
        </div>
      </div>
    </div>
  );
};

export default Blog;
