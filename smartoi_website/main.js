
function toggleState() {
    var bulb = document.getElementById('bulb');
    if (bulb.src.includes('pictures/bulb-off.png')) {
        bulb.src = 'pictures/bulb-on.png';
    } else {
        bulb.src = 'pictures/bulb-off.png';
    }
}

function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}




