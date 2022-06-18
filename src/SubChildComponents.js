import {userDetailsContext} from "../src/App"
import React from "react"

function SubChildComponents(){

    var contextData = React.useContext(userDetailsContext)
    return(<div>
        <h1>Sub child component</h1>
        <h4>User Name : {contextData.name}</h4>
        <h4>Age : {contextData.age}</h4>
    </div>)
}

export default SubChildComponents