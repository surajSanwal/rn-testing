import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface Props {
  title: string;
}

const styles = StyleSheet.create({
  btn: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderRadius: 10
  },
  btnText: {}
});

const Button: React.FC<Props> = (props) => {
  return (
    <TouchableOpacity data-testID="btn-btnComponnet" style={styles.btn}>
      <Text style={styles.btnText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
