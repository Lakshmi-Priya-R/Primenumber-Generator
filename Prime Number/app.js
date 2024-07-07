function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}

function generatePrimes() {
    const limit = parseInt(document.getElementById('limit').value);
    const primes = [];

    if (isNaN(limit) || limit < 2) {
        document.getElementById('result').innerText = "Please enter a valid number greater than 1.";
        return;
    }

    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    if (primes.length > 0) {
        document.getElementById('result').innerText = `Prime numbers up to ${limit} are: ${primes.join(', ')}.`;
    } else {
        document.getElementById('result').innerText = "No prime numbers found.";
    }
}
