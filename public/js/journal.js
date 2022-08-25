const createJournal = async () => {
  const entry1 = document.querySelector('#entry1').value.trim();
  const entry2 = document.querySelector('#entry2').value.trim();
  const entry3 = document.querySelector('#entry3').value.trim();

 
  if (entry1 && entry2 && entry3) {
      const response = await fetch('/api/journal', {
          method: 'POST',
          body: JSON.stringify({ gratitude_entry_1:entry1, gratitude_entry_2:entry2, gratitude_entry_3:entry3 }),
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
