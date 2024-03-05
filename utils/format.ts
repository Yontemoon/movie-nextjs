

//format date


//rounding to 2nd decimal

export const initials = (name: string) => {
    let words = name.split(" ")
    let initials = "";
    for (let i = 0; i < words.length; i++) {
        initials += words[i][0].toUpperCase();

    }
    return initials;
}