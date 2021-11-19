import React from 'react';

import {
  GroupContainer,
  FormMessageContainer
} from './form-textarea.styles';

const FormTextarea = ({ handleChange, label, ...props }) => (
  <GroupContainer>
    <FormMessageContainer onChange={handleChange} {...props} />
  </GroupContainer>
);

export default FormTextarea;
