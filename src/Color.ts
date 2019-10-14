﻿const allColors = ["0072C6", "4617B4", "8C0095", "008A17", "D24726", "008299", "AC193D", "DC4FAD", "FF8F32", "82BA00", "03B3B2", "5DB2FF"];
const currentIterationColor = "#C1E6FF"; /*Pattens Blue*/
const otherIterationColors = ["#FFEDDD", "#EFFFDD", "#FFDDEF"]; /*Peach Cream, Rice Flower, Pale Rose*/

var interationCount = 0;

/**
 * Generates a color from the specified name
 * @param name String value used to generate a color
 * @return RGB color in the form of #RRGGBB
 */
export function generateColor(name: string): string {
    if (name === "currentIteration") {
        return currentIterationColor;
    }

    if (name === "otherIteration") {
        return otherIterationColors[interationCount++ % 3];
    }

    const id = name.slice().toLowerCase();
    let value = 0;
    for (let i = 0; i < (id || "").length; i++) {
        value += id.charCodeAt(i) * (i + 1);
    }

    return "#" + allColors[value % allColors.length];
}
