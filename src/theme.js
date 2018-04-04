import { createMuiTheme } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';

// Configure Material UI theme
const theme = createMuiTheme({
  palette: {
    primary: blue,
    accent: blue,
    type: 'light',
  },
});

export default theme;
