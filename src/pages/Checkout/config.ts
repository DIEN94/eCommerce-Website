export const checkoutFormFieldsConfig = [
    {
      label: "First Name",
      name: "first name",
      validationRules: {
      required: "This field is required",
        pattern: {
        value: /^[A-Za-z]+$/,
        message: 'Uncorrected first name',
        },
      },
    },
    {
        label: "Last Name",
        name: "last name",
        validationRules: {
        required: "This field is required",
          pattern: {
          value: /^[A-Za-z]+$/,
          message: 'Uncorrected last name',
          },
        },
      },
    {
      label: "Street address",
      name: "street address",
      validationRules: {
        required: "This field is required",
        pattern: {
          value: /^[a-zA-Z0-9\s,'.-]+$/,
          message: 'Invalid address format',
        },
      },
    },
    {
      label: "Town / City",
      name: "town / city",
      validationRules: {
        required: "This field is required",
        minLength: {
          value: /^[A-Za-z]+$/,
          message: 'Uncorrected last name',
        },
      },
    },
    {
        label: "Phone",
        name: "phone",
        validationRules: {
          required: "This field is required",
          pattern: {
            value: /^(?:\+\d{1,2}\s?)?(?:\(\d{1,4}\)\s?)?\d+(?:[-\s]?\d+)*$/,
            message: 'Invalid phone number format',
          },
        },
      },
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
  ];