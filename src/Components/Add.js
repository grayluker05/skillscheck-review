import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Add extends Component {
    constructor(){
        super();

        this.state = {
            product_name: '',
            price: 0,
            image: ''
        }
    }

    render(){
        return(
            <div className='Add'>
                <h1>Hey its Add</h1>
            </div>
        )
    }
}

export default Add;