import React, { Component } from "react"
import PickerCard from "../widget/PickerCard"

class PickerView extends Component {
    constructor(props) {
        super(props)
        this.state = {data: []}
    }
    render() { 
        return <PickerCard games={this.state.data}/>

    }
}
 
export default PickerView