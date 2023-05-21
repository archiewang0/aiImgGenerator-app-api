import express from "express"
import { generateImage } from "../controllers/openAiControllers";

const router = express.Router()

router.post('/images', generateImage)

export default router;