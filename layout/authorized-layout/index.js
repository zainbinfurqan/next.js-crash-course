import React from 'react';

function AuthorizedLayout(props) {
    return (
        <div>
            <header>
                <h3>header</h3>
            </header>
            {props.children}
        </div>
    );
}

export default AuthorizedLayout;