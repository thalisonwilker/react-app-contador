import React from 'react';


export default props => (
    <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
        <div className="btn-group mx-auto my-2" role="group" aria-label="First group">
        { props.children }
        </div>
</div>
)