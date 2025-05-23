import React from 'react';
import {Modal, TouchableOpacity, View, Text, StyleSheet} from 'react-native';

const MenuModal = ({visible, onClose, onNavigate, buttonText}) => {
  return (
    <Modal visible={visible} transparent={true} onRequestClose={onClose}>
      <TouchableOpacity style={styles.menuModalOverlay} onPress={onClose}>
        <View style={styles.menuOptions}>
          <TouchableOpacity
            style={styles.menuOptionItem}
            onPress={() => {
              onClose();
              onNavigate();
            }}>
            <Text style={styles.text}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  menuModalOverlay: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingTop: 80,
    paddingRight: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  menuOptions: {
    backgroundColor: "red",
    borderRadius: 10,
    padding: 10,
    alignItems:"center",
    width: 150,
  },
  text:{
    color: "white",
    fontSize:12,
    
  },
  menuOptionItem: {
    paddingVertical: 10,
  },
});

export default MenuModal;
