import express from "express";
import { paytm, paytmCallback } from "../Controllers/paymetcontroller.js";
import { createResume, deleteResume, getAllResumesByUser, getUniqueResume, updateResume, updateResumeName } from "../Controllers/resumeController.js";

const route = express();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                

route.post('/create-resume', createResume);
route.get('/get-all-resume-by-user', getAllResumesByUser);
route.get('/get-unique-resume/:resumeId', getUniqueResume);
route.put('/update-resume/:resumeId', updateResume);
route.put('/update-resume-name/:resumeId', updateResumeName);
route.delete('/delete-resume/:resumeId', deleteResume);

route.post('/payment', paytm);
route.post('/callback', paytmCallback);

export default route;                                                                                                                                                                                                                                        