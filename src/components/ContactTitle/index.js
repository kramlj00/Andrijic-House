import React from 'react'
 
import styles from './style.module.css'

import contactImg from '../../images/contactImg.jpg'



const ContactTitle = () => (
    <nav>
        <img src={contactImg} alt="contact_img" className={styles.contactImg}></img>
        
    </nav>
)
 
export default ContactTitle