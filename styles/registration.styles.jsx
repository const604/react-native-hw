import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // position: "relative",
    width: 392,
    height: 812,
    // backgroundColor: "#FFFFFF",
  },
  imageBG: {
    // position: "absolute",
    flex: 1,
    justifyContent: "center",
  },
  addPhotoImg: {
    position: "absolute",
    width: 120,
    height: 120,
    left: 136,
    top: -60,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#000000",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 0.25,
    shadowOffset: { width: 4, height: 0 },
    shadowRadius: 4,
  },
  addPhotoBtn: {
    position: "absolute",
    width: 25,
    height: 25,
    left: 242,
    top: 21,
    marginBottom: 32,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 100,
    borderColor: "#FF6C00",
  },
  addPhotoBtnText: {
    position: "absolute",
    left: 249,
    top: 19,
    fontSize: 20,
    color: "#FF6C00",
  },
  containerBG: {
    position: "relative",
    width: 395,
    height: 549,
    // left: 0,
    marginTop: 273,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 92,
    backgroundColor: "#FFFFFF",
    // boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  pageHeader: {
    marginBottom: 32,
    fontFamily: "Roboto",
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
    marginBottom: 16,
    padding: 10,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    borderRadius: 8,
    shadowColor: "#000000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 4, height: 0 },
    shadowRadius: 4,
  },
  showPasswordText: {
    position: "absolute",
    top: 306,
    left:295,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
  regBtn: {
    position: "relative",
    width: 343,
    height: 51,
    marginTop: 43,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 32,
    paddingTop: 32,
    // alignItems: "center",
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  regBtnText: {
    position: "absolute",
    marginTop: 20,
    left: 112,
    // width: 120,
    // height: 19,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    // textAlign: "center",
    color: "#FFFFFF",
    // order: 0,
    // flexGrow: 0,
  },
  anyAccountText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#1B4371",
  },
  anyAccountLink: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    color: "#1B4371",
  },
});
