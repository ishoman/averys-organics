import React from 'react';
import PropTypes from 'prop-types';
import ProduceName from './ProduceName';

function ProduceDetail(props){
  return (
    <div>
      <h4>{props.month}</h4>
      <ul>
        {props.selection.map((produce, index) =>
          <ProduceName
            name={produce}
            key={index}
          />
        )}
      </ul>
    </div>
  );
}

ProduceDetail.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProduceDetail;
