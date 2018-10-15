import React from 'react';

export default props => (
    <button onClick={props.onClick} type="button" className="btn btn-success">
    {props.txt}
    </button>
)