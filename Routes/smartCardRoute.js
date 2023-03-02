import express from "express";
import { createSmartCard, deleteSmartCard, getAllSmartCardsByUser, getUniqueSmartCard, updateSmartCard } from "../Controllers/smartCardController.js";

const route = express();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                

route.post('/create-smartcard', createSmartCard);
route.get('/get-all-smartcard-by-user', getAllSmartCardsByUser);
route.get('/get-unique-smartcard/:smartCardId', getUniqueSmartCard);
route.put('/update-smartcard/:smartCardId', updateSmartCard);
route.delete('/delete-smartcard/:smartCardId', deleteSmartCard);

export default route;   