import React, {Component} from 'react';

class ContactViewItem extends Component {

  _onClick = () => {
    this.props.onItemClick(this.props);
  };

  render() {
    return (
      <div className='contactItem' onClick={this._onClick} title="Press and hold for reorder item">
        <span className='contactName'>{this.props.name} {this.props.surname}</span>
        <span className='contactPhone'>{this.props.tel}</span>
        <span className='contactEmail'>{this.props.email}</span>
      </div>
    )
  }
}

export default ContactViewItem;
