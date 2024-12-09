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





    } catch (error) {
      
    }
  };





  class Node {

    constructor(data){
      //each node will contain this information about itself
      this.data = data;
      // this.name = name;
      // this.size = size;
      // this.type = type;
      this.children = []; //initiate each node with 0 children
    }
  };
  
  let root = new Node('root');
  let node1 = new Node('node1');
  let node2 = new Node('node2');
  let node3 = new Node('node3');
  let node4 = new Node('node4');
  let node5 = new Node('node5');
  let node6 = new Node('node6');
  let node7 = new Node('node7');
  let node8 = new Node('node8');
  let node9 = new Node('node9');
  let node10 = new Node('node10');
  
  root.children = [node1, node2, node3,];
  
  node1.children = [node5, node6];
  node2.children = [node7, node8];
  node3.children = [node4];
  node4.children = [node9, node10];
  
  
  // console.log(root);
  
  let testing = []

  //testing[node1[node5,node6],...]

  function depthFirstSearch(node){
    if(!node) return;
    
    testing.push(node);
    
    node.children.map(child => {
      depthFirstSearch(child);
    })
  
    return testing;
  }
  

  const testingDSA = () => {
    const resultat = depthFirstSearch(root);
    
    // resultat.forEach(node =>{
      
    //   console.log(node.data + ' and children: ' + node.children)
      
    // })
    console.log(testing)
    testing=[]
  }
  
  
class FileNode {

  constructor(name, size, type){
    //each node will contain this information about itself

    this.name = name;
    this.size = size;
    this.type = type;
    this.children = []; //initiate each node with 0 children
  }


};

  const listFileTop = async () => {
    console.log('test')
    const result = listFile();
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



      <Button title="Update the file" onPress={testingDSA} />  {/* Calls handleFileOperations on press */}
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
