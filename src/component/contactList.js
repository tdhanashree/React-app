import React from 'react';
import ContactCard from './Contactcard';

const contactList =(props) =>{
   // if(props===0) return;
   console.log(props);
    const deleteContactHandler =(id) => {
        props.getContactId(id);
    }

    const renderContactList = props.contacts.map((contact) =>{
        return(
         <ContactCard 
          contact={contact} 
          clickHandler={deleteContactHandler} 
          key={contact.id} 
        />
        //  <ContactCard key={contact} contact={contact} />
        );
    });
    return <div className="ui celled list"> Contact List {renderContactList}</div>
    
};
export default contactList;



