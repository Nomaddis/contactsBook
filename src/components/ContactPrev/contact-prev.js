
import React, {Component} from 'react';

let month = new Array(12);
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

class ContactPreview extends Component {
  render() {
    return (
      <div className='popup'>
        <div className='ContactPrevContainer'>
          <div className="contactDesc">
            <div className='prevInfo'>
              <table>
                <tbody>
                <tr>
                  <th>First Name</th>
                  <th>
                    {this.props.name}
                  </th>
                </tr>
                <tr>
                  <td>Last Name</td>
                  <td>
                    {this.props.surname}
                  </td>
                </tr>
                <tr>
                  <td>Phone Number</td>
                  <td>
                    {this.props.phone}
                  </td>
                </tr>
                <tr>
                  <td>Email Address</td>
                  <td>
                    {this.props.email}
                  </td>
                </tr>
                <tr>
                  <td>Date of birth</td>
                  <td>
                    {this.props.birth}
                  </td>
                  {/*<td>{props.birth.getDate()}th {month[props.birth.getMonth()]} {props.birth.getUTCFullYear()}</td>*/}
                </tr>
                </tbody>
              </table>
              <button className='closeBtn' onClick={this.props.closePopup}>x</button>
            </div>
            <div className="prevPhoto">
              <img
                src="https://cdn2.iconfinder.com/data/icons/users-2/512/User_6-512.png"
                alt="user photo"
                style={{width: '160px', marginTop: '10px'}}
              />
            </div>
          </div>
          <div className="addContactButton">
            <button className='btn'>Add Contact</button>
          </div>

        </div>
      </div>
    )
  }
}

export default ContactPreview;