const createJournal = async () => {
    const entry1 = document.querySelector('#entry1').value;
    const entry2 = document.querySelector('#entry2').value;
    const entry3 = document.querySelector('#entry3').value;
    const entry4 = document.querySelector('#entry4').value;

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
            showSuccess();
            document.querySelector('#entry1').value = '';
            document.querySelector('#entry2').value = '';
            document.querySelector('#entry3').value = '';
            document.querySelector('#entry4').value = '';
          } else {
            alert(response.statusText)};
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
        <li class="list-group-item">${element.journal_entry}</li>
      </ul>
      </div>`
      html=html + list
      });
      userJournalList.innerHTML = html

    } else {
        alert(response.statusText);
    }
};

const showSuccess = () => {
    const successAlert = document.getElementById('journalSuccess');
    successAlert.style.display = 'block';
}

// Previous journal entries
document.querySelector('#access_journal_btn').addEventListener('click', getJournalsForUser);

document
.querySelector('#create_journal_btn')
.addEventListener('click', createJournal);

