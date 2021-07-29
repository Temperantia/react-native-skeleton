import React, { useCallback } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { Controller, useForm } from "react-hook-form";
import tw from "tailwind-react-native-classnames";

import { productCollection } from "../firebase";

const TabTwoScreen = () => {
  const { control, handleSubmit, reset } = useForm();

  const onSubmit = useCallback(
    handleSubmit(async ({ name }) => {
      await productCollection.add({ name });
      reset();
    }),
    [handleSubmit, productCollection]
  );

  return (
    <View>
      <Controller
        control={control}
        rules={{ required: true }}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <View>
            <TextInput
              placeholder="Name"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            ></TextInput>
            {error && <Text style={tw`text-red-500`}>Required</Text>}
          </View>
        )}
        name="name"
      ></Controller>
      <Button title="Add Product" onPress={onSubmit}></Button>
    </View>
  );
};

export default TabTwoScreen;
