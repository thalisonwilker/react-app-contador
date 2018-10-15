import React from 'react'
import ReactDOM from 'react-dom'

import './css/bootstrap.min.css'
import './index.css';

import App from './componentes/App'

ReactDOM.render(
    <App initialValue={10} />,
    document.getElementById('app')
)