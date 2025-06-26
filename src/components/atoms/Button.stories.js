import React from 'react';
import Button from './Button';
import ThemeProvider from '../../theme/ThemeProvider';

export default {
  title: 'Atoms/Button',
  component: Button,
};

export const Basic = () => (
  <ThemeProvider>
    <Button type="primary">Press me</Button>
  </ThemeProvider>
);
