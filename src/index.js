//import React, {Component} from "react";
import React, { useEffect, createRef } from "react";
import ReactDOM from "react-dom";
import {Runtime, Inspector} from "@observablehq/runtime";
import './index.css';
import define from "@coindesk-research/localbitcoins-paxful-activity-map";

function Container() {
    const toDisplay = ["viewof platform", "viewof column", "viewof encoder", 
                       "viewof month", "map", "legend", "update", "iUpdate"];
    const refMap = new Map(toDisplay.map(c => [c, createRef()]));

    useEffect(
        () => {
            const runtime = new Runtime();
            runtime.module(define, name => {
                if (refMap.get(name)) {
                    return new Inspector(refMap.get(name).current);
                }
            });
            return () => runtime.dispose();
        },
        [refMap]
    );

    return (
        <>
            {toDisplay.map((c, i) => <div ref={refMap.get(c)} key={i} id={c} />)}
        </>
    );
}

// If you're feeling vintage ;)
/*class Container extends React.Component {
    constructor(props) {
        super(props);
        const displayed = ["viewof platform", "viewof column", "viewof encoder", 
                           "viewof month", "map", "legend", "update", "iUpdate"];
        this.displayed = displayed;
        this.ref = new Map(displayed.map(c => [c, React.createRef()]));
    }

    componentDidMount() {
        const runtime = new Runtime();
        runtime.module(define, name => {
            if (this.ref.get(name)) {
                return new Inspector(this.ref.get(name).current);
            }
        });
        return () => runtime.dispose();
    }

    render() {
        return (
            <div>
                {this.displayed.map(c => <div ref={this.ref.get(c)}></div>)}
            </div>
        );
    }
}*/

ReactDOM.render(
    <Container />,
    document.getElementById("root")
);
