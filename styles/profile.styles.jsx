import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  imageBG: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  containerImg: {
    position: "absolute",
    justifyContent: "center",
    top: -60,
    width: 132,
    height: 120,
  },
  avatar: {
    position: "absolute",
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
  },
  addPhotoBtn: {
    position: "absolute",
    width: 24,
    height: 24,
    top: 85,
    right: 0,
    marginBottom: 32,
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    color: "#BDBDBD",
  },
  containerBG: {
    position: "relative",
    width: "100%",
    height: 766,
    alignItems: "center",
    marginTop: 400,
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 92,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  logoutBtn: {
    position: "absolute",
    top: 22,
    right: 16,
  },
  pageHeader: {
    marginBottom: 33,
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    letterSpacing: 0.03,
    textAlign: "center",
    color: "#212121",
  },
  contentContainer: {
    flex: 1,
    width: "100%",
    marginBottom: 200,
  },
  contentBlock: {
    width: "100%",
    marginBottom: 60,
    marginLeft: "auto",
    marginRight: "auto",
  },
});
