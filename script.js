async function sendRequest() {
    const birthdate = document.getElementById('birthdate').value;
    const birthtime = document.getElementById('birthtime').value;
    const birthplace = document.getElementById('birthplace').value;
    const analysisType = document.getElementById('analysisType').value;

    const resultElement = document.getElementById('result');
    resultElement.style.display = 'none'; // Скрываем предыдущий результат

    try {
        const response = await fetch('http://192.168.1.15:5000/api/analysis', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ birthdate, birthtime, birthplace, analysisType }),
        });

        const data = await response.json();
        resultElement.innerHTML = `<h2>Результат:</h2><p>${data.result}</p>`;
        resultElement.style.display = 'block'; // Показываем результат
        resultElement.classList.add('fade-in'); // Анимация появления
    } catch (error) {
        resultElement.innerHTML = `<p style="color: red;">Произошла ошибка. Попробуйте снова.</p>`;
        resultElement.style.display = 'block';
    }
}
