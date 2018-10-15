import React, { Component } from 'react';
import Header from '../Header';
import Contador from '../Contador'
import BtnToolBar from '../BtnToolbar'
import Button from '../Button';

export default class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            count: this.props.initialValue
        }
    }

    sum(x){
        this.setState({ count: this.state.count + x })
        
    }

    render(){
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-xs-12 mx-auto">
                            <Contador currentValue={ this.state.count }/>
                            <BtnToolBar>
                                <Button onClick={ () => this.sum(1) } txt="+"></Button>
                                <Button onClick={ () => this.sum(-1) } txt="-"></Button>
                            </BtnToolBar>
                    </div>
                </div>
            </div>
            </div>
        )
    }

}