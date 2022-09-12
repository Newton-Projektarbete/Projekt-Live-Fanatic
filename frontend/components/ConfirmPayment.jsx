import { Link } from "react-router-dom";

function ConfirmPayment(){
    return <>
    <div className="body">

    <div className="confirm-payment">
        <div className="confirm-payment-left-content">
            <div className="total-tickets" >
                <h2 className="space-between">Total Tickets: <span>x 4</span></h2>
                
            </div>
            <div className="your-tickets">
                <h2>Your Tickets:</h2>
                <div className="ticket-list-container">
                    <ol className="ticket-container" >
                        <li>sabaton x 1 </li>
                        <li>primo victoria x 2</li>
                        <li>sailermoon x 1 </li>
                    </ol>
                    <ul className="ticket-amount-container" >
                        <li>100 SEK</li>
                        <li>200 SEK</li>
                        <li>100 SEK</li>
                    </ul>
                </div>
            </div>
            <div className="total">
                <h2 className="space-between">Total: <span>400 SEK</span></h2>
            </div>
            <Link to="/buy-ticket">
                <button>Cancel</button>
            </Link>
        </div>
        <div className="confirm-payment-right-content" >

            <div>
                <h2 className="email-info">Email Info:</h2>
            </div>

            <div className="sprite-container">
                sprite container goes here
            </div>
        </div>
    </div>    
    </div>
    </>
    }
    
    export default ConfirmPayment