import React from 'react';
import { Button as AntButton } from '@ant-design/react-native';

export default function Button({ children, ...props }) {
  return <AntButton {...props}>{children}</AntButton>;
}
