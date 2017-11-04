import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

export default props => <div>{props.match.params.profileName} subscribers</div>;
