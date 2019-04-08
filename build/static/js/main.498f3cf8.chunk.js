(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{25:function(e,t,n){e.exports=n(51)},30:function(e,t,n){},31:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(22),l=n.n(r),c=(n(30),n(1)),i=n(2),u=n(4),s=n(3),h=n(5),m=n(7),p=n(12),d=(n(31),function(){return o.a.createElement("header",{className:"header"},o.a.createElement("h1",null,"React Concepts Demo"),o.a.createElement("nav",{className:"header-nav"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(m.b,{to:"/",className:"header-nav-link"},"Home")))))}),f=(n(40),function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("a",{href:"https://github.com/thawkin3/react-concepts-demo"},"View it in GitHub"))}),E=(n(41),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={error:null},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.state.error?o.a.createElement("div",{className:"full-page"},o.a.createElement("h1",null,"Something went wrong."),o.a.createElement("p",null,"This is an error boundary that our app is wrapped in!"),o.a.createElement("p",null,"When an error is caught, this fallback UI is shown."),o.a.createElement("p",null,"To get back to the normal app, please refresh your page.")):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{error:e}}}]),t}(a.Component)),g=(n(42),function(){return o.a.createElement("main",{className:"page home-page"},o.a.createElement("h2",null,"Home"),o.a.createElement("p",null,"This demo app is meant to show off different key pieces of React's functionality, including some of its newest features."),o.a.createElement("p",null,"Not all of the demos are easily explainable through the UI alone, so please take a look at the ",o.a.createElement("a",{href:"https://github.com/thawkin3/react-concepts-demo"},"source code in GitHub")," as well."),o.a.createElement("nav",{className:"home-page-nav"},o.a.createElement("h3",null,"Table of Contents"),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(m.b,{to:"/code-splitting"},"Code-Splitting")),o.a.createElement("li",null,o.a.createElement(m.b,{to:"/error-boundaries"},"Error Boundaries")),o.a.createElement("li",null,o.a.createElement(m.b,{to:"/higher-order-components"},"Higher Order Components (HOCs)")),o.a.createElement("li",null,o.a.createElement(m.b,{to:"/hooks"},"Hooks")),o.a.createElement("li",null,o.a.createElement(m.b,{to:"/lifecycle-methods"},"Lifecycle Methods")),o.a.createElement("li",null,o.a.createElement(m.b,{to:"/portals"},"Portals")),o.a.createElement("li",null,o.a.createElement(m.b,{to:"/refs"},"Refs")))))}),b=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={hasError:!1},n.throwErrorViaRender=function(){n.setState({hasError:!0})},n.throwErrorViaClickHandlerIncorrectly=function(){throw new Error("I crashed inside a click handler!")},n.throwErrorViaClickHandlerCorrectly=function(){try{throw new Error("I crashed inside a click handler!")}catch(e){n.setState({hasError:!0})}},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){if(this.state.hasError)throw new Error("I crashed during the render method!");return o.a.createElement("div",{className:"demo-section error-boundaries-demo-1"},o.a.createElement("h3",null,"Demo 1 - Error Boundary Surrounding the Entire App"),o.a.createElement("p",null,"Here we will intentionally throw an error. Our entire app is wrapped in an error boundary, and we'll show an error message."),o.a.createElement("p",null,"This button will cause an error in the component's render method, which will then be caught by the error boundary."),o.a.createElement("button",{type:"button",onClick:this.throwErrorViaRender},"Throw an error through the render method"),o.a.createElement("p",null,"This button will throw an error inside the click handler, but this will NOT be caught by the error boundary. Don't do this!"),o.a.createElement("button",{type:"button",onClick:this.throwErrorViaClickHandlerIncorrectly},"Throw an error through the click handler (incorrect)"),o.a.createElement("p",null,"Instead, you still need to use try/catch blocks to handle errors in your event handlers."),o.a.createElement("button",{type:"button",onClick:this.throwErrorViaClickHandlerCorrectly},"Throw an error through the click handler (correct)"))}}]),t}(a.Component),y=(n(43),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={error:null,errorInfo:null},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidCatch",value:function(e,t){console.log("component error boundary did catch"),this.setState({error:e,errorInfo:t})}},{key:"render",value:function(){return this.state.error?o.a.createElement("div",{className:"component-error-boundary"},o.a.createElement("h1",null,"Something went wrong."),o.a.createElement("p",null,"This is an error boundary that our component is wrapped in!"),o.a.createElement("p",null,"When an error is caught, this fallback UI is shown. But, importantly, the rest of the app did not crash."),o.a.createElement("p",null,this.state.error.toString()),o.a.createElement("p",{className:"pre-format"},"Stack Trace: ",this.state.errorInfo.componentStack)):this.props.children}}]),t}(a.Component)),v=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={hasError:!1},n.throwError=function(){n.setState({hasError:!0})},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){if(this.state.hasError)throw new Error("Component has an error!");return o.a.createElement("button",{type:"button",onClick:this.throwError},"Click me to throw an error")}}]),t}(a.Component),w=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"demo-section error-boundaries-demo-2"},o.a.createElement("h3",null,"Demo 2 - Error Boundary Surrounding a Smaller Component"),o.a.createElement("p",null,"Here we will intentionally throw an error. This button component is wrapped in an error boundary, so a fallback UI will be displayed for just this section if an error is caught."),o.a.createElement(y,null,o.a.createElement(v,null)),o.a.createElement("p",null,"Here we will also intentionally throw an error. However, this button component is not wrapped in an error boundary, so the error will go all the way up to our main app error boundary."),o.a.createElement(v,null))}}]),t}(a.Component),C=function(){return o.a.createElement("main",{className:"page error-boundaries-page"},o.a.createElement("h2",null,"Error Boundaries"),o.a.createElement("p",null,"Error boundaries are a useful tool for ensuring that your entire app doesn't break if a component runs into an error. Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them. If any errors are caught, you can then show a fallback UI."),o.a.createElement(b,null),o.a.createElement("hr",null),o.a.createElement(w,null))},k=(n(44),function(){return o.a.createElement("main",{className:"page higher-order-components-page"},o.a.createElement("h2",null,"Higher Order Components (HOCs)"),o.a.createElement("p",null,"Coming soon!"))}),O=n(13),j=function(){var e=Object(a.useState)(0),t=Object(O.a)(e,2),n=t[0],r=t[1],l=Object(a.useState)(""),c=Object(O.a)(l,2),i=c[0],u=c[1];return o.a.createElement("div",{className:"demo-section hooks-demo-1"},o.a.createElement("h3",null,"Demo 1 - The State Hook"),o.a.createElement("p",null,"The state hook is used by importing ",o.a.createElement("code",null,"useState")," from React. The ",o.a.createElement("code",null,"useState")," method returns an array of two elements: the first is the state variable, and the second is the function that updates it."),o.a.createElement("p",null,"Counter value: ",n),o.a.createElement("button",{type:"button",onClick:function(){return r(function(e){return e+1})}},"Increment counter"),o.a.createElement("button",{type:"button",onClick:function(){return r(function(e){return e-1})}},"Decrement counter"),o.a.createElement("button",{type:"button",onClick:function(){return r(0)}},"Reset counter"),o.a.createElement("p",null,"Your name is: ",i),o.a.createElement("input",{type:"text",onChange:function(e){return u(e.target.value)}}))},I=function(){var e=Object(a.useState)(0),t=Object(O.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)(function(){return document.title="You clicked ".concat(n," times"),function(){document.title="React Concepts"}}),o.a.createElement("div",{className:"demo-section hooks-demo-2"},o.a.createElement("h3",null,"Demo 2 - The Effect Hook"),o.a.createElement("p",null,"The effect hook is used by importing ",o.a.createElement("code",null,"useEffect")," from React. The ",o.a.createElement("code",null,"useEffect")," method allows you to write a function that gets run when the component mounts and when it updates."),o.a.createElement("p",null,"If your effect function returns a function, that function gets called when the component unmounts. This is where you do any needed cleanup."),o.a.createElement("p",null,"Click the button below, and then check the page's title shown in the browser tab to see it get updated."),o.a.createElement("p",null,"You clicked ",n," times"),o.a.createElement("button",{onClick:function(){return r(function(e){return e+1})}},"Click to increment counter"))},x=function(){return Object(a.useEffect)(function(){console.log("Effect was run, and the interval has started running");var e=setInterval(function(){return console.log("Interval is running")},500);return function(){clearInterval(e),console.log("Effect cleanup was run, and the interval has been cleared")}}),o.a.createElement("div",{className:"demo-section hooks-demo-3"},o.a.createElement("h3",null,"Demo 3 - The Effect Hook and Cleanup"),o.a.createElement("p",null,"This effect sets up an interval to console log every 500ms. Open up your browser's JavaScript console to see the logs."),o.a.createElement("p",null,"Navigate away from this page using the Home button at the top-right of your screen."),o.a.createElement("p",null,"This component will unmount, and the cleanup will be performed so that the interval is cleared and no longer console logs."))},D=n(15),N={firstName:"",lastName:"",favoriteColor:""};function T(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setFirstName":return Object(D.a)({},e,{firstName:t.payload});case"setLastName":return Object(D.a)({},e,{lastName:t.payload});case"setFavoriteColor":return Object(D.a)({},e,{favoriteColor:t.payload});default:return e}}var S=function(){var e=Object(a.useReducer)(T,N),t=Object(O.a)(e,2),n=t[0],r=t[1];return o.a.createElement("div",{className:"demo-section hooks-demo-4"},o.a.createElement("h3",null,"Demo 4 - The Reducer Hook"),o.a.createElement("p",null,"The reducer hook is used by importing ",o.a.createElement("code",null,"useReducer")," from React. The ",o.a.createElement("code",null,"useReducer")," method takes a reducer and the intial state as arguments and then returns an array of two elements: the first is the state variable, and the second is the dispatch function."),o.a.createElement("p",null,"The reducer hook lets you write code that is very similar to how things work in Redux."),o.a.createElement("div",{className:"state-data"},o.a.createElement("h4",null,"State Data:"),o.a.createElement("div",{className:"left-indent"},"First Name: ",n.firstName),o.a.createElement("div",{className:"left-indent"},"Last Name: ",n.lastName),o.a.createElement("div",{className:"left-indent"},"Favorite Color: ",n.favoriteColor)),o.a.createElement("form",{id:"useReducerForm",onSubmit:function(e){return e.preventDefault()}},o.a.createElement("label",{htmlFor:"firstName4"},"First Name"),o.a.createElement("input",{type:"text",id:"firstName4",value:n.firstName,onChange:function(e){return r({type:"setFirstName",payload:e.target.value})}}),o.a.createElement("label",{htmlFor:"lastName4"},"Last Name"),o.a.createElement("input",{type:"text",id:"lastName4",value:n.lastName,onChange:function(e){return r({type:"setLastName",payload:e.target.value})}}),o.a.createElement("label",{htmlFor:"favoriteColor4"},"Favorite Color"),o.a.createElement("select",{id:"favoriteColor4",value:n.favoriteColor,onChange:function(e){return r({type:"setFavoriteColor",payload:e.target.value})}},o.a.createElement("option",{value:"",disabled:!0},"Please select"),o.a.createElement("option",{value:"Red"},"Red"),o.a.createElement("option",{value:"Blue"},"Blue"),o.a.createElement("option",{value:"Green"},"Green"),o.a.createElement("option",{value:"Yellow"},"Yellow"))))},R=(n(45),function(){return o.a.createElement("main",{className:"page hooks-page"},o.a.createElement("h2",null,"Hooks"),o.a.createElement("p",null,"Hooks are pretty cool! They let you use state and other React features in functional components, so you no longer need to define a class component if you don't want to."),o.a.createElement(j,null),o.a.createElement("hr",null),o.a.createElement(I,null),o.a.createElement("hr",null),o.a.createElement(x,null),o.a.createElement("hr",null),o.a.createElement(S,null))}),H=function(){return o.a.createElement("div",{className:"demo-section lifecycle-methods-demo-section-0"},o.a.createElement("h3",null,"Mounting"),o.a.createElement("p",null,"When a component is being created and inserted into the DOM, the following lifecycle methods are called in this order:"),o.a.createElement("ol",null,o.a.createElement("li",null,o.a.createElement("b",null,"constructor()")," - Initialize state and bind methods here. Don't forget to call ",o.a.createElement("code",null,"super(props)"),". Don't cause any side effects here."),o.a.createElement("li",null,o.a.createElement("b",null,"getDerivedStateFromProps()")," - Create a new state based on the new props and previous state. Don't cause any side effects here."),o.a.createElement("li",null,o.a.createElement("b",null,"render()")," - Render your component (write your JSX here). Don't cause any side effects here."),o.a.createElement("li",null,o.a.createElement("b",null,"componentDidMount()")," - Set up subscriptions, intervals, timeouts, event listeners, or make API requests here.")),o.a.createElement("h3",null,"Updating"),o.a.createElement("p",null,"When a component is updating and being re-rendered due to a change in state or props, the following lifecycle methods are called in this order:"),o.a.createElement("ol",null,o.a.createElement("li",null,o.a.createElement("b",null,"getDerivedStateFromProps()")," - Create a new state based on the new props and previous state. Don't cause any side effects here."),o.a.createElement("li",null,o.a.createElement("b",null,"shouldComponentUpdate()")," - Return ",o.a.createElement("code",null,"true")," to update or ",o.a.createElement("code",null,"false")," to not update. Defaults to ",o.a.createElement("code",null,"true"),". In general, you shouldn't use this method and just let React decide when the component needs to update."),o.a.createElement("li",null,o.a.createElement("b",null,"render()")," - Render your component (write your JSX here). Don't cause any side effects here."),o.a.createElement("li",null,o.a.createElement("b",null,"getSnapshotBeforeUpdate()")," - Capture information about the DOM just before the new content is rendered on the screen. This is generally good for getting things like elements heights or positions if you need to auto-scroll somewhere after the component updates."),o.a.createElement("li",null,o.a.createElement("b",null,"componentDidUpdate()")," - Make API requests here if you need to. In general, you'll want to wrap any code here in an if statement so that the code only runs when certain pieces of props or state change, not just any time the component updates.")),o.a.createElement("h3",null,"Unmounting"),o.a.createElement("p",null,"When a component is being removed from the DOM, the following lifecycle methods are called in this order:"),o.a.createElement("ol",null,o.a.createElement("li",null,o.a.createElement("b",null,"componentWillUnmount()")," - Do clean-up here. Cancel any subscriptions, intervals, timeouts, event listeners, or pending API requests.")))},U=n(11),F=function(e){function t(e){var n;return Object(c.a)(this,t),console.log("Demo1 Child constructor"),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={counter:0},n.incrementCounter=n.incrementCounter.bind(Object(U.a)(n)),n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){console.log("Demo1 Child componentDidMount")}},{key:"shouldComponentUpdate",value:function(e,t){return console.log("Demo1 Child shouldComponentUpdate","nextProps:",e,"nextState:",t),!0}},{key:"getSnapshotBeforeUpdate",value:function(e,t){return console.log("Demo1 Child getSnapshotBeforeUpdate","prevProps:",e,"prevState:",t),{timestamp:(new Date).getMilliseconds()}}},{key:"componentDidUpdate",value:function(e,t,n){console.log("Demo1 Child componentDidUpdate","prevProps:",e,"props:",this.props,"prevState:",t,"state:",this.state,"snapshot:",n,"new timestamp:",{timestamp:(new Date).getMilliseconds()})}},{key:"componentWillUnmount",value:function(){console.log("Demo1 Child componentWillUnmount")}},{key:"incrementCounter",value:function(){this.setState(function(e){return{counter:e.counter+1}})}},{key:"render",value:function(){console.log("Demo1 Child render");var e=this.props.textColor,t=this.state.counter;return o.a.createElement("div",{className:"demo1-child"},o.a.createElement("p",null,"I'm a child component. I accept props for the text color of the following text:"),o.a.createElement("p",{style:{color:e}},"Watch my color change!"),o.a.createElement("button",{type:"button",onClick:this.incrementCounter},"Increment counter"),o.a.createElement("p",null,"Counter value: ",t))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return console.log("Demo1 Child getDerivedStateFromProps","nextProps:",e,"prevState:",t),null}}]),t}(a.Component),P=function(e){function t(e){var n;return Object(c.a)(this,t),console.log("Demo1 Parent constructor"),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={showChild:!0,textColor:"#000"},n.parentContainerRef=Object(a.createRef)(),n.toggleChildVisibility=n.toggleChildVisibility.bind(Object(U.a)(n)),n.handleTextInputChange=n.handleTextInputChange.bind(Object(U.a)(n)),n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){console.log("Demo1 Parent componentDidMount")}},{key:"shouldComponentUpdate",value:function(e,t){return console.log("Demo1 Parent shouldComponentUpdate","nextProps:",e,"nextState:",t),!0}},{key:"getSnapshotBeforeUpdate",value:function(e,t){return console.log("Demo1 Parent getSnapshotBeforeUpdate","prevProps:",e,"prevState:",t),{parentHeight:this.parentContainerRef.current&&this.parentContainerRef.current.clientHeight}}},{key:"componentDidUpdate",value:function(e,t,n){console.log("Demo1 Parent componentDidUpdate","prevProps:",e,"props:",this.props,"prevState:",t,"state:",this.state,"snapshot:",n,"new parentHeight:",{parentHeight:this.parentContainerRef.current&&this.parentContainerRef.current.clientHeight})}},{key:"componentWillUnmount",value:function(){console.log("Demo1 Parent componentWillUnmount")}},{key:"toggleChildVisibility",value:function(){this.setState(function(e){return{showChild:!e.showChild}})}},{key:"handleTextInputChange",value:function(e){this.setState({textColor:e.target.value})}},{key:"render",value:function(){console.log("Demo1 Parent render");var e=this.state,t=e.showChild,n=e.textColor;return o.a.createElement("div",{className:"demo1-parent",ref:this.parentContainerRef},o.a.createElement("p",null,"I'm the parent component. I have state for whether or not to show the child component and what color the child component's text should be."),o.a.createElement("button",{type:"button",onClick:this.toggleChildVisibility},"Toggle child visibility"),o.a.createElement("label",{htmlFor:"textColorInput"},"Text color:"),o.a.createElement("input",{type:"text",id:"textColorInput",value:n,onChange:this.handleTextInputChange}),t&&o.a.createElement(F,{textColor:n}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return console.log("Demo1 Parent getDerivedStateFromProps","nextProps:",e,"prevState:",t),null}}]),t}(a.Component),L=function(){return o.a.createElement("div",{className:"demo-section lifecycle-methods-demo-1"},o.a.createElement("h3",null,"Demo 1 - Console Log the Lifecycle Methods"),o.a.createElement("p",null,"Here we render a parent component and a child component. Each of them have lifecycle methods implemented that console log when they are called as well as any data associated with them."),o.a.createElement("p",null,"The parent component has a text input in which you can enter a color value. This value is stored in the parent's state and passed down to the child component as a prop. The parent component also has a button to show or hide the child component so that the child component can be mounted and unmounted repeatedly."),o.a.createElement("p",null,"The child component accepts the text color prop and renders some text in that color. It also has a button to increment a counter, and that counter value is stored in its state."),o.a.createElement(P,null))},M=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={showShoppingList:!0,currentHeight:null,previousHeight:null},n.containerRef=Object(a.createRef)(),n.toggleShoppingList=n.toggleShoppingList.bind(Object(U.a)(n)),n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.setState({currentHeight:this.containerRef.current&&this.containerRef.current.clientHeight})}},{key:"getSnapshotBeforeUpdate",value:function(e,t){return{previousHeight:this.containerRef.current&&this.containerRef.current.clientHeight}}},{key:"componentDidUpdate",value:function(e,t,n){t.showShoppingList!==this.state.showShoppingList&&this.setState({currentHeight:this.containerRef.current&&this.containerRef.current.clientHeight,previousHeight:n.previousHeight})}},{key:"toggleShoppingList",value:function(){this.setState(function(e){return{showShoppingList:!e.showShoppingList}})}},{key:"render",value:function(){var e=this.state,t=e.showShoppingList,n=e.currentHeight,a=e.previousHeight;return o.a.createElement("div",{className:"demo-section lifecycle-methods-demo-2"},o.a.createElement("h3",null,"Demo 2 - getSnapshotBeforeUpdate"),o.a.createElement("p",null,"This lifecycle method is great for capturing DOM information right before the component renders, so you can compare before and after values. In this example, we'll see the captured value of the container's height before and after the component updates."),o.a.createElement("div",{className:"bigger-container",ref:this.containerRef},o.a.createElement("p",null,o.a.createElement("b",null,"Main Container Current Height:")," ",n?"".concat(n,"px"):"N/A"),o.a.createElement("p",null,o.a.createElement("b",null,"Main Container Previous Height:")," ",a?"".concat(a,"px"):"N/A"),o.a.createElement("p",null,"This is the main container. It has some children that we'll toggle showing and hiding."),o.a.createElement("button",{type:"button",onClick:this.toggleShoppingList},"Toggle shopping list visibility"),t&&o.a.createElement("div",{className:"smaller-container"},o.a.createElement("p",null,"Shopping List"),o.a.createElement("ul",null,o.a.createElement("li",null,"Bread"),o.a.createElement("li",null,"Milk"),o.a.createElement("li",null,"Eggs")))))}}]),t}(a.Component),B=(n(46),function(){return o.a.createElement("main",{className:"page lifecycle-methods-page"},o.a.createElement("h2",null,"Lifecycle Methods"),o.a.createElement("p",null,"Lifecycle methods are methods that you can tie into to run code at certain points while your component is mounting, updating, or unmounting. Understanding when each method runs and what it's best used for is crucial to writing clean components."),o.a.createElement(H,null),o.a.createElement("hr",null),o.a.createElement(L,null),o.a.createElement("hr",null),o.a.createElement(M,null))}),V=(n(47),function(){return o.a.createElement("main",{className:"page portals-page"},o.a.createElement("h2",null,"Portals"),o.a.createElement("p",null,"Coming soon!"))}),A=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).focusOnTextInput=function(){n.textInputRef.current&&n.textInputRef.current.focus()},n.toggleTextInputDisplay=function(){n.setState(function(e){return{showInput:!e.showInput}})},n.state={showInput:!0,refCurrentValue:null},n.textInputRef=Object(a.createRef)(),n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.setState({refCurrentValue:this.textInputRef.current})}},{key:"componentDidUpdate",value:function(e,t){this.textInputRef.current!==this.state.refCurrentValue&&this.setState({refCurrentValue:this.textInputRef.current})}},{key:"render",value:function(){return o.a.createElement("div",{className:"demo-section refs-demo-1"},o.a.createElement("h3",null,"Demo 1 - Adding a Ref to a DOM Element (Then Focusing an Input Element)"),o.a.createElement("p",null,"Here the ref is created and used inside the same component."),this.state.showInput&&o.a.createElement(a.Fragment,null,o.a.createElement("label",{htmlFor:"username"},"Username"),o.a.createElement("input",{type:"text",id:"username",ref:this.textInputRef})),o.a.createElement("p",null,"The current ref value is: ",this.state.refCurrentValue?this.state.refCurrentValue.tagName:"null"),o.a.createElement("button",{type:"button",onClick:this.focusOnTextInput},"Focus on the input"),o.a.createElement("button",{type:"button",onClick:this.toggleTextInputDisplay},"Toggle the input display"))}}]),t}(a.Component),W=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h4",null,"Child Component with a Text Input"),o.a.createElement("label",{htmlFor:"firstName"},"First Name"),o.a.createElement("input",{type:"text",id:"firstName",ref:this.props.inputRef}))}}]),t}(a.Component),z=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).focusOnTextInput=function(){n.textInputRef.current&&n.textInputRef.current.focus()},n.textInputRef=Object(a.createRef)(),n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h4",null,"Parent Component with a Button"),o.a.createElement("button",{type:"button",onClick:this.focusOnTextInput},"Focus on the input"),o.a.createElement(W,{inputRef:this.textInputRef}))}}]),t}(a.Component),Y=function(){return o.a.createElement("div",{className:"demo-section refs-demo-2"},o.a.createElement("h3",null,"Demo 2 - Adding a Ref to a Class Component as a Custom Prop (Then Focusing an Input Element)"),o.a.createElement("p",null,"Here the ref is created in the parent component and passed down to the child component as a custom prop."),o.a.createElement("p",null,"The child component places the ref on the text input, and the parent component calls focus() directly on the text input."),o.a.createElement(z,null))},G=function(e){function t(){var e,n;Object(c.a)(this,t);for(var o=arguments.length,r=new Array(o),l=0;l<o;l++)r[l]=arguments[l];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).childTextInput=Object(a.createRef)(),n.focusOnTextInput=function(){n.childTextInput.current&&n.childTextInput.current.focus()},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h4",null,"Child Component with a Text Input"),o.a.createElement("label",{htmlFor:"lastName"},"Last Name"),o.a.createElement("input",{type:"text",id:"lastName",ref:this.childTextInput}),o.a.createElement("br",null),o.a.createElement("button",{type:"button",onClick:this.focusOnTextInput},"Focus on the input from the child component"))}}]),t}(a.Component),J=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).focusOnTextInputThruChildComponentMethod=function(){n.childComponentRef.current&&n.childComponentRef.current.focusOnTextInput()},n.childComponentRef=Object(a.createRef)(),n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h4",null,"Parent Component with a Button"),o.a.createElement("button",{type:"button",onClick:this.focusOnTextInputThruChildComponentMethod},"Focus on the input from the parent component"),o.a.createElement(G,{ref:this.childComponentRef}))}}]),t}(a.Component),q=function(){return o.a.createElement("div",{className:"demo-section refs-demo-3"},o.a.createElement("h3",null,"Demo 3 - Adding a Ref to a Class Component as an Actual Ref (Then Focusing an Input Element)"),o.a.createElement("p",null,"Here the ref is created in the parent component and placed directly on the child component."),o.a.createElement("p",null,"So in this case, the ref refers not to the text input, but to the entire child component instance."),o.a.createElement("p",null,"The child component also creates its own ref on the text input and defines a method to focus on the text input."),o.a.createElement("p",null,"Now the child can use its own method to focus on the text input, and the parent can also access the child's method which then focuses on the text input."),o.a.createElement(J,null))},X=(n(48),function(){return o.a.createElement("main",{className:"page refs-page"},o.a.createElement("h2",null,"Refs"),o.a.createElement("p",null,"Refs are used for accessing DOM nodes directly. They should be used sparingly, but they're good for things like programmatically shifting focus to an element."),o.a.createElement("p",null,"When trying to call methods on a ref, it's always a good idea to check that the ref is not null first to avoid errors."),o.a.createElement(A,null),o.a.createElement("hr",null),o.a.createElement(Y,null),o.a.createElement("hr",null),o.a.createElement(q,null))}),$=Object(a.lazy)(function(){return n.e(4).then(n.bind(null,52))}),K=function(){return o.a.createElement("div",{className:"demo-section code-splitting-demo-1"},o.a.createElement("h3",null,"Demo 1 - Suspense and Lazy Loading"),o.a.createElement("p",null,"When this lazy-loaded content is being fetched, you need to show some fallback UI. In this example, we show the text ",o.a.createElement("span",{className:"loading"},'"Loading..."')," while the component is being loaded."),o.a.createElement("p",null,'This component is small, so to see the fallback UI you may want to slow down your internet connection using Chrome\'s dev tools. To do this, open the developer tools for your browser, click on the Network tab, then click on "Online" to show the dropdown menu of different options. Choose "Slow 3G", then refresh your page. You should see the fallback content first, and then once the second chunk has been fetched, you\'ll see the actual component we want to show.'),o.a.createElement(a.Suspense,{fallback:o.a.createElement("div",{className:"loading"},"Loading...")},o.a.createElement($,null)))},Q=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"demo-section code-splitting-demo-2"},o.a.createElement("h3",null,"Demo 2 - Dynamic Imports"),o.a.createElement("p",null,"Dynamic imports are not currently part of ECMAScript, but it is a stage 3 proposal. Rather than loading all dependencies up front when the module requiring them loads, your module can now only load the imports when they are actually needed or used."),o.a.createElement("p",null,"In this example, we have two buttons. Each has a click handler that calls another method. Both methods are dynamically imported. The first method is the default export and the second method is a named export. Dynamic imports work with either!"),o.a.createElement("p",null,"Also note that we have a console log from the imported module. This message only gets logged once when the module first loads when you first click either button, but not every time a button is clicked since the module has already been loaded at that point."),o.a.createElement("button",{type:"button",onClick:t.handleDefaultClick},"Click me for the default export!"),o.a.createElement("button",{type:"button",onClick:t.handleNamedClick},"Click me for the named export!"))}}],[{key:"handleDefaultClick",value:function(){n.e(0).then(n.bind(null,53)).then(function(e){e.default()})}},{key:"handleNamedClick",value:function(){n.e(0).then(n.bind(null,53)).then(function(e){e.alertAboutNamedExport()})}}]),t}(a.Component),Z=(n(49),function(){return o.a.createElement("main",{className:"page code-splitting-page"},o.a.createElement("h2",null,"Code-Splitting"),o.a.createElement("p",null,"Lazy loading allows you to do code-splitting in your app. In other words, rather than loading everything up front, you only load portions of your code when you need it. This helps you reduce bundle sizes and cut down on initial page load time."),o.a.createElement(K,null),o.a.createElement("hr",null),o.a.createElement(Q,null))}),_=(n(50),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(E,null,o.a.createElement("div",{className:"app"},o.a.createElement(m.a,null,o.a.createElement(d,null),o.a.createElement(p.a,{exact:!0,path:"/",component:g}),o.a.createElement(p.a,{path:"/error-boundaries",component:C}),o.a.createElement(p.a,{path:"/higher-order-components",component:k}),o.a.createElement(p.a,{path:"/hooks",component:R}),o.a.createElement(p.a,{path:"/lifecycle-methods",component:B}),o.a.createElement(p.a,{path:"/portals",component:V}),o.a.createElement(p.a,{path:"/refs",component:X}),o.a.createElement(p.a,{path:"/code-splitting",component:Z}),o.a.createElement(f,null))))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,2,3]]]);
//# sourceMappingURL=main.498f3cf8.chunk.js.map