import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
  sortableContainer,
  sortableElement,
} from 'react-sortable-hoc';
import arrayMove from 'array-move';
import ContactViewItem from '../UI/ContactViewItem/contact-view-item'
import ContactAdd from "../ContactAdd/contact-add";
import * as actionTypes from '../../store/actions';


const SortableItem = sortableElement(({person, showItem}) =>
  <ContactViewItem
    name={person.name}
    surname={person.surname}
    email={person.email}
    tel={person.tel}
    onItemClick={showItem}
  />
);

const SortableContainer = sortableContainer(({children}) => {
  return <div className='contacts'>{children}</div>;
});

class ContactView extends Component {

  constructor() {
    super();
    this.state = {
      showPopupPrev: false,
      showPopupAdd: false,
      prevData: {},
      persons : [],
      btnAnim: false,
      visible: false,
    };
  }

  onSortEnd = ({oldIndex, newIndex}) => {
    let orderedPerson = arrayMove(this.props.prs, oldIndex, newIndex);
    this.props.onReorderPersons(orderedPerson);
  };

  handleItemClick = (item) => {
    this.setState({
      prevData: item,
    });
  };

  togglePopupPrev = () => {
    this.setState({
      showPopupPrev: !this.state.showPopupPrev
    });
  };

  togglePopupAdd = () => {
    this.setState({
      showPopupAdd: !this.state.showPopupAdd,
      btnAnim: !this.state.btnAnim
    });
  };

  render() {
    const { prs } = this.props;

    return (
      <div className='contactViewWrap'>
        <SortableContainer onSortEnd={this.onSortEnd} axis='xy' pressDelay={350}>
          {prs.map((person, index) => (
            <SortableItem
              key={`item-${index}`}
              index={index}
              person={person}
              showItem={() => {this.handleItemClick(person); this.togglePopupPrev();}}
            />
          ))}
        </SortableContainer>

        <div className="addContactButton">
          <button className={this.state.btnAnim ? 'btn btnActive' : 'btn'} onClick={this.togglePopupAdd}>Add Contact</button>
        </div>
        {this.state.showPopupPrev ?
          <ContactAdd
            person={this.state.prevData}
            closePopup={this.togglePopupPrev}
            personAdded={this.props.onEditPerson}
          />
          : null
        }

        {this.state.showPopupAdd ?
          <ContactAdd
            closePopup={this.togglePopupAdd}
            personAdded={this.props.onAddedPerson}
          />
          : null
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    prs: state.persons
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onReorderPersons: (persons) => dispatch(
      {
        type: actionTypes.REORDER_ALL_CONTACTS,
        personData: persons
      }
    ),
    onAddedPerson: (person) => dispatch(
      {
        type: actionTypes.ADD_PERSON,
        personData: {
          ...person
        }
      }
    ),
    onEditPerson: (person) => dispatch(
      {
        type: actionTypes.EDIT_PERSON,
        personData: {
          ...person
        }
      }
    )
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(ContactView);