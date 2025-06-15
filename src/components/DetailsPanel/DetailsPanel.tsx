import { useDebounce } from '@hooks/UseDebounce';
import { Input } from '@ui/Input/Input';
import { FC, ReactNode, useEffect, useState } from 'react';

interface DetailsPanelProps {
  children: ReactNode;
}

export const DetailsPanel: FC<DetailsPanelProps> = ({ children }) => {
  const [value, setValue] = useState('');

  const debouncedSearch = useDebounce(value, 400);

  useEffect(() => {
    if (debouncedSearch) {
      //fetch
    }
  }, [debouncedSearch]);

  const handleChangeValue = (text: string) => {
    setValue(text);
  };

  return (
    <div>
      <Input text={value} setText={handleChangeValue} />
    </div>
  );
};
