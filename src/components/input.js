import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export default function UserInput() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">    
      <div>
        <TextField
          required
          id="outlined-required"
          label="Required"
          variant="outlined"
        />
        <TextField
          disabled
          id="outlined-disabled"
          label="Required"
          variant="outlined"
        />
      </div>
    </form>
  );
}