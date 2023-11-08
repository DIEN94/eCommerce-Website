export const registerFormFieldsConfig = [
    {
      label: "Email",
      name: "email",
      validationRules: {
        required: "This field is required",
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          message: 'Invalid email address',
        },
      },
    },
    {
      label: "Password",
      name: "password",
      validationRules: {
        required: "This field is required",
        minLength: {
          value: 5,
          message: 'Minimum 5 characters',
        },
      },
      type: "password",
    },
    {
        label: "Username",
        name: "username",
        validationRules: {
          required: "This field is required",
        },
      },
  ];