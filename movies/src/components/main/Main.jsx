import React, {Component} from 'react';

import './main.scss';
import Form from "../form/Form";


//react.component jei virsuje neimpoirtuoju

class Main extends Component{
    render(){

        return(
            <main>
                <div className="row card-row">
                    <div className="card container card-container">
                        <div className="card-header">
                            Filmų paieškos puslapis
                        </div>
                        <div className="card-body">
                        </div>
                        <Form/>
                    </div>
                </div>

            </main>
        );

    }

}
export default Main;