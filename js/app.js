
const setData = () => {
    const taskName = document.getElementById('task-name').value;
    const deadline = document.getElementById('deadline').value;
    if(taskName !=='' && deadline!==''){
        localStorage.setItem(taskName, deadline);
        window.location.reload();
    }else{
        document.getElementById('warn').classList.remove('d-none');
    }
    
}


const displayData = () => {

    const tableBody = document.getElementById('table-body');

    // Iterate through each key in localStorage
    for (let i = 0; i < localStorage.length; i++) {
        // Get the key at index i
        console.log(i);
        const key = localStorage.key(i);
        // Retrieve the value associated with the key
        const value = localStorage.getItem(key);
        const tableRow = document.createElement('tr');
        tableRow.innerHTML = `
        <td>${key}</td>
        <td>${value}</td>
        <td><button onclick="deleteData('${key}')" id="btn-delete-item">Complete</button></td>
        `;
        tableBody.appendChild(tableRow);
    }
}

const deleteData = (key) =>{
    const keyToDelete = key;
console.log(keyToDelete)
// Remove the item from localStorage using the specified key
localStorage.removeItem(keyToDelete);
window.location.reload();
}

displayData();

