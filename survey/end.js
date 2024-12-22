document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('message', (event) => {
        const message = event.data;
        var result = document.getElementById('result')
        if (message.status === "true"){
            result.classList.remove('red-font')
            result.classList.add('green-font')
            result.classList.add('fade-out')
            setTimeout(() => {
                result.innerHTML = `<h3>感謝您的參與，實驗結果已上傳完畢，直接關閉網頁即可</h3>`;
                result.classList.remove('fade-out')
            }, 500);
        }
        else if (message.status === "false"){
            console.log("false")
            result.classList.add('fade-out')
            setTimeout(() => {
                result.innerHTML = `<h3>實驗上傳失敗，請盡速聯絡實驗者，請將實驗結果下載到您的電腦上</h3>
                <button id="download-btn" class="reset-btn">下載實驗數據</button>`;
                result.classList.remove('fade-out')

            }, 500);
        }
    })
});
