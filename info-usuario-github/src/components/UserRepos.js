import React, { Component } from 'react';

var UserRepos = React.createClass({
    getInitialState: function () {
        return {
            reposCount: 0
        }
    },
    componentWillReceiveProps: function (props) {
        this.setState({ reposCount: props.repos.length });
    },
    render: function () {
        var repos = this.props.repos.map(function (repo, key) {
            return (
                <div className="col-sm-6">
                    <div key={key} className="card">
                        <div className="card-header">
                            <h5 className="card-title">{repo.name}
                                <span className="badge badge-secondary">{repo.stargazers_count} <i className="material-icons">star_border</i></span>
                            </h5>
                        </div>
                        <div className="card-body">
                            <p>{repo.description}</p>
                            <p>
                                <a href={repo.html_url} className="btn btn-primary" role="button">Repositório</a>
                                <a href={repo.html_url + '/issues'} className="btn btn-info" role="button">Issues ({repo.open_issues}) </a>
                            </p>
                        </div>
                    </div>
                </div>
            );
        });
        return (
            <div>
                <h2>{this.state.reposCount} repositórios</h2>
                <div className="row">
                    {repos}
                </div>
            </div>
        );
    }
});

export default UserRepos;