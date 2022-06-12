var filmovi = [
    {
        odgledan: false,
        naziv: "The Gentleman",
        godina: 2019,
        drzava: "England",
        napomena: "IMDb rating 7.8/10",
        glumci: ["Matthew McConaughey","Charlie Hunnam","Colin Farrell"]
    },
    {
        odgledan: false,
        naziv: "Siberia",
        godina: 2019,
        drzava: "Siberia",
        napomena: "IMDb rating 4.8/10",
        glumci: ["Willem Dafoe","Simon McBurney"]
    },
    {
        odgledan: false,
        naziv: "Legend",
        godina: 2015,
        drzava: "Engleska",
        napomena: "IMDb rating 6.9/10",
        glumci: ["Tom Hardy"]
    }

]


function prikaziTabelu(){

    let tableHTML = '';
    let filmovi_table_body = document.getElementById("filmovi_table_body");

    filmovi.forEach( (film, filmIndex) => {

        tableHTML += `<tr id='film${filmIndex}'`
        if(film.odgledan){tableHTML+='class="table-success">'}
        else{tableHTML+='class="table-danger">'} 
        tableHTML+=`
        <td><input type="checkbox" id="checkbox${filmIndex}"></td>
        <td>${film.naziv}</td>
        <td>${film.godina}</td>
        <td>${film.drzava}</td>
        <td>${film.napomena}</td>
        <td>${film.glumci}</td>
        </tr>`;

        
    });
    filmovi_table_body.innerHTML = tableHTML;
    provjeriCheckbox();

}
function provjeriCheckbox(){
    filmovi.forEach( (film, filmIndex) => {
        let checkbox = document.getElementById(`checkbox${filmIndex}`);
        checkbox.addEventListener('change', e => {
        
            if(e.target.checked){
                film.odgledan = true;
                document.getElementById(`film${filmIndex}`).classList.remove("table-danger")
                document.getElementById(`film${filmIndex}`).classList.add("table-success")
            }
            else{
                film.odgledan = false;
                document.getElementById(`film${filmIndex}`).classList.remove("table-success")
                document.getElementById(`film${filmIndex}`).classList.add("table-danger")
            }
        
        });
    
    })
}

function dodajFilm(){


    filmovi.push(
        {
            odgledan: false,
            naziv: document.getElementById("nazivInput").value,
            godina: document.getElementById("godinaInput").value,
            drzava: document.getElementById("drzavaInput").value,
            napomena: document.getElementById("napomenaInput").value,
            glumci: document.getElementById("glumciInput").value.split(",")
        }
    )
    prikaziTabelu();
}

prikaziTabelu();


