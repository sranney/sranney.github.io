import React from "react";

export default function BlogLink({link:{href,label}}) {
    return <a className='link' href={href} target="_blank" rel="noopener noreferrer">{label}</a>;
};