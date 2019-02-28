arr_obj = [];
function add() {


    var seconddiv = document.createElement('div');
    seconddiv.setAttribute('id', 'div_id');


    var date = document.createElement('input');
    date.setAttribute('type', 'date');
    date.setAttribute('id', 'date');
    seconddiv.appendChild(date);


    var descript = document.createElement('input');
    descript.setAttribute('id', 'descript');
    seconddiv.appendChild(descript);


    var deletebtn = document.createElement('button');
    var btn_text2 = document.createTextNode("Remove");
    deletebtn.appendChild(btn_text2);
    deletebtn.setAttribute('id', 'deletebtn');



    var addbtn = document.createElement('button');
    var btn_text1 = document.createTextNode("Add to the list");
    addbtn.appendChild(btn_text1);
    addbtn.setAttribute('id', 'addbtn');
    addbtn.setAttribute('onClick', 'addItem()');



    seconddiv.appendChild(deletebtn);
    seconddiv.appendChild(addbtn);
    document.body.appendChild(seconddiv);

    document.getElementById("deletebtn").addEventListener('click', function (event) {
        var rem = document.getElementById("div_id");
        rem.style.display = 'none';
    });

}


function addItem() {
    arr_obj.push({ "date": document.getElementById('date').value, "discription": document.getElementById('descript').value });
    
    let previousTable = document.getElementById('table1');
    if (!!previousTable) {
        previousTable.remove();
    }
    
    var table = document.createElement('table');
    table.border = "1";
    var header = Object.keys(arr_obj[0]);
    var tr = document.createElement('tr');
    for (var index = 0; index < header.length; index++) {
        var th = document.createElement('th');
        th.innerHTML = header[index];
        tr.appendChild(th);
    }
    table.appendChild(tr);



    for (let index = 0; index < arr_obj.length; index++) {
        var tr = document.createElement('tr');
        tr.setAttribute('id', 'row');
        for (let count = 0; count < header.length; count++) {
            var td = document.createElement('td');
            td.innerHTML = arr_obj[index][header[count]];
            tr.appendChild(td);



        }
        var delete_this = document.createElement('button');
        var btn_text3 = document.createTextNode("Remove");
        delete_this.appendChild(btn_text3);
        delete_this.setAttribute('id', 'delete_this')
        tr.appendChild(delete_this);
        table.appendChild(tr);
    }



    document.body.appendChild(table);
    document.getElementById("delete_this").addEventListener('click', function (event) {
        var rows = document.getElementById("row");
        rows.remove();
    });


}


