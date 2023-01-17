import React from 'react'
import {
    ContactCard,
    ContactContainer,
    ContactHeader,
    ContactInfo, 
    ContactWrapper
} from './ContactElements'

const ContactSection = () => {
  return (
    <ContactContainer id='contact'>
        <ContactWrapper>
        <ContactCard>
            <ContactHeader> Hello
                <ContactInfo>

                </ContactInfo>
            </ContactHeader>
        </ContactCard>
        </ContactWrapper>
    </ContactContainer>
  )
}

export default ContactSection