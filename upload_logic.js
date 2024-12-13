var url = ""
var url_base64 = "aHR0cHM6Ly9zY3JpcHQuZ29vZ2xlLmNvbS9tYWNyb3Mvcy9BS2Z5Y2J5N0tHWFdkVHBWYUJyUUJuamtVaE9KYURaekdKbDFyRzNEbjJGSTdDZEVUZWxnSDRTN0pqS2MtbzZXNzRFSFdlWjgvZXhlYw=="

//====================================================convert===================================================
url = atob(url_base64) // windows defender可能會因為明碼網址而阻止此檔案下載
console.log(url)
// ==========================================upload json file to google sheet====================================
// POST到google sheet邏輯 
// json和array都可用
// 一維解開而已 不會解到裡面
function upload_to_gs(upload_part, upload_data){ // json
    upload_data.part = upload_part;
    // 將資料發送到 Google Sheets
    fetch(url, {
      redirect: "follow",
      method: 'POST',
      body: JSON.stringify(upload_data), // 將資料轉換成 JSON 格式
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      }
    })
      .then(response => response.text())
      .then(data => {
        if (data === "Success") {
          console.log("上傳成功"); // 改為輸出中文訊息
          // return true; // successful
        } 
        
        else {
          alert("上傳時伺服器回應錯誤，請停止實驗並將此訊息截圖告知實驗者")
          console.warn("伺服器回應錯誤", data);
          // return false; // failed
        }
      })
      .catch(error => {
        console.error('Error:', error)
        // return false; // failed
      });
}

// ==========================================download============================================================
/*function detect_download_event(){
  function detectCtrlS(event) {
    if (event.ctrlKey && event.key === 's') {
        console.log('偵測到 Ctrl+S！');
        window.parent.postMessage(
          {
              action: "save_file_detect",
              payload: ""
          },
          '*'
      );
    }
  }
  window.addEventListener('keydown', detectCtrlS);
}
detect_download_event()*/
// =====================================no right click event====================================================
function detect_right_click_event(){
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();  // 阻止右鍵菜單顯示
  })
}
detect_right_click_event()