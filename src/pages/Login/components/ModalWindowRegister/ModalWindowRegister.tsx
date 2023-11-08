import React, { FC } from "react";
import { IModal, MyModal } from "components/Modal/MyModal";
import { MyButton } from "components";
import { useForm } from 'react-hook-form'
import { registerFormFieldsConfig } from "./config";
import { FormField } from "../FormField/FormField";
import { postRequest } from "utils/postRequest";
import exit from 'assets/page-Login/components/ModalWindowRegister/exit.webp';
import classes from "./ModalWindowRegister.module.scss";

export interface IModalWindowRegisterProps extends Pick<IModal, "onClose" | "isOpen"> {}

type UserRegistration = {
  email: string;
  password: string;
  name: string;
}

export const ModalWindowRegister: FC<IModalWindowRegisterProps> = ({isOpen, onClose,}) => {

  const {
    register,
    formState: {
      errors,
      isValid
    },
    handleSubmit,
    reset,
  } = useForm(
    {mode: "onBlur"}
  );

  const closeMenu = () => {
    onClose();
  };

  const urlRegister = "http://localhost:8000/account/register";

  const onSubmit = async (dataSubmit:any) => {
    const config = {
      data: dataSubmit,
    };
    try {
      await postRequest<UserRegistration>(urlRegister, config);
      reset(); 
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <MyModal
      isOpen={isOpen}
      onClose={closeMenu}
      className={classes.modalWindowRegister}
    >
      <p className={classes.loginContainerText}>Create an account</p>
          <form 
          onSubmit={handleSubmit(onSubmit)}
          className={classes.loginContainerForm}
          >
          {registerFormFieldsConfig.map((field, index) => (
            <FormField
              key={index}
              label={field.label}
              name={field.name}
              register={register}
              errors={errors}
              validationRules={field.validationRules}
              type={field.type || 'text'}
            />
          ))}
            <div className={classes.buttonBox}>
            <MyButton 
              className={classes.button}
              variant='fill-orange'
              type="submit"
              >
                Create account
            </MyButton>
            </div>
          </form>
          <MyButton 
            className={classes.buttonExit}
            variant='fill-white'
            type="button"
            onClick={closeMenu}
            >
              <img src={exit} alt="exitImg"/>
          </MyButton>
    </MyModal>
  );
};