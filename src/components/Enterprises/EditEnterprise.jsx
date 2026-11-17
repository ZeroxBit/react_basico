import React from "react";
import {
  Grid,
  Typography,
  Container,
  Paper,
  Button,
  TextField
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  title: {
    padding: 10
  },
  form: {
    width: "100%",
    padding: 10
  }
});

export default function CreateEnterprise(props) {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={11}>
            <Typography variant="h6" className={classes.title}>
              Edit Enterprise
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Button color="primary" className={classes.title}>
              BACK
            </Button>
          </Grid>
          <Grid container xs={12} component={Paper}>
            <form className={classes.form}>
              <TextField
                label="Name"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true
                }}
              />
              <TextField
                label="RUC"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true
                }}
              />
              <TextField
                label="Invoice Address"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true
                }}
              />
              <TextField
                label="Online Invoice Address"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true
                }}
              />
              <br /> <br />
              <Grid item xs={1}>
                <Button color="primary" variant="contained">
                  <Typography> save </Typography>
                </Button>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
