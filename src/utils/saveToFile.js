/* eslint-disable */

function errorHandler(e) {
  let msg = ''

  switch (e.code) {
    case FileError.QUOTA_EXCEEDED_ERR:
      msg = 'QUOTA_EXCEEDED_ERR'
      break
    case FileError.NOT_FOUND_ERR:
      msg = 'NOT_FOUND_ERR'
      break
    case FileError.SECURITY_ERR:
      msg = 'SECURITY_ERR'
      break
    case FileError.INVALID_MODIFICATION_ERR:
      msg = 'INVALID_MODIFICATION_ERR'
      break;
    case FileError.INVALID_STATE_ERR:
      msg = 'INVALID_STATE_ERR'
      break
    default:
      msg = 'Unknown Error'
      break
  };

  console.log('Error: ' + msg);
}

function onInitFs(fs, blob) {
  fs.root.getFile('image.png', { create: true }, (fileEntry) => {
    // Create a FileWriter object for our FileEntry (log.txt).
    fileEntry.createWriter((fileWriter) => {

      fileWriter.onwriteend = (e) => {
        console.log('Write completed.');
      };

      fileWriter.onerror = (e) => {
        console.log(`Write failed: ${e.toString()}`);
      };

      fileWriter.write(blob);

    }, errorHandler);
  }, errorHandler);
}

window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem
export const saveAs = ({ blob, name }) => {
  window.requestFileSystem(window.TEMPORARY, 1024 * 1024, (fs) => onInitFs(fs, blob), errorHandler)
}
