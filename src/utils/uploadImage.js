import multer from 'multer';
import path from 'path';
import fs from 'fs';

// Helper function to ensure directory exists
const ensureDirectoryExists = (dir) => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
};

// Dynamic storage configuration based on type (category, profile, product, etc.)
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const folder = req.params.folder || 'others'; // Use dynamic folder based on the route parameter
        const uploadPath = path.join(process.cwd(), 'public', folder);
        
        ensureDirectoryExists(uploadPath); // Create folder if not exists
        cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    },
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
        cb(null, true);
    } else {
        cb(new Error('Only image files are allowed!'), false);
    }
};

const upload = multer({
    storage,
    fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5MB
});

// Export a middleware for single file upload with a dynamic folder name
export const uploadImage = (fieldName) => upload.single(fieldName);
