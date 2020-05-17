import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    minWidth: "80%",
    marginLeft: "auto",
    marginRight: "auto"
  },
  title: {
    padding: 10,
    marginTop: 10
  },
  fab: {
    marginTop: 10
  }
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("McDonalds", 12341561, "Pueblo Libre", "active", []),
  createData("BK", 12341256, "Magdalena", "active", []),
  createData("KFC", 26212345, "San Miguel", "active", [])
];

export default function SimpleTable(props) {
  const classes = useStyles();
  return (
    <>
      <Grid container>
        <Grid item xs={11}>
          <Typography variant="h6" className={classes.title}>
            Enterprises
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Link to="/new-enterprise">
            <Button className={classes.fab} color="primary">
              <AddIcon />
            </Button>
          </Link>
        </Grid>
      </Grid>
      <Grid item xs="12">
        <TableContainer component={Paper}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">RUC</TableCell>
                <TableCell align="right">Invoice Address</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </>
  );
}
