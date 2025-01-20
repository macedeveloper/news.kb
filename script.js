// Пример данных для новостей
const newsData = [
    {
        title: "Новость 1",
        content: "# Заголовок новости 1\nЭто **важная** новость.",
    },
    {
        title: "Новость 2",
        content: "## Подзаголовок новости 2\nЭта новость *очень интересная*.",
    },
    {
        title: "Новость 3",
        content: "### Подподзаголовок новости 3\nЭта новость содержит [ссылку](https://example.com).",
    },
];

// Функция для рендеринга новостей
function renderNews() {
    const newsList = document.getElementById('newsList');
    
    newsData.forEach((news) => {
        const newsItem = document.createElement('li');
        newsItem.classList.add('bg-gray-700', 'p-4', 'mb-4', 'rounded');
        
        const title = document.createElement('h3');
        title.classList.add('text-lg', 'font-bold', 'mb-2');
        title.textContent = news.title;
        
        const content = document.createElement('div');
        content.innerHTML = DOMPurify.sanitize(marked.parse(news.content));
        
        newsItem.appendChild(title);
        newsItem.appendChild(content);
        
        newsList.appendChild(newsItem);
    });
}

// Вызов функции рендеринга новостей
renderNews();
