import axios from 'axios';

export const getAuthor = async (authorId) => {
    // console.log(authorId, 'authorID')
    try {
        const res = await axios.get(`https://ejditq67mwuzeuwrlp5fs3egwu0yhkjz.lambda-url.us-east-2.on.aws/api/authors/${authorId}`, {
					headers: {
              'Content-Type': 'application/json'
          }
      });
      return res.data;
  } catch (error) {
      console.error(`Error retrieving author ${authorId}`);
  }
};

