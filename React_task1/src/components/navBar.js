import React from 'react';
import { Menu, Icon, Button } from 'antd';
import "antd/dist/antd.css";
import { Link } from 'react-router-dom'

export default class NavBar extends React.Component {

    state = {
        collapsed: true,
      };
    
      toggleCollapsed = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };
    
    
    render() {
  return (
       <div className="navDiv" style={{  marginTop : 5}}>
         <b><h1 className="blue" style={{textAlign:'center'}}> The Blue </h1></b>
        <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 10 }}>
          <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button>
            <Menu   theme="dark"
                    defaultSelectedKeys={['1']}
                    mode="inline"
                    inlineCollapsed={this.state.collapsed} 
                    >

                <Menu.Item  style={{justifyContent: 'center',alignItems:'center'}} key="1">
                    <Link to="/">
                    <Icon type="home" />
                    <span>Home</span>
                    </Link>
                </Menu.Item>

                <Menu.Item key="2">
                    <Link to="/user">
                    <Icon className="icon" type="user" />
                    <span>User</span>
                    </Link>
                </Menu.Item>

                <Menu.Item key="3">
                    <Link to="/team">
                    <Icon type="team" />
                    <span>Team</span>
                    </Link>
                </Menu.Item>

                <Menu.Item key="4">
                    <Link to="/trend">
                    <Icon type="fire" />
                    <span>Trend</span>
                    </Link>
                </Menu.Item>

                <Menu.Item key="5">
                    <Link to="/about">
                    <Icon type="desktop" />
                    <span>About</span>
                    </Link>
                </Menu.Item>
            </Menu>
            </div>
  );
}
}