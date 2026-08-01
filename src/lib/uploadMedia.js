import {createClient} from "@supabase/supabase-js";

const key ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzZXFjdWhvYmpta3hqaGZyemxpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUyNzA2MTcsImV4cCI6MjEwMDg0NjYxN30.A9l76o9C6Ca_Y9RV3KR-qac92o4Id_OY-t3-VQ1zA7c";
const url = "https://hseqcuhobjmkxjhfrzli.supabase.co";

const supabase = createClient(url, key);

export default async function uploadMedia(file){

    return new Promise(
        (resolve, reject)=>{
            if(file == null){
                reject("File is null");
            }else{

                const timestamp = new Date().getTime();
                const fileName = timestamp + "_" + file.name;


                supabase.storage.from("images").upload(fileName,file).then(
                    () => {
                        const publicUrl = supabase.storage.from("images").getPublicUrl(fileName).data.publicUrl;
                        resolve(publicUrl);
                    }
                ).catch((err) => {
                    reject(err);
                });
            }
        }
    )

}