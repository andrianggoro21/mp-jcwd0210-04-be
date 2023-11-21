// import { constants } from "buffer";
// import update_profileQuery = require("../queries/update_profileQuery");

// const createUpdate_profileService = async (image: string) => {
//     try {
//         const res = await update_profileQuery.createUpdate_profileQuery(image)
//         return res 
//     }   catch (err) {
//         throw err
//     }
// }

// const updateUpdate_profileService = async (image: string, userId: number) => {
//     try {
//         const existingUpdate_profile = await update_profileQuery.findUpdate_profileQuery(userId)
//         if (!existingUpdate_profile) throw new Error("dat 8a doesnt exist");
//         const res = await update_profileQuery.updateUpdate_profileQuery(image, userId)
//         return res 
//     }   catch (err) {
//         throw err
//     }
// }

const getProfileService =async () => {
    try {
        const res = await update_profileQuery.getProfileQuery()
        return res
    } catch (err) {
        throw err
    }
}

export = {
  createUpdate_profileService,
  updateUpdate_profileService,
  getProfileService,
};
