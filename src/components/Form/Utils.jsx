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
  Object.keys(fields).forEach(
    name => fields[name].value = values[name]
  );
  return { ...fields };
}
