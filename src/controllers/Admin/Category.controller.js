import { json } from "body-parser";
import Category from "../../models/Category.model.js";
import asyncHandler from "../../utils/asyncHandler.js";


const createCategory = asyncHandler(async(res,req,)=>{
     
    try {
        const { name, description } = req.body;
        const imagePath = req.file ? req.file.path : null;

        if (!name) {
            return res.status(400).json({ message: 'Name is required' });
        }

        const existingCategory = await Category.findOne({ name });
        if (existingCategory) {
            return res.status(400).json({ message: 'Category already exists' });
        }

        const category = new Category({
            name,
            description,
            categoryImage: imagePath,
        });

        const savedCategory = await category.save();
        res.status(201).json({
            message: 'Category created successfully',
            data: savedCategory,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    
})


export {
    createCategory
 
};