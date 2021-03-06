import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const propTypes = {
  focused: PropTypes.bool,
  title: PropTypes.string,
};

const ActivityIcon = props => {
  return (
    <Text style={{color: props.focused ? '#ff9068' : 'black'}}>
      <Icon name="logo-game-controller-b" size={30} />
      {props.title}
    </Text>
  );
};

ActivityIcon.propTypes = propTypes;

export default ActivityIcon;
