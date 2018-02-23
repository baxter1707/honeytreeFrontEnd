import React, { Component } from 'react';
import axios from 'axios'


axios.post('/address', {
  firstName: 'Mike'
  lastName: 'Baxter'
  email: 'mikeBax@yahoo.com'
  mailingAddress: 'mailingAddress test'
}).then(alert('Post Succsessful'))
.catch(alert('Post Denied'))
