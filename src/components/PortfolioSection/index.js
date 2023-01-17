import React from 'react';

import {
  PortfolioContainer,
  PortfolioH1,
  PortfolioWrapper,
  PortfolioCard,
  PortfolioIcon,
  PortfolioH2,
  PortfolioP
} from './PortfolioElements';

const PortfolioSection = () => {
  return (
    <PortfolioContainer id='portfolio'>
      <PortfolioH1>My Works</PortfolioH1>
      <PortfolioWrapper>
        <PortfolioCard>
          <PortfolioIcon />
          <PortfolioH2>LambdaVibe</PortfolioH2>
          <PortfolioP>
            We help reduce your fees and increase your overall revenue.
          </PortfolioP>
        </PortfolioCard>
        <PortfolioCard>
          <PortfolioIcon/>
          <PortfolioH2>GatorMart</PortfolioH2>
          <PortfolioP>
            You can access our platform online anywhere in the world.
          </PortfolioP>
        </PortfolioCard>
        <PortfolioCard>
          <PortfolioIcon />
          <PortfolioH2>Tank Game</PortfolioH2>
          <PortfolioP>
            Unlock our special membership card that returns 5% cash back.
          </PortfolioP>
        </PortfolioCard>
        <PortfolioCard>
          <PortfolioIcon />
          <PortfolioH2>Tank Game</PortfolioH2>
          <PortfolioP>
            Unlock our special membership card that returns 5% cash back.
          </PortfolioP>
        </PortfolioCard>
      </PortfolioWrapper>
    </PortfolioContainer>
  );
};

export default PortfolioSection;
