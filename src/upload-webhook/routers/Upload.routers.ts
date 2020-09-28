import { Router } from 'express';
import UploadControllers from '../controllers/Upload.controllers';
let multer = require('multer'); 
let upload = multer(); 
/**
 * Autor: Christopher siverio
 * fecha: 11-08-2020
 */
const router = Router();

// Subir Archivo
router.post('/upload',upload.any('file'), UploadControllers.uploadFile);
router.post('/webhook-update-tickets', UploadControllers.updateTickets);
router.post('/webhook-create-comments', UploadControllers.createComments);


export default router;