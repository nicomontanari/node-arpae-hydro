import axios from 'axios'

const BASE_URL = 'https://dati-simc.arpae.it/opendata/osservati/meteo'

export const getRealtimeData = async () => {
    try {
        return axios.get(`${BASE_URL}realtime/realtime.jsonl`).then((response) => response.data)
    } catch (e) {
        console.error('Realtime data request error', e)
        throw e
    }
}
