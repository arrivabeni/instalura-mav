import React from 'react';
import FAQScreen from '../../src/components/screens/FAQScreen';

export default function FAQPage(props) {
  // const [faqCategories, setFaqCategories] = React.useState([]);

  // Esta é a forma que o REACT faz normalmente
  // React.useEffect(() => {
  //   fetch('https://instalura-api.vercel.app/api/content/faq').then(async (res) => {
  //     const response = await res.json();
  //     return response.data;
  //   })
  //     .then((faqCategoriesFromServer) => {
  //       setFaqCategories(faqCategoriesFromServer);
  //     });
  // });

  // const props = {
  //   faqCategories,
  // };

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FAQScreen {...props} />
  );
}

export async function getStaticProps() {
  const faqCategories = await fetch('https://instalura-api.vercel.app/api/content/faq').then(async (res) => {
    const response = await res.json();
    return response.data;
  });

  return {
    props: {
      faqCategories,
    },
  };
}