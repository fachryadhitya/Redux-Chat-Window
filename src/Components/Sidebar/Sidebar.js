import React from 'react'
import './Sidebar.css'
import Scrollbar from 'react-scrollbars-custom'
import User from '../../Containers/User/User'


const Sidebar = ({contacts}) => {
    console.log(contacts)
    return (
        <aside className="Sidebar">
            <Scrollbar>
            {contacts.map(contact => <User user={contact} key={contact.user_id} />)}
            </Scrollbar>
        </aside>
    )
}

export default Sidebar