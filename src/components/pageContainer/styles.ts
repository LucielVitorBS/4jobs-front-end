import styled from 'styled-components';
import { maxWidthMobile } from '../../constants';

export interface IContainer {
  noMargin?: boolean;
}

export const Container = styled.div<IContainer>`
  margin: ${({ noMargin }) => (noMargin ? 0 : '4rem 10rem')};

  @media (max-width: ${maxWidthMobile}) {
    margin: ${({ noMargin }) => (noMargin ? 0 : ' 2rem 2rem')};
  }
`;
