import { Link } from "react-router-dom";
import GlobalContext from "../src/GlobalContext";
import { useEffect, useState, React, useContext } from "react";

function ConfirmPayment() {

    const { allConcerts, user, allTickets } = useContext(GlobalContext);

    let pageExist = false
    let pendingTickets = []

    const confirmPayment = async () => {

        for (let i = 0; i < allConcerts.length; i++) {
            for (let x = 0; x < allTickets.length; x++) {
                if (allTickets[x].pending === "true" && allConcerts[i].concert_id === allTickets[x].concert_id && allTickets[x].user_id === user.user_id) {
                    fetch('/data/ticket', {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            user_id: user.user_id,
                            pending: "false"
                        })
                    }).then((res) => {
                        if (res.ok == true) {
                            alert("Payment successful!")
                        } else {
                            console.log("response failed:")
                        }
                    }).then(() => {
                        window.location.reload(true)
                    })
                  
                }
            }

        }
    }

    function getPendingTickets() {
        let count = 1
        for (let i = 0; i < allConcerts.length; i++) {
            for (let x = 0; x < allTickets.length; x++) {
                if (allTickets[x].pending === "true" && allConcerts[i].concert_id === allTickets[x].concert_id && allTickets[x].user_id === user.user_id) {
                    pendingTickets[count] = <div className="ticket-list-container">
                        <ol className="ticket-container" >
                            <p><b>{count}. </b>{allConcerts[i].concert_name}   <b>x 1 </b></p>
                        </ol>
                        <ul className="ticket-amount-container" >
                            <p>{allConcerts[i].price}.00 SEK</p>
                        </ul>
                    </div>
                    count++
                }
            }

        }
        return pendingTickets
    }

    function getTicketAmount() {
        let ticketAmount = 0
        for (let i = 0; i < allConcerts.length; i++) {
            for (let x = 0; x < allTickets.length; x++) {
                if (allTickets[x].pending === "true" && allConcerts[i].concert_id === allTickets[x].concert_id && allTickets[x].user_id === user.user_id) {
                    ticketAmount++
                }
            }

        }
        return ticketAmount

    }

    function getTotalPrice() {
        let totalPrice = 0
        for (let i = 0; i < allConcerts.length; i++) {
            for (let x = 0; x < allTickets.length; x++) {
                if (allTickets[x].pending === "true" && allConcerts[i].concert_id === allTickets[x].concert_id && allTickets[x].user_id === user.user_id) {
                    totalPrice += allConcerts[i].price;
                }
            }

        }
        return totalPrice
    }





    return <>
        <div className="body">
            <h1 className="buy-ticket-h1">Your cart</h1>

            <div className="confirm-payment">
                <div className="confirm-payment-left-content">
                    <div className="total-tickets" >
                        <h2 className="space-between">Total tickets: <span>x {getTicketAmount()}</span></h2>

                    </div>
                    <div className="your-tickets">
                        <h2>Your tickets:</h2>
                        {getPendingTickets()}
                    </div>
                    <div className="total">
                        <h2 className="space-between">Total: <span>{getTotalPrice()}.00 SEK</span></h2>
                    </div>
                    <div className="buttons">
                        <Link to="">
                            <button onClick={() => confirmPayment()} className="cancel-btn">Confirm</button>
                        </Link>
                        <Link to={"/"}>
                            <button className="cancel-btn">Cancel</button>
                        </Link>
                    </div>
                </div>
                <div className="confirm-payment-right-content" >

                    <div>
                        <h2 className="email-info">Sending tickets to: {user.email}</h2>
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