import {
  FormControl,
  FormLabel,
  Input as ChackaInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

export default function Input({ name, label, ...rest }: InputProps) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor="password">{label}</FormLabel>}
      <ChackaInput
        name={name}
        id={name}
        type="password"
        focusBorderColor="pink.500"
        bgColor="teal.900"
        variant="filled"
        _hover={{ bgColor: "teal.900" }}
        size="lg"
        {...rest}
      />
    </FormControl>
  );
}
