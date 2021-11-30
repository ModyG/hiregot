export const INITIAL_STATE = {
  sections: [
    {
      title: 'Men',
      imageUrl: "https://i.ibb.co/DzbrKrD/1.jpg",
      id: 1,
      linkUrl: 'shop/men'
    },
    {
      title: 'women',
      imageUrl: "https://i.ibb.co/KmbJhLV/2.jpg",
      id: 2,
      linkUrl: 'shop/women'
    },
    {
      title: 'Kids',
      imageUrl: 'https://i.ibb.co/JxxbrHX/3.jpg',
      id: 3,
      linkUrl: 'shop/kids'
    },
    {
      title: 'walkers',
      imageUrl: 'https://i.ibb.co/k3p33Yq/4.jpg',
      size: 'large',
      id: 4,
      linkUrl: 'shop/walkers'
    },
    {
      title: 'Random',
      imageUrl: 'https://i.ibb.co/Pw7KTfF/5.jpg',
      size: 'large',
      id: 5,
      linkUrl: 'shop/random'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
