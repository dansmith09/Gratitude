const createJournal = async () => {
    const entry1 = document.querySelector('#entry1').value.trim();
    const entry2 = document.querySelector('#entry2').value.trim();
    const entry3 = document.querySelector('#entry3').value.trim();
    const entry4 = document.querySelector('#entry4').value.trim();

    if (entry1 && entry2 && entry3 && entry4) {
        const response = await fetch('/api/journal', {
            method: 'POST',
            body: JSON.stringify({
                gratitude_entry_1: entry1,
                gratitude_entry_2: entry2,
                gratitude_entry_3: entry3,
                journal_entry: entry4,
            }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            alert('Journal is created');
            document.location.replace('/journals/user');
        } else {
            alert(response.statusText);
        }
    }
};

const getJournalsForUser = async () => {
    const userJournalList = document.querySelector('.journal_list')
    const response = await fetch('/api/journal/user', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data)
      let html = ''
      data.forEach(element => {
        list = `<div class="col-md-4 mb-2">
        <ul class="list-group list-group-flush">
        <li class="list-group-item">${element.gratitude_entry_1}</li>
        <li class="list-group-item">${element.gratitude_entry_2}</li>
        <li class="list-group-item">${element.gratitude_entry_3}</li>
      </ul>
      </div>`
      html=html + list
      });
      userJournalList.innerHTML = html

    } else {
        alert(response.statusText);
    }
};
getJournalsForUser()
 
// create_journal_btn
document.querySelector('#signupBtn')?.addEventListener('click', createJournal);

document
.querySelector('#create_journal_btn')
.addEventListener('click', createJournal);

