import React, { Component } from 'react';
import BuscarUsuario from './BuscarUsuario';
import UserInfo from './UserInfo';

var Github = React.createClass({
    getInitialState: function() {
        return {
            user: null,
            repos: [],
        };
    },
    updateUser: function(user) {
        this.setState({user: user});
    },
    updateRepos: function(repos) {
        this.setState({repos: repos});
    },
    render: function() {
        return (
            <div className="container">
                <BuscarUsuario
                    updateUser={this.updateUser}
                    updateRepos={this.updateRepos}
                />
                <UserInfo
                    user={this.state.user}
                    repos={this.state.repos}
                />
            </div>
        );
    }
});
  
  export default Github;