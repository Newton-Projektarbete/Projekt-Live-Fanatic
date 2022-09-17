import { Link } from "react-router-dom";

function BuyTicket() {
  return <>
    <div className="body">

      <h1 className="buy-ticket-h1">Buy Your Ticket</h1>
      <div className="containerBuy">
        <div className="leftBuy">
          <div>
          <Link to="/artist">
            <img
              className="buy-ticket-img"
              src="https://i.ytimg.com/vi/88ki680YlB4/maxresdefault.jpg"
              alt=""
            />
          </Link>
          </div>

          <div>
            <div className="buy-ticket-info-container">
          <h2 className="buy-ticket-h2-info">Info:</h2>
          <p className="buy-ticket-p">Slam Poetry Bonga Free Jazz Jam for Dummies</p>
            </div>
            <div className="buy-ticket-info-container artist-info-container">
          <h2 className="buy-ticket-h2-artist">Artists:</h2>
            <div>
            <p className="buy-ticket-p">Static plants</p>
            <p className="buy-ticket-p">Purge!</p>
            <p className="buy-ticket-p">Cacti pillow</p>
            </div>
            </div>
            <div className="buy-ticket-info-container">
            <h2 className="buy-ticket-h2">Date:</h2>
            <p className="buy-ticket-p">Thursday 8 september 2022 7:30pm</p>
            </div>

            <div className="buy-ticket-info-container">
            <h2 className="buy-ticket-h2">Location:</h2>
            <p className="buy-ticket-p">Andy's garage</p>
            </div>
          </div>
        </div>

        <div className="rightBuy">

          <div className="rightBuy-subContainer">
          <h2 className="buy-ticket-h2">Ticket:</h2>
          <h2 className="buy-ticket-h2">x 1</h2>
          </div>

          <div className="rightBuy-subContainer">
          <h2 className="buy-ticket-h2">Tickets:</h2>
          <h2 className="buy-ticket-h2">x 1</h2>
          </div>

          <div className="rightBuy-subContainer">
          <h2 className="buy-ticket-h2">Total:</h2>
          <h2 className="buy-ticket-h2">299.00 SEK</h2>
          </div>

          <div className="rightBuy-btn">
          <Link to="/confirm-payment">
            <button
              className="buy-ticket-btn"
              onclick="document.location=/confirm-payment"
            >
              Checkout
            </button>
          </Link>
          </div>

        </div>

      </div>
    </div>
  </>
}

export default BuyTicket;
