import React, { useState } from 'react';

const NotFound = () => {
    return (
        <React.Fragment>
            <div style={{textAlign: 'center'}}>
                <h1 style={{textAlign: 'center',marginTop: 150,fontSize: 120,letterSpacing: 10,color: '#666'}}>404</h1>
                <div style={{fontSize: 20,letterSpacing: 4,marginTop: 20}}>NOT FOUND</div>
            </div>
        </React.Fragment>
    )
}

export default NotFound;