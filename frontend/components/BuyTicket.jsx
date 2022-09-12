import { Link } from "react-router-dom";

function BuyTicket() {
  return (
    <>
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

            <h2 className="buy-ticket-h2">Info:</h2>
            <p className="buy-ticket-p">Slim Shady</p>

            <h2 className="buy-ticket-h2">Artist:</h2>
            <p className="buy-ticket-p">Eminem</p>

            <h2 className="buy-ticket-h2">Date:</h2>
            <p className="buy-ticket-p">2022-09-09</p>

            <h2 className="buy-ticket-h2">Location:</h2>
            <p className="buy-ticket-p">Malmö</p>
          </div>

          <div className="rightBuy">
            <h2 className="buy-ticket-h2">Price:</h2>
            <h2 className="buy-ticket-h2">299.00 SEK</h2>

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
    </>
  );
}

export default BuyTicket;
