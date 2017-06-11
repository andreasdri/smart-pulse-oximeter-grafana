import 'babel-polyfill';
import λ from 'apex.js';
import Influx from 'influx';
import config from './config';

const influx = new Influx.InfluxDB({
    host: config.influx,
    database: config.influxDatabase
});

export default λ((event, ctx) => influx.writePoints([
    {
        measurement: 'oxygenSaturation',
        fields: {
            measurement: Number(event.oxygenSaturation)
        }
    },
    {
        measurement: 'pulseRate',
        fields: {
            measurement: Number(event.pulseRate)
        }

    }
])
.then(() => {
    ctx.succeed();
})
.catch((err) => {
    console.log(err);
    ctx.fail();
}));
