const sections  = document.querySelectorAll('section');
// console.log(sections);

for (const section of sections){
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = '10px';
    section.style.padding = '10px';
    section.style.borderRadius = '10px';
    section.style.backgroundColor = 'lightgray';

}

const placesContainer = document.getElementById('places-container');
// placesContainer.style.backgroundColor = 'lightblue';
// placesContainer.style.padding = '20px';
// placesContainer.style.borderRadius = '10px';
// placesContainer.style.marginBottom = '10px';
placesContainer.classList.add('okay');



const section = document.createElement('section');
// const h1 = document.createElement('h1');
// h1.innerText = 'New Section Added';
// section.appendChild(h1);

// mainContainer.appendChild(section);

section.innerHTML = `
    <h1>New Section Added</h1>
    <p>This is a new section added using JavaScript.</p>
`;

mainContainer.appendChild(section);