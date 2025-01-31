import { View, Text } from "react-native"

import {Welcome} from "@/components/welcome"

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Welcome />
      <Text style={{ fontSize: 22 }}>
        Inhaí galera
      </Text>
    </View>
  )
}