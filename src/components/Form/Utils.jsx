export function buildFields(schema, values) {
  let fields = { ...schema };
  Object.keys(fields).forEach(
    name => {
      (fields[name] || (fields[name] = { })).initialValue = values[name]
    }
  );
  return fields;
}

export function resetFields(fields, values) {
  let reset = { };
  Object.keys(fields).forEach(
    name => reset[name] = { value: values[name] }
  );
  return reset;
}
