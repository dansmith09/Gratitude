// Post new journal entries
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
// Get previous journal entries for user
const getJournalsForUser = (event) => {
    event.preventDefault;
    document.location.replace('/journal/user');
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

