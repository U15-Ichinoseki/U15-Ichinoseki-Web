function topicItemHTML(topic, extraClass = '') {
  return `
    <a href="${topic.link}" class="block p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 bg-white mb-2 ${extraClass}">
      <p class="text-sm text-gray-500 mb-1">${topic.date}</p>
      <p class="text-lm font-semibold text-gray-800">${topic.title}</p>
      <p class="text-lm text-gray-800 pl-4 text-base whitespace-pre-nowrap md:whitespace-pre-line">${topic.description}</p>
    </a>
  `;
}

fetch('./topics.json')
  .then(response => response.json())
  .then(topics => {
    topics.sort((a, b) => {
      const dateA = new Date(a.date.replace(/\./g, '-'));
      const dateB = new Date(b.date.replace(/\./g, '-'));
      return dateB - dateA;
    });
    const visibleCount = 3;
    const recentTopics = topics.slice(0, visibleCount);

    const topicsSection = document.createElement('section');
    topicsSection.id = 'topics';
    topicsSection.className = 'py-20 px-8';

    const visibleItemsHTML = recentTopics.map(topic => topicItemHTML(topic)).join('');

    topicsSection.innerHTML = `
      <div class="container">
        <h2 class="text-4xl font-bold text-center mb-12">トピックス</h2>
        <div class="space-y-4">
          ${visibleItemsHTML}
          <button id="showAllBtn" class="mt-6 mx-auto block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">トピックス一覧</button>
        </div>
      </div>
    `;

    document.querySelector('main').insertBefore(topicsSection, document.querySelector('#overview'));

    document.getElementById('showAllBtn').addEventListener('click', () => {
      showAllTopicsModal(topics);
    });
  })
  .catch(error => {
    console.error('トピックス情報の読み込みに失敗しました:', error);
  });

function showAllTopicsModal(topics) {
  const modal = document.createElement('div');
  modal.id = 'topicsModal';
  modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';

  const allItemsHTML = topics.map(topic => topicItemHTML(topic)).join('');

  modal.innerHTML = `
    <div class="bg-white p-8 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto relative">
      <h3 class="text-2xl font-bold mb-4">トピックス</h3>
      <div class="space-y-4">
        ${allItemsHTML}
      </div>
      <button id="closeModalBtn" class="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl">&times;</button>
    </div>
  `;

  document.body.appendChild(modal);

  document.getElementById('closeModalBtn').addEventListener('click', () => {
    modal.remove();
  });
}