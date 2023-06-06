export enum DataVars {
    StationName = 'B01019',
    Year = 'B04001',
    Latitude = 'B05001',
    Longitude = 'B06001',
    SensorAltitude = 'B07030',
    RiverLevel = 'B13011'
}

export interface ReportData {
    vars: {
        [key in DataVars]: {
            v: number | string
        }
    }
}

export interface TimeData {
    timerange: number[]
    level: number[] | null[]
    vars: {
        [key in DataVars]: {
            v: number
        }
    }
}

export interface StationReport {
    version: string
    network: string
    ident: null
    lon: number
    lat: number
    date: string
    data: [ReportData, TimeData]
}
