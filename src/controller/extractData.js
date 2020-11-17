const toHtml = require('node-html-parser');
const view = require('../view/extractData');
const csvController = require('../utils/csvCreator');
const reqs = require('../model/requisitions');
const formatData = require('../model/dataFormat');

module.exports = {
    extract: async (req, res) => {
        let today = new Date().getFullYear(), years = [], subtitle = [], formatedObject = [],
            {type} = req.body, parameter = "";

        for (let year = 2008; year <= 2019; year++) {
            console.log(year, "--------");
            let result = await reqs.allReqs(year, type);
            let html = toHtml.parse(await result.text());
            let lines = await html.querySelectorAll('tr'), allSubtitle = await html.querySelectorAll('th');
            console.log("completou req");

            if (!lines[3])
                return view.error({message: "Error", _message: "error while fetching information"}, res)

            if (year === 2008) {
                let leg = await formatData.subtitle(allSubtitle);
                for (let count = 0; count < leg.length; count++)
                    if (count >= 1)
                        if (leg[count].search('Total') === -1) {
                            subtitle.push(leg[count]);
                            if (count > 5)
                                subtitle.push(`Porcentagem ${leg[count]}`);
                        } else {
                            subtitle.push(leg[count]);
                            break;
                        }
                    else if (count === 0) parameter = leg[count];
            }

            let data = [await formatData.getLinesInformation(lines, subtitle)];
            // console.log(data[0]);
            formatedObject.push(await formatData.constructorObject(data, subtitle));
            years.push(year);
        }

        await csvController.generateCSV(type, years, subtitle, formatedObject, parameter);
        return view.show(`Foram extraídos os dados sobre ${type} do ano de ${years[0]} até ${years[years.length - 1]}!`, res);
    },
}
