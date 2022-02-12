import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {appTheme, fontsize} from '../config';


interface ButtonProps {
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  label?: string;
  onPress?: any;
  labelStyle?: any;
  sm?: boolean;
  disabled?: boolean;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  primary,
  label,
  onPress,
  labelStyle,
  success,
  sm,
  disabled,
  loading,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      disabled={loading || disabled}
      style={[
        styles.container,
        {width: sm ? '63%' : '100%'},
        disabled
          ? styles.disabled
          : styles.primary
      ]}>
      <Text
        style={[
          styles.label,
          {
            color:  appTheme.white,
            textTransform: 'capitalize',
          },
          labelStyle,
        ]}>
        {loading ? <ActivityIndicator size="small" color="white" /> : label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  primary: {
    backgroundColor: appTheme.primaryColor,
  },
  disabled: {
    backgroundColor: 'rgba(43, 48, 63, 0.15);',
  },
  label: {
    fontSize: fontsize.HEADER3,
    color: appTheme.primaryColor,
    fontWeight: '600',
  },
});

export default Button;
