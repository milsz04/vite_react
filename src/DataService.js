const defaultArticles = [
    { id: 1, name: "Laptop", category: "Electronics", price: 999, description: "MacBook Air M2" },
    { id: 2, name: "Mug", category: "Kitchen", price: 15, description: "Górnik Zabrze Mug" },
    { id: 3, name: "Headphones", category: "Electronics", price: 199, description: "Sony WH-1000XM5" }
];

const defaultCategories = [
    { id: 1, name: "Electronics" },
    { id: 2, name: "Kitchen" },
    { id: 3, name: "Office" }
];

const getStoredData = (key, defaults) => {
    const data = localStorage.getItem(key);
    if (!data) {
        localStorage.setItem(key, JSON.stringify(defaults));
        return defaults;
    }
    return JSON.parse(data);
};

export const getArticles = () => {
    return Promise.resolve(getStoredData('articles', defaultArticles));
};

export const getArticleById = (id) => {
    const articles = getStoredData('articles', defaultArticles);
    const item = articles.find(a => a.id === parseInt(id));
    return Promise.resolve(item);
};

export const saveArticle = (article) => {
    let articles = getStoredData('articles', defaultArticles);

    if (article.id) {
        articles = articles.map(a => a.id === article.id ? article : a);
    } else {
        article.id = Date.now();
        articles.push(article);
    }

    localStorage.setItem('articles', JSON.stringify(articles));
    return Promise.resolve(true);
};

export const deleteArticle = (id) => {
    let articles = getStoredData('articles', defaultArticles);
    articles = articles.filter(a => a.id !== id);
    localStorage.setItem('articles', JSON.stringify(articles));
    return Promise.resolve(true);
};

export const getCategories = () => {
    return Promise.resolve(getStoredData('categories', defaultCategories));
};

export const getCategoryById = (id) => {
    const categories = getStoredData('categories', defaultCategories);
    const item = categories.find(c => c.id === parseInt(id));
    return Promise.resolve(item);
};

export const saveCategory = (category) => {
    let categories = getStoredData('categories', defaultCategories);

    if (category.id) {
        categories = categories.map(c => c.id === category.id ? category : c);
    } else {
        category.id = Date.now();
        categories.push(category);
    }

    localStorage.setItem('categories', JSON.stringify(categories));
    return Promise.resolve(true);
};

export const deleteCategory = (id) => {
    let categories = getStoredData('categories', defaultCategories);
    categories = categories.filter(c => c.id !== id);
    localStorage.setItem('categories', JSON.stringify(categories));
    return Promise.resolve(true);
};