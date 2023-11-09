import { BrowserRouter } from 'react-router-dom';
import { Decorator } from '@storybook/react';

const RouterDecorator: Decorator = (story) => <BrowserRouter>{story()}</BrowserRouter>;
export default RouterDecorator;
