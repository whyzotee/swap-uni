import FormField from "@/components/FormField";
import { signInSchema, signInType } from "@/modules/auth/validation/AuthSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Button, Text, View } from "react-native";

export default function SignUp() {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: zodResolver(signInSchema) });

  const onSubmit: SubmitHandler<signInType> = (data: signInType) => {
    console.log(data);
  };

  return (
    <View>
      <Text>Hello World!</Text>

      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, onBlur, value } }) => (
          <FormField
            title="Email"
            onBlur={onBlur}
            value={value}
            onChange={onChange}
            error={errors.email}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, onBlur, value } }) => (
          <FormField
            title="Password"
            onBlur={onBlur}
            value={value}
            onChange={onChange}
            error={errors.email}
          />
        )}
      />

      <Button title="SignIn" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}
