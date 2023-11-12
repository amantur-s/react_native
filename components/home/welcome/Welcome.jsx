import { useRouter } from "expo-router"
import React, { useState } from "react"
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native"

import { SIZES, icons } from "../../../constants"
import styles from "./welcome.style"

const jobTypes = [
  "Полный день",
  "Сменный график",
  "Гибкий график",
  "Удаленная работа",
  "Вахтовый метод",
]

const Welcome = () => {
  const router = useRouter()
  const [activeJobType, setActiveKobType] = useState("Полный день")

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}> Саамайбеков Амантур </Text>
        <Text style={styles.userName}> Найди свою идеальную работу! </Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder="Что ты ищешь?"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer} >
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveKobType(item)
                router.push(`/search/${item}`)
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}> {item} </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  )
}

export default Welcome
