import { Grid } from '@material-ui/core';
import { SubmitHandler } from '@unform/core';
import React, { useCallback } from 'react';
import { TCreateCompanyViewProps } from '.';
import { Icon } from '../../assets/icons';
import {
  BodyContainer,
  Button,
  Flex,
  Form,
  ImageInput,
  Input,
  InputPassword,
  MaskedInput,
  PageContainer,
  Select,
  Typography,
} from '../../components';
import { createCompanyValidationSchema } from '../../validationSchemas';

export const CreateCompanyView: React.FC<TCreateCompanyViewProps> = ({
  handleCreateCompany,
}) => {
  const onSubmitForm = useCallback<SubmitHandler>(data => {
    console.log(data);
  }, []);

  return (
    <PageContainer>
      <Flex alignItems="center">
        <Icon name="arrowBack" clickable size="sm" isButton />

        <Typography size="lg" marginLeft="sm">
          Empresa - Cadastrar-se
        </Typography>
      </Flex>

      <BodyContainer>
        <Form onSubmit={onSubmitForm} validationSchema={createCompanyValidationSchema}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={7}>
              <Flex alignItems="flex-end">
                <ImageInput name="profileImage" notErrorMargin />

                <Input name="name" label="Nome da empresa" marginLeft notErrorMargin />
              </Flex>
            </Grid>

            <Grid container alignItems="flex-end" item xs={12} sm={5}>
              <Input name="responsible" label="Nome do responsável" notErrorMargin />
            </Grid>

            <Grid item xs={12} sm={4}>
              <MaskedInput name="cnpj" label="CNPJ" mask="cnpj" notErrorMargin />
            </Grid>

            <Grid item xs={12} sm={3}>
              <Input name="phone" label="Telefone para contato" notErrorMargin />
            </Grid>

            <Grid item xs={12} sm={2}>
              <Select
                name="state"
                label="UF"
                notErrorMargin
                options={[
                  { value: 'idUm', label: 'um' },
                  { value: 'idDois', label: 'dois' },
                  { value: 'idTres', label: 'tres' },
                ]}
              />
            </Grid>

            <Grid item xs={12} sm={3}>
              <Select
                name="city"
                label="Cidade"
                notErrorMargin
                options={[
                  { value: 'idUm', label: 'um' },
                  { value: 'idDois', label: 'dois' },
                  { value: 'idTres', label: 'tres' },
                ]}
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <InputPassword name="password" label="Senha" notErrorMargin />
            </Grid>

            <Grid item xs={12} sm={4}>
              <InputPassword
                name="confirmPassword"
                label="Confirmar senha"
                notErrorMargin
              />
            </Grid>

            <Grid item xs={12} sm={12}>
              <Typography marginBottom="sm" size="sm">
                A senha deve conter: <br /> &nbsp; • Mínimo 8 (oito) caractéres; <br />{' '}
                &nbsp; • Mínimo uma letra minuscula; <br /> &nbsp; • Mínimo uma letra
                maiúscula; <br /> &nbsp; • Mínimo um número.
              </Typography>
            </Grid>

            <Grid container />

            <Grid item xs={12} sm={12}>
              <Input
                name="description"
                label="Descrição"
                multiline
                rows={4}
                notErrorMargin
              />
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" marginTop="lg" marginLeft="auto" fullWidthOnMobile>
              Castrar-se
            </Button>
          </Grid>
        </Form>
      </BodyContainer>
    </PageContainer>
  );
};
