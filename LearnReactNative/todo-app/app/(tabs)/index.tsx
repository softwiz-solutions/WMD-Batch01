import Features from "@/components/shared/pageSection/Features";
import {
  FlatList,
  FlatListComponent,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";

export default function HomeScreen() {
  const theme=useColorScheme()
  console.log("🚀 ~ HomeScreen ~ theme:", theme)
  const dummyData = [
    {
      id: 1,
      title: "Roles Royals",
      description: "demo demo",
      imageUrl:
        "https://www.spinny.com/blog/wp-content/uploads/2024/09/videoframe_0.webp",
    },
    {
      id: 2,
      title: "Roles Royals 2",
      description: "demo demo",
      imageUrl:
        "https://www.spinny.com/blog/wp-content/uploads/2024/09/videoframe_0.webp",
    },
    {
      id: 3,
      title: "Roles Royalsm 3",
      description: "demo demo",
      imageUrl:
        "https://www.spinny.com/blog/wp-content/uploads/2024/09/videoframe_0.webp",
    },
    {
      id: 4,
      title: "Roles Royals 4",
      description: "demo demo",
      imageUrl:
        "https://www.spinny.com/blog/wp-content/uploads/2024/09/videoframe_0.webp",
    },
    {
      id: 5,
      title: "Roles Royals 5",
      description: "demo demo",
      imageUrl:
        "https://www.spinny.com/blog/wp-content/uploads/2024/09/videoframe_0.webp",
    },
    {
      id: 6,
      title: "Roles Royals 6",
      description: "demo demo",
      imageUrl:
        "https://www.spinny.com/blog/wp-content/uploads/2024/09/videoframe_0.webp",
    },
    {
      id: 7,
      title: "Roles Royals 7",
      description: "demo demo",
      imageUrl:
        "https://www.spinny.com/blog/wp-content/uploads/2024/09/videoframe_0.webp",
    },
    {
      id: 8,
      title: "Roles Royals 8",
      description: "demo demo",
      imageUrl:
        "https://www.spinny.com/blog/wp-content/uploads/2024/09/videoframe_0.webp",
    },
    {
      id: 9,
      title: "Roles Royals 9",
      description: "demo demo",
      imageUrl:
        "https://www.spinny.com/blog/wp-content/uploads/2024/09/videoframe_0.webp",
    },
    {
      id: 10,
      title: "Roles Royals 10",
      description: "demo demo",
      imageUrl:
        "https://www.spinny.com/blog/wp-content/uploads/2024/09/videoframe_0.webp",
    },
    {
      id: 11,
      title: "Roles Royals 11",
      description: "demo demo",
      imageUrl:
        "https://www.spinny.com/blog/wp-content/uploads/2024/09/videoframe_0.webp",
    },
  ];
  const backGroundColorTheme=theme=="dark"?"orange":"white"
  return (
    <SafeAreaView style={{ backgroundColor: backGroundColorTheme }}>
      <View>
        <Features />
      </View>
      <View>
        <FlatList
          ItemSeparatorComponent={<View style={{ height: 10 }} />}
          // numColumns={2}
          // columnWrapperStyle={{

          //   gap: 10,
          // }}
          keyExtractor={(item, index) => index.toString()}
          data={dummyData}
          renderItem={({ item, index }) => (
            <View style={styles.card}>
              <Image
                style={styles.cardImage}
                height={100}
                width={100}
                source={{
                  uri: item.imageUrl,
                }}
              />
              <View style={styles.cardBody}>
                <Text>{item.title}</Text>
                <Text>{item.description}</Text>
              </View>
            </View>
          )}
        />
      </View>

      {/* <Text>Demo</Text>
      <Todo /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "red",
    shadowColor: "#000",
    // margin: 10,
    // justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  cardImage: {
    borderRadius: 10,
  },
  cardBody: {},
});
