export const brands = [
    {
        id: 1,
        url: '/brand.png'
    },
    {
        id: 2,
        url: '/brand2.png'
    },
    {
        id: 3,
        url: '/brand3.png'
    },
    {
        id: 4,
        url: '/brand4.png'
    },
    {
        id: 5,
        url: '/brand5.png'
    },
    {
        id: 6,
        url: '/brand6.png'
    },
    {
        id: 7,
        url: '/brand7.png'
    },
    {
        id: 8,
        url: '/brand8.png'
    },
    {
        id: 9,
        url: '/brand9.png'
    },
    {
        id: 10,
        url: '/brand10.png'
    },
    {
        id: 11,
        url: '/brand11.png'
    },
    {
        id: 12,
        url: '/covax.png'
    },
    {
        id: 13,
        url: '/rolf.png'
    },
    {
        id: 14,
        url: '/karcher.png'
    },
    {
        id: 15,
        url: '/brand12.png'
    },
]
const itemToMove = brands[2]; // Store the element at index 2
export let nonOrder = brands.slice(0, 2).concat(brands.slice(3)); // Exclude item from index 2 and concatenate slices
nonOrder.splice(1, 0, itemToMove); // Insert the element at index 1

export let arr = brands;

const swap = (indexA, indexB) => {
  const temp = arr[indexA];
  arr[indexA] = arr[indexB];
  arr[indexB] = temp;
};

swap(1, 2);
swap(3, 4);
swap(5, 6);
swap(7, 8);
