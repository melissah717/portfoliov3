import React from 'react'
import {
  ContactContainer,
  ContactWrapper,
  Column1,
  Column2,
  TextWrapper,
  Heading,
  Subtitle,
  Img,
  ImgWrap,
  ContactRow, 
  TopLine

} from './ContactElements'

const ContactSection = ({ lightBg,
  imgStart,
  lightText,
  img,
  alt,
  id,

  darkText }) => {
  return (
    <>
    <ContactContainer lightBg={lightBg} id={id}>
    <ContactWrapper>
      <ContactRow imgStart={imgStart}>
        <Column1>
        <TopLine>Contact Me</TopLine>
          <TextWrapper>
          <Subtitle darkText={darkText}>email</Subtitle>
            <Heading lightText={lightText}><a mailto="melissa.h717@outlook.com">melissa.h717@outlook.com</a></Heading>
            <Subtitle darkText={darkText}>Based in the San Francisco, Bay Area</Subtitle>
          </TextWrapper>
        </Column1>
        <Column2>
          <ImgWrap>
            <Img src={img} alt={alt} />
          </ImgWrap>
        </Column2>
      </ContactRow>
    </ContactWrapper>
  </ContactContainer>
</>
  )
}

export default ContactSection