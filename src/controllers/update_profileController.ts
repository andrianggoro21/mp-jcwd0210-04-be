// import { Request, Response } from "express";
// import update_profileService from "../services/update_profileService";

// const createUpdate_profileController = async (req: Request, res: Response) => {
//     try {
//         // const { image } = req.body;
//         // const numImage = String(image);
//         const result = await update_profileService.createUpdate_profileService(
//           req.file?.filename || ""
//         );
//         return res.status(200).json({
//             message: "Update Profile Success",
//             data: result,
//         });
//     }   catch (err: any) {
//         console.error("Error in createUpdate_ProfileController:", err);
        
//     }
// };

// const updateUpdate_profileController = async (req: Request, res: Response) => {
//     try {
//         const {userId} = req.params
//         const numUserId = Number(userId);
//         const result = await update_profileService.updateUpdate_profileService( req.file?.filename || "", numUserId)
        
//         return res.status(200).json({
//             message: "Update Profile Success",
//             data: result,
//         });
//     }   catch (err: any) {
//         console.error("Error in createUpdate_ProfileController:", err);
//     }
// }

// export = {
//     createUpdate_profileController,
//     updateUpdate_profileController,
// }