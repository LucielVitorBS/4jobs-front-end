import React, { useCallback } from 'react';

import { useDrag } from 'react-dnd';

import { Icon } from '../../../../assets/icons';
import { Tooltip, Typography } from '../../../../components';
import { jobResponseTypesLabels, TJobResponseValues } from '../../../../constants';
import { ICandidateByJob } from '../../../../types';

import { Container, StatusDot, StatusContainer } from './styles';

interface IProps {
  cardId: string;
  columnName: string;
  index: number;
  candidate: ICandidateByJob;
  columnId: TJobResponseValues;
  onClickCandidate(candidateId: string, columnId: TJobResponseValues): void;
}

const UserCardComponent: React.FC<IProps> = ({
  columnId,
  candidate,
  columnName,
  onClickCandidate,
}) => {
  const [, dragRef] = useDrag(
    () => ({
      type: `${columnId}`,
      item: { candidate, column: columnId, columnName },
      collect: monitor => ({
        opacity: monitor.isDragging() ? 0.5 : 1,
      }),
    }),
    []
  );

  const onClickCard = useCallback(() => {
    onClickCandidate(candidate.id, columnId);
  }, [onClickCandidate, candidate, columnId]);

  return (
    <Container ref={dragRef} onClick={onClickCard}>
      <Typography>{candidate.name}</Typography>

      <Icon name="message" size="sm" clickable />

      <StatusContainer>
        <Tooltip text={jobResponseTypesLabels[candidate.status]} placement="top">
          <StatusDot status={candidate.status} />
        </Tooltip>
      </StatusContainer>
    </Container>
  );
};

export const UserCard = React.memo(UserCardComponent);
