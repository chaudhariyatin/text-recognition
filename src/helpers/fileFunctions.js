import RNFetchBlob from 'rn-fetch-blob';
import {Toast} from 'native-base';
import {DIRECTORY_NAME} from '../constants';

const dirs = RNFetchBlob.fs.dirs;

export function getScreenShotsDirectory() {
  return dirs.DCIMDir + '/Screenshots';
}

export function getDownloadDirectory() {
  return dirs.DownloadDir;
}

export function getScreenShotsFiles() {
  let status = [];
  RNFetchBlob.fs
    .ls(RNFetchBlob.fs.dirs.DCIMDir + '/Camera')
    .then(data => {
      //   status = data;
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    });
  //   console.log(status);
  const dirs = RNFetchBlob.fs.dirs;
  console.log(RNFetchBlob.fs.dirs.DCIMDir + '/Camera');
}
