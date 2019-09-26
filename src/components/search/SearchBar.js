import React from "react";

export default function SearchBar ({onChange, reset, value}) {
    return (
        <div>
            <form> 
                <label className="d-block">
                    <input className="input-bottom-highlight" onChange={onChange} value={value} required/>
                </label>
            </form>
            {reset && <button className='btn btn-warning' onClick={reset}>Reset</button>}
        </div>
    );
};