import { StyleSheet } from "react-native";
import { colors } from "@/styles/theme";

// O s é abreviação de styles no caso
export const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.gray[100]
  }
})