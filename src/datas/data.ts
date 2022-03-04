// import React from 'react'

const response = {
  message: 'Success to get data',
  data: [
    {
      id: '1',
      first_name: 'John',
      last_name: 'Doe',
      skills: {
        javascript: 'advanced',
        python: 'basic',
        golang: 'expert',
        php: 'expert'
      }
    },
    {
      id: '2',
      first_name: 'Will',
      last_name: 'Smith',
      skills: {
        javascript: 'expert',
        python: 'basic',
        golang: 'advanced',
        php: 'advanced'
      }
    },
    {
      id: '3',
      first_name: 'Jaden',
      last_name: 'Smith',
      skills: {
        javascript: 'expert',
        python: 'expert',
        golang: 'expert',
        php: 'expert'
      }
    },
    {
      id: '4',
      first_name: 'El',
      last_name: 'Professor',
      skills: {
        javascript: 'advanced',
        python: 'basic',
        golang: 'intermediate',
        php: 'intermediate'
      }
    },
  ]
}

export const getDatas = () => {
  return response
}


