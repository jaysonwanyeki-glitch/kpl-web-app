import React from 'react';

function NewsGrid({ news }) {
    return (
        <section className="news-section card">
            <h2>Latest News</h2>
            <div className="news-grid">
                {news.map(article => (
                    <div key={article.id} className="news-card">
                        {article.imageUrl && <img src={article.imageUrl} alt={article.title} />}
                        <div className="news-card-content">
                            <h3>{article.title}</h3>
                            <p className="news-meta">By {article.author} | {new Date(article.date).toLocaleDateString()}</p>
                            <p className="news-summary">{article.summary}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default NewsGrid;
