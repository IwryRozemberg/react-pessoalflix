import React from 'react';

import { Field, Label, Input } from './styles';

function FormField({ label, type, name, value, onChange }) {
  const idField = `id_${name}`;
  const isTextArea = type === 'textarea';
  const typeFinal = isTextArea ? 'textarea' : 'input';
  return (
    <Field>
      <Label htmlFor={idField}>
        <Input
          as={typeFinal}
          type={type}
          id={idField}
          name={name}
          value={value}
          onChange={onChange}
        />
        <Label.Text>{label}</Label.Text>
      </Label>
    </Field>
  );
}

export default FormField;
