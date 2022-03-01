//  declaration of variables 
const projectForm = document.querySelector('#add-new-project-form'); // getting the content of the project form through add-new-project-form id of the add-project.html

// saving data(projects) from the dashboard  to the firebase database
projectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('projects').add({
        title: projectForm.title.value,
        summary: projectForm.summary.value,
        link: projectForm.link.value
    });
    projectForm.title.value = '';
    projectForm.summary.value = '';
    projectForm.link.value = '';
    alert("The project was created");
});