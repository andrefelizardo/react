import React, { Component } from 'react';
import GithubUsuario from '../services/GithubUsuario';

var BuscarUsuario = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();
        GithubUsuario.getByUsername(this.refs.username.value).then(function(response){
            this.props.updateUser(response.data);
        }.bind(this));
        GithubUsuario.getReposByUsername(this.refs.username.value).then(function(response){
            this.props.updateRepos(response.data);
        }.bind(this));
    },
    render: function () {
        return (
            <div className="jumbotron">
                <h1>Github Info</h1>
                <div className="row">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Nome de usuário</label>
                            <input
                                type="text"
                                ref="username"
                                className="form-control"
                                placeholder="Ex: andrefelizardo"
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary">Buscar
                    </button>
                    </form>
                </div>
            </div>
        );
    }
});

BuscarUsuario.propTypes = {
    updateUser: React.PropTypes.func.isRequired,
    updateRepos: React.PropTypes.func.isRequired,
};

export default BuscarUsuario;