function formatPhoneNumber(input) {
    let cleaned = ('' + input.value).replace(/(?!^\+)\D/g, '');
    
    if (cleaned.startsWith('+')) {
        cleaned = cleaned.replace('+', '');
    }

    let match = cleaned.match(/^(\\d{0,3})(\\d{0,2})(\\d{0,3})(\\d{0,3})$/);
    if (match) {
        input.value = `+${match[1]} ${match[2]} ${match[3]} ${match[4]}`.trim();
    } else {
        input.value = cleaned; 
    }
}

function allowOnlyNumbers(event) {
    const char = String.fromCharCode(event.which);
    if (!/[0-9]/.test(char) && !(event.which === 43 && event.target.selectionStart === 0)) {
        event.preventDefault(); 
    }
}
