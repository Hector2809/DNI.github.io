document.getElementById('dniForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const dniNumber = parseInt(document.getElementById('dniNumber').value);
    const dniLetter = document.getElementById('dniLetter').value.toUpperCase();
    const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    // Comprobación de número de DNI
    if (dniNumber < 0 || dniNumber > 99999999) {
        document.getElementById('result').textContent = 'Número de DNI no válido.';
        return;
    }

    // Cálculo de la letra del DNI
    const index = dniNumber % 23;
    const letraCalculada = letras[index];

    // Comparación de letras
    if (dniLetter !== letraCalculada) {
        document.getElementById('result').textContent = 'La letra indicada no es correcta.';
    } else {
        document.getElementById('result').textContent = 'Número y letra de DNI son correctos.';
    }
});