import React from "react";
import metamsk from '../metamask.png'

const MetamaskNotSupport = () => {
    return (

        <div className="container-fluid mt-5 text-center">
            <h1>Please install MetaMask</h1>
            <img src={metamsk} alt="Please install MetaMask" />
        </div>
    );
}

export default MetamaskNotSupport

