import { Link } from "react-router-dom";

function QR() {
  return (
    <>
      <div className="body">
        <div>
          <h2>QR Code</h2>
        </div>
        <div>
          <img
            src="https://skapaqrkod.nu/Content/img/default-preview-qr.svg"
            alt=""
          />
        </div>
        <div>
          <table>
            <tr className="table-header">
              <th></th>
              <th>Concert</th>
              <th>Date</th>
              <th>Location</th>
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
                <a href="#">
                  <span className="material-symbols-outlined">qr_code</span>
                </a>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}

export default QR;
