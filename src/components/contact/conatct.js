import React from 'react'
import contact from "../../data/contact.json"

export default function Contact({pos}) {
    const name = contact[pos].name
    const designation = contact[pos].designation
    const address =contact[pos].address
    const email =contact[pos].email
    const email1 = "mailto:" + email;
  return (
    <div>
        <h2>Contact</h2>

        <h3>{name}</h3>
        <div>{designation}</div>
        <div>{address}</div>
        <a href={email1}>{email}</a>
     </div>
  )
}
