const contenedorQR = document.getElementById('contenedorQR');
const formulario = document.getElementById('formulario');

const QR = new QRCode(contenedorQR);
QR.makeCode('https://fast-buy-production.up.railway.app/');
