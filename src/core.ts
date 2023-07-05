import axios from 'axios'

const BASE_URL = 'https://dati-simc.arpae.it/opendata/osservati/meteo/'

/**
 * Get the realtime data from the remote api
 * @returns Returns the realtime data
 */
export const getRealtimeData = async () => {
    try {
        return axios.get(`${BASE_URL}realtime/realtime.jsonl`).then((response) => response.data)
    } catch (e) {
        console.error('Realtime data request error', e)
        throw e
    }
}

export const getHistorycalData = async (year: number, month: number) => {
    let convertedMonth = month.toString()

    if (convertedMonth.length === 1) {
        convertedMonth = `0${month}`
    }

    try {
        return axios.get(`${BASE_URL}storico/${year}-${convertedMonth}.json.gz`).then((response) => response.data)
    } catch (e) {
        console.error('Historycal data request error', e)
        throw e
    }
}
