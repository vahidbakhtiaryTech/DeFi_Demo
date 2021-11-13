import React, { useState } from "react";
import dai from '../../dai.png'


const Withdraw = ({handleWithdraw}) => {

    const [token, setToken] = useState('')

    return ( 

        <div className="card mb-4" >
            <div className="card-body">

                <form className="mb-3"  onSubmit={(event)=> handleWithdraw(event,token)}>
                    <div>
                        <label className="float-left"><b>Withdraw Tokens</b></label>
                       
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
                    <button type="submit" className="btn btn-primary btn-block btn-lg">Withdraw!</button>
                </form>
                 
            </div>
        </div>
     );
} 

export default Withdraw

 