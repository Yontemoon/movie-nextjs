export const currentYear = new Date().getFullYear();
export const years = Array.from({ length: currentYear - 1919 }, (_, index) => 1920 + index).toReversed();