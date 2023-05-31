import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MultipleSelect from './MultiSelect';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function NestedMultiSelect({label,data}) {
  const theme = useTheme();
  const [values, setValues] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setValues(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div style={{width : '50%'}}>
      <FormControl sx={{ width: '100%' }} >
        <InputLabel id="categories">{'Categories'}</InputLabel>
        <Select
          
          labelId={'categories'}
          id={'category-select'}
          multiple
          value={values}
          onChange={handleChange}
          input={<OutlinedInput label={'CategoriesInput'} />}
          MenuProps={MenuProps}
        >
          {data.map((el) => {
            console.log(data)
            return (
                <MenuItem
                  key={el.name}
                  value={el.name}
                  // style={getStyles(name, personName, theme)}
                >
                  <MultipleSelect label={data.name} attributes={el.subCats} />
                </MenuItem>
              )
          })}
        </Select>
      </FormControl>
    </div>
  );
}