// async() => {
//     const response = await fetch(
//         'https://gw.alipayobjects.com/os/basement_prod/6cae02ab-4c29-44b2-b1fd-4005688febcb.json',
//     );
//     const data = await response.json();
// }

// export { data }


export async function data() {
  try {
    const response = await fetch('https://gw.alipayobjects.com/os/basement_prod/6cae02ab-4c29-44b2-b1fd-4005688febcb.json');
    return response.json();
  } catch (e) {
    throw e;
  }
}