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
            <Heading lightText={lightText}>melissa.h717@outlook.com</Heading>
            <Subtitle darkText={darkText}>currently based in the san francisco bay area</Subtitle>
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