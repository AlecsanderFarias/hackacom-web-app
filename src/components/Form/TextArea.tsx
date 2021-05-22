import {
  FormControl,
  FormLabel,
  Textarea as ChackaTextTextArea,
  TextareaProps as ChakraTextTextAreaProps,
} from "@chakra-ui/react";

interface TextAreaProps extends ChakraTextTextAreaProps {
  name: string;
  label?: string;
}

export default function TextArea({ name, label, ...rest }: TextAreaProps) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor="password">{label}</FormLabel>}
      <ChackaTextTextArea
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
