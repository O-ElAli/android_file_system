import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Dirs, FileSystem } from 'react-native-file-access';

const App = () => {
  const [fileText, setFileText] = useState('');
  const [userText, setUserText] = useState('');


  const createFile = async () => {
    try {
      const filePath = `${Dirs.DocumentDir}/test23.txt`;

      FileSystem.writeFile(filePath, 'Hello from new file')

      console.log("file created in:", filePath)

    } catch (error) {
      
    }
  }

  const handleFileOperations = async () => {
    try {
      const filePath = `${Dirs.DocumentDir}/test1.txt`;
      
      // Write to the file
      await FileSystem.appendFile(filePath, userText + ' \n');
      
      // // Read from the file
      // const text = await FileSystem.readFile(filePath);
      // setFileText(text);
    } catch (error) {
      console.error("Error in file operation", error);
    }
  };

  const readFile = async() => {
    try{
      const filePath = `${Dirs.DocumentDir}/test1.txt`;

      const text = await FileSystem.readFile(filePath);
      setFileText(text)
    }
    catch(e){
      console.log("error in file reading", e)
    }
  }

  const deleteFile = async () => {
    try{
      const filePath = `${Dirs.DocumentDir}/test1.txt`;

      FileSystem.unlink(filePath);
    }
    catch(e){
      console.log("error in file deletion", e)
    }
  }

  const listFile = async () => {
    try {
      const filePath = `${Dirs.SDCardDir}`;

      console.log(filePath)

      const recursiveFileSearch = async (currentPath) => {
        let result = []

        const files = await FileSystem.ls(currentPath);

        for (const file of files){
          //use stat
          const tempPath = `${currentPath}/${file}`

          const stat = await FileSystem.stat(tempPath);

          //console.log(tempPath);

          if(stat.type === "directory"){
            //console.log('reached the else')
            console.log('test2')
            const recursiveResult =  await recursiveFileSearch(tempPath)
            //console.log(recursiveResult)
            result = result.concat(recursiveResult);
          }
          else{
            result.push(tempPath);
            console.log('result1')
          }



          // if(stat.type == "file"){
          //   result.push(tempPath);
          //   console.log('result1')
          // }
          // else if (stat.type == "directory"){
          //   //console.log('reached the else')
          //   console.log('test2')
          //   const recursiveResult =  await recursiveFileSearch(tempPath)
          //   //console.log(recursiveResult)
          //   result = result.concat(recursiveResult);

          // }
          
        }
        console.log(result)
        return(result)
        // setFileText(files.join('\n'))
      }
      
      return(recursiveFileSearch(filePath));
    } catch (error) {
    }
  }


class dataStructure {



};

  const listFileTop = async () => {
    console.log('test')
    const result = await listFile();
    setFileText(result
      .map(result.filename)
      .join('\n'));
    console.log('finished recursion')
    console.log(result)

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

      <Button title="Create the file" onPress={createFile} />  {/* Calls createFile on press */}
      <Text>

      </Text>



      <Button title="Update the file" onPress={handleFileOperations} />  {/* Calls handleFileOperations on press */}
      <Text>

      </Text>
      <Button title="Read the file" onPress={readFile} />  {/* Calls readFile on press */}<Text>

      </Text>
      <Button title="Delete the file" onPress={deleteFile} />  {/* Calls deleteFile on press */}

      <Text>

      </Text>
      <Button title="List the file" onPress={listFileTop} />  {/* Calls listFile on press */}

      <Text style={{ marginTop: 20 }}>{fileText}</Text> {/* Display file content here */}
    </View>
  );
};

export default App;
