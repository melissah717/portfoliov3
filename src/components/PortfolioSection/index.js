import React from 'react';

import {
  PortfolioContainer,
  PortfolioH1,
  PortfolioWrapper,
  PortfolioCard,
  PortfolioIcon,
  PortfolioH2,
  PortfolioA1,
} from './PortfolioElements';

const PortfolioSection = () => {
  return (
    <PortfolioContainer id='portfolio'>
      <PortfolioH1>My Works</PortfolioH1>
      <PortfolioWrapper>
        <PortfolioCard>
          
          <PortfolioIcon />
          <PortfolioH2 href="https://www.google.com">LambdaVibe</PortfolioH2>
        </PortfolioCard>
        <PortfolioCard>
          <PortfolioIcon/>
          <PortfolioH2>GatorMart</PortfolioH2>
        </PortfolioCard>
        <PortfolioCard>
          <PortfolioIcon />
          <PortfolioH2>Tank Game</PortfolioH2>
        </PortfolioCard>
        <PortfolioCard>
          <PortfolioIcon />
          <PortfolioH2>Database Design</PortfolioH2>

        </PortfolioCard>
      </PortfolioWrapper>
    </PortfolioContainer>
  );
};

export default PortfolioSection;
