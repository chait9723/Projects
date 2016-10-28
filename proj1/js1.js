function dor() {
    var z = document.getElementsByTagName('span');
    var a = document.getElementsByTagName('input');
    var d = 0.0;

    for (var i = 0; i < z.length; i++) {
        var x = ((z[i].innerText || z[i].textContent).substr(0, 4));
        var m = (a[i].value);
        if (m > 0)
            d += (x * m);


    }

    document.getElementById('total').innerText = "Total=" + d.toFixed(2) + "$";
}