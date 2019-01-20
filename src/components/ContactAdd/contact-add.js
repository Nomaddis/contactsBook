import React, {Component} from 'react';

class ContactAdd extends Component {
  state = {
    person: {
      ...this.props.person,
    },
    btnAnim: false,
  }

  onChangeText = (key) => {
    return (text) => {
      this.setState({
        person:{
          ...this.state.person,
          [key]: text.target.value,
        }
      });
    };
  };

  render() {
    const { person } = this.state;
    const { personAdded } = this.props;
    return (
      <div className={'popup'}>
        <div className='ContactPrevContainer'>
          <div className="contactDesc">
            <div className='prevInfo'>
              <table>
                <tbody>
                <tr>
                  <th>First Name</th>
                  <th>
                    <input
                      className='input'
                      type="text"
                      placeholder='Enter user name'
                      name="name"
                      value={person.name}
                      onChange={this.onChangeText('name')}
                    />
                  </th>
                </tr>
                <tr>
                  <td>Last Name</td>
                  <td>
                    <input
                      className='input'
                      type="text"
                      placeholder='Enter user last name'
                      name="surname"
                      value={person.surname}
                      onChange={this.onChangeText('surname')}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Phone Number</td>
                  <td>
                    <input
                      className='input'
                      type="text"
                      placeholder='Enter user phone'
                      name="tel"
                      value={person.tel}
                      onChange={this.onChangeText('tel')}/>
                  </td>
                </tr>
                <tr>
                  <td>Email Address</td>
                  <td>
                    <input
                      className='input'
                      type="text"
                      placeholder='Enter user email'
                      name="email"
                      value={person.email}
                      onChange={this.onChangeText('email')}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Date of birth</td>
                  <td>
                    <input
                      className='input'
                      type="text"
                      placeholder='Enter user date of birth'
                      name="birth"
                      value={person.birth}
                      onChange={this.onChangeText('birth')}
                    />
                  </td>
                </tr>
                </tbody>
              </table>
              <button className='closeBtn' onClick={this.props.closePopup}>x</button>
            </div>
            <div className="prevPhoto">
              <img
                src="https://cdn2.iconfinder.com/data/icons/users-2/512/User_6-512.png"
                alt="user avatar"
                style={{width: '160px', marginTop: '10px'}}
              />
            </div>
          </div>
          <div className="addContactButton">
            <button
              className={this.state.btnAnim ? 'btn btnActive' : 'btn'}
              onClick={() => {
                if(person.name !== undefined) {
                  personAdded(person); this.setState({btnAnim: true})
                } else {
                  console.error('name cant be blank')
                }
              }}
            >
              {this.state.person.name ? 'Save Contact' : 'Add Contact'}
            </button>
          </div>

        </div>
      </div>
    )
  }
}
export default ContactAdd;
