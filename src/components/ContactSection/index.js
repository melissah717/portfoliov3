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
  topLine,
  lightText,
  headline,
  description,
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
            <Heading lightText={lightText}>{headline}</Heading>
            <Subtitle darkText={darkText}>{description}</Subtitle>
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