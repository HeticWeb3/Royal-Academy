import {competitionsDataProps} from "@/app/Components/Types/Competitions/competitionsDataProps";
import {Paper, Table, TableBody, TableRow, TableContainer, TableHead, TableCell} from "@mui/material";

const Competition = (data: { data: competitionsDataProps }) => {
    const allCompetition = data

    let date = allCompetition.data.date;
    date = new Date()

    return (

        <div>
            <Paper>
                <TableContainer>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Nom</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Instrument</TableCell>
                                <TableCell>Style</TableCell>
                                <TableCell>Niveau</TableCell>
                                <TableCell>Prix Entrer</TableCell>
                                <TableCell>Prix Gagnant</TableCell>
                                <TableCell>Localisation</TableCell>
                                <TableCell>Date</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>{allCompetition.data.name}</TableCell>
                                <TableCell>{allCompetition.data.description}</TableCell>
                                <TableCell>{allCompetition.data.instrument.name}</TableCell>
                                <TableCell>{allCompetition.data.style?.name}</TableCell>
                                <TableCell>{allCompetition.data.level?.nom}</TableCell>
                                <TableCell>{allCompetition.data.priceEnter}</TableCell>
                                <TableCell>{allCompetition.data.priceWin}</TableCell>
                                <TableCell>{allCompetition.data.localisation}</TableCell>
                                <TableCell>{date.toLocaleDateString()}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div>
    )
}
export default Competition;