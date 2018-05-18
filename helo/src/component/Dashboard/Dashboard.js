import React, { Component } from 'react';
import axios from 'axios';


class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            input: '',
            isChecked: true,
            posts:''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(value) {
        this.setState({ input: value })
    }
    handleReset(value) {
        this.setState({ reset: value })
    }
    handleSearch() {
        this.setState({ search: '' })
    }
    handleChange () {
        this.setState({isChecked: !this.state.isChecked});
        
    }
    componentDidMount() {
        let {id} = this.props.match.params;
        axios.delete('/api/posts/:id').then((response) => {
          this.setState({ posts: response.data[0] })
        })
    }
    render() {
        let postsUpdate = this.state.posts.map( ( element, index) =>{
            return (
                <h2 key={ index }>username={ element }>img={index}</h2>
            )
        })
        return (
            <div>
                <button onClick={this.handleSearch}>Search</button>
                <button onClick={this.handleReset}>Reset</button>
                <input onChange={(e) => this.handleInputChange(e.target.value)} type="text" />
                <input onChange={(e) => this.handleChange( e.target.value)} type="checkbox" labeled="My Posts"/>
            </div>
        )
    }
}

export default Dashboard;