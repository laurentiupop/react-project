import React from "react";

function Match(props) {
    let data = props.data;
    console.log(props)
    console.log('???')
    data.map(function (e, i){
        return (
            <h1>Hello, {e.mn}</h1>
        )
    });
}

export default Match;