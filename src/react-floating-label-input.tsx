import React from 'react'
import styled from 'styled-components'
import './style.module.css'

// export const ReactFloatingInput = styled.input`
// background-color: green;
// `;

// const ReactFloatingInput = (props) =>
//     <input {...props} />

// export default ReactFloatingInput;

// const ReactFloatingInput = (props: any) => <div className="field">
//     <input {...props} />
//     <label>{props?.label}</label>
// </div>

interface Props {
    id?: string,
    borderColor?: string;
    backgroundColor?: string;
}

const Field = styled.div`
  position: relative;
`;

const Input = styled.input<Props>`
  color: #565656;
  background: none;
  padding: 0.625rem;
  border: 2px solid ${props => props.borderColor || '#030104'};
`;

const Label = styled.label<Props>`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(0.625rem, 0.625rem);
  color: ${props => props.borderColor || '#030104'};
  background-color: ${props => props.backgroundColor || '#e5e4f7'};
  padding-inline: 0.25rem;
  border: 2px solid transparent;
  pointer-events: none;
  transition: transform 250ms, background-color 250ms, border-color 250ms;
`;

const StyledField = styled(Field) <Props>`
  &:focus-within ${Label},
  &:not(:has(:placeholder-shown)) ${Label} {
    transform: translate(0.625rem, -1rem);
    border-color: ${props => props.borderColor || '#030104'};
  }

  & ::placeholder {
    color: transparent;
  }
`;

// Usage in a React component
const ReactFloatingLabelInput = ({ props }: any) => {
    const { backgroundColor, borderColor, placeholder, id, onInput } = props;
    return (
        <StyledField>
            <Input borderColor={borderColor} id={id} onInput={onInput} />
            <Label backgroundColor={backgroundColor}>{placeholder}</Label>
        </StyledField>
    );
};

export default ReactFloatingLabelInput;