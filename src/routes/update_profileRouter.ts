// import express from "express";
// import update_profileController from "../controllers/update_profileController";
// import multer from "../middleware/multer";
// const router = express.Router();

// router.post(
//   "/",
//   multer.UploadUpdate_ProfileFile,
//   update_profileController.createUpdate_profileController
// );

router.patch(
  "/:id",
  multer.UploadUpdate_ProfileFile,
  update_profileController.updateUpdate_profileController
);

router.get("/profile", update_profileController.getProfileController)

export = router;
