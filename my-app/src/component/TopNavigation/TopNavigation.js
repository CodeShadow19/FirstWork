import React, { Component, Fragment } from 'react'
import {NavLink,Link} from "react-router-dom";
import { Container,Navbar,Nav,NavDropdown,Button } from 'react-bootstrap'
import '../../assets/css/bootstrap.min.css'
import '../../assets/css/custom.css'

export default class TopNavigation extends Component {
    constructor(){
        super()
        this.state={
            navBar1:"d-block linkClass",
            navBar2:"d-none linkClass",
            dropDown:"d-none dropdown-show",
            userName:sessionStorage.getItem("userName")
        }
    }
    logout(){
        sessionStorage.clear();
        window.location.reload();
    }
    /*onScroll=()=>{
        if(window.scrollY>100){
            this.setState({navBackground:"navBackgroundOnscroll",navVariant:"light"})
        }else if(window.scrollY<100){
            this.setState({navBackground:"navBackgroundClass",navVariant:"dark"})
        }
    }*/
    componentDidMount(){
        //window.addEventListener('scroll',this.onScroll);
        if(sessionStorage.getItem("userName")==null){
            this.setState({navBar1:"d-block linkClass",navBar2:"d-none linkClass"})
        }else{
            this.setState({navBar1:"d-none linkClass",navBar2:"d-block linkClass",dropDown:"d-block dropdown-show"})
        }
    }
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topNavigationContainer">
                    <div className="topNavigationDiv">
                        <Navbar collapseOnSelect expand="lg" className=""bg="dark" variant="dark" >
                            <Container>
                            <Link to="/"><Navbar.Brand>React-Bootstrap</Navbar.Brand></Link>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link><NavLink exact activeStyle={{color:'red'}} className="linkClass" to="/">Home</NavLink></Nav.Link>
                                    <NavDropdown title="Setting" className={this.state.dropDown} id="collasible-nav-dropdown">
                                        <NavDropdown.Divider />
                                        <p className="navPtag">Profile</p>
                                        <NavDropdown.Item><NavLink exact activeStyle={{color:'red'}} className="dropdownLink" to="/adminProfile">My Profile</NavLink></NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <p className="navPtag">Admin</p>
                                        <NavDropdown.Item><NavLink exact activeStyle={{color:'red'}} className="dropdownLink" to="/addNew">Add New</NavLink></NavDropdown.Item>
                                        <NavDropdown.Item><NavLink exact activeStyle={{color:'red'}} className="dropdownLink" to="/allUsers">Users</NavLink></NavDropdown.Item>
                                        <NavDropdown.Divider />
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                                <Nav className="me-auto">
                                    <Nav.Link><NavLink exact activeStyle={{color:'red'}} className={this.state.navBar1} to="/signInPage">Sign In</NavLink></Nav.Link>
                                    <Nav.Link><NavLink exact activeStyle={{color:'red'}} className={this.state.navBar1} to="/registration" >Register</NavLink></Nav.Link>
                                    <Nav.Link eventKey="disabled" className={this.state.navBar2} disabled>
                                        Welcome {this.state.userName}!
                                    </Nav.Link>
                                    <Button className={this.state.navBar2} variant="outline-warning" onClick={this.logout}>Logout</Button>
                                </Nav>
                            </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </div>
                </Container>
            </Fragment>
        )
    }
}
