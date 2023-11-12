import React, { FC } from 'react'
import classes from "./FormField.module.scss";

interface IFormFieldProps {
    label: string;
    name: string;
    register: any; // Возможно изменить
    errors: any; // Возможно изменить
    validationRules: Record<string, any>; // Возможно изменить
    type?: string;
  }

export const FormField: FC<IFormFieldProps> = ({ label, name, register, errors, validationRules, type = 'text' }) => {
    return (
      <div>
        <label>
          <p className={classes.formText}>{label}:</p>
          <input {...register(name, validationRules)} type={type} />
        </label>
        <div className={classes.validationMassage}>
          {errors[name] && <p>{String(errors[name].message) || "Error!"}</p>}
        </div>
      </div>
    );
  };
