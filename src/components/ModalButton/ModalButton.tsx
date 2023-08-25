import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "../Button/Button";
import { Modal } from "../Modal/Modal";

const ModalButton = () => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const handleModal = () => setIsModalVisible(() => !isModalVisible);
  return (
    <>
      <Modal isVisible={isModalVisible}>
        <View style={{ flex: 1 }}>
          <Text>Hello!</Text>
          <Button title="Hide modal" onPress={handleModal} />
        </View>
      </Modal>
      <Modal isVisible={isModalVisible}>
        <Modal.Container>
          <Modal.Header title="LogRocket is fab!" />
          <Modal.Body>
            <Text style={styles.text}>Agree to continue with this guide</Text>
          </Modal.Body>
          <Modal.Footer>
            <Button title="I agree" onPress={handleModal} />
          </Modal.Footer>
        </Modal.Container>
      </Modal>
    </>
  );
};

export default ModalButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    marginTop: 15,
    paddingVertical: 15,
    borderRadius: 25,
    width: "80%",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontWeight: "700",
    fontSize: 18,
  },
});
