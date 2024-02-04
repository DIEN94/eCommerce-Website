import React, { FC } from "react";
import { MyButton } from "components";
import { useForm } from "react-hook-form";
import { FormField } from "components/FormField/FormField";
import { registerFormFieldsConfig } from "./config";
import { postRequest } from "utils/postRequest";
import { useNavigate } from "react-router-dom";
import classes from "./Registration.module.scss";

type RequestRegistration = {
  token: string;
};

export const Registration: FC = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({ mode: "onBlur" });

  const urlRegister = "http://localhost:8000/account/register";

  const onSubmit = async (dataSubmit: any) => {
    const config = {
      data: dataSubmit,
    };
    try {
      const tokenUserRegistration = await postRequest<RequestRegistration>(
        urlRegister,
        config
      );

      if (tokenUserRegistration.data) {
        localStorage.setItem(
          "TokenUserRegistration",
          tokenUserRegistration.data.token
        );
        goToHome();
      } else {
        console.error("Error of request");
      }

      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={classes.registrationPage}>
      <div className={classes.registrationContainer}>
        <p className={classes.registrationContainerText}>Create an account</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          {registerFormFieldsConfig.map((field, index) => (
            <FormField
              key={index}
              label={field.label}
              name={field.name}
              register={register}
              errors={errors}
              validationRules={field.validationRules}
              type={field.type || "text"}
            />
          ))}
          <div className={classes.buttonBox}>
            <MyButton
              className={classes.button}
              variant="fill-orange"
              type="submit"
            >
              Create account
            </MyButton>
          </div>
        </form>
      </div>
    </div>
  );
};
