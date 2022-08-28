const createJournal = async () => {
  let entry1 = document.querySelector('#gratitude_entry_1').value;
  let entry2 = document.querySelector('#gratitude_entry_2').value;
  let entry3 = document.querySelector('#gratitude_entry_3').value;
  let journal_entry = document.querySelector('#journal_entry').value;
 
  if (entry1 && entry2 && entry3 && journal_entry) {
      const response = await fetch('/api/journal', {
          method: 'POST',
          body: JSON.stringify(
              {
                gratitude_entry_1: entry1,
                gratitude_entry_2: entry2,
                gratitude_entry_3: entry3,
                journal_entry: journal_entry
            }),
          headers: { 'Content-Type': 'application/json'},
      });
      if (response.ok) {
        showSuccess();
        document.querySelector('#gratitude_entry_1').value = '';
        document.querySelector('#gratitude_entry_2').value = '';
        document.querySelector('#gratitude_entry_3').value = '';
        document.querySelector('#journal_entry').value = '';
      } else {
        alert(response.statusText);
      }
  }
};

const showSuccess = () => {
    const successAlert = document.getElementById('journalSuccess');
    successAlert.style.display = 'block';
}
// create_journal_btn
document
.querySelector('#create_journal_btn')
.addEventListener('click', createJournal);