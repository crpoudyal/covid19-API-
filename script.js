function fetch(){
    $.get("https://api.covid19api.com/summary"), 
    function (data){
        console.log(data);
        var tbl = document.getElementById('tbl');
        console.log(data['Countries'].length);
        for(var i =1;i<(data['Countries'].length);i++){
            var a = tbl.insertRow();
            a.insertCell(0);
            tbl.rows[i].cells[0].innerHTML = data['Countries'][i-1]['Country'];
            tbl.rows[i].cells[0].style.background = '#7a4';
            tbl.rows[i].cells[0].style.color = '#fff';

            a.insertCell(1);
            tbl.rows[i].cells[1].innerHTML = data['Countries'][i-1]['TotalConfirmed'];
            tbl.rows[i].cells[1].style.background = '#7a4a91';
            tbl.rows[i].cells[1].style.color = '#fff';
            
            a.insertCell(2);
            tbl.rows[i].cells[2].innerHTML = data['Countries'][i-1]['TotalRecovered'];
            tbl.rows[i].cells[2].style.background = '#0a4a91';
            tbl.rows[i].cells[2].style.color = '#fff';
            
            a.insertCell(3);
            tbl.rows[i].cells[3].innerHTML = data['Countries'][i-1]['NewRecovered'];
            tbl.rows[i].cells[3].style.background = '#008a91';
            tbl.rows[i].cells[3].style.color = '#fff';

            a.insertCell(4);
            tbl.rows[i].cells[4].innerHTML = data['Countries'][i-1]['TotalConfirmed'];
            tbl.rows[i].cells[4].style.background = '#7b1191';
            tbl.rows[i].cells[4].style.color = '#fff';

            a.insertCell(5);
            tbl.rows[i].cells[5].innerHTML = data['Countries'][i-1]['NewDeaths'];
            tbl.rows[i].cells[5].style.background = '#7a4a34';
            tbl.rows[i].cells[5].style.color = '#fff';
            
            a.insertCell(6);
            tbl.rows[i].cells[6].innerHTML = data['Countries'][i-1]['TotalDeaths'];
            tbl.rows[i].cells[6].style.background = '#3d1a91';
            tbl.rows[i].cells[6].style.color = '#fff';

            
        }
    });
}
