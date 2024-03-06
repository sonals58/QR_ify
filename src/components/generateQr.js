import React, { useState } from 'react';
import './generateQr.css';
function GenerateQr() {
  
    const [text,setText] = useState('');
    const [color,setColor] = useState('');
    const [bgcolor,setBgColor] = useState('');
    const[QR,setQR] = useState('');
    const format = useState('jpeg');

  function sizeLimitOn(){
    const box = document.getElementById("blur");
    box.style.display='block';
  }
  function sizeLimitOff(){
    const box = document.getElementById("blur");
    box.style.display='none';
  }
  function generateQrCode() {
    if(text==='') {
      sizeLimitOn();
    } else{
      setQR(`http://api.qrserver.com/v1/create-qr-code/?data=${text}&size=200x200&color=${color.slice(1)}&bgcolor=${bgcolor.slice(1)}&format=${format}`);
  }
    }
    

  function downloadImage() {
    const downloadLink = document.createElement('a');
    fetch(QR)
    .then(response => response.blob())
    .then(blob => {
      const objectUrl = URL.createObjectURL(blob);

      // Set the anchor element properties for download
      downloadLink.href = objectUrl;
      downloadLink.download = `qrCode.${format}`;
      document.body.appendChild(downloadLink);

      downloadLink.click();
    });
  }

  return (
    <div className='generateQr' id='generateQr'>
        <div className='inputSec'>
          <h1>Generate Qr Code</h1>
              <input type='text' placeholder='Enter the Text or Link' onChange={e => setText(e.target.value)} className='textarea'></input>
              <p>Select Color</p>
              <input type='color' onChange={e => setColor(e.target.value)} />
              <p>Select Background Color</p>
              <input type='color' onChange={e => setBgColor(e.target.value)} />
              <button onClick={generateQrCode}>Generate Qr</button>
        </div>
        <div className='outputSec'>
            <img src={QR} alt='QR DISPLAY'></img>
            <button onClick={downloadImage}>Download</button>
        </div>
        <div className='blur' id='blur'>
        <div className='alert'>
          <p>You have not entered anything in the textbox. <br/>Please enter the text.</p>
          <button onClick={sizeLimitOff}>Ok</button>
        </div>
        </div>
    </div>
  );
}

export default GenerateQr;
