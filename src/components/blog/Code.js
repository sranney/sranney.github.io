import React from "react";
import ReactHtmlParser from "react-html-parser";

export default function Code ({className,renderCode}) {
    return (
        <pre className={className}>
            {ReactHtmlParser(renderCode)}
        </pre>
    );
}