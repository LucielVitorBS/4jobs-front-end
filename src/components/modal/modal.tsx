import React, { useCallback } from 'react';

import { Dialog, DialogProps } from '@material-ui/core';

import { Container, Header, CloseIconContainer } from './styles';
import { Typography } from '../';
import { Icon } from '../../assets/icons';

export interface IModalProps {
  open: boolean;
  handleClose(value: false): void;
}

export interface IModalCompleteProps extends IModalProps {
  children: React.ReactNode;
  width?: DialogProps['maxWidth'];
  title?: string;
}

const ModalComponent: React.FC<IModalCompleteProps> = ({
  children,
  open,
  handleClose,
  width = 'sm',
  title,
}) => {
  const onClickClose = useCallback(() => {
    console.log('click close');
  }, []);

  return (
    <Dialog
      open={open}
      onClose={() => handleClose(false)}
      PaperComponent={Container}
      maxWidth={width}
    >
      <Header>
        {title && <Typography size="lg">{title}</Typography>}

        <CloseIconContainer>
          <Icon name="close" size="md" clickable onClick={onClickClose} />
        </CloseIconContainer>
      </Header>

      {children}
    </Dialog>
  );
};

export const Modal = React.memo(ModalComponent);
