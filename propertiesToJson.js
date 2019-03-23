const fs = require('fs');
const path = require('path');
const os = require('os');
const process = require('process');

const INPUT_PATH = './i18n/new/';
const OUTPUT_PATH = './packages/pco-policies-and-settings/src/i18n';
const INPUT_FILE_FORMAT = '.properties';
const OUTPUT_FILE_FORMAT = '.json';

const filePathList = [];
fs.readdir(INPUT_PATH, 'utf8', (err, files) => {
  if (err) { console.error(err); }

  files.forEach((file) => {
    const filePath = path.join(INPUT_PATH, file);
    const stats = fs.statSync(filePath);
    if (stats.isFile()) {
      filePathList.push(filePath);
    }
  });
  console.log(filePathList);

  function getMessageStringFromFile(file) {
    const messageString = fs.readFileSync(file, 'utf-8');
    return messageString.trim();
  }

  function stringToObj(string) {
    const messageList = string.split('\n');
    const obj = {};
    messageList.forEach((item) => {
      if (item.trim() === '' || /#.?/.test(item)) {
        return false;
      }
      const index = item.indexOf('=');
      const key = item.substring(0, index);
      const value = item.substring(index + 1).replace(/^\s*|\s*$/g, ''); // delete null character at start or end
      obj[key] = value;
    });
    return obj;
  }

  function getFileName(filePath) {
    const propertiesIndex = filePath.lastIndexOf(INPUT_FILE_FORMAT);
    if (propertiesIndex < 0) {
      throw new Error('File format is invalid, only accept properties file');
    }

    let dirIndex;
    if (os.platform().indexOf('win32') !== -1) {
      dirIndex = filePath.lastIndexOf('\\');
    } else {
      dirIndex = filePath.lastIndexOf('/');
    }
    return filePath.substring(dirIndex + 5, propertiesIndex);
  }


  filePathList.forEach((filePath) => {
    // only transform en_US by default, it will transform all files if pass argu "-all"
    if (process.argv[2] !== '-all' && filePath.indexOf('en_US') === -1) { return; }

    const messageString = getMessageStringFromFile(filePath);
    const messagesObj = stringToObj(messageString);
    const fileName = getFileName(filePath);
    const outputFilePath = path.join(OUTPUT_PATH, `${fileName}${OUTPUT_FILE_FORMAT}`);
    console.log(`output: ${outputFilePath}`);
    fs.writeFileSync(outputFilePath, JSON.stringify(messagesObj, null, 4), 'utf-8');
  });
});

