import React from "react";

export default function TwitterQuote({ url }) {
    return (
        <blockquote className="twitter-tweet">
            <a href={url}></a>
        </blockquote>
    );
}