import {TableContainer, Table,TableHead, TableRow, TableBody, TableCell, Paper} from "@mui/material"

export default function TablePage(){
    return <TableContainer component={Paper} sx={{maxHeight:'350px'}}>
        <Table stickyHeader>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Email</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {tableData.map(row=>(
                    <TableRow key={row.id} sx={{'&:last-child td, &:last-child td':{border:0}}}>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.first_name}</TableCell>
                        <TableCell>{row.last_name}</TableCell>
                        <TableCell align="center">{row.email}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
}

const tableData = [{
    "id": 1,
    "first_name": "Nedi",
    "last_name": "Basson",
    "email": "nbasson0@usda.gov",
    "gender": "Female",
    "ip_address": "95.18.85.238"
  }, {
    "id": 2,
    "first_name": "Isabel",
    "last_name": "Farris",
    "email": "ifarris1@spiegel.de",
    "gender": "Female",
    "ip_address": "77.57.27.126"
  }, {
    "id": 3,
    "first_name": "Lewie",
    "last_name": "Pointing",
    "email": "lpointing2@walmart.com",
    "gender": "Male",
    "ip_address": "179.239.101.156"
  }, {
    "id": 4,
    "first_name": "Cecilius",
    "last_name": "Messom",
    "email": "cmessom3@wikispaces.com",
    "gender": "Male",
    "ip_address": "131.200.128.51"
  }, {
    "id": 5,
    "first_name": "Willi",
    "last_name": "Hinrichsen",
    "email": "whinrichsen4@booking.com",
    "gender": "Male",
    "ip_address": "152.39.121.255"
  }, {
    "id": 6,
    "first_name": "Averell",
    "last_name": "Cammoile",
    "email": "acammoile5@plala.or.jp",
    "gender": "Male",
    "ip_address": "67.100.72.124"
  }, {
    "id": 7,
    "first_name": "Chrissy",
    "last_name": "Cecely",
    "email": "ccecely6@friendfeed.com",
    "gender": "Male",
    "ip_address": "191.192.16.219"
  }, {
    "id": 8,
    "first_name": "Thedrick",
    "last_name": "Northin",
    "email": "tnorthin7@usa.gov",
    "gender": "Male",
    "ip_address": "172.98.24.185"
  }, {
    "id": 9,
    "first_name": "Juan",
    "last_name": "Scrafton",
    "email": "jscrafton8@mapy.cz",
    "gender": "Male",
    "ip_address": "134.3.142.90"
  }, {
    "id": 10,
    "first_name": "Emyle",
    "last_name": "Mazzeo",
    "email": "emazzeo9@epa.gov",
    "gender": "Female",
    "ip_address": "191.96.106.86"
  }]