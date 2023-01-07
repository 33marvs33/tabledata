LGUDATA = JSON.parse(localStorage.getItem("lgu")) || [];
const formSubmit = document.querySelector("#form");
const firstName = document.querySelector(".firstname");
const lastName = document.querySelector(".lastname");
const address = document.querySelector(".address");
const price = document.querySelector(".price");
const advance = document.querySelector(".advance");
const tableDivs = document.querySelector(".tableDiv");
const findInput = document.querySelector('.search');
const findBtn = document.querySelector('.searchBtn');
const selector = document.getElementById('selector');

// add event listener when the dom is loaded
window.addEventListener("DOMContentLoaded", () => {
if(LGUDATA.length <= 0) {
    alert('no datas')
}else if(LGUDATA) {
    LGUDATA.forEach(data => {
        displayData(data)
    })
}
})

// add event listener to the form//
formSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  const balance = Number(price.value) - Number(advance.value);
  const paid = balance === 0 ? true : false;
    if(firstName.value,lastName.value,address.value,price.value,advance.value == "") {
        alert('input data')
        return
    }
      if (isNaN(price.value) || isNaN(advance.value)) {
        alert("enter a number");
        return;
      }
      if (price.value <= 0) {
        alert("price is zero");
        return;
      }
      if (Number(advance.value) > Number(price.value)) {
        alert("your advance is higher than your price");
        return;
      }
  const data = {
    id: new Date().getTime(),
    firstname: firstName.value.toUpperCase(),
    lastname: lastName.value.toUpperCase(),
    address: address.value.toUpperCase(),
    price: Number(price.value),
    advance: Number(advance.value),
    balance: balance,
    paid: paid,
  };
  LGUDATA.push(data);
  localStorage.setItem("lgu", JSON.stringify(LGUDATA));
  displayData();
});

// find event listener
findBtn.addEventListener('click', () => {
    const findValue = findInput.value.toUpperCase()
    const find = LGUDATA.filter(key => key.firstname == findValue)
    findInput.value = ""
    displayDatas2(find)
})

selector.addEventListener('change', (e) => {
    const completed = LGUDATA.filter(key => key.paid == true);
    const notcompleted = LGUDATA.filter(key => key.paid == false);
    if(e.target.value == 'all') {
        displayData()
    }
    if(e.target.value == 'paid') {
        displayDatas2(completed)
    }
    if(e.target.value == 'notpaid') {
        displayDatas2(notcompleted)
    }
})
// display data to the DOM//
function displayData() {
  tableDivs.innerHTML = "";
  LGUDATA.forEach((data, index) => {
    tableDivs.innerHTML += `
        <table>
        <tr id="table_row">
            <th class="${index}">${data.id}</th>
            <th class="firstname">${data.firstname}</th>
            <th class="lastname">${data.lastname}</th>
            <th class="address">${data.address}</th>
            <th class="price">${data.price}</th>
            <th class="advance">${data.advance}</th>
            <th class="balance">${data.balance}</th>
            <th class="isPaid">${data.paid}</th>
            <th ><button class="edit">EDIT</button></th>
            <th ><button class="update">UPDATE</button></th>
            <th ><button class="delete">DELETE</button></th>
        </tr>
    </table>
        `;
  });
  const allTableRow = document.querySelectorAll("#table_row");
  check(allTableRow)
  edit();
  update()
  deletes()
}
function displayDatas2(data) {
    tableDivs.innerHTML  = ""
    data.forEach((data, index) => {
      tableDivs.innerHTML += `
          <table>
          <tr id="table_row">
              <th class="${index}">${data.id}</th>
              <th class="firstname">${data.firstname}</th>
              <th class="lastname">${data.lastname}</th>
              <th class="address">${data.address}</th>
              <th class="price">${data.price}</th>
              <th class="advance">${data.advance}</th>
              <th class="balance">${data.balance}</th>
              <th class="isPaid">${data.paid}</th>
              <th ><button class="edit">EDIT</button></th>
              <th ><button class="update">UPDATE</button></th>
              <th ><button class="delete">DELETE</button></th>
          </tr>
      </table>
          `;
    });
    const allTableRow = document.querySelectorAll("#table_row");
    check(allTableRow)
    edit();
    const updateBtn = document.querySelectorAll('.update');
    updateBtn.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const newPrice = parseFloat(e.target.parentElement.parentNode.cells[4].innerHTML) 
            const newAdvance = parseFloat(e.target.parentElement.parentNode.cells[5].innerHTML)
            const targetId  = e.target.parentElement.parentNode.cells[0].innerHTML
            if(newPrice <= 0) {
                alert('price is zero')
                return
            }
            if(newAdvance < 0) {
                alert('advance is zero')
                return
            }
            if(newAdvance > newPrice) {
                alert('advance is higher than price')
                return
            }
          LGUDATA.forEach(data => {
                if(data.id == targetId) {
                    data.price = newPrice
                    data.advance = newAdvance
                    data.balance = data.price - data.advance;
                    data.paid = data.balance === 0 ? true : false
                }
            })
            localStorage.setItem('lgu', JSON.stringify(LGUDATA));
            // removing the displayData sothat when updating it will not trigger to display all data//
            displayData(LGUDATA)
        })

    })
    deletes()
  }
// checking if paid color change//
function check(tableRow) {
  tableRow.forEach((table) => {
    const checking = table.children[7];
    if (checking.innerHTML === "true") {
      table.setAttribute("class", "completed");
    } else {
      table.setAttribute("class", "notcompleted");
    }
  });
}
// edit event listener//
function edit() {
    const editBtn = document.querySelectorAll('.edit');
    editBtn.forEach(btn => {
      btn.addEventListener('click', (e) => {
          const priceTarget = e.target.parentElement.parentNode.cells[4];
          const advanceTarget = e.target.parentElement.parentNode.cells[5];
          priceTarget.setAttribute('contenteditable', 'true')
          advanceTarget.setAttribute('contenteditable', 'true')
      })
    })
}
// update event listner//
function update() {
    const updateBtn = document.querySelectorAll('.update');
    updateBtn.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const newPrice = parseFloat(e.target.parentElement.parentNode.cells[4].innerHTML) 
            const newAdvance = parseFloat(e.target.parentElement.parentNode.cells[5].innerHTML)
            const targetId  = e.target.parentElement.parentNode.cells[0].innerHTML
            if(newPrice <= 0) {
                alert('price is zero')
                return
            }
            if(newAdvance < 0) {
                alert('advance is zero')
                return
            }
            if(newAdvance > newPrice) {
                alert('advance is higher than price')
                return
            }
          LGUDATA.forEach(data => {
                if(data.id == targetId) {
                    data.price = newPrice
                    data.advance = newAdvance
                    data.balance = data.price - data.advance;
                    data.paid = data.balance === 0 ? true : false
                }
            })
            localStorage.setItem('lgu', JSON.stringify(LGUDATA));

            displayData(LGUDATA)
        })

    })
}
// delete event listener//
function deletes() {
    const deleteBtn = document.querySelectorAll('.delete');
    deleteBtn.forEach(deleteBtn => {
        deleteBtn.addEventListener('click', (e) => {
            e.target.parentElement.parentNode.remove()
            const targetId  =  parseFloat(e.target.parentElement.parentNode.cells[0].innerHTML);
            // asssignnig the filtered data to LGUDATA then put it to localStorage//
            LGUDATA = LGUDATA.filter(data => data.id !== targetId);
             localStorage.setItem('lgu', JSON.stringify(LGUDATA))
        })
       
    })
}