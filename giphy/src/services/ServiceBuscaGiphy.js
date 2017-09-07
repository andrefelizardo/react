import axios from 'axios';

const ServiceBuscaGiphy = {
    buscarTermos(termo) {
        return axios.get(`https://api.giphy.com/v1/gifs/search?api_key=d20414bd01854a52bd381cf44818eef0&q=${termo}&limit=25&offset=0&rating=G&lang=en`)
    }
};

export default ServiceBuscaGiphy;