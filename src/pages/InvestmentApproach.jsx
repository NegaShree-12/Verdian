import React from 'react';
import group1 from '../assets/images/group1.png';
import group2 from '../assets/images/group2.png';
import group3 from '../assets/images/group3.png';

const InvestmentApproach = () => {
  return (
    <div
  id="investment-approach"
  style={{
    fontFamily: 'Arial, sans-serif',
    width: '100%',
    maxWidth: '1350px',
    margin: '0 auto', // Centers the container
    textAlign: 'center',
    backgroundColor: '#CFE1DF',
    padding: '2rem 0', // Added vertical padding to increase height
    boxSizing: 'border-box', // Ensures padding doesn't add to width
    minHeight: '850px', // Set minimum height
  }}
>
      <h2
        style={{
          fontSize: '2rem',
          marginBottom: '1.5rem',
          color: '#000',
          marginTop: '0', // Removes gap from previous screen
          paddingTop: '1rem', // Adds slight padding on top for aesthetics
        }}
      >
        Holistic Investment Approach
      </h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1.5rem',
          paddingBottom: '2rem',
        }}
      >
        {/* Investment Focus and Strategy */}
        <div
          style={{
            flex: '1',
            maxWidth: '30%',
            backgroundColor: '#f8f9fa',
            padding: '1rem',
            borderRadius: '8px',
            textAlign: 'left',
          }}
        >
          <img
            src={group1}
            alt="Investment focus"
            style={{ width: '100%', borderRadius: '8px' }}
          />
          <h3 style={{ marginTop: '1rem', fontSize: '1.25rem', color: '#000' }}>
            Investment focus and strategy
          </h3>
          <p style={{ fontSize: '0.9rem', color: '#333', lineHeight: '1.5' }}>
            Veridian focuses on companies across a number of different sectors,
            predominantly internet-based companies with long term growth
            potential, with the aim of realising the potential of businesses,
            sustainably improving operations and generating significant growth
            and profitability.
          </p>
          <p style={{ fontSize: '0.9rem', color: '#333', lineHeight: '1.5' }}>
            Our investment strategy creates value at every stage of an
            investment. Utilizing the strengths of our industry experience and
            team, Veridian has created a streamlined process from identifying
            potential opportunities through due diligence and deal documentation
            and onward to operation and transformation.
          </p>
        </div>

        {/* Portfolio */}
        <div
          style={{
            flex: '1',
            maxWidth: '30%',
            backgroundColor: '#f8f9fa',
            padding: '1rem',
            borderRadius: '8px',
            textAlign: 'left',
          }}
        >
          <img
            src={group2}
            alt="Portfolio"
            style={{ width: '100%', borderRadius: '8px' }}
          />
          <h3 style={{ marginTop: '1rem', fontSize: '1.25rem', color: '#000' }}>
            Portfolio
          </h3>
          <p style={{ fontSize: '0.9rem', color: '#333', lineHeight: '1.5' }}>
            The central investment of Veridian is in the Pragmatic Play group of
            companies headed by Tamaris (Gibraltar) Limited. Pragmatic Play is a
            world-leading game developer providing player-favourites to the most
            successful global brands in the iGaming industry.
          </p>
          <p style={{ fontSize: '0.9rem', color: '#333', lineHeight: '1.5' }}>
            Powering up new possibilities of play through one single API,
            Pragmatic Play offers a multi-product portfolio of award-winning
            slots, live casino, bingo, virtual sports, sportsbook and more.
          </p>
        </div>

        {/* Corporate Social Responsibility */}
        <div
          style={{
            flex: '1',
            maxWidth: '30%',
            backgroundColor: '#f8f9fa',
            padding: '1rem',
            borderRadius: '8px',
            textAlign: 'left',
          }}
        >
          <img
            src={group3}
            alt="Corporate social responsibility"
            style={{ width: '100%', borderRadius: '8px' }}
          />
          <h3 style={{ marginTop: '1rem', fontSize: '1.25rem', color: '#000' }}>
            Corporate social responsibility
          </h3>
          <p style={{ fontSize: '0.9rem', color: '#333', lineHeight: '1.5' }}>
            Veridian supports responsible investing and evaluates environmental,
            social and governance issues in its investments. Veridian believes
            that responsible investing and return on investment go together, and
            consideration of ESG issues improves portfolio company performance
            and investment results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvestmentApproach;
