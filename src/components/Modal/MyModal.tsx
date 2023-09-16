import React, { FC, RefObject, useEffect, useRef, useState } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import ModalPortal from "./components/ModalPortal/ModalPortal";
import classes from "./MyModal.module.scss";

export interface IModal {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  animateClasses?: {
    show?: string;
    hide?: string;
  };
  closeDelay?: number;
}

export const MyModal: FC<IModal> = ({
  children,
  isOpen,
  onClose,
  className,
  animateClasses,
  closeDelay = 500,
}) => {
  const [open, setOpen] = useState(isOpen);
  const ref = useRef<HTMLDivElement>(null);
  const timeOut = useRef<any>(null);
  const rootClasses: Array<string | undefined> = [classes.myModal];

  if (open) {
    rootClasses.push(classes.active);
  }
  if (!open) {
    rootClasses.push(classes.hide);
  }

  useClickOutside(ref, onClose);

  useEffect(() => {
    if (isOpen) {
      setOpen(isOpen);
    } else {
      if (!ref.current) return;
      ref.current.classList.remove(animateClasses?.show || "");
      ref.current.classList.add(animateClasses?.hide || "");
      timeOut.current = setTimeout(() => {
        setOpen(isOpen);
      }, closeDelay);
    }
    return () => {
      clearTimeout(timeOut.current);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!ref.current) return;
    if (open) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (!ref.current) return;
          ref.current.classList.remove(animateClasses?.hide || "");
          ref.current.classList.add(animateClasses?.show || "");
        });
      });
    }
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <ModalPortal>
      <div className={rootClasses.join(" ")}>
        <div className={`${classes.modalContent} ${className}`} ref={ref}>
          {children}
        </div>
      </div>
    </ModalPortal>
  );
};
