import { Link } from "react-router-dom";

function BuyTicket() {
  return <>
      <div className="body">
        <div className="containerBuy">
          <div className="leftBuy">
            <h1 className="buy-ticket-h1">Buy Your Ticket</h1>
            <Link to="/artist">
              <img
                className="buy-ticket-img"
                src="https://i.ytimg.com/vi/88ki680YlB4/maxresdefault.jpg"
                alt=""
              />
            </Link>

      <div className="containerBuy">
        <div className="leftBuy">
          <h1 className="buy-ticket-h1">Buy Your Ticket</h1>
          <Link to="/artist">
          <img className="buy-ticket-img"
            src="../images/franaddressescrowd500.jpg"
            alt=""
          />
          </Link>

          <h2 className="buy-ticket-h2">Info:</h2>
          <p className="buy-ticket-p">Slam Poetry Bonga Free Jazz Jam for Dummies</p>

          <h2 className="buy-ticket-h2">Artists:</h2>
          <p className="buy-ticket-p">Static plants <br /> Purge! <br />Cacti pillow</p>

          <h2 className="buy-ticket-h2">Date:</h2>
          <p className="buy-ticket-p">Thursday 8 september 2022 7:30pm</p>

          <h2 className="buy-ticket-h2">Location:</h2>
          <p className="buy-ticket-p">Andy's garage</p>
        </div>

            <h2 className="buy-ticket-h2">Ticket:</h2>
            <h2 className="buy-ticket-h2">x 1</h2>

            <h2 className="buy-ticket-h2">Total:</h2>
            <h2 className="buy-ticket-h2">299.00 SEK</h2>

            <Link to="/confirm-payment">
              <button
                className="buy-ticket-btn"
                onclick="document.location=/confirm-payment"
              >
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
      </div>
  </>
}

export default BuyTicket;
