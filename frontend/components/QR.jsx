import { Link } from "react-router-dom";

function QR() {
  return <>
      <div className="body">
        <div className="QRbody">
          <h2 className="QR-h2">QR Code</h2>

          <img
            className="QR-img"
            src="/images/qrKod (1).svg"
            alt=""
          />

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
