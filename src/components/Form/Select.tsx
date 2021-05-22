import {
  FormControl,
  FormLabel,
  Select as ChackaSelect,
  SelectProps as ChakraSelectProps,
} from "@chakra-ui/react";

interface SelectProps extends ChakraSelectProps {
  name: string;
  label?: string;
  options: string[];
}

export default function Select({ name, label, options, ...rest }: SelectProps) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor="password">{label}</FormLabel>}
      <ChackaSelect
        name={name}
        id={name}
        type="password"
        focusBorderColor="pink.500"
        bgColor="teal.900"
        variant="filled"
        _hover={{ bgColor: "teal.900" }}
        size="lg"
        {...rest}
      >
        {options.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </ChackaSelect>
    </FormControl>
  );
}
