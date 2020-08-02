const { useState } = require("react");

export default function useForm(valuesInit) {
  const [modelValues, setModelValues] = useState(valuesInit);

  function onChange(event) {
    const {
      currentTarget: { name, value },
    } = event;
    setModelValues({ ...modelValues, [name]: value });
  }

  function clearForm() {
    setModelValues(valuesInit);
  }

  return {
    onChange,
    modelValues,
    setModelValues,
    clearForm,
  };
}