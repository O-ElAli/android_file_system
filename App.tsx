import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Dirs, FileSystem } from 'react-native-file-access';

const App = () => {
  const [fileText, setFileText] = useState('');
  const [userText, setUserText] = useState('');

  const handleFileOperations = async () => {
    try {
      const filePath = `${Dirs.DocumentDir}/test1.txt`;
      
      // Write to the file
      await FileSystem.appendFile(filePath, userText + ' \n');
      
      // Read from the file
      const text = await FileSystem.readFile(filePath);
      setFileText(text);
    } catch (error) {
      console.error("Error in file operation", error);
    }
  };

  const deleteFile = async () => {

  }

  return (
    <View style={{ padding: 20 }}>
      <Text>Hello world!!!!!!!!</Text>
      <Text>Share your thoughts onto the file!</Text>
      
      <TextInput
        placeholder="Here"
        style={{ borderColor: 'black', borderWidth: 1, marginVertical: 10, padding: 5 }}
        value={userText}
        onChangeText={(text) => setUserText(text)}  // Updates userText on input change
      />

      <Button title="Update the file" onPress={handleFileOperations} />  {/* Calls handleFileOperations on press */}

      <Text style={{ marginTop: 20 }}>{fileText}</Text> {/* Display file content here */}
    </View>
  );
};

export default App;
