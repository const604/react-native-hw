import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    // borderWidth: 1,
    // borderColor: "#000000",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    // elevation: 5,
  },
  addPhotoBtn: {
    position: "absolute",
    width: 24,
    height: 24,
    top: 85,
    right: 0,
    marginBottom: 32,
    backgroundColor: "#FFFFFF",
    // borderWidth: 1,
    // borderStyle: "solid",
    borderRadius: 50,
    color: "#FF6C00",
    // borderColor: "transparente",
  },
  containerBG: {
    width: "100%",
    height: 549,
    alignItems: "center",
    marginTop: 273,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 92,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  pageHeader: {
    marginBottom: 32,
    fontFamily: "Roboto-Medium",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.01,
    textAlign: "center",
    color: "#212121",
  },
  input: {
    height: 50,
    width: "98%",
    marginBottom: 16,
    padding: 10,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    borderRadius: 8,
    shadowColor: "#000000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
  },
  showPasswordText: {
    position: "absolute",
    top: 306,
    right: "10%",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
  regBtn: {
    width: "98%",
    height: 51,
    marginTop: 43,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF6C00",
    borderRadius: 50,
  },
  regBtnText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#FFFFFF",
  },
  anyAccountText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#1B4371",
  },
  anyAccountLink: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    color: "#1B4371",
  },
});
