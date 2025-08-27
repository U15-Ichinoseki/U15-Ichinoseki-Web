const topicsSection = document.createElement('section');
topicsSection.id = 'topics';
topicsSection.className = 'py-20 px-8';
topicsSection.innerHTML = `
  <div class="container">
    <h2 class="text-4xl font-bold text-center mb-12">更新情報</h2>
    <div class="space-y-4">
      <a href="#schedule" class="block p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition">
        <p class="text-sm text-gray-500 mb-1">2025.08.25</p>
        <p class="text-lg font-semibold text-gray-800">エントリー受付開始しました</p>
      </a>
      <!-- 他の更新情報もここに追加 -->
    </div>
  </div>
`;
document.querySelector('main').insertBefore(topicsSection, document.querySelector('#overview'));
