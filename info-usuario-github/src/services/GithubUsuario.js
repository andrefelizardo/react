import React, { Component } from 'react';
import axios from 'axios';

var GithubUsuario = {
    getByUsername: function (username) {
        return axios.get('https://api.github.com/users/' + username);
    },

    getReposByUsername: function (username) {
        return axios.get('https://api.github.com/users/' + username + '/repos');
    }
  };
  
module.exports = GithubUsuario;