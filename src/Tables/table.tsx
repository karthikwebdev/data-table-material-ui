import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';



const useRowStyles = makeStyles({
  root: {

      borderBottom: 'none !important',
  
  },
  tableHead: {
      display: 'flex',
      flexDirection: 'column',     
  },
  tableBody: {
    display: 'flex',
    flexDirection: 'column',
 },
 tableFlex : {
   display: 'flex',
 },
 tableContainer: {
  boxShadow: "none",
},
});

function createData(
    Slno: number,
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
  price: number,
) {
  return {
      Slno,
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      { date: '2020-01-05', customerId: '11091700', amount: 3 },
    ],
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.Slno}
        </TableCell>
        <TableCell align="right" >
          {row.name}
        </TableCell>
        <TableCell align="right">{row.calories}</TableCell>
        <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell>
      </TableRow>
      
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              
              <Table  aria-label="purchases" className={ classes.tableFlex}>
              
                   <TableRow className={classes.tableHead}>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell >Amount</TableCell>
                    <TableCell >Total price ($)</TableCell>
                    </TableRow>
                
                
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date} className={classes.tableBody}  >
                      <TableCell >
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell >{historyRow.amount}</TableCell>
                      <TableCell >
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      
    </React.Fragment>
  );
}

 const rows = [
  createData(1,'Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
  createData(2,'Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
  createData(3,'Eclair', 262, 16.0, 24, 6.0, 3.79),
  createData(4,'Cupcake', 305, 3.7, 67, 4.3, 2.5),
  createData(5,'Gingerbread', 356, 16.0, 49, 3.9, 1.5),
];

export default function CollapsibleTable() {
  const classes = useRowStyles();
  return (
    <TableContainer   className={classes.tableContainer}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow >
            <TableCell />
            <TableCell>Slno</TableCell>
            <TableCell align='right'>Dessert </TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.Slno} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
