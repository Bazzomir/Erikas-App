import React from 'react';
import { ReactComponent as HomepageImage } from '../../assets/image/homepage.svg';

export default function Homepage() {
    return (
        <div className="homepage container mt-5 vh-100">
            <div className="d-flex row justify-content-between">
                <div className="col-12 col-lg-5">
                    <div className="d-flex row gap-5">
                        <p className="col-12 m-0 first-text text-uppercase">Welcome to our website</p>
                        <h1 className="col-12 m-0 second-text">
                            Shape Your Future <br />  with Global Innovation
                        </h1>
                        <p className="col-12 m-0 third-text">Discover comprehensive talent, where every step forward is tailored to your vision.</p>
                        <button className="btn btn-purple text-uppercase">Start now</button>
                    </div>
                </div>
                <div className="col-0 col-lg-5 d-none d-lg-block">
                    <div className="d-flex p-3">
                        <HomepageImage alt="Homepage Image" />
                    </div>
                </div>
            </div>
        </div>
    )
}