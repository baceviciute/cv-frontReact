import React, {useState} from 'react';
import './index.css';
import {useFetch} from "../../utils/fetchHook";
import {API_DOMAIN, API_ENDPOINTS} from "../../utils/constants";
import {FaEnvelope, FaGithubAlt, FaLinkedinIn, FaMapMarker, FaPhone} from 'react-icons/fa';
import {post} from '../../utils/post.js';
import {deleteContact} from '../../utils/delete.js';

const icons = {FaEnvelope, FaPhone, FaMapMarker, FaLinkedinIn, FaGithubAlt};

function Item(props) {
  const Icon = icons[props.data.type];

  const contactDelete = event => {
    event.preventDefault();
    const { value } = event.target;
    deleteContact(API_ENDPOINTS.deleteContact, value);
    props.removeContact(props.data.id);
  };

  return (
    <a className="Contacts--item" href={props.data.url}>
      <Icon className="Contacts--item-icon"/>
      <span className="Contacts--item-text">{props.data.value}</span>
      <button value={props.data.id} onClick={contactDelete}>DELETE</button>
    </a>
  );
}

function Contacts(props) {

  const {loading, data, setData} = useFetch(API_ENDPOINTS.contacts);

  const addContact = contact => {
    setData([...data, contact])
  };

  const removeContact = contactId => {
    setData(data.filter(contact => contactId !== contact.id))
  };

  return (
    <section className="Contacts">
      <h3>Contacts</h3>
      {loading ?
        <div>Loading...</div>
        :
        data.map(contact => <Item removeContact={removeContact} data = {contact} />)

      }
      <AddContactForm addContact = {addContact}/>
    </section>
  );
}

function AddContactForm(props) {
  const initialFormState = {value: '', type: 'FaEnvelope', url: ''};
  const [contact, setContact] = useState(initialFormState);

  const handleInputChange = event => {
    const {name, value} = event.target;
    setContact({...contact, [name] : value})
  };

  const {loading, data} = useFetch(API_ENDPOINTS.contactTypes);

  const createContact = async event => {
    event.preventDefault();
    if (!contact.value || !contact.type || !contact.url) return;

    const response = await post(API_ENDPOINTS.addContact, contact);

    props.addContact(response);
    setContact(initialFormState)
  };

  return (
    <form
      onSubmit={createContact}>
      <label>Value</label>
      <input type="text" name="value" value={contact.value} onChange={handleInputChange}/>
      <label>Type</label>
      <select value={contact.type} name="type" onChange={handleInputChange}>
        {loading ?
          <div>Loading...</div>
          :
          data.map(type => <option value={type}>{type}</option>)
        }
      </select>
      <label>Url</label>
      <input type="text" name="url" value={contact.url} onChange={handleInputChange}/>
      <button>Add new contact</button>
    </form>
  )
};

export default Contacts;
