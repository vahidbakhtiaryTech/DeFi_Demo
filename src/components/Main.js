import React from "react";
import { Tabs, Tab } from 'react-bootstrap'
import Claim from "./tabs/Claim";
import Deposit from "./tabs/Deposit";
import Withdraw from "./tabs/Withdraw";


const Main = ({ balance, contractBalance, stakeTokenBalance, handleDeposit, handleWithdraw, handleClaim }) => {



    return (

        <div id="content" className="mt-3">

            <div className="row">
                <div class="col">
                    <div class="card p-3">
                        <div className="col"><p><strong>Your Balance</strong></p></div>
                        <div className="col"><p>{balance} </p></div>
                    </div>
                </div>

                <div class="col mb-5">
                    <div class="card p-3">
                        <div className="col"><p><strong>Contract Balance</strong></p></div>
                        <div className="col"><p> {contractBalance}</p></div>
                    </div>
                </div>

            </div>



            <Tabs defaultActiveKey="stake" id="uncontrolled-tab-example">
                <Tab eventKey="stake" title="Stake">
                    <Deposit handleDeposit={handleDeposit} stakeTokenBalance={stakeTokenBalance} />
                </Tab>
                <Tab eventKey="withdraw" title="Withdraw">
                    <Withdraw handleWithdraw={handleWithdraw} />
                </Tab>
                <Tab eventKey="claim" title="Claim">
                    <Claim handleClaim={handleClaim} />
                </Tab>

            </Tabs>
        </div>
    );
}

export default Main;