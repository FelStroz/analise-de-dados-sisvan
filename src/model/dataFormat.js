const isOdd = require('is-odd');

module.exports = {
    getLinesInformation: async (lines, subtitle) => {
        let data = [], numLine = 0;
        for (let line of lines)
            if (numLine < 2)
                numLine++;
            else {
                let informationOneLine = [];
                for (let information of line.childNodes)
                    if (information.rawText.search('TOTAL') > -1)
                        break;
                    else if (information.rawText.search('    ') < 0)
                        informationOneLine.push(information.rawText);
                (informationOneLine[0]) ? data.push(await validator(informationOneLine, subtitle)) : "";
                // ACABOU A LINHA
            }
        return data;
    },
    constructorObject: async (informationOfLine, headers) => {
        let allData = [];
        for (let values of informationOfLine[0]) {
            let object = {};
            for (let headerKey of Object.keys(headers)) {
                let header = headers[headerKey];
                object[header] = values[headerKey];
            }
            allData.push(object);
        }
        return allData;
    },
    subtitle: async (allSubtitle) => {
        let headers = [];
        for (let subtitle of allSubtitle) {
            let formattedSubtitle = '', numNodes = 0;
            for (let text of subtitle.childNodes)
                if (text.rawText) {
                    numNodes++;
                    if (numNodes > 1)
                        formattedSubtitle += ` ${text.rawText}`;
                    else
                        formattedSubtitle = `${text.rawText}`;
                }
            headers.push(formattedSubtitle);
        }
        return headers;
    },
}

function validator(line, headers) {
    let allData = [];
    if (line.length === headers.length) { // num de informações é o mesmo contido nos headers?
        for (let information of line){
            if (information.search('%') > -1)
                information = information.replace('.',',');
            if(information === '-')
                information = '0%';
            allData.push(information);
        }
        return allData;
    } else { // verificação e completando
        for (let position of Object.keys(line))
            if (isOdd(position)) // é impar?
                if (parseInt(line[position]))// é inteiro?
                    allData.push(line[position]);
                else
                    allData.push('xxxx'); // registra erro
            else  // é par?
            if (parseInt(line[position])) // é inteiro?
                if (line[position].search('%') < 0 && line[position].search('-') < 0)
                    allData.push('xxxx'); // registra erro
                else
                    allData.push(line[position]);
        return allData;
    }
}
