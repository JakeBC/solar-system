import React, { Component } from 'react';
import classNames from 'classnames';
import Points from './Points';
import { POINTS } from '../points';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zoom: ''
        };
        this.points = POINTS;
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(id) {
        const zoom = this.state.zoom === id ? '' : id;
        this.setState({
            zoom: zoom
        });
    }

    renderPoints() {
        return (
            <Points>
            {
                this.points.map((p, i) => {
                    const style = {
                        top: p.y,
                        left: p.x
                    }
                    return (
                        <div className='point'
                            style={style}
                        />
                    )
                })
            }
            </Points>
        )
    }

    render() {
        return (
            <div className='main'>
                <div className='plane' />
                <img src={require('../assets/earth.jpg')}
                    className={classNames('image', 'earth', this.state.zoom === 'earth' ? 'zoom' : '')}
                    onClick={() => this.handleClick('earth')}
                />
                <img src={require('../assets/moon.jpg')}
                    className={classNames('image', 'moon', this.state.zoom === 'moon' ? 'zoom' : '')}
                    onClick={() => this.handleClick('moon')}
                />
                <img src={require('../assets/mars.webp')}
                    className={classNames('image', 'mars', this.state.zoom === 'mars' ? 'zoom' : '')}
                    onClick={() => this.handleClick('mars')}
                />
                <img src={require('../assets/jupiter.jpg')}
                    className={classNames('image', 'jupiter', this.state.zoom === 'jupiter' ? 'zoom' : '')}
                    onClick={() => this.handleClick('jupiter')}
                />
            </div>
        );
    }
}

export default Main;
