import { Stack } from "expo-router"
import { colors } from "@/styles/theme"
import { 
  useFonts,
  Rubik_600SemiBold,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_700Bold
 } from "@expo-google-fonts/rubik"
import { Loading } from "@/components/loading"

export default function Layout() {
  const [fontLoaded] = useFonts({ Rubik_600SemiBold,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_700Bold
  })
  if(!fontLoaded) {
    return <Loading />
  }
  return <Stack
  screenOptions={{
    //headerStyle: {backgroundColor:"blue"},
    headerShown: false,
    contentStyle: {backgroundColor: colors.gray[100]}
  }}
  />
}