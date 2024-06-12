import axios from 'axios';

export const searchBook = async (title) => {
    console.log(title, 'search book title')
	try {
        const res = await axios.post('https://ejditq67mwuzeuwrlp5fs3egwu0yhkjz.lambda-url.us-east-2.on.aws/api/books/search', {
            title: title
    }, {
          headers: {
              'Content-Type': 'application/json'
          }
      });

    //   console.log(res, 'response')
    return res.data;
      

  } catch (error) {
      console.error('Book Not Found');
  }
};