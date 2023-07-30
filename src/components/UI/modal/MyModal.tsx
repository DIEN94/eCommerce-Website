import React, { FC, RefObject, useEffect, useRef, useState } from "react";
import classes from "./MyModal.module.scss";
import { useClickOutside } from "../../hooks/useClickOutside";
import ModalPortal from "../../ModalPortal";


export interface IModal {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export const MyModal: FC<IModal> = ({ children, isOpen, onClose, className }) => {
  const [open, setOpen] = useState(isOpen);
  const ref = useRef<HTMLDivElement>(null);
  const rootClasses = [classes.myModal];

  if (open) {
    rootClasses.push(classes.active);
  }
  if (!isOpen) {
    rootClasses.push(classes.hide);
  }

  useClickOutside(ref, onClose)

    useEffect(() => {
      if (isOpen) {
        setOpen(isOpen);
      }
    }, [isOpen]);

    useEffect(() => {
      document.body.style.overflow = open ? "hidden" : "auto";
      return () => {
        document.body.style.overflow = "auto";
      };
    }, [open]);

  return (
    <ModalPortal>
    <div
      onTransitionEnd={() => {setOpen(false); onClose();}}
      className={rootClasses.join(" ")}
      >
      <div className = {className} ref={ref}>
        {children} 
      </div>
    </div>
    </ModalPortal>

  );
};

