import React, { Component } from 'react'
import { Card, CardTitle, CardBody } from "reactstrap"

class PickerCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Card>
                <CardTitle>Foo</CardTitle>
                <CardBody>
                This is a form Card
                    </CardBody>
                </Card>
            </div>
         );
    }
}
 
export default PickerCard;