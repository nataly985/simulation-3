import React, {Component} from 'react';
import { connect } from 'react-redux';

class Nav extends Component{
    constructor(){
        super();

        this.state ={

        };
        this.handleHome = this.handleHome.bind(this);
        this.handleNewPost = this.handleNewPost.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }
    handleHome(value){
        this.setState({ home: value})
    }
    handleNewPost(value){
        this.setState( {newPost: value})
    }
    handleLogout(value){
        this.setState({ logout:value})
    }
    render(){
        const{ username, img }= this.props;
        return(
        <div>
            <button onClick={this.handleHome}>Home</button>
            <button onClick={this.handleNewPost}>New Post</button>
            <button onClick={this.handleLogout}>Logout</button>
        </div>
        )
    }
}
function mapStateToProps(state){
    return{
        username:state.username,
        img: state.image
    }
}
export default connect(mapStateToProps)(Nav);