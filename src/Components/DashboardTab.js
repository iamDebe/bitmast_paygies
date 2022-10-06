import React from 'react'
import Balance from './Balance'
import General from './General'
import Noactivity from './Noactivity'
import Notification from './Notification'
import RecentTrxn from './RecentTrxn'
import WalletTrxn from './WalletTrxn'

const DashboardTab = () => {
  return (
    <div>
         <section className="md-container container">
            <ul className="nav nav-tabs custom__tab--ul" id="myTab" role="tablist">
                <li className="nav-item custom__nav  fw-bold fs-5 " role="presentation">
                <button className="nav-link active custom__tab--item " id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true" href="#">DASHBOARD</button>
                </li>
                <li className="nav-item custom__nav text-capitalize fw-bold fs-5 " role="presentation">
                <button className="nav-link custom__tab--item text-uppercase" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">settings</button>
                </li>
            </ul>
         

            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
                    <div className="md-container ">
                        <Balance />
                        <RecentTrxn />
                        <Notification />
                        <WalletTrxn />
                        <General />
                        <Noactivity />
                    </div>
                </div>
                <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">...</div>
            </div>
         </section>

    </div>
  )
}

export default DashboardTab