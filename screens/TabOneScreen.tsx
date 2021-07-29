import React from "react";
import { Text } from "react-native";
import { useCollectionData } from "react-firebase-hooks/firestore";

import { productCollection } from "../firebase";
import ScreenLoading from "../components/ScreenLoading";
import { Product } from "../types";

const TabOneScreen = () => {
  const [products, loading, error] =
    useCollectionData<Product>(productCollection);
  return (
    <ScreenLoading loading={loading} error={error}>
      {products?.map(({ name }) => (
        <Text key={name}>{name}</Text>
      ))}
    </ScreenLoading>
  );
};

export default TabOneScreen;
