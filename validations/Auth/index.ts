import joi from "joi";

const userSchema = joi.object({
  firstname: joi.string().min(6).max(255).required(),
  lastname: joi.string().min(6).max(255).required(),
  username: joi.string().required(),
  email: joi.string().email().required(),
  age: joi.number(),
  password: joi.string().required(),
});

const userValidation = (elements: any) => {
  const userCheck = userSchema.validate(elements);
  if (userCheck.error) {
    return userCheck.error.details[0].message;
  }
};

export default userValidation;
