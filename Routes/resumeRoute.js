import express from "express";
import { createResume, deleteResume, getAllResumesByUser, getUniqueResume, updateResume } from "../Controllers/resumeController.js";

const route = express();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                

route.post('/create-resume', createResume);
route.get('/get-all-resume-by-user', getAllResumesByUser);
route.get('/get-unique-resume/:resumeId', getUniqueResume);
route.put('/update-resume/:resumeId', updateResume);
route.delete('/delete-resume/:resumeId', deleteResume);

export default route;                                                                                                                                                                                                                                        