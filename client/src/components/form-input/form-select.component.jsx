import React from 'react';

import {
  GroupContainer,
  FormSelectContainer
} from './form-select.styles';

const FormSelect = ({ handleChange, label, ...props }) => (
  <GroupContainer>
    <FormSelectContainer onChange={handleChange} {...props} />
  </GroupContainer>
);

export default FormSelect;
