const getLastFilledRowIndex = async (sheets, vIndex) => {
    let index = 2;

    let result;

    do {
        result = await sheets.spreadsheets.values.get({
            spreadsheetId: process.env.SHEET_ID,
            range: `vertical${vIndex}!A${index}:L${index}`
        })
        index++
    }
    while (result.data.values !== undefined);

    return index-2;
}


export const write = async (vertical, resource, sheets, vIndex) => {
    let index = await getLastFilledRowIndex(sheets, vIndex);
    vertical.map((data, i) => {
        if (data.members !== null) {
            sheets.spreadsheets.values.update({
                spreadsheetId: process.env.SHEET_ID,
                range: `vertical${vIndex}!A${index}:L${index}`,
                valueInputOption: "RAW",
                resource: {
                    values: [[...resource.values[0], data.eventName, data.members]]
                }
            })
            index++;
        }
    })
}