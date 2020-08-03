import React from 'react';

import { Field, Label, Input, Option, DataList } from './styles';

function FormField({ label, type, name, value, onChange, suggestions }) {
  const idField = `id_${name}`;
  const isTextArea = type === 'textarea';
  const typeFinal = isTextArea ? 'textarea' : 'input';
  const hasSuggestions = suggestions && Boolean(suggestions.length);
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
          autoComplete={hasSuggestions ? 'off' : 'on'}
          list={hasSuggestions ? `suggestionsFor_${idField}` : undefined}
        />
        <Label.Text>{label}</Label.Text>
        {hasSuggestions && (
          <DataList className="autocomplete" id={`suggestionsFor_${idField}`}>
            {suggestions.map((suggestion) => (
              <Option
                key={`suggestionsFor_${idField}_option${suggestion}`}
                value={suggestion}
              />
            ))}
          </DataList>
        )}
      </Label>
    </Field>
  );
}

export default FormField;
