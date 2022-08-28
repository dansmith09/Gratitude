const createJournal = async () => {
  const entry1 = document.querySelector('#gratitude_entry_1').value;
  const entry2 = document.querySelector('#gratitude_entry_2').value;
  const entry3 = document.querySelector('#gratitude_entry_3').value;
  const journal_entry = document.querySelector('#journal_entry').value;
 
    console.log(entry1, entry2, entry3, journal_entry);

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
          alert('Journal is created');
      } else {
          alert(response.statusText);
      }
  }
};
// create_journal_btn
document
.querySelector('#create_journal_btn')
.addEventListener('click', createJournal);