import React from 'react';
import './mainCol.scss';

export default function MainCol(props) {
    let classList = "";

    for(let prop in props){
        if(prop !== "children"){
            if (classList) { classList += " "; }
            if(props[prop]){
                if (prop === "xs") { classList += "main-col-" + props[prop] }
                if (prop === "sm") { classList += "main-col-sm-" + props[prop] }
                if (prop === "md") { classList += "main-col-md-" + props[prop] }
                if (prop === "lg") { classList += "main-col-lg-" + props[prop] }
                if (prop === "xl") { classList += "main-col-xl-" + props[prop] }
                if (prop === "offset-xs") { classList += "offset-col-" + props[prop] }
                if (prop === "offset-sm") { classList += "offset-col-sm-" + props[prop] }
                if (prop === "offset-md") { classList += "offset-col-md-" + props[prop] }
                if (prop === "offset-lg") { classList += "offset-col-lg-" + props[prop] }
                if (prop === "offset-xl") { classList += "offset-col-xl-" + props[prop] }
            }
        }
    }

    classList = classList || "main-col"

    classList = props.className ? `${classList} ${props.className}` : classList;

    return <div className={classList}>{props.children}</div>
}