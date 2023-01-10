import { FormControl, FormErrorMessage } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Field, useField } from "formik";
import styled from "styled-components";

type TextFieldProps = {
  name: string;
  label?: string;
  placeholder?: string;
  autoComplete: string;
  type?: any;
  value?: string;
};
const TextField = ({ label, ...props }: TextFieldProps) => {
  const [field, meta] = useField(props);
  return (
    <Wrapper>
      <FormControl
        isInvalid={Boolean(meta.touched && meta.error)}
        className={`text-ct ${meta.touched && meta.error && "top-margin"}`}
      >
        <Input
          as={Field}
          {...field}
          {...props}
          className={`text-field  ${
            meta.touched && meta.error && "is-invalid"
          }`}
        />
        {meta.touched && meta.error && (
          <svg
            className="error-icon"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fillRule="evenodd">
              <circle fill="#FF7979" cx="12" cy="12" r="12" />
              <rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1" />
              <rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1" />
            </g>
          </svg>
        )}
        <FormErrorMessage className="error">{meta.error}</FormErrorMessage>
      </FormControl>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .text-ct {
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 0;
    .text-field {
      width: 24.5rem;
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
      margin-bottom: 1rem;
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
      color: #ff7979;
      margin-bottom: 1.1rem;
      text-align: right;
      align-self: flex-end;
      margin-top: -1rem;
    }
    .is-invalid {
      border: 1px solid #ff7979;
      background-repeat: no-repeat;
      background-position: center;
      background-size: 2rem;
    }
    .error-icon {
      position: absolute;
      right: 1rem;
      top: 1.5rem;
    }
  }

  @media (min-width: 90em) {
    .text-ct {
      .text-field {
        width: 42.6rem;
        margin-bottom: 2rem;
      }
      .error {
        margin-top: -2rem;
      }
    }
  }
`;

export default TextField;
