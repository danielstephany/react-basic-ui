import React from 'react';
import './flexCol.scss';

export default function FlexCol(props) {
    let classList = "";

    for(let prop in props){
        if(prop !== "children"){
            if (classList) { classList += " "; }
            if(props[prop]){
                if (prop === "xs") { classList += "flex-col-" + props[prop] }
                if (prop === "sm") { classList += "flex-col-sm-" + props[prop] }
                if (prop === "md") { classList += "flex-col-md-" + props[prop] }
                if (prop === "lg") { classList += "flex-col-lg-" + props[prop] }
                if (prop === "xl") { classList += "flex-col-xl-" + props[prop] }
                if (prop === "offset-xs") { classList += "offset-col-" + props[prop] }
                if (prop === "offset-sm") { classList += "offset-col-sm-" + props[prop] }
                if (prop === "offset-md") { classList += "offset-col-md-" + props[prop] }
                if (prop === "offset-lg") { classList += "offset-col-lg-" + props[prop] }
                if (prop === "offset-xl") { classList += "offset-col-xl-" + props[prop] }
            }
        }
    }

    classList = classList || "flex-col"

    classList = props.className ? `${classList} ${props.className}` : classList;

    return <div className={classList}>{props.children}</div>
}