// import React, { useEffect, useState } from 'react'
// import { useAppContext } from '../../utils/AppContext'
import "./style.css"
import PageTitle from '../../components/PageTitle'

const ContactPage = () => {
    return (
        <div className="container mt-sm-5 mt-4">
            <PageTitle title="Contact" subtitle=""></PageTitle>
            <div className="row mt-3">
                <div className="col-sm-10 ml-sm-4">
                    <div className="form-group">
                        <label for="Name">Name</label>
                        <input className="form-control" type="text" id="Name" placeholder="Name" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-10 ml-sm-4">
                    <div className="form-group">
                        <label for="Email">Email Address</label>
                        <input className="form-control" type="email" id="Email" placeholder="Email"
                            aria-describedby="emailHelp" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                        else.</small>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-10 ml-sm-4">
                    <div className="form-group">
                        <label for="Message">Message</label>
                        <textarea className="form-control" id="Message" rows="3"></textarea>
                    </div>
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-sm-10 ml-sm-4">
                    <button type="submit" className="btn btn-danger btn-lg pl-4 pr-4">Submit</button>
                </div>
            </div>

        </div>
    )
}

export default ContactPage
