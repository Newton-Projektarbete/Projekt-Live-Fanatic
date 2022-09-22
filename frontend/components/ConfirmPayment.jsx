import { Link, useParams } from "react-router-dom";
import GlobalContext from "../src/GlobalContext";
import { useEffect, useState, React, useContext } from "react";

function ConfirmPayment() {

    let id = useParams().concert_id;
    const { allConcerts, user } = useContext(GlobalContext);

    let concert = []
    let pageExist = false
    allConcerts.map(a => {
        if (a.concert_id == id) {
            concert = a
            pageExist = true
            return concert
        }
    })

    function getPendingTickets() {
        return null;
    }





    return <>
        <div className="body">

            <div className="confirm-payment">
                <div className="confirm-payment-left-content">
                    <div className="total-tickets" >
                        <h2 className="space-between">Total tickets: <span>x 1</span></h2>

                    </div>
                    <div className="your-tickets">
                        <h2>Your tickets:</h2>
                        <div className="ticket-list-container">
                            <ol className="ticket-container" >
                                <li>{concert.concert_name} x 1 </li>
                            </ol>
                            <ul className="ticket-amount-container" >
                                <li>{concert.price}.00 SEK</li>
                            </ul>
                        </div>
                    </div>
                    <div className="total">
                        <h2 className="space-between">Total: <span>{concert.price}.00 SEK</span></h2>
                    </div>
                    <div className="buttons">
                    <Link to="">
                        <button className="cancel-btn">Confirm</button>
                    </Link>
                    <Link to={"/concert/" + concert.concert_id + "/buy-ticket"}>
                        <button className="cancel-btn">Cancel</button>
                    </Link>
                    </div>
                </div>
                <div className="confirm-payment-right-content" >

                    <div>
                        <h2 className="email-info">Email: {user.email}</h2>
                    </div>

                    <div className="sprite-container">
                        spripe container goes here
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default ConfirmPayment