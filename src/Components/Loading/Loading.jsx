import React from 'react';
import loading from "../../assets/loading.svg"

function Loading(props) {
    return (
       <div className={"Loading"}>
           <img src={loading} width={100} alt={"loading"}/>
       </div>
    );
}

export default Loading;