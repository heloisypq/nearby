import { View } from "react-native"
import { useRouter } from "expo-router"

import { Steps } from "@/components/steps"
import {Button} from "@/components/button"
import {Welcome} from "@/components/welcome"

export default function Index() {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        padding: 40,
        gap: 40
      }}
    >
      <Welcome />
      <Steps/>
      <Button onPress={()=>{router.navigate("/home")}}>
        <Button.Title>Começar</Button.Title>
      </Button>
    </View>
  )
}