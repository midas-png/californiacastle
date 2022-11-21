import { useRef, forwardRef } from 'react';
import {
  ComponentWrapper,
  ContentWrapper,
  TextfieldTitle,
  TextfieldWrapper,
  TextfieldInput,
  TextfieldError,
  TextfieldCodeNumber,
} from './styles';

const NUMBER_ALLOWED_CHARS = /[0-9]+/;
const ALLOWED_CONTROL_BUTTONS = [
  'Backspace',
  'ArrowRight',
  'ArrowLeft',
  'ArrowUp',
  'ArrowDown',
];

export const Textfield = forwardRef((props, ref) => {
  const { title, adaptiveStretch, size, error, type } = props;
  ref = ref || useRef(null);

  const handleFocus = () => {
    ref.current?.focus();
  };

  const handleNumberType = (e) => {
    const value = e.target.value;
    if (
      (!NUMBER_ALLOWED_CHARS.test(e.key) &&
        !ALLOWED_CONTROL_BUTTONS.includes(e.key)) ||
      (value.length >= 10 && !ALLOWED_CONTROL_BUTTONS.includes(e.key))
    ) {
      e.preventDefault();
    }
  };

  return (
    <ComponentWrapper size={size} adaptiveStretch={adaptiveStretch}>
      {title && <TextfieldTitle>{`${title}:`}</TextfieldTitle>}
      <ContentWrapper>
        <TextfieldWrapper error={error} onClick={handleFocus}>
          {type === 'number' && <TextfieldCodeNumber>+1</TextfieldCodeNumber>}
          <TextfieldInput
            {...props}
            {...(type === 'number' && {
              type: 'text',
              maxlength: 10,
              onKeyDown: handleNumberType,
            })}
            ref={ref}
          />
        </TextfieldWrapper>
        {error && <TextfieldError>{error.message}</TextfieldError>}
      </ContentWrapper>
    </ComponentWrapper>
  );
});
