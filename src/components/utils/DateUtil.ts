
export const convertUsDateToString = (input: Date) => {
    return `${input.getFullYear()}-${input.getMonth() + 1}-${input.getDate()}`;
}

export const convertDbDateTimeToDateString = (input: Date) => {
    return `${input.getFullYear()}-${input.getMonth() + 1}-${input.getDate()}`;
}