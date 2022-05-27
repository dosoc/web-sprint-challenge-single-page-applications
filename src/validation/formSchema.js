import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required("Please enter a Name")
        .min(2, "name must be at least 2 characters"),
    size: yup
        .string()
        .oneOf(['small', 'medium', 'large'], "Size is required"),
    pineapple: yup.boolean(),
    jalapeno: yup.boolean(),
    pepperoni: yup.boolean(),
    bacon: yup.boolean(),
    special: yup.string().trim()
});

export default formSchema;