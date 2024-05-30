import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useQuery } from '@tanstack/react-query';
import { getAllTags } from './api';
import { useState } from 'react';
import { Box } from '@mui/material';

export const FormulaInput = () => {
  const [inputValue, setInputValue] = useState('');
  const {data: options} = useQuery({
    queryFn: () => getAllTags(),
    queryKey: ['tags']
  })

  const handleChange = (value: string) => {
    console.log(value)
    setInputValue(value)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center'
      }}
    >
          <Autocomplete
      multiple
      onInputChange={(_, value) => handleChange(value)}
      options={options || []}
      renderOption={(props, option) => (
        <li {...props}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              flexGrow: 1,
              '& span': {
                color:
                  '#8b949e',
              },
            }}
          >
            <Box sx={{
              fontStyle: 'normal',
              m: 1, 
              textTransform: 'capitalize'
            }}>
              {option.name}
            </Box>
            <Box sx={{
              fontStyle: 'oblique',
              m: 1,
              color: 'text.secondary',
              fontSize: 14,
              textTransform: 'capitalize'
              }}>
                {option.category}
            </Box>
          </Box>
        </li>
      )}
      inputValue={inputValue}
      id="asynchronous-demo"
      sx={{ width: 300 }}
      isOptionEqualToValue={(option, value) => {
        return option.name === value.name
      }}
      getOptionLabel={(option) => option.name}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
          label="Tags"
        />
      )}
    />
    </Box>


  );
}

