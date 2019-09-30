import React from "react";

export default function SearchBar ({onChange, reset, value}) {
    return (
        <div>
            <input className="input-bottom-highlight w-100" onChange={onChange} value={value} placeholder="Search Posts"/>
            {reset && <button className='btn btn-warning' onClick={reset}>Reset</button>}
        </div>
    );
};