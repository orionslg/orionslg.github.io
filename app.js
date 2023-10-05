


function hitungTarif()
{
    const origin = +document.getElementById("originOption").value;
    const destination = +document.getElementById("destinationOption").value;
    console.log(origin);
    console.log(destination);
    
    
    let tarif = 0;
    if (origin === 1 && destination === 13 || (destination === 1 && origin === 13) )
    {
        tarif = 14000;
    }
    else if (Math.abs(destination - origin) === 1)
    {
        tarif = 3000;
    }
    else if (origin === 12)
    {
        tarif = Math.abs(destination - origin) * 1000 + 4000;
        if (tarif > 14000)
        {
            tarif = 14000;
        }
    }
    else
    {
        tarif = Math.abs(destination - origin) * 1000 + 3000 - 1000;
    }
    
    document.getElementById("result").innerHTML = `Tarif: Rp. ${tarif}`;
}

