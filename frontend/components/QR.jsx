import { Link, useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import GlobalContext from "../src/GlobalContext";
import {QRCodeSVG} from 'qrcode.react';
// https://www.npmjs.com/package/qrcode.react
// https://imran-ahmad.medium.com/how-to-generate-and-download-a-qr-code-image-in-react-a3e924a672f5

function QR() {

  /* let id = useParams().concert_id; */
    const { allTickets } = useContext(GlobalContext);

    let ticket = []
    let pageExist = false
    allTickets.map(a => {
        if (a.ticket_id == 1) {
            ticket = a
            pageExist = true
            return ticket
        }
    })
    

 /* // For saving QR as image needs implentention
 const downloadQR = () => {
  const canvas = document.getElementById("MyQRCode");
  const pngUrl = canvas
    .toDataURL("image/png")
    .replace("image/png", "image/octet-stream");
  let downloadLink = document.createElement("a");
  downloadLink.href = pngUrl;
  downloadLink.download = "MyQRCode.png";
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
};
 */

 
  return <>
      
      <div className="body">
        <div className="QRbody">
          <h2 className="QR-h2">QR Code</h2>
          <p className="QR-img"></p>
          <div className="QR-img">
          <QRCodeSVG id="MyQRCode" className="QR-img" value={ticket.ticket_id + ticket.user_id + ticket.concert_id} />
          </div>
          {/* <a onClick={downloadQR}> Download QR </a> */}

          <table className="QR-info">
            <tr className="table-header">
              <th></th>
              <th>Concert:</th>
              <th>Date:</th>
              <th>Location:</th>
            </tr>

            <tr>
              <td className="profile-td">
                <img
                  className="img-profile"
                  src="../examples/justin-timberlake.jpg"
                />
              </td>
              <td className="profile-td">
                <a href="">Justin Timberlake</a>
              </td>
              <td className="profile-td">2022.12.12</td>
              <td className="profile-td">Stockholm, Globen</td>
              <td className="profile-td">
                <a href="#">
                  <span className="material-symbols-outlined">print</span>
                </a>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
}

export default QR;
