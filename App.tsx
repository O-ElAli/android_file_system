/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View
} from 'react-native';

import { Dirs, FileSystem } from 'react-native-file-access';

const App = () => {
  const [fileText, setFileText] = useState('');

  useEffect(() => {
    const writeAndReadFile = async () => {
      try {
        // Write sample content to the file if it doesn't exist
        await FileSystem.writeFile(Dirs.CacheDir + '/test.txt', 'Hello from test.txt!');

        // Now read the file content
        const text = await FileSystem.readFile(Dirs.CacheDir + '/test.txt');
        setFileText(text);  // Update state with file content
      } catch (error) {
        console.error("Error writing or reading file:", error);
      }
    };

    writeAndReadFile();  // Call the async function to write and read the file
  }, []);  // Empty dependency array runs this only on mount

  return (
    <View>
      <Text>Hello world!!!!!!!!</Text>
      <Text>{fileText}</Text> {/* Display file content here */}
    </View>
  );
};

export default App;
