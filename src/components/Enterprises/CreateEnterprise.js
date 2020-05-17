import React, { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  Container,
  Paper,
  Button,
  TextField
} from "@material-ui/core";
import { AddIcon } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { useLocation, useHistory, useParams } from "react-router-dom"

const useStyles = makeStyles({
  title: {
    padding: 10
  },
  form: {
    width: "100%",
    padding: 10
  }
});

const INITIAL_FORM = { name: "", ruc: "", invoice_address: "", online_invoice_address: "" };

const CreateEnterprise = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const params = useParams();
  const [formValues, setFormValues] = useState(INITIAL_FORM);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    const { id } = params;
    if (id) {
      const { state } = history.location;
      if (!state) return;

      setIsEdit(true);
      setFormValues({
        name: state.name,
        ruc: state.ruc,
        invoice_address: state.invoice_address,
        online_invoice_address: state.online_invoice_address
      })
    }

  }, [])

  const handleChange = event => {
    const target = event.target;
    const { name, value } = target;

    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit")
  }

  return (
    <>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={11}>
            <Typography variant="h6" className={classes.title}>
              New Enterprise
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Button color="primary" className={classes.title}>
              BACK
            </Button>
          </Grid>
          <Grid container xs={12} component={Paper}>
            <form className={classes.form} onSubmit={handleSubmit}>
              <TextField
                label="Name"
                fullWidth
                margin="normal"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true
                }}
              />
              <TextField
                label="RUC"
                fullWidth
                margin="normal"
                name="ruc"
                value={formValues.ruc}
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true
                }}
              />
              <TextField
                label="Invoice Address"
                fullWidth
                margin="normal"
                name="invoice_address"
                value={formValues.invoice_address}
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true
                }}
              />
              <TextField
                label="Online Invoice Address"
                fullWidth
                margin="normal"
                name="online_invoice_address"
                value={formValues.online_invoice_address}
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true
                }}
              />
              <br /> <br />
              <Grid item xs={12}>
                <Button type="submit" color="primary" variant="contained">
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

export default CreateEnterprise;
