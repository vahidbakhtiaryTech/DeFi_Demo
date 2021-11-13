import React from "react";


const Claim = ({handleClaim}) => {

    

    return ( 

        <div className="card mb-4" >
        <div className="card-body">

            <form className="mb-3"  onSubmit={(event)=> handleClaim(event)}>
                <div>
                    <label className="float-left"><b>Claim</b></label>
                    <span className="float-right text-muted">                        
                    </span>
                </div>
                
                <button type="submit" className="btn btn-primary btn-block btn-lg">Claim!</button>
            </form>
             
        </div>
    </div>
    
     );
}
 
export default Claim;
