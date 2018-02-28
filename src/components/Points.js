import React, { Component } from 'react';

class Points extends Component {
    render() {
        return (
            <div className='points'>
                {this.props.children}
            </div>
        )
    }
}

export default Points;
