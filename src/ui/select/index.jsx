import { useToggle, useOutsideClick } from 'domain';
import { useState, useRef } from 'react';
import {
  ArrowDownIcon,
  ComponentWrapper,
  SelectTitle,
  SelectWrapper,
  SelectContent,
  SelectContentWrapper,
  SelectDropdownWrapper,
  DropdownItem,
} from './styles';

export const Select = ({
  title,
  adaptiveStretch,
  options = [],
  defaultOption,
  onChange,
}) => {
  const selectRef = useRef(null);
  const [selected, setSelected] = useState(defaultOption || options[0] || '');
  const [open, toggleOpen] = useToggle();

  const handleOutsideClick = () => {
    if (open) {
      toggleOpen();
    }
  };

  const handleSelectedChange = (option) => {
    setSelected(option);
    if (onChange instanceof Function) {
      onChange(value);
    }
  };

  useOutsideClick(selectRef, handleOutsideClick);

  return (
    <ComponentWrapper adaptiveStretch={adaptiveStretch} ref={selectRef}>
      {title && <SelectTitle>{title}</SelectTitle>}
      <SelectWrapper open={open} onClick={toggleOpen}>
        <SelectContentWrapper>
          <SelectContent>{selected}</SelectContent>
          <ArrowDownIcon open={open} />
        </SelectContentWrapper>
        <SelectDropdownWrapper open={open}>
          {options.map((option) => (
            <DropdownItem
              open={open}
              adaptiveStretch={adaptiveStretch}
              onClick={() => handleSelectedChange(option)}>
              {option}
            </DropdownItem>
          ))}
        </SelectDropdownWrapper>
      </SelectWrapper>
    </ComponentWrapper>
  );
};
