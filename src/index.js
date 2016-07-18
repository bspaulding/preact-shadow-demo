// import React from "react";
// import { findDOMNode, render } from "react-dom";
import { h, render } from "preact";
import CustomElement from "preact-custom-element";
import ShadowDOM from "preact-shadow-dom";
import testAppCSS from "./test-app.css";

const TestApp = ({ baz, children, foo }) => (
	<div>
		<h1>react-shadow</h1>
		<p>foo: {foo}</p>
		<p>baz: {baz}</p>
		<div className="box blue"/>
		<div className="box red"/>
		{children
			? <div>
					<p>Children:</p>
					{children}
				</div>
			: "No children"}
	</div>
);

// TestApp.propTypes = {
// 	foo: React.PropTypes.string,
// 	baz: React.PropTypes.string
// };

const StyledTestApp = ShadowDOM(TestApp, testAppCSS);

CustomElement(StyledTestApp, "x-test-app");

render(<StyledTestApp foo="bar" baz="buzz"/>, document.getElementById("react-shadow-css-demo"));
render(<TestApp foo="bar" baz="buzz"/>, document.getElementById("react-shadow-css-demo-no-shadow"));
