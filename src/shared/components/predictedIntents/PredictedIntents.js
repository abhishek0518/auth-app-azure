import React from 'react';
import './PredictedIntents.scss';

const PredictedIntents = ({ intents }) => {
  return (
    <div className="predicted-intents">
      <div className="predicted-intents__list">
        {intents.map((intent, index) => (
          <div key={index} className="predicted-intents__list__item">
            {intent}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PredictedIntents;
