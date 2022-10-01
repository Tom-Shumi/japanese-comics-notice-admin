
export const convertDateToString = (input: Date) => {
    return `${input.getFullYear()}-${input.getMonth() + 1}-${input.getDate()}`;
}

export const convertDbDateTimeToDateString = (input: Date) => {
    if (input == null) {
        return "";
    }
    return `${input.getFullYear()}-${input.getMonth() + 1}-${input.getDate()}`;
}