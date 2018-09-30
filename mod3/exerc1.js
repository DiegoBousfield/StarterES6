const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

export async function umPorSegundo() {
   console.log(await delay(), '1s');
   console.log(await delay(), '2s');
   console.log(await delay(), '3s');
};