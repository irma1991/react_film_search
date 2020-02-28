import React, {Component} from 'react';

import './main.scss';
import Form from "../form/Form";


//react.component jei virsuje neimpoirtuoju

class Main extends Component{
    render(){

        return(
            <main>
                <div className="row">
                    <Form/>
                </div>

            </main>
        );

    }

}
export default Main;