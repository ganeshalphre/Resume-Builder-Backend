import express from "express";
import { createResume } from "../Controllers/resumeController.js";

const route = express();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                

route.post('/create-resume', createResume);

export default route;                                                                                                                                                                                                                                        