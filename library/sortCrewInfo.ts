import { MovieCrewDetails } from "./modals"

// const sortCrewInfo = (crewCredits: CrewDetails[]) => {
//     return crewCredits.reduce((acc: {[key: string]: CrewDetails[]}, credit) => {
//         const {department} = credit;
//         if (!acc[department]) {
//             acc[department] = []
//         }
//         acc[department].push(credit)
//         return acc
//     },{})
// }

const sortCrewInfo = (crewCredits: MovieCrewDetails[]) => {
    const result: { department: string, credits: MovieCrewDetails[] }[] = [];
    
    crewCredits.forEach((credit) => {
        const { department } = credit;
        const existingDepartmentIndex = result.findIndex(item => item.department === department);

        if (existingDepartmentIndex === -1) {
            result.push({ department, credits: [credit] });
        } else {
            result[existingDepartmentIndex].credits.push(credit);
        }
    });

    return result;
};
export default sortCrewInfo