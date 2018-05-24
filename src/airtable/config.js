import Airtable from 'airtable';
import config from '../../airtableConfig.json';

Airtable.configure({
  endpointUrl: config.endpointUrl,
  apiKey: config.apiKey
});

export default Airtable.base(config.base);


