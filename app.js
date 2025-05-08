
const form = document.getElementById('factForm');
const input = document.getElementById('factInput');
const list = document.getElementById('factsList');

const loadFacts = async () => {
  const res = await fetch('https://the-abyss-backend.up.railway.app/facts');
  const facts = await res.json();
  list.innerHTML = facts.map(fact => (
    `<div class="bg-gray-800 p-3 rounded">${fact.text}</div>`
  )).join('');
};

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const text = input.value;
  await fetch('https://the-abyss-backend.up.railway.app/facts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text })
  });
  input.value = '';
  loadFacts();
});

loadFacts();
