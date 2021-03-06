import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const propTypes = {
  focused: PropTypes.bool,
  title: PropTypes.string,
};

const TabIcon = props => {
  return (
    <Text style={{color: props.focused ? 'red' : 'black'}}>
      <Icon name="rocket" size={20} />
      {props.title}
    </Text>
  );
};

TabIcon.propTypes = propTypes;

export default TabIcon;
