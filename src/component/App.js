import React,{useState,useEffect} from "react";
import {uuid} from 'uuidv4';
import './App.css';
import Header from "./header";
import AddContact from "./AddContact";
import ContactList from "./contactList";

function App() {
  const LOCAL_STORAGE_KEY ="contacts";
  

  const [contacts, setContacts]= useState([]);

 /* const contacts =[
    {
      id:"1",
      name:"Dino",
      email:"dino@gmail.com",
    },

    {
      id:"2",
      name:"archana",
      email:"archu@gmail.com",
    },
  ]*/
 
  
  
  const addContactHandler=(contact)=> {
    console.log(contact);
  // setContacts([...contacts,{...contact}]);
  setContacts([...contacts, {id : uuid (),...contact}]);
   localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify([...contacts,{...contact}]));
   
  };

const removeContactHandler =(id) =>{
    const newContactList = contacts.filter((contact) => {
      return contacts.id!==id;
    });

    setContacts(newContactList);
  }
  
  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    alert(retriveContacts)
      setContacts(retriveContacts);
  }, []);


  
  return (
    <div className='ui container'>
      <Header/>
      <AddContact addContactHandler={addContactHandler} />
       <ContactList contacts={contacts} getContactId ={removeContactHandler}/> 
    </div> 
  );
}

export default App;