import React from 'react';
import './FileAttach.css'

const FileAttach = (props) => {

  return (
    <input className={`${className} file-attach`}
    type="file"
    />


  );
};

export default FileAttach;