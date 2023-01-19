import styled from 'styled-components';

export const ContactContainer = styled.div`
  height: 100%;
  justify-content: center;
  display: flex;
  background-color: #000000;
  background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#000000')};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const ContactWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const ContactRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? "'col2 col1'" : "'col1 col2'"};
  /* Must use '\' css class \'' */

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  align-items: center;
  justify-content: center;
  display: block;
`;

export const TopLine = styled.div`
  color: #6b627f;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: lowercase;
  margin-bottom: 16px;
  align-items: center;
  justify-content: center;
`;

export const Heading = styled.h1`
  margin-bottom: 20px;
  font-size: 24px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#000000' : '#e7e7e7')};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 5px;
  font-size: 16px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? '#ffffff' : '#fff')};
`;

export const Links = styled.a`

`
export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 80%;
  margin-top: 0;
  /* margin-right: 0; */
  margin-left: 10px;
  /* padding-right: 50px; */
  border-radius: 200px;
  filter: greyscale(30%) brightness(0.4);
`;
