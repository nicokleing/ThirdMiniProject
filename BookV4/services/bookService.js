const axios = require('axios');

const fetchBooks = async (topic) => {
  const response = await axios.get(`https://gutendex.com/books/?topic=${topic}`);
  return response.data.results.map(book => ({
    id: book.id,
    title: book.title,
    authors: book.authors.map(author => ({
      name: author.name,
      birth_year: author.birth_year,
      death_year: author.death_year,
    })),
    subjects: book.subjects,
    languages: book.languages,
    media_type: book.media_type,
    formats: book.formats,
    download_count: book.download_count,
  }));
};

module.exports = { fetchBooks };
