import express from "express";
import { createResume, getAllResumesByUser, getUniqueResume, updateResume } from "../Controllers/resumeController.js";

const route = express();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                

route.post('/create-resume', createResume);
route.get('/get-all-resume-by-user/:token', getAllResumesByUser);
route.get('/get-unique-resume/:resumeId', getUniqueResume);
route.put('/update-resume/:resumeId', updateResume);

export default route;                                                                                                                                                                                                                                        