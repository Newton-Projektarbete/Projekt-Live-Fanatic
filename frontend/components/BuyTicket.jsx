import { Link, useParams } from "react-router-dom";
import { React, useContext } from "react";
import GlobalContext from "../src/GlobalContext";
import QR from "./QR";
import { useEffect, useState } from "react";
function BuyTicket() {

  let id = useParams().concert_id;
  const { allConcerts, user, allTickets } = useContext(GlobalContext);

  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();
  today = dd + '-' + mm + '-' + yyyy;

  let concert = []
  let pageExist = false
  allConcerts.map(a => {
    if (a.concert_id == id) {
      concert = a
      pageExist = true
      return concert
    }
  })

  const addToCart = async () => {
    let exist = false
    for (let i = 0; i < allTickets.length; i++) {

      if (allTickets[i].concert_id === concert.concert_id && user.user_id === allTickets[i].user_id) {
        alert("You can't buy duplicates right now!")
        exist = true

      }
    }
    if (exist != true && concert.performance_date >= today) {

      fetch('/data/ticket', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_id: user.user_id,
          concert_id: concert.concert_id,
          pending: "true"
        })
      }).then((res) => {
        if (res.ok == true) {
          /* alert("Ticket added to cart!") */
        } else {
          console.log("response failed:")
        }
      }).then(() => {
        window.location.reload(true)
      })
    }
    else {
      alert("The concert has already been!")
    }
  }


  return <>
    <div className="body">

      <h1 className="buy-ticket-h1">Buy your ticket</h1>
      <div className="containerBuy">
        <div className="leftBuy">
          <div>
            <img className="buy-ticket-img"
              src={concert.concert_image_url}
            />
          </div>

          <div>
            <div className="buy-ticket-info-container">
              <h2 className="buy-ticket-h2">Concert:</h2>
              <Link to={"/concert/" + concert.concert_id}>{concert.concert_name}</Link>
            </div>
            <div className="buy-ticket-info-container">
              <h2 className="buy-ticket-h2">Artist:</h2>
              <div>
                <Link to={"/artist/" + concert.artist_id}>{concert.artist_name}</Link>
              </div>
            </div>
            <div className="buy-ticket-info-container">
              <h2 className="buy-ticket-h2">Date:</h2>
              <p className="buy-ticket-p">{concert.performance_date}</p>
            </div>

            <div className="buy-ticket-info-container">
              <h2 className="buy-ticket-h2">Location:</h2>
              <p className="buy-ticket-p">{concert.location}</p>
            </div>
          </div>
        </div>

        <div className="rightBuy">

          <div className="rightBuy-subContainer">
            <h2 className="buy-ticket-h2">Tickets:</h2>
            <h2 className="buy-ticket-h2">x 1</h2>
          </div>

          <div className="rightBuy-subContainer">
            <h2 className="buy-ticket-h2">Total:</h2>
            <h2 className="buy-ticket-h2">{concert.price}.00 SEK</h2>
          </div>

          <div className="rightBuy-btn">
            <button onClick={() => addToCart()}>Add to cart
            </button>
            <Link to={"/cart"}>
              <button>Checkout
              </button>
            </Link>
          </div>

        </div>

      </div>
      <div className="left-btn">
        <Link to={"/"}>
          <button className="cancel-btn">Main
          </button>
        </Link>
        <Link to={"/concert/" + concert.concert_id}>
          <button className="cancel-btn">Cancel
          </button>
        </Link>

      </div>
    </div>
  </>
}

export default BuyTicket;
