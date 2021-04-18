import React from 'react';
import Prices from '../Prices';

const Dashboard = () => {
    return (
        <section>
            <div className="container-fluid row">
                <div className="col-md-2">
                    <Prices/>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;