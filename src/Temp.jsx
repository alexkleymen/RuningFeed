import { Component, createElement } from "react";

import { HelloWorldSample } from "./components/HelloWorldSample";
import "./ui/Temp.css";

export default class Temp extends Component {
    render() {
        return <HelloWorldSample sampleText={this.props.sampleText} />;
    }
}
