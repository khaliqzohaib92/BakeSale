export default {
    async fetchInitialDeals() {
        try{
            let response  = await fetch('https://');
            let responseJson =  response.json();
            return responseJson.data;
        }catch(ex){
            console.error(error);
        }
    }
}