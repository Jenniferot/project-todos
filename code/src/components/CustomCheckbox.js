import React, { useState } from 'react';
import styled from 'styled-components';

export const CustomCheckbox = ({ isChecked, onChangeHandler }) => {
  const [checked, setChecked] = useState(isChecked);

  const handleOnChange = (event) => {
    onChangeHandler();
    setChecked(event.target.checked);
  };

  const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
    border: 0;
    clip: rect(0 0 0 0);
    clippath: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
    width: 25px;
    height: 25px;
  `;

  // This is the checkmark itself
  const Icon = styled.svg`
    fill: none;
    stroke: white;
    stroke-width: 2px;
  `;

  const StyledCheckbox = styled.div`
    display: inline-block;
    width: 25px;
    height: 25px;
    background: ${(props) => (props.checked ? 'rgb(5, 52, 89)' : 'rgb(5, 52, 89)')};
    border-radius: ${(props) => (props.checked ? '50%' : '50%')};
    transition: all 150ms;
    ${Icon} {
      visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
    }
  `;

  {/*} &: hover {
    stroke: rgb(34, 214, 255);
  }*/}

  const CheckboxContainer = styled.div`
    display: inline-block;
    vertical-align: middle;
    &:hover {
      cursor: pointer;
      ${Icon} {
        visibility: visible;
        stroke: rgb(34, 214, 255);}
    }
  `;

  const Checkbox = ({ className, checked, ...props }) => (
    <CheckboxContainer>
      <HiddenCheckbox checked={checked} {...props}></HiddenCheckbox>
      <StyledCheckbox checked={checked}>
        <Icon viewBox="-2 0 24 21">
          <polyline points="15 8 9 16 5 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  );

  return (
    <div>
      <label>
        <Checkbox checked={checked} onChange={handleOnChange}></Checkbox>
      </label>
    </div>
  );
};
