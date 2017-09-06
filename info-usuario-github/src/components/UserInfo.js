import React, { Component } from 'react';
import UserRepos from './UserRepos';

function UserInfo(props) {
    var userInfo = props.user ?
        (
            <div className="row">
                <div className="col-lg-4">
                    <img className="img-thumbnail" src={props.user.avatar_url} alt="avatar" width="140" height="140" />
                    <h2>{props.user.login}</h2>
                    <p>{props.user.name}</p>
                    <p>Seguidores: {props.user.followers} / Seguindo: {props.user.following}</p>
                    <p><a className="btn btn-dark" href={props.user.html_url} role="button">Ver Detalhes</a></p>
                </div>
                <div className="col-lg-8">
                    <UserRepos repos={props.repos} />
                </div>
            </div>
        ) : null;
    return userInfo;
}

UserInfo.propTypes = {
    user: React.PropTypes.object,
    repos: React.PropTypes.array,
};

export default UserInfo;