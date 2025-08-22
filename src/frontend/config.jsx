import React, { useState, useEffect } from 'react';
import ForgeReconciler, { useConfig, Box, Button, Label, Form, FormHeader, FormSection, FormFooter, RadioGroup, useForm, Spinner } from '@forge/react';
import { view } from '@forge/bridge';

const CHEESES = [
    { name: "cheese", value: "brie", label: "Brie" },
    { name: "cheese", value: "cheddar", label: "Cheddar" },
    { name: "cheese", value: "gouda", label: "Gouda" },
    { name: "cheese", value: "parmesan", label: "Parmesan" },
    { name: "cheese", value: "quesoFresco", label: "Queso Fresco" },
    { name: "cheese", value: "stilton", label: "Stilton" },
  ];

const useSubmit = () => {
  const [error, setError] = useState();
  const [message, setMessage] = useState('');

  const submit = async (fields) => {
    const payload = { config: fields };

    try {
      await view.submit(payload);
      setError(false);
      setMessage(`Submitted successfully.`);
    } catch (error) {
      setError(true);
      setMessage(`${error.code}: ${error.message}`);
    }
  };

  return {
    error,
    message,
    submit
  };
};

const Config = () => {
  const {error, message, submit } = useSubmit();
  const config = useConfig();
  const { handleSubmit, register, getFieldId } = useForm({
  });

  useEffect(() => {
    console.log("config: ", config);
  }, [config]);

  const handleCancel = () => {
    view.close();
  };

  return (
    <Form onSubmit={handleSubmit(submit)}>
      <FormHeader>
        Select the type of cheese you'd like to display
      </FormHeader>
      <FormSection>
            <Label labelFor={getFieldId("cheese")}>Pick a cheese</Label>
            {config ? <RadioGroup
              {...register("cheese")}
              options={CHEESES} defaultValue={config.cheese}
            /> : <Box><Spinner size='medium' label='Loading'/></Box>}
      </FormSection>
      <FormFooter>
        <Button onClick={handleCancel} appearance="subtle">Cancel</Button>
        <Button appearance="primary" type="submit">
          Save
        </Button>
      </FormFooter>
    </Form>
  );
};

ForgeReconciler.render(
  <React.StrictMode>
    <Config />
  </React.StrictMode>
);

