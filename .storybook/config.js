import '!style-loader!css-loader!sass-loader!../src/styles/main.scss';
import '!style-loader!css-loader!sass-loader!../src/styles/storybook.scss';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

addDecorator(withInfo);
