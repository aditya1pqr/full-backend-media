import { asyncHandler } from "../utils/asyncHandler.js";



const registerUser = asyncHandler( async (req, res) => {

    res.json({
        success: true,
        message: "User registered successfully",
    })
})

export {registerUser}