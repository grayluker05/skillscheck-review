import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    render(){
        return(
            <div className='Header'>
                <div><h5>Grayson's Super Convenient Store</h5></div>
                <div className='buttons'>
                    <Link to='/'><button>Home</button></Link>
                    <Link to='/add'><button>Add</button></Link>
                </div>
            </div>
        )
    }
}

export default Header;