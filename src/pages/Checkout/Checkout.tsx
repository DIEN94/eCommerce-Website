import React, { FC } from "react";
import { FormField, PosterPage } from "components";
import { CheckoutWindow } from "./components/CheckoutWindow/CheckoutWindow";
import { checkoutFormFieldsConfig } from "./config";
import { useForm } from "react-hook-form";
import classes from "./Checkout.module.scss";

export const Checkout: FC = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({ mode: "onBlur" });

  return (
    <div className={classes.checkout}>
      <PosterPage namePage="Checkout" />
      <div className={classes.workWindowContainer}>
        <div className={classes.inputContainer}>
          <p className={classes.titleText}>Billing details</p>
          {checkoutFormFieldsConfig.map((field, index) => (
            <FormField
              key={index}
              label={field.label}
              name={field.name}
              register={register}
              errors={errors}
              validationRules={field.validationRules}
            />
          ))}
        </div>
        <CheckoutWindow />
      </div>
    </div>
  );
};
