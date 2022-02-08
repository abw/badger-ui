
export const unvalidatedState = {
  validated:  false,
  valid:      undefined,
  invalid:    undefined,
  status:     undefined,
  message:    undefined,
};

export const validatingState = {
  validating: true,
  status:     'validating',
  message:    undefined,
};

export const validState = {
  validating: false,
  validated:  true,
  valid:      true,
  invalid:    false,
  status:     'valid',
};

export const invalidState = {
  validating: false,
  validated:  true,
  valid:      false,
  invalid:    true,
  status:     'invalid',
};

export const submittingState = {
  submitting: true,
  status:     'submitting',
};

export const resetState = {
  changed:    false,
  validated:  false,
  valid:      undefined,
  invalid:    undefined,
  status:     undefined,
  submitting: undefined,
};

export const changeState = {
  validated:  false,
  valid:      undefined,
  invalid:    undefined,
  status:     undefined,
  message:    undefined,
};

export const States = {
  unvalidated: unvalidatedState,
  validating: validatingState,
  valid: validState,
  invalid: invalidState,
  submitting: submittingState,
  reset: resetState,
  change: changeState,
}

export default States
