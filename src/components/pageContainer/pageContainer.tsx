import React from 'react';

import { Container, IContainer } from './styles';

interface IProps extends IContainer {
  children: React.ReactNode;
}

const PageContainerComponent: React.FC<IProps> = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

export const PageContainer = React.memo(PageContainerComponent);
