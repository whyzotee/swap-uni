import FormField from "@/components/FormField";
import { useAuthStore } from "@/modules/auth/store/AuthStore";
import { signInSchema, signInType } from "@/modules/auth/validation/AuthSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Button, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";

export default function SignIn() {
  const { signIn } = useAuthStore();

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: zodResolver(signInSchema) });

  const onSubmit: SubmitHandler<signInType> = (data: signInType) => {
    console.log(data);
    signIn(data.email, data.password);
  };

  return (
    <KeyboardAwareScrollView>
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
              error={errors.password}
              isPassword
            />
          )}
        />

        <Button title="SignIn" onPress={handleSubmit(onSubmit)} />
      </View>
    </KeyboardAwareScrollView>
  );
}
