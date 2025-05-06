import { useEffect, useState } from "react";
import { View, Alert, Text } from "react-native";

import { api } from "@/services/api"

import { Categories, CategoriesProps } from "@/components/categories";
import { Testandos } from "@/components/testandos";

export default function Home() {
  const [categories, setCategories] = useState<CategoriesProps>([]);
  const [category, setCategory] = useState("");

  async function fetchCategories() {
    try {
      const { data } = await api.get("/categories");
      console.log("Bora mano ", data)
      setCategories(data)
      setCategory(data[0].id)
      console.log("testando aqui ó ")
    } catch (error) {
      console.log(error)
      Alert.alert("Categorias", "Não foi possível carregar as categorias.")
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
  <View style={{ flex:1, alignItems: "center", justifyContent: "center" }}>
      <Categories
        data={categories}
        onSelect={setCategory}
        selected={category}
      />
      <Testandos/>
    </View>
  )
}