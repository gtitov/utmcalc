const calculateBtn = document.querySelector("ion-button")
const longitude = document.querySelector("ion-input")
const zone = document.getElementById("zone")
const center = document.getElementById("center")

const calculateZone = () => {
    const longitudeValue = longitude.value
    if(longitudeValue && longitudeValue >= -180 && longitudeValue <= 180) {
        // console.log(longitudeValue)
        // console.log(Boolean(longitudeValue))
        const zoneValue = parseInt(31 + (longitudeValue / 6))
        const centerValue = (zoneValue - 30) * 6 - 3
        zone.innerText = zoneValue
        center.innerText = centerValue + "°"
        return [zoneValue, centerValue]
    } else {
        zone.innerText = ""
        center.innerText = ""
        presentAlertMultipleButtons()
    }
}

function presentAlertMultipleButtons() {
    const alert = document.createElement('ion-alert');
    alert.header = 'Не получилось :с';
    alert.message = 'Введите значение от -180 до 180';
    alert.buttons = ['Ок'];
  
    document.body.appendChild(alert);
    return alert.present();
  }
  

calculateBtn.addEventListener("click", calculateZone)