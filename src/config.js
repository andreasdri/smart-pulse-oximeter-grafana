export default {
    influx: process.env.INFLUX || 'http://influxdb:8086',
    influxDatabase: process.env.INFLUX_DATABASE || 'iot'
};
