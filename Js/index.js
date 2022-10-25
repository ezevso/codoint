const valorTicket=200
const descEstudiante=80
const descTrainee=50
const descJunior=15

function calcularTotal(){

    let cant = document.getElementById("cant").value;

    let categoria = document.getElementById("categoria").value;

    let total = 0;


      
    if(categoria ==1){
        total = cant * valorTicket * .2;
    }else if (categoria == 2){
        total = cant * valorTicket * .5;
    }else if (categoria == 3){
        total = cant * valorTicket * .85;
    }



    // switch(total) {
    // case "1":
    //    total = cant * valorTicket * .2;
    // break;
    // case "2":
    //      total = cant * valorTicket * .5;
    // break;
    // case "3":
    //     total = cant * valorTicket * .85;
    //  break;
    //   default:
    //       total = null;
    // }

    document.getElementById("total").innerHTML = `Total a pagar: $ ${total}`;
}