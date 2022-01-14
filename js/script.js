var departamento_guatemala = ["Amatitlán","Mixco","Chinautla","Chuarrancho","Fraijanes","Palencia","San José del Golfo","San José Pinula","San Juan Sacatepéquez","San Miguel Petapa","San Pedro Ayampuc","San Pedro Sacatepéquez","San Raymundo","Santa Catarina Pinula","Villa Nueva","Villa Canales"];

function cambiar_departamento(){
    var dpt
    dpt = document.getElementById("departamentos").value

    if (dpt=0){
        municipios = eval("departamentos"+dpt)
        alert(municipios)
        num_municipios = mis_municipios.length
        
       for (i=0;i<num_municipios;i++){
        document.f1.municipio.options[i].value=municipios[i]
        document.f1.municipio.options[i].text=municipios[dpt]
       }
    }
    else {
        document.f1.municipio.length = 1
        document.f1.municipio.options[0].value = "0"
        document.f1.municipio.options[0].text = "Seleccionar municipio..."

    }
}