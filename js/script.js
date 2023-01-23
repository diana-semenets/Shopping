function showDate () {
    let now = new Date();
  
    let span = document.querySelector(".news__cards-data");
  
        let date = now.getDate();  
        let year = now.getYear();              
        let months = ["01","02","03","04","05","06","07","08","09","10","11","12"];
        let month = months[now.getMonth()];
     
    span.innerHTML = `${date}.${month}.${year} `;     
}




showDate()

