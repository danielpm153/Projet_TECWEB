var data = [
    {
        "Company": "Company",
        "Contact": "Contact",
        "Country": "Country"
    },
    {
        "Company": "Alfreds Futterkiste",
        "Contact": "Maria Anders",
        "Country": "Germany"
    },
    {
        "Company": "Centro comercial Moctezuma",
        "Contact": "Francisco Chang",
        "Country": "Mexico"
    },
    {
        "Company": "Ernst Handel",
        "Contact": "Roland Mendel",
        "Country": "Austria"
    },
    {
        "Company": "Island Trading",
        "Contact": "Helen Bennett",
        "Country": "UK"
    },
    {
        "Company": "Laughing Bacchus Winecellars",
        "Contact": "Yoshi Tannamuri",
        "Country": "Canada"
    },
    {
        "Company": "Magazzini Alimentari Riuniti",
        "Contact": "Giovanni Rovelli",
        "Country": "Italy"
    },
    {
        "Company": "Alfreds Futterkiste",
        "Contact": "Maria Anders",
        "Country": "Germany"
    },
    {
        "Company": "Centro comercial Moctezuma",
        "Contact": "Francisco Chang",
        "Country": "Mexico"
    },
    {
        "Company": "Ernst Handel",
        "Contact": "Roland Mendel",
        "Country": "Austria"
    },
    {
        "Company": "Island Trading",
        "Contact": "Helen Bennett",
        "Country": "UK"
    },
    {
        "Company": "Laughing Bacchus Winecellars",
        "Contact": "Yoshi Tannamuri",
        "Country": "Canada"
    },
    {
        "Company": "Magazzini Alimentari Riuniti",
        "Contact": "Giovanni Rovelli",
        "Country": "Italy"
    },
    {
        "Company": "Alfreds Futterkiste",
        "Contact": "Maria Anders",
        "Country": "Germany"
    },
    {
        "Company": "Centro comercial Moctezuma",
        "Contact": "Francisco Chang",
        "Country": "Mexico"
    },
    {
        "Company": "Ernst Handel",
        "Contact": "Roland Mendel",
        "Country": "Austria"
    },
    {
        "Company": "Island Trading",
        "Contact": "Helen Bennett",
        "Country": "UK"
    },
    {
        "Company": "Laughing Bacchus Winecellars",
        "Contact": "Yoshi Tannamuri",
        "Country": "Canada"
    },
    {
        "Company": "Magazzini Alimentari Riuniti",
        "Contact": "Giovanni Rovelli",
        "Country": "Italy"
    }
];

/*
$.ajax({
    type: "POST",
    url: '',
    dataType: 'json',
    async: false,
    success: function (data) {
        state = true;
        console.log(data);
    }
});
*/

function makeTable(data, identifier = 'tableGenerique', local = null) {
    var table = '';
    table += `<table id="` + identifier + `">
            <tbody>`;

    data.forEach(function (rows, index) {
        var noms = Object.keys(rows);
        table += `<tr>`;
        noms.forEach(function (nameRow) {
            if(index == 0){
                table += `<th>` + rows[nameRow] + `</th>`;
            }else{
                table += `<td>` + rows[nameRow] + `</td>`;
            }
        });
        table += `</tr>`;
    });

    table += `</tbody>
        </table>`;
    if (local == null) {
        document.body.innerHTML += table;
    } else {
        document.getElementById(local).innerHTML += table;
    }
    document.getElementById(identifier).classList.add("customers");
}

//makeTable(data, noms);