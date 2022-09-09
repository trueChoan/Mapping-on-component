import React from 'react';
import Contact from './Contact';

const contacts = [
 {
  name:"Emmanuel",
  email:"emmanuel@email.com",
  phone:"552312354",
  isDeletable:true
},

 
{ 
  name:"Johana",
  email:"johana@email.com",
  phone:"92034777",
  isDeletable : false},
 
{ 
  name:"Lucas",
  email:"lucas@email.com",
  phone:"234983499",
  isDeletable:true},
 
{ 
  name:"Marie",
  email:"marie@email.com",
  phone:"238942384",
  isDeletable:false},
 
{ 
  name:"Pedro",
  email:"pedro@email.com",
  phone:"934584875",
  isDeletable:true}
]

export default function ContactList () {
  return ( 
  <div>
    {contacts.map((contact, index)=>(
      <Contact 
      key ={index}
      name = {contact.name}
      email={contact.email}
      phone={contact.phone}
      isDeletable ={contact.isDeletable}  />
    ))}
  </div>
  )
}
