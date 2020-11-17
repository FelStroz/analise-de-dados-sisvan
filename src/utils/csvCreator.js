const fs = require('fs');
const {format} = require('@fast-csv/format');

module.exports = {generateCSV}

async function generateCSV(title, years, subtitles, formattedObject, parameter) {
    let ws = fs.createWriteStream(`${title}.csv`), aux = -1;
    const csvStream = format({headers: true, delimiter: ';'});

    csvStream.pipe(ws).on('end', () => console.log("Done!"));

    for (let oneYearInformation of formattedObject)
        for (let oneInformationOfYear of oneYearInformation) {
            if (oneInformationOfYear[`Munic&iacute;pio`] === 'BRASILIA')
                aux++;
            oneInformationOfYear.Tipo = parameter;
            oneInformationOfYear.Pais = 'Brasil';
            oneInformationOfYear.Ano = years[aux];
            csvStream.write(oneInformationOfYear);
        }

    console.log("terminou");
    csvStream.end();
}
