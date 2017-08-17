import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default function Home(props) {
    return (
        <h2>{props.titulo}</h2>
    );
}

Home.propTypes = {
    titulo: PropTypes.string.isRequired,
};
