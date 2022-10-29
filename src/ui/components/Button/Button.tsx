import React, { useEffect, useState } from 'react';
import { IStyledCustomButton, StyledCustomButton } from 'ui/components/Button/Button.styles';

interface IButton extends IStyledCustomButton {
  onClick?: () => void;
  children?: React.ReactNode;
  isShifted?: boolean;
}

export const Button = ({ onClick, children, disabled, isShifted = false, ...props }: IButton) => {
  const [top, setTop] = useState<string>('90%');
  const [left, setLeft] = useState<string>('20%');
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  useEffect(() => {
    if (disabled && isShifted) {
      setIsDisabled(true);
    }
    if (!disabled && isShifted) {
      setTop('90%');
      setLeft('20%');
      setIsDisabled(false);
    }
  }, [disabled, isShifted]);

  const onMouseEnter = () => {
    console.log(isDisabled);
    if (isDisabled && isShifted) {
      setTop(Math.ceil(Math.random() * 90) + '%');
      setLeft(Math.ceil(Math.random() * 90) + '%');
    }
  };

  return (
    <StyledCustomButton
      top={top}
      left={left}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseEnter}
      onClick={onClick}
      {...props}
    >
      {children}
    </StyledCustomButton>
  );
};
