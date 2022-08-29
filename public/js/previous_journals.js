// Get previous journal entries for user
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
      list = `<div class="col-md-4 mb-2 text-center">
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

getJournalsForUser();