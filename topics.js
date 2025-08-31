const topicsSection = document.createElement('section');
topicsSection.id = 'topics';
topicsSection.className = 'py-20 px-8';
topicsSection.innerHTML = `
  <div class="container">
    <h2 class="text-4xl font-bold text-center mb-12">更新情報</h2>
    <div class="space-y-4">
      <!-- 他の更新情報もここに追加 -->

      <a href="#schedule" class="block p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition">
        <p class="text-sm text-gray-500 mb-1">2025.09.04</p>
        <p class="text-lg font-semibold text-gray-800">事前講習会（Tri・I）の受付を締め切りました</p>
          <p class="text-lm  text-gray-800">たくさんの応募ありがとうございます</p>
          <p class="text-lm  text-gray-800">大会エントリーは引き続き受付中です</p>
      </a>

      <a href="#schedule" class="block p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition">
        <p class="text-sm text-gray-500 mb-1">2025.08.25</p>
        <p class="text-lg font-semibold text-gray-800">エントリー受付開始しました</p>
          <p class="text-lm  text-gray-800">９月17日（水）受付締切です</p>
      </a>

      <a href="#schedule" class="block p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <p class="text-sm text-gray-500 mb-1">2025.08.20</p>
          <p class="text-lg font-semibold text-gray-800">事前講習会（Tri・I）の受付を開始しました</p>
          <p class="text-lm  text-gray-800">９月３日（水）受付締切です</p>
      </a>
      
      <a href="#schedule" class="block p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <p class="text-sm text-gray-500 mb-1">2025.08.08</p>
          <p class="text-lg font-semibold text-gray-800">公式サイトを更新しました</p>
      </a>
      
      <a href="#schedule" class="block p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <p class="text-sm text-gray-500 mb-1">2025.07.08</p>
          <p class="text-lm font-semibold text-gray-800">第４回大会の開催が決まりました</p>
          <p class="text-lm  text-gray-800">11月９日（日）開催<br>８月25日（月）エントリー受付開始</p>
      </a>
      
    </div>
  </div>
`;
document.querySelector('main').insertBefore(topicsSection, document.querySelector('#overview'));
