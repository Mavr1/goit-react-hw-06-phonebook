import React from 'react';
import Switch from '@material-ui/core/Switch';
import withTheme from '../hoc/withTheme';

function Switches({ themeC }) {
  const [state, setState] = React.useState({
    checkedB: true,
  });

  React.useEffect(() => themeC.toggleTheme(state.checkedB), [state.checkedB]);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <Switch
      className="switch"
      checked={state.checkedB}
      onChange={handleChange}
      color="primary"
      name="checkedB"
      inputProps={{ 'aria-label': 'primary checkbox' }}
    />
  );
}

export default withTheme(Switches);
