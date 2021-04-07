import React, { Component } from 'react';
import axios from 'axios';

class About extends Component {
    constructor(props) {
        super(props);

        this.state = {
            about: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3001/about')
            .then(res => {
                console.log('res: ', res.data);
                this.setState({ about: res.data });
            })
            .catch(err => {
                console.log(err);
            });
    }
    render() {
        console.log('this.state: ', this.state.about)
        let element = this.state.about.map(ele => {
            return (
                <ul>
                    <li>{ele.id}</li>
                    <li>{ele.name}</li>
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

export default About;