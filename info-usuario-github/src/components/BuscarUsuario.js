import React, { Component } from 'react';
import GithubUsuario from '../services/GithubUsuario';

class BuscarUsuario extends Component{
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(e) {
        e.preventDefault();
        document.getElementById('loader').style.display = "flex";
        GithubUsuario.getByUsername(this.refs.username.value).then((response) => {
            this.props.updateUser(response.data);
        })
        .catch(function(error) {
            alert('Usuário não encontrado');
            location.reload();
        });
        GithubUsuario.getReposByUsername(this.refs.username.value).then((response) => {
            this.props.updateRepos(response.data);
            document.getElementById('loader').style.display = "none";
        });
    }

    render() {
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
}

BuscarUsuario.propTypes = {
    updateUser: React.PropTypes.func.isRequired,
    updateRepos: React.PropTypes.func.isRequired,
};

export default BuscarUsuario;