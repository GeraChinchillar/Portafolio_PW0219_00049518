var parseLateSwitch = (value)=>{
   if( value)
    return"tarde :("
    else
     return"A tiempo :)"
}

function addRow(carnet, schedule, late, tBody){
    var newRow = document.createElement("tr");
    var date = new Date();
     newRow.innerHTML = `
        <td><b>${carnet}</b></td>
        <td><b>${schedule}</b></td>
        <td><b>${date.toLocaleString()}</b></td>
        <td><b>${late}</b></td>`

    tBody.appendChild(newRow);
}

window.onload = function()
{
    var submit_btn = document.querySelector("#submit_btn");
    var carnet_field = document.querySelector("#carnet_field");
    var schedule_field = document.querySelector("#schedule_field");
    var late_switch = document.querySelector("#late_switch");
    var tBody = document.querySelector("#table_body");

    var carnetRegex = new RegExp('[0-9]{8}');

    console.log(submit_btn)

    submit_btn.addEventListener("click", ()=>{
        var carnet = carnet_field.value;
        var schedule = schedule_field.options[schedule_field.selectedIndex].text;
        var late = parseLateSwitch(late_switch.checked);
        if(carnetRegex.test(carnet)){
            addRow(carnet, schedule, late, tBody);
        }
        else{
            alert("Formato No valido");
        }
        
        console.log(carnet);
        console.log(schedule);
        console.log(late);


    });

    carnet_field.addEventListener("keyup", (event)=>{
        var carnet = carnet_field.value;
        // console.log(event.keyCode);
        if(carnetRegex.test(carnet)){
            console.log("pasa el test");
            submit_btn.disabled = false;
        }
        else{
            console.log("la deje");
            submit_btn.disabled = true;
        }
    });

}