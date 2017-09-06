// import React, { Component } from 'react';
import axios from 'axios';

const GithubUsuario = {
    getByUsername(username) {
        return axios.get(`https://api.github.com/users/${username}`);
    },

    getReposByUsername(username) {
        return axios.get(`https://api.github.com/users/${username}/repos`);
    }
  };
  
export default GithubUsuario;