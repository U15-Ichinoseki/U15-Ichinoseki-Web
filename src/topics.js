fetch('./topics.json')
  .then(response => response.json())
  .then(topics => {
    // 日付で降順ソート（新しい順）
    // topics.sort((a, b) => new Date(b.date) - new Date(a.date));
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

    let visibleItemsHTML = '';
    recentTopics.forEach(topic => {
      visibleItemsHTML += `
        <a href="${topic.link}" class="block p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <p class="text-sm text-gray-500 mb-1">${topic.date}</p>
          <p class="text-lm font-semibold text-gray-800">${topic.title}</p>
          <p class="text-lm text-gray-800 pl-4">${topic.description}</p>
        </a>
      `;
    });

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
      showAllTopicsModal(topics); // ← 全件表示にはソート済みの topics を使う
    });
  })
  .catch(error => {
    console.error('トピックス情報の読み込みに失敗しました:', error);
  });

function showAllTopicsModal(topics) {
  const modal = document.createElement('div');
  modal.id = 'topicsModal';
  modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';

  let allItemsHTML = '';
  topics.forEach(topic => {
    allItemsHTML += `
      <a href="${topic.link}" class="block p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 bg-white mb-2">
        <p class="text-sm text-gray-500 mb-1">${topic.date}</p>
        <p class="text-lm font-semibold text-gray-800">${topic.title}</p>
        <p class="text-lm text-gray-800  pl-4">${topic.description}</p>
      </a>
    `;
  });

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