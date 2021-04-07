import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            home: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3001/home')
            .then(res => {
                console.log('res: ', res.data);
                this.setState({ home: res.data });
            })
            .catch(err => {
                console.log(err);
            });
    }
    render() {
        console.log('this.state: ', this.state.home)
        let element = this.state.home.map(ele => {
            return (
                <ul>
                    <li>{ele.id}</li>
                    <li>{ele.name}</li>
                    <li>{ele.description}</li>
                </ul>
            )
        })
        return (
            <div>
                {element}
            </div>
        )
    }
}

export default Home;