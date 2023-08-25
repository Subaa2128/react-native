import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  name: Yup.string().required("Please enter your full name"),
  email: Yup.string()
    .email("Invalid email")
    .required("Please enter your email address"),
  password: Yup.string()
    .min(8)
    .required("Please enter your password")
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      "Must contain minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character"
    ),
  confirmPassword: Yup.string()
    .min(8, "Confirm Password must be 8 characters long.")
    .oneOf([Yup.ref("password")], "Your Passwords do not match.")
    .required("Confirm password is required"),
  mobile: Yup.string()
    .min(10, "Must be exactly 10 digits")
    .max(10, "Must be exactly 10 digits")
    .matches(/^[0-9]+$/, "Must be only digits")
    .required("Please enter your mobile number"),
});

export default function Login() {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        mobile: "",
      }}
      validationSchema={SignupSchema}
      // onSubmit={(values) => Alert.alert(JSON.stringify(values))}
      onSubmit={(values) => console.log(values)}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        setFieldTouched,
        isValid,
        handleSubmit,
      }) => (
        <View style={styles.wrapper}>
          <StatusBar style="auto" />
          <View style={styles.formContainer}>
            <Text style={styles.title}>Sign Up</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.inputStyle}
                placeholder="Full Name"
                value={values.name}
                onChangeText={handleChange("name")}
                onBlur={() => setFieldTouched("name")}
              />
              {touched.name && errors.name && (
                <Text style={styles.errorTxt}>{errors.name}</Text>
              )}
            </View>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.inputStyle}
                placeholder="Email Address"
                value={values.email}
                onChangeText={handleChange("email")}
                onBlur={() => setFieldTouched("email")}
              />
              {touched.email && errors.email && (
                <Text style={styles.errorTxt}>{errors.email}</Text>
              )}
            </View>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.inputStyle}
                placeholder="Password"
                value={values.password}
                onChangeText={handleChange("password")}
                onBlur={() => setFieldTouched("password")}
              />
              {touched.password && errors.password && (
                <Text style={styles.errorTxt}>{errors.password}</Text>
              )}
            </View>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.inputStyle}
                placeholder="Confirm Password"
                value={values.confirmPassword}
                onChangeText={handleChange("confirmPassword")}
                onBlur={() => setFieldTouched("confirmPassword")}
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <Text style={styles.errorTxt}>{errors.confirmPassword}</Text>
              )}
            </View>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.inputStyle}
                placeholder="Mobile No"
                value={values.mobile}
                onChangeText={handleChange("mobile")}
                onBlur={() => setFieldTouched("mobile")}
              />
              {touched.mobile && errors.mobile && (
                <Text style={styles.errorTxt}>{errors.mobile}</Text>
              )}
            </View>
            <Pressable
              onPress={() => handleSubmit()}
              disabled={!isValid}
              style={[
                styles.submitBtn,
                { backgroundColor: isValid ? "#395b64" : "red" },
              ]}
            >
              <Text style={styles.submitBtnTxt}>Submit</Text>
            </Pressable>
          </View>
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3333",
    paddingHorizontal: 15,
  },
  formContainer: {
    backgroundColor: "#f5eddc",
    padding: 20,
    borderRadius: 20,
    width: "100%",
  },
  title: {
    color: "#16213e",
    fontSize: 26,
    fontWeight: "400",
    marginBottom: 15,
  },
  inputWrapper: {
    marginBottom: 15,
  },
  inputStyle: {
    borderColor: "#16213e",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  errorTxt: {
    fontSize: 12,
    color: "#ff0d10",
  },
  submitBtn: {
    // backgroundColor: "#395b64",
    padding: 10,
    borderRadius: 15,
    justifyContent: "center",
  },
  submitBtnTxt: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
  },
});
