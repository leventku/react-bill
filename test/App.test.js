import React from 'react';
import { mount } from 'enzyme';
import { get } from 'axios';
import 'babel-polyfill';

import App from '../src/App';

jest.mock('axios', ()=> ({get:jest.fn()}))

it('should make a GET request to the API', async() => {
  const p = Promise.resolve({
    data: {
      "statement": {
        "generated": "2015-01-11",
        "due": "2015-01-25",
        "period": {
          "from": "2015-01-26",
          "to": "2015-02-25"
        }
      },
      "total": 136.03,
      "package": {
        "subscriptions": [
          { "type": "tv", "name": "Variety with Movies HD", "cost": 50.00 }
        ],
        "total": 71.40
      },
      "callCharges": {
        "calls": [
          { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 }
        ],
        "total": 59.64
      },
      "skyStore": {
        "rentals": [
          { "title": "50 Shades of Grey", "cost": 4.99 }
        ],
        "buyAndKeep": [
          { "title": "That's what she said", "cost": 9.99 },
          { "title": "Brokeback mountain", "cost": 9.99 }
        ],
        "total": 24.97
      }
    }
  })
  get.mockImplementation(() => p)

  expect(get.mock.calls.length).toBe(0)

  const component = mount(<App />)
  expect(get.mock.calls.length).toBe(1)
  expect(get.mock.calls[0][0]).toBe('https://still-scrubland-9880.herokuapp.com/bill.json');
});