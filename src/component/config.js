export const base_url= 'https://image.tmdb.org/t/p/w440_and_h660_face'

 export const concat_img_path = (end_url, base_url)=>{

    console.log(base_url.concat(end_url));
   return base_url.concat(end_url);
 }