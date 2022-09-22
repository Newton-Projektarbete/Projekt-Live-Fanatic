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
                            console.log("Response ok")
                        } else {
                            console.log("Response failed")
                        }
                    }).then(() => {
                        alert("Payment successful!")
                        window.location.reload(true)
                    })
                  
                }
            }

        }
    }

    const deleteTicket = async (e, o, p) => {
        fetch('/data/concert', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              ticket_saldo: p + 1,
              concert_id: o
            })
          })

        fetch('/data/ticket', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                ticket_id: e.currentTarget.id
            })
        }).then((res) => {
            if (res.ok == true) {
                console.log("Response ok")
            } else {
                console.log("Response failed")
            }
        }).then(() => {
            window.location.reload(true)
        })

    }

    function getPendingTickets() {
        let count = 1
        for (let i = 0; i < allConcerts.length; i++) {
            for (let x = 0; x < allTickets.length; x++) {
                if (allTickets[x].pending === "true" && allConcerts[i].concert_id === allTickets[x].concert_id && allTickets[x].user_id === user.user_id) {
                    let o = allConcerts[i].concert_id
                    let p = allConcerts[i].ticket_saldo
                    pendingTickets[count] = <div className="ticket-list-container">
                        <ol className="ticket-container" >
                            <p><b>{count}. </b><Link to={"/concert/" + allConcerts[i].concert_id}>{allConcerts[i].concert_name}</Link>   <b>x 1 </b></p>
                        </ol>
                        <ul className="ticket-amount-container" >
                            <p>{allConcerts[i].price}.00 SEK</p>
                        </ul>
                        <button id={allTickets[x].ticket_id} onClick={(e)=>deleteTicket(e, o, p)} className="delete-btn">Delete</button>
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
                            <button onClick={() => confirmPayment()} className="confirm-btn">Confirm</button>
                        </Link>
                        <Link to={"/"}>
                            <button className="cancel-btn">Cancel</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default ConfirmPayment