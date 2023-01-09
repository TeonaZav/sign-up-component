import { FormControl, FormErrorMessage } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Field, useField } from "formik";
import styled from "styled-components";
type TextFieldProps = {
  name: string;
  label: string;
  type?: "InputType";
  className?: string;
};
const TextField = ({ label, ...props }: TextFieldProps) => {
  const [field, meta] = useField(props);
  return (
    <Wrapper>
      <FormControl
        isInvalid={Boolean(meta.touched && meta.error)}
        className="text-ct"
      >
        <Input as={Field} {...field} {...props} className="text-field" />
        <FormErrorMessage className="error">{meta.error}</FormErrorMessage>
      </FormControl>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .text-ct {
    position: relative;
    .text-field {
      width: 27.9rem;
      height: 5.6rem;
      background: #ffffff;
      border: 0.1rem solid #dedede;
      font-size: 1.4rem;
      line-height: 2.6rem;
      font-weight: 600;
      letter-spacing: 0.25px;
      color: #3d3b48;
      padding-left: 1.9rem;
      padding-right: 1.5rem;
      caret-color: #5e54a4;
      border-radius: 0.5rem;
      margin-bottom: 1.6rem;
      &:focus {
        border: 0.1rem solid #5e54a4;
        outline: none;
        &::placeholder {
          opacity: 0;
        }
      }
    }
    .error {
      font-size: 1.1rem;
      font-weight: 500;
      line-height: 1.6rem;
      color: #ac0e0e;
      position: absolute;
      right: 0;
      bottom: -0.3rem;
    }
  }
  @media (min-width: 48em) {
    .text-ct {
      .text-field {
      }
    }
  }
  @media (min-width: 90em) {
    .text-ct {
      .text-field {
        width: 46rem;
      }
    }
  }
`;

export default TextField;
