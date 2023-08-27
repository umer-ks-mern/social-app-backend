import Joi from "joi";

const postValidator={
    create : (req, res, next)=>{
        const schema = Joi.object({
            title: Joi.string().alphanum().min(3).max(20).required(),

            description: Joi.string().alphanum().min(3).max(255).required(),

            user_id: Joi.string().alphanum().required(),
        });

        const{error} = schema.validate(req.body);
        if(error){
            return res.status(400).json({error: error.details[0].message});
        }

        next();
    },
};

export default postValidator;