function ozToMl(text: string) {
    let aux = text.split(" ").filter((e) => e);
    const index = aux.findIndex((e) => e === "oz");

    if (index === -1) {
        return text;
    }

    aux.splice(index, 1);

    let result = 0;
    for (let i = 0; i < aux.length; i++) {
        result = result + parseNotation(aux[i]);
    }

    result = result * 29.574;
    return result.toFixed(0) + " ml";
}

function parseNotation(text: string) {
    if (!text.includes("/")) {
        return isNaN(parseFloat(text)) ? 0 : parseFloat(text);
    }

    const aux = text.split("/");
    const res = parseFloat(aux[0]) / parseFloat(aux[1]);

    return isNaN(res) ? 0 : res;
}

const convertUnits = {
    ozToMl,
}

export default convertUnits