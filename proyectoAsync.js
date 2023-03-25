async function getCatImage(url)
{
    try
    {
        const response = await fetch(url);
        if(response.status === 404)
        {
            console.log("No pude generar un gatito")
        }
        console.log("Generando un gatito");
        const blob = await response.blob();
        const imagenGato = document.getElementById("cat-place");
        imagenGato.src = URL.createObjectURL(blob); 
    }
    catch(error)
    {
        console.log(error);
    }
    finally
    {
        console.log("Termine de ejecutar el codigo");
    }
}

function callCat()
    {
        getCatImage('https://cataas.com/cat/sleepy')
    }