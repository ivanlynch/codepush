import React, {useEffect, useState} from 'react';
import CodePush from 'react-native-code-push';

import {Modal, SafeAreaView, StyleSheet, Text, View} from 'react-native';

import {users} from './src/mock/users';
import {cities} from './src/mock/cities';
import {addresses} from './src/mock/addresses';
import {countries} from './src/mock/countries';
import {idk} from './src/mock/idk';

const CodePushOptions = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
  installMode: CodePush.InstallMode.IMMEDIATE,
  optionalInstallModel: CodePush.InstallMode.IMMEDIATE,
  mandatoryInstallMode: CodePush.InstallMode.IMMEDIATE,
};

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [update, setUpdate] = useState(0);

  console.log(users);
  console.log(cities);
  console.log(addresses);
  console.log(countries);
  console.log(idk);

  const codePushStatusChanges = (value: any) => {
    if (value === CodePush.SyncStatus.DOWNLOADING_PACKAGE) {
      setModalVisible(true);
    }
  };

  const codePushStatusUpdate = ({receivedBytes, totalBytes}: any) => {
    const value = Math.floor((receivedBytes / totalBytes) * 100);
    setUpdate(value);
  };

  useEffect(() => {
    CodePush.sync(CodePushOptions, codePushStatusChanges, codePushStatusUpdate);
  }, [update, modalVisible]);

  return (
    <>
      <SafeAreaView style={styles.centeredView}>
<<<<<<< HEAD
        <Text style={styles.modalText}>Hello Codepush updates 3, 👋</Text>
=======
        <Text style={styles.modalText}>Oi Codepushes, 👋</Text>
>>>>>>> 6025b238b5f2bb3ce131a6934d52fc35c51cef65
      </SafeAreaView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View>
          <View style={styles.modalView}>
<<<<<<< HEAD
            <Text style={styles.modalText}>Update in progress: {update} %</Text>
=======
            <Text style={styles.modalText}>{update}</Text>
>>>>>>> 6025b238b5f2bb3ce131a6934d52fc35c51cef65
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    fontSize: 48,
    textAlign: 'center',
  },
});

export default App;
