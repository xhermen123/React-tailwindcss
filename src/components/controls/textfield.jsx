import React from "react";
import { TextField as RMWCTextField } from "@rmwc/textfield";

const TextField = ({
  characterCount,
  disabled,
  fullwidth,
  helpText,
  icon,
  inputRef,
  invalid,
  label,
  onChange,
  outlined,
  required,
  rootProps,
  textarea,
  trailingIcon,
  type,
  value
}) => (
  <RMWCTextField
    characterCount={characterCount}
    disabled={disabled}
    fullwidth={fullwidth}
    helpText={helpText}
    icon={icon}
    inputRef={inputRef}
    invalid={invalid}
    label={label}
    onInput={evt => onChange(evt.target.value)}
    outlined={outlined}
    required={required}
    rootProps={rootProps}
    textarea={textarea}
    trailingIcon={trailingIcon}
    type={type}
    value={value}
  />
);

export default TextField;
