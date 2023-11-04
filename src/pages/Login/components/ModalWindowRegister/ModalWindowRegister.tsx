import React, { FC } from "react";
import { IModal, MyModal } from "components/Modal/MyModal";
import { MyButton } from "components";
import { useForm } from 'react-hook-form'
import { registerFormFieldsConfig } from "./config";
import { FormField } from "../FormField/FormField";
import exit from 'assets/page-Login/components/ModalWindowRegister/exit.webp'
import classes from "./ModalWindowRegister.module.scss";

export interface IModalWindowRegisterProps extends Pick<IModal, "onClose" | "isOpen"> {}

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

  const onSubmit = (data:any) => {
    alert(JSON.stringify(data))
    reset();
  }
  const closeMenu = () => {
    onClose();
  };

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
            onClick={closeMenu}
            >
              <img src={exit} alt="exitImg"/>
          </MyButton>
    </MyModal>
  );
};