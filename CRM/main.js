
    window.onload = function() {
        const customers = JSON.parse(localStorage.getItem('customers')) || [];
        const tableBody = document.querySelector('table tbody');

        customers.forEach((customer, index) => {
            const newRow = document.createElement('tr');

            const idCell = document.createElement('td');
            idCell.textContent = index + 3; 

            const nameCell = document.createElement('td');
            nameCell.textContent = customer.name; 

            const phoneCell = document.createElement('td');
            phoneCell.textContent = customer.phone; 

            newRow.appendChild(idCell);
            newRow.appendChild(nameCell);
            newRow.appendChild(phoneCell);
            tableBody.appendChild(newRow);
        });
    };

    document.getElementById('customerForm').addEventListener('submit', function(event) {
        event.preventDefault(); 

        const name = document.getElementById('name').value; 
        const phone = document.getElementById('phone').value; 

       
        const customers = JSON.parse(localStorage.getItem('customers')) || [];
        customers.push({ name, phone });
        localStorage.setItem('customers', JSON.stringify(customers));

        
        const tableBody = document.querySelector('table tbody');
        const newRow = document.createElement('tr');

        const idCell = document.createElement('td');
        idCell.textContent = customers.length + 2; 

        const nameCell = document.createElement('td');
        nameCell.textContent = name; 

        const phoneCell = document.createElement('td');
        phoneCell.textContent = phone; 

        newRow.appendChild(idCell);
        newRow.appendChild(nameCell);
        newRow.appendChild(phoneCell);
        tableBody.appendChild(newRow);

       
        document.getElementById('customerForm').reset();

       
        alert(`Yeni müştəri əlavə olundu: ${name}, Telefon: ${phone}`);
    });

