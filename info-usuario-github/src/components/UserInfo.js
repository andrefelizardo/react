import React, { Component } from 'react';
import UserRepos from './UserRepos';

const UserInfo = ({user, repos}) => {
    var userInfo = user ?
        (
            <div className="row">
                <div className="col-lg-4">
                    <img className="img-thumbnail" src={user.avatar_url} alt="avatar" width="140" height="140" />
                    <h2>{user.login}</h2>
                    <p>{user.name}</p>
                    <p>Seguidores: {user.followers} / Seguindo: {user.following}</p>
                    <p><a className="btn btn-dark" href={user.html_url} role="button">Ver Detalhes</a></p>
                </div>
                <div className="col-lg-8">
                    <UserRepos repos={repos} />
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