import React from "react" 
import { render } from "react-dom"
import { HashRouter, Route, Switch} from "react-router-dom"
import PickerView from "./components/domain/picker/view/PickerView";

const App = () => {
        
        return (
                <div>
                    <HashRouter>
                        <Switch>
                        <Route path="/home" name="Home" component={PickerView} />
                        </Switch>
                    </HashRouter>
                </div>
            
                 
         )
 }       
         
render(<App />, document.getElementById("root"))