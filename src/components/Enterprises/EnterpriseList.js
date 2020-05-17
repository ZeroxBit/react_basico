import React, { useEffect, useState } from "react";
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
import Container from "@material-ui/core/Container";
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { Link, useHistory } from "react-router-dom";

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

const request = {
	"status": "success",
	"message": "Companies retrieved",
	"data": [
		{
			"id": "6",
			"name": "Mc Donalds",
			"ruc": "1234567",
			"invoice_address": "Pueblo Libre",
			"online_invoice_address": null,
			"status": true,
			"created_at": "2020-05-16T02:29:32.941Z",
			"updated_at": "2020-05-16T02:29:32.941Z"
		}
	]
};


const SimpleTable = (props) => {
	const classes = useStyles();
	const history = useHistory();

	const [dataRow, setDataRow] = useState(null);

	useEffect(() => {
		handleRequest();
	}, [])

	const handleRequest = async () => {
		setTimeout(() => {
			setDataRow(request.data)
		}, 1000);
	}

	const handleEdit = (row) => {
		history.push(`/enterprises/${row.id}/edit`, {
			...row
		})
	}

	const handleBodyRow = () => {
		if (!dataRow) return null;

		return dataRow.map((row, index) => (
			<TableRow key={row.name}>
				<TableCell component="th" scope="row">
					{row.name}
				</TableCell>
				<TableCell align="right">{row.ruc}</TableCell>
				<TableCell align="right">{row.invoice_address}</TableCell>
				<TableCell align="right">{row.status ? "activo" : "inactivo"}</TableCell>
				<TableCell align="right">
					<IconButton
						color="primary"
						component="span"
						onClick={() => handleEdit(row)}
					>
						<PhotoCamera />
					</IconButton>
				</TableCell>
			</TableRow>
		))
	}

	return (
		<Container maxWidth="lg">
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
							{handleBodyRow()}
						</TableBody>
					</Table>
				</TableContainer>
			</Grid>
		</Container>
	);
}

export default SimpleTable;
