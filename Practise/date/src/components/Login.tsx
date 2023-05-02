import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { formSchema } from "../Validations";
import { useForm } from "react-hook-form";
import Mycontext from "../context";
import Details from "./Details";
import {
  Button,
  Input,
  InputContainer,
  LoginWrapper,
} from "../styles/components/Login";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  }: any = useForm({
    resolver: yupResolver(formSchema),
  });

  const [showDetail, setShowDetail] = useState(false);
  const { setFormdata }: any = useContext(Mycontext);

  const submit = (data: any) => {
    setFormdata(data);
    setShowDetail(true);
  };
  return (
    <>
      <LoginWrapper onSubmit={handleSubmit(submit)}>
        <InputContainer>
          <Input {...register("name")} type="text" placeholder="Enter name" />
          {errors.name ? (
            <p style={{ color: "red", fontSize: "10px" }}>
              {errors.name.message}
            </p>
          ) : (
            ""
          )}
        </InputContainer>
        <InputContainer>
          <Input
            {...register("email")}
            type="email"
            placeholder="Enter email"
          />
          {errors.email ? (
            <p style={{ color: "red", fontSize: "10px" }}>
              {errors.email.message}
            </p>
          ) : (
            ""
          )}
        </InputContainer>
        <InputContainer>
          <Input
            {...register("password")}
            type="password"
            placeholder="Enter password"
          />
          {errors.password ? (
            <p style={{ color: "red", fontSize: "10px" }}>
              {errors.password.message}
            </p>
          ) : (
            ""
          )}
        </InputContainer>
        <InputContainer>
          <Input
            {...register("confirm_password")}
            type="password"
            placeholder="Re-enter password"
          />
          {errors.confirm_password ? (
            <p style={{ color: "red", fontSize: "10px" }}>
              {errors.confirm_password.message}
            </p>
          ) : (
            ""
          )}
        </InputContainer>
        <InputContainer>
          <Input
            {...register("number")}
            type="number"
            placeholder="Enter phone no."
          />
          {errors.number ? (
            <p style={{ color: "red", fontSize: "10px" }}>
              {errors.number.message}
            </p>
          ) : (
            ""
          )}
        </InputContainer>
        <Button>Login</Button>
      </LoginWrapper>
      {showDetail && <Details />}
    </>
  );
};

export default Login;
