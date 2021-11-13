import React, { useState } from "react";
import dai from '../../dai.png'

const Deposit = ({stakeTokenBalance , handleDeposit }) => {

    const [token, setToken] = useState('')

    return (
        <div className="card mb-4" >
            <div className="card-body">

                <form className="mb-3" onSubmit={(event) => handleDeposit(event, token)}>
                    <div>
                        <label className="float-left"><b>Stake Tokens</b></label>
                        <span className="float-right text-muted">
                            Balance: {stakeTokenBalance}
                        </span>
                    </div>
                    <div className="input-group mb-4">
                        <input
                            id="imageDescription"
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="0"
                            required
                            value={token}
                            onChange={(e) => { setToken(e.target.value) }}
                        />
                        <div className="input-group-append">
                            <div className="input-group-text">
                                <img src={dai} height='32' alt="" />
                                &nbsp;&nbsp;&nbsp; PRNTR
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block btn-lg">STAKE!</button>
                </form>

            </div>
        </div>

    );
}

export default Deposit;

